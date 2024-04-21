import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { Typography } from "@mui/material"
import { useChatContext } from "@/features/chat"
import { useStyles } from "./styles.ts"

export const VoiceRecording = () => {
  const { toggleVoice } = useChatContext()
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CancelOutlinedIcon
        onClick={toggleVoice}
        color="primary"
        className={classes.icon}
      />
      <Typography variant="h2" mt={8}>
        Поговори со мной
      </Typography>
      <img src="/img/cactus.png" alt="" className={classes.img} />
    </div>
  )
}
