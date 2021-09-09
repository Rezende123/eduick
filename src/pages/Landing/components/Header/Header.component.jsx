import style from './Header.module.scss'
import Image from 'next/image'
import logo from '../../../../../public/images/logo.svg'

export default function Header() {
  return (
    <header className={style.header}>
      <figure className={style.header__image}>
        <Image
          src={logo}
          alt="Logo EDUICK"/>
      </figure>

      <menu className={style.header__menu}>
        <ul className={`${style["header__menu--flex"]} ${style["header__menu--style-type"]}`}>
          <li>How it works</li>
          <li>About Us</li>
        </ul>
      </menu>

      <button className={`landing_page_buttom landing_page_buttom--font ${style.header__buttom}`}>
        Get Started
      </button>
    </header>
  )
}
