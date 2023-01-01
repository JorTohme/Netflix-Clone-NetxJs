// React o paquetes npm
import styles from '../styles/Browse.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Roller } from 'react-awesome-spinners'
import { useState, useEffect } from 'react'

// Componentes
import PageLayout from '../components/PageLayout'
import Slider from '../components/Slider'
import VideoCard from '../components/VideoCard'
import VideoInfo from '../components/VideoInfo'

// Custom hooks
import useVideoInfo from '../hooks/useVideoInfo'

export default function Home () {
  const [loading, setLoading] = useState(true)
  const [featured, setFeatured] = useState({})
  const [youtube, setYoutube] = useState({})

  const { video, openVideoInfo, closeVideoInfo } = useVideoInfo()

  useEffect(() => {
    fetch('http://192.168.1.94:4001/')
      .then(response => response.json())
      .then(json => {
        const { featured } = json
        const { youtube } = json
        setFeatured(featured)
        setYoutube(youtube)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  if (loading) {
    return (
      <PageLayout title='Cargando...'>
        <div className={styles.loadingScreen}>
          <div>
            <Roller color='#E50914' />
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout title='Marflix'>
      {video && <VideoInfo video={video} clickHandler={closeVideoInfo} /> /* Despliega la información del video clickeado */}
      <header className={styles.header}>
        <Image src='/logo.svg' alt='Marflix' width={90} height={30} />
        <nav>
          <ul>
            <li><Link href='/'>Inicio</Link></li>
          </ul>
        </nav>
      </header>

      <div className={styles.featured}>
        <Image
          src={featured.image}
          alt=''
          fill
          priority
        />
        <div className={styles.featuredTitle}>
          <Image
            src={featured.logo}
            alt=''
            width={400}
            height={212}
            priority
          />
          <div className={styles.plot}>
            {featured.plot}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <Slider title='Destacados de YouTube'>
          {youtube.map(video => <VideoCard video={video} key={video.name} clickHandler={openVideoInfo} platform='Youtube' />)}
        </Slider>
      </div>
    </PageLayout>
  )
}
