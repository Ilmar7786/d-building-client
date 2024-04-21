import { ChatMessageParams } from "@/entities/chat/model.ts"
import { api } from "@/shared/api"

export const sendMessage = ({
  message,
  code,
  type,
  // todo: заменить на пользователя
  userId = 1,
}: {
  message: string
  code: string
  type: "0" | "1"
  userId?: number
}) => {
  const data = new FormData()
  data.append("user_id", String(userId))
  data.append("message", message)
  data.append("type", type)
  data.append("code", code)

  return api.post<ChatMessageParams>("/api/messages/", data)
}
