import axios, { AxiosError } from "axios";
import applyCaseMiddleware from "axios-case-converter";

import { camelCase } from "lodash";

import { DTO } from "@core/domain/types";
import AppError from "@core/helper/error";

export const BackendClient = applyCaseMiddleware(
	axios.create({
		baseURL: `${process.env.WEB_API_URL}`,
		headers: {
			"Content-Type": "application/json"
		},
		timeout: 86_400_000
	})
);

const deeplyApplyKeyTransform = (obj: Record<string, any>) => {
	const ret: Record<string, any> = Array.isArray(obj) ? [] : {};
	Object.keys(obj).forEach((key) => {
		if (obj[key] !== null && typeof obj[key] === "object") {
			ret[camelCase(key)] = deeplyApplyKeyTransform(obj[key]);
		} else {
			ret[camelCase(key)] = obj[key];
		}
	});
	return ret;
};

BackendClient.interceptors.response.use(
	(response) => {
		response.data = deeplyApplyKeyTransform(response.data);
		return response;
	},
	async (error: AxiosError<DTO>) => {
		if (
			(error.code === "ECONNABORTED" && error.message.includes("timeout")) ||
			error.code === "ERR_NETWORK" ||
			!error.response
		) {
			return AppError.Unknown();
		}
		let formattedError;
		switch (error.response.status) {
			case 400: {
				const errorResponseData = error.response.data as Record<
					string,
					unknown
				>;
				if (!errorResponseData.error) {
					formattedError = AppError.Unknown();
				}
				break;
			}
			default:
				formattedError = AppError.Unknown();
				break;
		}
		throw formattedError;
	}
);
