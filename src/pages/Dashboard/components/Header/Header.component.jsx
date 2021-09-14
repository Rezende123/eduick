import style from './Header.module.scss'
import Image from 'next/image'
import logo from '../../../../../public/images/logo.svg'
import points from '../../../../../public/images/points.svg'
import profile from '../../../../../public/images/profile.svg'

export default function Header() {

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

      <figure className={style.header__profile}>
        <Image src={profile}/>
      </figure>
    </header>

  )
}
