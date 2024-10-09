import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | School Management System</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to School Management System</h1>
      {/* Add dashboard content here */}
    </>
  )
}

export default Home