// import { FC } from "react"
// import { BotsMessage } from "./botsMessage"
// import { useStyles } from "./styles"
// import { UsersMessage } from "./UsersMessage"

// export const MessageField: FC = () => {
//   const classes = useStyles()

//   const data: { key: string; status: boolean; text: string; time: string }[] = []

//   const printMessages = data.map(
//     (message: { key: string; status: boolean; text: string; time: string }) =>
//       message.status ? (
//         <UsersMessage key={message.key} text={message.text} time={message.time} />
//       ) : (
//         <BotsMessage text={message.text} time={message.time} />
//       )
//   )

//   return <div className={classes.messagesField}>{printMessages()}</div>
// }
