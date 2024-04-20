import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@/app/providers"
import { router } from "@/app/router"

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
