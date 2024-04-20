import { FC } from "react"

interface Props {
  text: string
}

export const Header: FC<Props> = ({ text }) => {
  return <header className="header"> {text}</header>
}
