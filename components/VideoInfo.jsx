import styles from '../styles/Browse.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function VideoInfo ({ video, clickHandler }) {
  return (
    <div className={styles.videoInfoBackground}>
      <div className={styles.videoInfoContainer}>
        <div className={styles.videoThumbnail}>
          <Image
            src='/gif.gif'
            alt=''
            fill
          />
        </div>
        <button className={styles.closeButton} onClick={clickHandler}>
          <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0' /><g id='SVGRepo_iconCarrier'> <title>i</title> <g id='Complete'> <g id='x'> <g> <line x1='5' y1='4.8' x2='19' y2='19.2' fill='none' stroke='#ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' /> <line x1='19' y1='4.8' x2='5' y2='19.2' fill='none' stroke='#ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' /> </g> </g> </g> </g></svg>
        </button>
        <div className={styles.logoContainer}>
          <Image
            src={'/' + video.platform + '.png'}
            alt=''
            width={200} height={90}
            className={styles.platformLogo}
          />
        </div>

        <div className={styles.videoTitle}> {video.name} </div>

        <div className={styles.videoInfo}>
          <div className={styles.tags}>Edit • Musical • Ritmico</div>
          <div className={styles.duration}> Duración 8:16 </div>
          <div className={styles.quality}> {video.quality} </div>
        </div>
        <div className={styles.videoData}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi, quidem ab nesciunt veritatis est tempora et tenetur unde? Modi repellendus ex quidem animi iure temporibus architecto dolor itaque cumque.
        </div>
        <div className={styles.playButtonContainer}>
          <Link href={'/video/' + video.id} className={styles.playButton}>
            <svg
              fill='#000000' height='23px' width='23px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 512 512' enable-background='new 0 0 512 512' xmlSpace='preserve'
            >
              <path d='M464.7,221.5L86.1,7.3C52.5-11.7,25,7.5,25,50v412c0,42.5,27.5,61.7,61.1,42.7l378.6-214.1 C498.2,271.5,498.2,240.5,464.7,221.5z' />
            </svg>
            <div className={styles.playButtonText}> Reproducir </div>
          </Link>

        </div>
      </div>
    </div>
  )
}
