import { css } from "@emotion/react";
import { Flex, UploadFile, Layout } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import "antd/dist/reset.css";
import { useState, useEffect } from "react";
import FileUploadSection from "../../components/file-upload-section";
import ResultCardSection from "../../components/result-card-section";
import { THEME_COLORS } from "@web/lib/theme/theme";
import { useSendMessage } from "@web/hooks/message/use-send-message";

const { Header } = Layout;

const styles = {
	container: css`
		min-height: calc(100vh - 100px);
		background: #fafafa;
		padding: 2rem;
	`,
	contentWrapper: css`
		width: 100%;
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	`,
	header: css`
		background: ${THEME_COLORS.PRIMARY_COLOR};
		color: #fff;
		font-size: 1.5rem;
		font-weight: bold;
		padding: 0 24px;
		display: flex;
		align-items: center;
		height: 100px;
	`
};

const HomePage = () => {
	const [markdown, setMarkdown] = useState("");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const { mutate: sendMessage, isError, data } = useSendMessage();

	useEffect(() => {
		if (data) {
			setMarkdown(data || "");
		}
		if (isError) {
			setErrorMessage("Falha ao enviar o arquivo para o backend.");
		}
	}, [data, isError]);

	const uploadProps = {
		name: "file",
		accept: ".txt,text/plain",
		multiple: false,
		fileList,
		beforeUpload: () => false,
		onChange: (info: UploadChangeParam<UploadFile>) => {
			setErrorMessage(null);
			const file = info.fileList[0]?.originFileObj as File | undefined;
			setFileList(info.fileList);

			if (!file) return;
			if (file.size > 2_000_000) {
				setErrorMessage("Arquivo muito grande (máx 2MB).");
				return;
			}

			const reader = new FileReader();
			reader.onload = () => {
				const text = reader.result as string;
				setIsLoading(true);
				sendMessage(text, {
					onSuccess: (response) => {
						setMarkdown(response || "");
						setIsLoading(false);
					},
					onError: () => {
						setErrorMessage("Falha ao enviar o arquivo para o backend.");
						setIsLoading(false);
					}
				});
			};
			reader.onerror = () => {
				setErrorMessage("Falha ao ler o arquivo.");
				setIsLoading(false);
			};
			reader.readAsText(file);
		},
		showUploadList: false
	};

	const handleDeleteFile = () => {
		setMarkdown("");
		setFileList([]);
		setErrorMessage(null);
	};

	return (
		<>
			<Header css={styles.header}>Meeting Summarizer</Header>
			<Flex css={styles.container} justify="center" align="start">
				<Flex css={styles.contentWrapper}>
					<FileUploadSection
						uploadProps={uploadProps}
						errorMessage={errorMessage}
						isLoading={isLoading}
					/>
					<ResultCardSection markdown={markdown} onDelete={handleDeleteFile} />
				</Flex>
			</Flex>
		</>
	);
};

export default HomePage;
