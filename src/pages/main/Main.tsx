import { Button, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { FC, useState } from "react"
import { Icon } from "@/shared/ui"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  head: {
    color: theme.palette.primary.dark,
  },
}))

export const MainPage: FC = () => {
  const [count, setCount] = useState(0)
  const classes = useStyles()

  return (
    <div>
      <h2 className={classes.head}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nisi?
      </h2>
      <Button variant="outlined">Click me</Button>
      <div className={classes.root}>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <Icon name="common/react" className="logo react" width={20} height={20} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(prev => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}
