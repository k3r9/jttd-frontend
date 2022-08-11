import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
     <div className="container">
      <Head>
        <title>Join Top Tech [.] Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Join Top Tech [.] Dev" />
        <p className="description">
          Coming Soon
        </p>
      </main>

      <Footer />
    </div>
  )
}
