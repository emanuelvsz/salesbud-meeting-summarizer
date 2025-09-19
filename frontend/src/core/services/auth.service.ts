import MessageRepository from "../interfaces/repository/auth.repository";
import MessageUseCase from "../interfaces/usecase/auth.use-case";

class MessageService implements MessageUseCase {
	constructor(protected readonly adapter: MessageRepository) {}

	async sendMessage(message: string): Promise<string | null> {
		return await this.adapter.sendMessage(message);
	}
}

export default MessageService;
