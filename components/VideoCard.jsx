import styles from '../styles/Browse.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PageLayout ({ video, clickHandler, platform }) {
  return (
    <div className={styles.videoCard} onClick={() => clickHandler(video, platform)}>
      <Image
        src={video.thumbnail}
        alt={video.name}
        width={301}
        height={170}
      />
      <div className={styles.buttons}>
        <Link href={'/video/' + video.id}>
          <div className={styles.play}>
            <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-player-play' width='16' height='16' viewBox='0 0 24 24' stroke-width='1.5' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M7 4v16l13 -8z' />
            </svg>
          </div>
        </Link>

        <div className={styles.play}>
          <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-plus' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.5' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.duration}> 8:16 </div>
        <div className={styles.quality}> {video.quality} </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.duration}> Edit </div>
        <div> • </div>
        <div className={styles.quality}> Musical </div>
        <div> • </div>
        <div className={styles.quality}> Rítmico </div>
      </div>
    </div>
  )
}
