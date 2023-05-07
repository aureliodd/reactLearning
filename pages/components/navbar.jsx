import Link from 'next/link'
import Script from 'next/script'
import NavbarStyle from '../../styles/Components/Navbar.module.css'


export default function NavBar() {

  let src = "https://connect.facebook.net/en_US/sdk.js"

  return (
    <div className={NavbarStyle.navbar}>

      <Script
        src={src}
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script ${src} loaded correctly, window.FB has been populated`)
        }
      />

      <div className={NavbarStyle.siteNameDiv}>
        MySite.com
      </div>

      <ul className={NavbarStyle.navbarAttributes}>
        <li><Link href="/">Home</Link></li> 
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/cv">CV</Link></li>
        <li><Link href="/articles">Articles</Link></li>
      </ul>

    </div>
  )
}