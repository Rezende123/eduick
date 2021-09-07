import style from './Header.module.scss'
import Image from 'next/image'
import logo from '../../../../../public/images/logo.svg'

export default function Header() {
  return (
    <header>
      <Image src={logo} alt="Logo EDUICK" />

      <menu>
        <ul>
          <li>How it works</li>
          <li>About Us</li>
        </ul>
      </menu>

      <button>
        Get Started
      </button>
    </header>
  )
}
