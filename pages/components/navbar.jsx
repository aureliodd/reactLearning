import Link from 'next/link'
import Script from 'next/script'
import NavbarStyle from '../../styles/Components/Navbar.module.css'


export default function NavBar() {

  let src = "https://connect.facebook.net/en_US/sdk.js"

  return (
    <div className="navbar">
      <Script
        src={src}
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script ${src} loaded correctly, window.FB has been populated`)
        }
      />
      <ul className={NavbarStyle.navbar}>
        <li><Link href="/">Home</Link></li> 
        <li><Link href="/login">Login</Link></li>
        <li>CV</li>
        <li>Articles</li>
      </ul>
    </div>
  )
}