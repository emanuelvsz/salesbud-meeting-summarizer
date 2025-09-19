/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Card, Button, Flex, Tooltip, Empty } from "antd";
import {
	FileTextOutlined,
	CopyOutlined,
	DeleteOutlined
} from "@ant-design/icons";
import ReactMarkdown, { Components } from "react-markdown";

const styles = {
	card: css`
		width: 50%;
		min-height: 360px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
	`,
	header: css`
		width: 100%;
		margin-bottom: 12px;
	`,
	contentWrapper: css`
		flex: 1;
		overflow-y: auto;
		padding: 8px;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		}
	`,
	emptyWrapper: css`
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	`
};

const markdownElementsStyle: Partial<Components> = {
	p: (props) => (
		<p {...props} style={{ marginBottom: ".5rem", wordBreak: "break-word" }} />
	),
	li: (props) => (
		<li
			{...props}
			style={{
				marginLeft: "2rem",
				marginTop: ".5rem",
				wordBreak: "break-word"
			}}
		/>
	),
	pre: (props) => (
		<pre
			{...props}
			style={{
				whiteSpace: "pre-wrap",
				wordBreak: "break-word",
				margin: "0 0 .5rem 0"
			}}
		/>
	)
};

interface Props {
	markdown?: string | null;
	onDelete: () => void;
}

const ResultCardSection = ({ markdown, onDelete }: Props) => {
	const content = typeof markdown === "string" ? markdown : "";
	const hasContent = content.trim().length > 0;

	return (
		<Card css={styles.card}>
			<Flex justify="space-between" css={styles.header}>
				<Flex align="center" gap={8}>
					<FileTextOutlined />
					<strong>Resultado (Markdown)</strong>
				</Flex>

				{hasContent && (
					<Flex gap={8}>
						<Tooltip title="Copiar Markdown para a área de transferência">
							<Button
								icon={<CopyOutlined />}
								size="small"
								onClick={() => navigator.clipboard.writeText(content)}
							/>
						</Tooltip>
						<Tooltip title="Limpar conteúdo">
							<Button
								icon={<DeleteOutlined />}
								size="small"
								danger
								onClick={onDelete}
							/>
						</Tooltip>
					</Flex>
				)}
			</Flex>

			<Flex css={styles.contentWrapper}>
				{hasContent ? (
					<ReactMarkdown components={markdownElementsStyle}>
						{content}
					</ReactMarkdown>
				) : (
					<Flex css={styles.emptyWrapper}>
						<Empty description="Nenhum conteúdo disponível" />
					</Flex>
				)}
			</Flex>
		</Card>
	);
};

export default ResultCardSection;
