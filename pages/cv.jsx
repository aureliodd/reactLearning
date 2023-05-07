import NavBar from './components/navbar';
import Head from 'next/head'
import Layout from '../components/layout'

function handleLoginClick() {
  console.log('a')
}

export default function cv() {
  return(
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div>
        <NavBar />
        <Layout>
          provaaa
        </Layout>
      </div>
    </>
    
  )
}

// export async function getStaticProps() {

// }