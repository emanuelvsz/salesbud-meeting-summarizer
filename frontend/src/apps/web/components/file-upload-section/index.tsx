import { css } from "@emotion/react";
import { Upload, Card, Button, Alert, Flex } from "antd";
import {
	InboxOutlined,
	CloudUploadOutlined,
	FileTextOutlined
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Dragger } = Upload;

const styles = {
	container: css`
		min-height: 100vh;
		background: #fafafa;
	`,
	card: css`
		width: 50%;
		min-height: 360px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
	`,
	dragger: css`
		border-radius: 8px;
		width: 100%;
	`,
	selectFileButton: css`
		margin-top: 12px;
		box-shadow: none;
	`,
	spinner: css`
		width: 100%;
		text-align: center;
		padding: 12px;
	`
};

interface Props {
	uploadProps: any;
	errorMessage: string | null;
	isLoading: boolean | null;
}

const FileUploadSection = ({ uploadProps, errorMessage, isLoading }: Props) => {
	return (
		<Card css={styles.card}>
			<Flex gap={24} vertical>
				<Flex align="center" gap={8}>
					<FileTextOutlined />
					<strong>Upload de Arquivo</strong>
				</Flex>
				<Dragger {...uploadProps} css={styles.dragger}>
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">
						<strong>Arraste e solte</strong> ou clique para selecionar um
						arquivo .txt
					</p>
					<Button
						type="primary"
						icon={<CloudUploadOutlined />}
						css={styles.selectFileButton}
						loading={!!isLoading}
					>
						Selecionar arquivo
					</Button>
				</Dragger>

				{errorMessage && (
					<Alert
						type="error"
						message="Erro"
						description={errorMessage}
						showIcon
					/>
				)}
			</Flex>
		</Card>
	);
};

export default FileUploadSection;
