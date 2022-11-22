import Head from 'next/head'
import İmage from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen p-4 flex items-center justify-center'>
      <Head>
        <title>Ali POLAT | ME</title>
        <meta property='og:title' content="Ali POLAT | ME" />
        <meta name="description" content="I am a Full Stack Developer with experience developing frontend and backend systems" />
        <meta property='og:descriptipn' content="I am a Full Stack Developer with experience developing frontend and backend systems" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="author" content="Ali POLAT"></meta>
        <meta name="theme-color" content="#fff"></meta>
      </Head>

      <div className='content w-full max-w-md mx-auto px-8 py-12 rounded-3xl bg-gradient-to-b from-sky-200 to-transparent'>
        <İmage src='/pp.jpeg' alt='Ali POLAT' width={160} height={160} className="rounded-full mx-auto" />

        <h1 className='mx-auto font-montserrat text-2xl font-extrabold text-center mt-6 text-theme-pale-gray tracking-wider'>Ali POLAT</h1>

        <h2 className='mx-auto font-montserrat text-xl font-bold text-center text-theme-extra-pale-gray tracking-wide'>Full Stack Developer</h2>

        <div className='flex items-center justify-center my-6'>
          <a href='https://linkedin.com/in/-alipolat/' title='Ali POLAT' target={'_blank'} rel='noopener noreferrer' className='text-theme-extra-pale-gray hover:text-black duration-300 text-4xl px-2'>
            <i className='fab fa-linkedin-in'></i>
          </a>

          <a href='https://twitter.com/_alipolat/' title='_alipolat' target={'_blank'} rel='noopener noreferrer' className='text-theme-extra-pale-gray hover:text-black duration-300 text-4xl px-2'>
            <i className='fab fa-twitter'></i>
          </a>

          <a href='https://instagram.com/__alipolat/' title='__alipolat' target={'_blank'} rel='noopener noreferrer' className='text-theme-extra-pale-gray hover:text-black duration-300 text-4xl px-2'>
            <i className='fab fa-instagram'></i>
          </a>

          <a href='https://github.com/alipolat-js/' title='alipolat-js' target={'_blank'} rel='noopener noreferrer' className='text-theme-extra-pale-gray hover:text-black duration-300 text-4xl px-2'>
            <i className='fab fa-github'></i>
          </a>
        </div>

        <div className='mt-10'>
          <a href='https://blog.alipolat.tech' title='blog.alipolat.tech' target={'_blank'} rel='noopener noreferrer' className='block w-full bg-white text-theme-pale-gray hover:bg-theme hover:text-white duration-300 mt-4 text-lg font-semibold px-6 py-4 rounded-full text-center shadow-xl tracking-wider'>
            BLOG
          </a>

          <a href='https://works.alipolat.tech' title='works.alipolat.tech' target={'_blank'} rel='noopener noreferrer' className='block w-full bg-white text-theme-pale-gray hover:bg-theme hover:text-white duration-300 mt-4 text-lg font-semibold px-6 py-4 rounded-full text-center shadow-xl tracking-wider'>
            WORKS
          </a>

          <a href='https://alipolat.tech' title='alipolat.tech' target={'_blank'} rel='noopener noreferrer' className='block w-full bg-white text-theme-pale-gray hover:bg-theme hover:text-white duration-300 mt-4 text-lg font-semibold px-6 py-4 rounded-full text-center shadow-xl tracking-wider'>
            ALİPOLAT.TECH
          </a>
        </div>

      </div>
    </div>
  )
}
