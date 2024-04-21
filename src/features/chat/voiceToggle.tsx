import { FormControlLabel, Switch } from "@mui/material"
import { FC, useEffect, useRef } from "react"
import { useChatContext } from "@/features/chat"

export const VoiceToggle: FC = () => {
  const { isVoice, toggleVoice } = useChatContext()
  const voice = useRef<Blob[]>([])
  const mediaRecorder = useRef<MediaRecorder>()

  /* const startVoice = async () => {
    const voice: Blob[] = []

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRecorder.current = new MediaRecorder(stream)

    mediaRecorder.current.addEventListener("dataavailable", event => {
      voice.push(event.data)
    })

    mediaRecorder.current.addEventListener("stop", () => {
      const voiceBlob = new Blob(voice, {
        type: "audio/wav",
      })

      const link = document.createElement("a") // Or maybe get it from the current document
      link.href = URL.createObjectURL(voiceBlob)
      link.download = "aDefaultFileName.wav"
      link.innerHTML = "Click here to download the file"
      document.body.appendChild(link) // Or append it whereever you want
      console.log(voiceBlob)
    })
  } */

  const onStartVoice = (event: BlobEvent) => {
    voice.current.push(event.data)
  }

  useEffect(() => {
    // navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    //   mediaRecorder.current = new MediaRecorder(stream)
    //
    //   mediaRecorder.current.addEventListener("dataavailable", onStartVoice)
    //
    //   mediaRecorder.current.addEventListener("stop", () => {
    //     const voiceBlob = new Blob(voice.current, {
    //       type: "audio/wav",
    //     })
    //
    //     const link = document.createElement("a") // Or maybe get it from the current document
    //     link.href = URL.createObjectURL(voiceBlob)
    //     link.download = "aDefaultFileName.wav"
    //     link.innerHTML = "Click here to download the file"
    //     document.body.appendChild(link) // Or append it whereever you want
    //     console.log(voiceBlob)
    //   })
    // })

    return () => {
      mediaRecorder.current?.removeEventListener("dataavailable", onStartVoice)
    }
  }, [])

  return (
    <FormControlLabel
      value="start"
      control={<Switch color="primary" checked={isVoice} onChange={toggleVoice} />}
      label="Голос"
      labelPlacement="start"
    />
  )
}
