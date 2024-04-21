import { FC } from "react"
import { Chat } from "@/features/chat"
import { ChatContextProvider } from "@/features/chat/"
import { Header } from "@/features/header"
import { Navigation } from "@/features/navigation"

export const MainPage: FC = () => {
  return (
    <div>
      <ChatContextProvider>
        <Header text="Чат с банком" />
        <Chat />
        <Navigation />
      </ChatContextProvider>
    </div>
  )
}
