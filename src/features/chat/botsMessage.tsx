import { FC } from "react"
import { useStyles } from "./styles"

interface BotsMessageProps {
  text: string
  time: string
}

export const BotsMessage: FC<BotsMessageProps> = ({ text, time }) => {
  const classes = useStyles()
  return (
    <div className={classes.botsMessage}>
      <p className={classes.botsMessageText}>{text}</p>
      <span className={classes.botsMessageTime}>{time}</span>
    </div>
  )
}
