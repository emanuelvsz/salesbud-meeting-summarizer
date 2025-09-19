abstract class MessageUseCase {
	abstract sendMessage(message: string): Promise<string | null>;
}

export default MessageUseCase;
