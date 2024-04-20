import SendIcon from "@mui/icons-material/Send"
import { FC } from "react"
import { MessageField } from "./messageField"
import { useStyles } from "./styles"
import { VoiceToggle } from "./voiceToggle"

export const Chat: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.chat}>
      <VoiceToggle />
      <MessageField />
      <div className={classes.textBar}>
        <form className={classes.messageInput} action="submit">
          <input
            placeholder="Введите сообщение"
            type="text"
            className={classes.messageTextInput}
          />
          <SendIcon className={classes.submitBtn} />
        </form>
        <img className={classes.avatar} src="/img/cactus.png" alt="" />
      </div>
    </div>
  )
}
