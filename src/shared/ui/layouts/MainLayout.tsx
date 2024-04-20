import { FC } from "react"
import { Header } from "@/features/header"
import { Navigation } from "@/features/navigation"
import styles from "./styles.module.css"

export interface AuxProps {
  children: React.ReactNode
}
export const MainLayout: FC<AuxProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header text="Чат с банком" />
      {children}
      <div className={styles.bottom}>
        <Navigation />
      </div>
    </div>
  )
}
