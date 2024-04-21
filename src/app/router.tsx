import { createBrowserRouter } from "react-router-dom"
import { TransactionHistory } from "@/features/transactionsHistory"
import { MainPage } from "@/pages/main"

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/transactionshistory", element: <TransactionHistory /> },
])
