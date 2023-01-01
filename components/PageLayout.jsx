import Head from 'next/head'

export default function PageLayout ({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Marflix: Watch your favorite Marvel fragments' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}
