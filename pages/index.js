import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Semangat Micro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Selamat datang dihalaman utama</h1>
      </main>
    </div>
  )
}
