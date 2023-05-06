// index.html
import React, { useState } from 'react';
import NavBar from './components/navbar';
import Image from 'next/image'
import Head from 'next/head'
import HomeModule from '../styles/Home.module.css'



function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

interface User {
    avatar: string;
    email: number;
    first_name: string;
    last_name: string;
    id: number | string;
}

interface Data {
  page: number;
  per_page: number;
  support: {
    text: string;
    url: string;
  },
  total: number;
  total_pages: number;
  data: User[]
}

interface HomePageProps {
  responseData: Data
}

export default function HomePage({responseData}: HomePageProps) {
  let data: Data
  data = responseData
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  


  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta property="" content="" key="" />
      </Head>
      
        <NavBar />
        <Image
          src="/images/link.png"
          alt="image"
          width={144}
          height={144}
        />

        <Header title="Develop. Preview. Ship. 🚀" />
        
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <button className={HomeModule.likeButton} onClick={handleClick}>Like ({likes})</button>

        <div>
          {data.data.map(element => {
            return(
              <div key={element.id}>
                <p>{element.email}</p>
                <p>{element.first_name} {element.last_name}</p>
                <hr />
              </div>
            )
          })}
      </div>



      </div>
  );
}



export async function getStaticProps() {
  const response = await fetch('https://reqres.in/api/users?page=2')
  const responseData = await response.json()
  // const data = await prova.data
  
  return {
    props: {
      responseData,
    },
  }
}