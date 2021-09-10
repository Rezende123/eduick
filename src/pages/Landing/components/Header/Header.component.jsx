import style from './Header.module.scss'
import Image from 'next/image'
import logo from '../../../../../public/images/logo.svg'
import hamburger from '../../../../../public/icons/hamburger.svg'
import MenuModal from '../MenuModal'
import { useState } from 'react';


export default function Header() {

  const [showMenuModal, setShowMenuModal] = useState(false)

  const hideMenuModal = () => {
    setShowMenuModal(!showMenuModal)
  }

  return (
    <header className={style.header}>
      <figure className={style.header__hamburger} onClick={hideMenuModal}>
        <Image src={hamburger}/>
      </figure>

      <figure className={style.header__image}>
        <Image src={logo}/>
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

      <MenuModal show={showMenuModal}>
      </MenuModal>
    </header>

  )
}
