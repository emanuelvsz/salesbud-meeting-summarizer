interface MessageRepository {
	sendMessage(message: string): Promise<string | null>;
}

export default MessageRepository;
