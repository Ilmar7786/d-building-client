import { FC } from "react"
import { useStyles } from "./styles"

interface UserMessageProps {
  text: string
  time: string
}

export const UsersMessage: FC<UserMessageProps> = ({ text, time }) => {
  const classes = useStyles()
  return (
    <div className={classes.usersMessage}>
      <p className={classes.usersMessageText}>{text}</p>
      <span className={classes.usersMessageTime}>{time}</span>
    </div>
  )
}
