import style from './Header.module.scss'
import Image from 'next/image'
import logo from '../../../../../public/images/logo.svg'
import points from '../../../../../public/images/points.svg'
import profile from '../../../../../public/images/profile.svg'
import { useState } from 'react'

export default function Header() {

  const [showBtn, setShowBtn] = useState(false)
  const hideBtn = () => setShowBtn(!showBtn)
  const arrowDirection = () => showBtn ? style["header__profile--arrow-up"] : style["header__profile--arrow-down"]

  return (
    <header className={style.header}>
      <figure className={style.header__points}>
        <Image src={points}/>
      </figure>
      
      <figure className={style.header__image}>
        <Image src={logo}/>
      </figure>

      <menu className={style.header__menu}>
        <ul className={`${style["header__menu--flex"]} ${style["header__menu--style-type"]}`}>
          <li>My Classes</li>
        </ul>
      </menu>

      <button className={style["header__btn-change"]}>
        Change to teacher mode
      </button>

      <figure className={style.header__profile} onClick={hideBtn}>
        <i className={`${style["header__profile--arrow"]} ${arrowDirection()}`}></i>
        <Image src={profile}/>
      </figure>
    </header>

  )
}
