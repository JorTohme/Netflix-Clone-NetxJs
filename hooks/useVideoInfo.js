import { useState } from 'react'

export default function useVideoInfo () {
  const [video, setVideo] = useState('')

  function openVideoInfo (video, platform) {
    video.platform = platform
    window.scrollTo(0, 0)
    setVideo(video)
  }

  function closeVideoInfo (video) {
    setVideo('')
  }

  return { video, openVideoInfo, closeVideoInfo }
}
