import { FC } from "react"
import { useStyles } from "./style"

interface Props {
  text: string
}

export const Header: FC<Props> = ({ text }) => {
  const classes = useStyles()

  return <header className={classes.header}> {text}</header>
}
