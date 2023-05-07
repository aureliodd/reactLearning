import { useState } from 'react';
import NavBar from './components/navbar';
import Head from 'next/head'
import LoginStyle from '../styles/Login.module.css'

export default function Login() {

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function updateEmail(event) {
    setEmail(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  function handleLoginClick() {
    console.log(`${email}: ${password}`)
    if(email != false && password != false) {
      emailRegex.test(email)
    }
    
  }

  return(
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div >
        <NavBar />

        <div className={LoginStyle.loginPage}>
          <form action="" method="post">
            <input type="email" name="email" id="" placeholder="email" onKeyUp={updateEmail} />
            <input type="password" name="password" id="" placeholder="password" onKeyUp={updatePassword} />
            <input type="button" value="Login" onClick={handleLoginClick}/>
          </form>
        </div>

      </div>
    </>
    
  )
}
