import { FormControlLabel, Switch } from "@mui/material"
import { FC } from "react"

export const VoiceToggle: FC = () => {
  return (
    <FormControlLabel
      value="start"
      control={<Switch color="primary" />}
      label="Голос"
      labelPlacement="start"
    />
  )
}
