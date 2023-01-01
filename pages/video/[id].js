import PageLayout from '../../components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Video.module.css'

export default function Video () {
  const router = useRouter()
  const { id } = router.query
  return (
    <PageLayout title='Marflix'>
      <Link href='/browse' className={styles.goBackButton}><Image src='/logo.svg' alt='Go Back' width={125} height={53} /></Link>
      <iframe
        className={styles.video}
        src={'https://www.youtube-nocookie.com/embed/' + id}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
    </PageLayout>

  )
}
