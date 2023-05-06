import NavBar from './components/navbar';
import Head from 'next/head'
import Layout from '../components/layout'

function handleLoginClick() {
  console.log('a')
}

export default function Login() {
  return(
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <div>
        <NavBar />
        <form action="" method="post">
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          <input type="button" value="Login" onClick={handleLoginClick}/>
        </form>
      </div>
      
    </Layout>
  )
}

// export async function getStaticProps() {

// }