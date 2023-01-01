import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import Link from 'next/link'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Snackbar } from '@mui/material'

export default function Home () {
  const closedQuestions = {
    QA1: styles.closed,
    QA2: styles.closed,
    QA3: styles.closed,
    QA4: styles.closed,
    QA5: styles.closed
  }
  const [QA, setQA] = useState(closedQuestions)
  const [openSnackBar, setSnackBar] = useState(false)

  return (
    <PageLayout title='Marflix'>

      <section className={styles.sectionPresentation}>
        <header className={styles.header}>
          <Image src='/logo.svg' alt='Marflix' width={165} height={70} />
        </header>
        <div className={styles.text}>
          <h1 className={styles.title}> Tus fragmentos favoritos <span>de Marvel</span> </h1>
          <h2 className={styles.subtitle}> Disfruta donde quieras. Cancela cuando quieras </h2>
        </div>
        <Link href='/browse'> <div className={styles.browse}> ENTRAR </div> </Link>
      </section>

      <section className={styles.sectionEnjoy}>
        <div className={styles.container}>
          <div className={styles.sectionEnjoyText}>
            <h3 className={styles.title}> Disfruta en tu celular </h3>
            <h4 className={styles.subtitle}> Descarga la aplicación de Marflix -Hecha en React Native- en tu smartphone. Disponible en IOS y Android </h4>
          </div>
          <Image src='/mobile.png' alt='' width={500} height={380} />
        </div>
      </section>

      <section className={styles.sectionContent}>
        <div className={styles.container}>
          <Image src='/tv.jpg' alt='' width={500} height={380} />
          <div className={styles.sectionContentText}>
            <h3 className={styles.title}> Contenido de redes sociales </h3>
            <h4 className={styles.subtitle}> Descarga la aplicación de Marflix </h4>
          </div>
        </div>
      </section>

      <section className={styles.sectionFAQ}>
        <div className={styles.container}>
          <div className={styles.sectionContentText}>
            <h3 className={styles.title}> Preguntas Frecuentes </h3>
            <ul>
              <li>
                <button onClick={() => QA.QA1 === styles.open
                  ? setQA(closedQuestions)
                  : setQA({
                    QA1: styles.open,
                    QA2: styles.closed,
                    QA3: styles.closed,
                    QA4: styles.closed,
                    QA5: styles.closed
                  })}
                >
                  ¿Qué es Marflix?
                </button>
                <div className={QA.QA1}>
                  Marflix es un proyecto de Next.js con el propósito de aprender a usarlo. Es un clon funcional de Netflix.
                  Copiando a mano el frontend de Netflix y con una API propia hecha en Node.js, usando MongoDB para el
                  almacenamiento.
                </div>
              </li>
              <li>
                <button onClick={() => QA.QA2 === styles.open
                  ? setQA(closedQuestions)
                  : setQA({
                    QA1: styles.closed,
                    QA2: styles.open,
                    QA3: styles.closed,
                    QA4: styles.closed,
                    QA5: styles.closed
                  })}
                >
                  ¿Dónde puedo ver Marflix?
                </button>
                <div className={QA.QA2}>
                  Se puede ver en PC desde esta página o desde cualquier celular IOS o Android descargando la aplicación.
                </div>
              </li>
              <li>
                <button onClick={() => QA.QA3 === styles.open
                  ? setQA(closedQuestions)
                  : setQA({
                    QA1: styles.closed,
                    QA2: styles.closed,
                    QA3: styles.open,
                    QA4: styles.closed,
                    QA5: styles.closed
                  })}
                >
                  ¿Cómo se diseño la página?
                </button>
                <div className={QA.QA3}>
                  La mayoría de imágenes y vectores en la página los hice a mano en Photoshop o Illustrator y están
                  inspirados o son una modificación directa de los que usa la página de Netflix.
                </div>
              </li>
              <li>
                <button onClick={() => QA.QA4 === styles.open
                  ? setQA(closedQuestions)
                  : setQA({
                    QA1: styles.closed,
                    QA2: styles.closed,
                    QA3: styles.closed,
                    QA4: styles.open,
                    QA5: styles.closed
                  })}
                >
                  ¿Por qué Marflix?
                </button>
                <div className={QA.QA4}>
                  Me gusta el cine de superhéroes y en redes sociales hay gran cantidad de edits o recortes de estas películas
                  por lo que pensé en usar estos para tener contenido multimedia en una página clon de Netflix.
                </div>
              </li>
              <li>
                <button onClick={() => QA.QA5 === styles.open
                  ? setQA(closedQuestions)
                  : setQA({
                    QA1: styles.closed,
                    QA2: styles.closed,
                    QA3: styles.closed,
                    QA4: styles.closed,
                    QA5: styles.open
                  })}
                >
                  Quién soy
                </button>
                <div className={QA.QA5}>
                  Me llamo Jorge y tengo 20 años, soy programador Full Stack. Acutalmente estoy estudiando la carrera de Lic.
                  en Informática y Desarrollo de Software en la Universidad del Aconcagua. <br /> <br />
                  Mira mi portfolio en ...
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.project}>
          Para ver más información de la página, tal como su construcción, código y deployment
          visita el repositorio en Github <a href='https://github.com/JorTohme/Netflix-Clone-NetxJs'> aquí</a>. <br /><br />
          Si me quieres contactar envíame un mail a jorlopeztohme@gmail.com
          <CopyToClipboard text='jorlopeztohme@gmail.com'>
            <button href='mailto:jorlopeztohme@gmail.com' onClick={() => setSnackBar(true)}> Contáctame </button>
          </CopyToClipboard>
          <Snackbar
            open={openSnackBar}
            autoHideDuration={3000}
            onClose={() => setSnackBar(false)}
            message='Email copiado al portapapeles'
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.division}>
          <div className={styles.title}>
            Redes sociales
          </div>
          <div className={styles.socialContainer}>
            <a href='https://github.com/JorTohme'>
              <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='' className={styles.socialLogo} />
              <div>Sígueme en Github</div>
            </a>
          </div>
          <div className={styles.socialContainer}>
            <a href='https://www.linkedin.com/in/jorgetohme/'>
              <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='' className={styles.socialLogo} />
              <div>Sígueme en LinkedIn</div>
            </a>
          </div>
          <div className={styles.mail}>
            jorlopeztohme@gmail.com
          </div>
          <div>
            Jorge L. Tohmé | Mendoza, Arg. 📍
          </div>
        </div>

        <div className={styles.division}>
          <div className={styles.title}>
            Next.js
          </div>
          <div className={styles.nextjs}>
            Next.js (nextjs.org) es un framework de React de código abierto creado por Vercel.
            En esta página se usa la versión 13
          </div>
        </div>
      </footer>

    </PageLayout>
  )
}
