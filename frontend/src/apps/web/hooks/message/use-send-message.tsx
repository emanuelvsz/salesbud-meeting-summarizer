import { useMutation } from "@tanstack/react-query";

import MessageService from "@core/services/auth.service";
import MessageAPI from "@infra/api/message";

const messageService = new MessageService(new MessageAPI());

export function useSendMessage() {
	return useMutation({
		mutationFn: async (message: string) => {
			return await messageService.sendMessage(message);
		}
	});
}
