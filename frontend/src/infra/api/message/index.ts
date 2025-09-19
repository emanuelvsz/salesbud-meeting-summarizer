import MessageRepository from "@core/interfaces/repository/auth.repository";
import { BackendClient } from "../clients";
import { DTO } from "@core/domain/types";

class MessageAPI implements MessageRepository {
	async sendMessage(message: string): Promise<string | null> {
		const response = await BackendClient.post<DTO>("/send", {
			message
		});
		return response.data.message as string | null;
	}
}

export default MessageAPI;
