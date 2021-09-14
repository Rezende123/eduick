import style from './Header.module.scss'
import Modal from "react-modal"
import Image from 'next/image'
import logo from '../../../../../public/images/logo.svg'
import points from '../../../../../public/images/points.svg'
import profile from '../../../../../public/images/profile.svg'
import useWindowDimensions from '../../hooks/WindowDimensions.hook.js'
import { useState } from 'react'

export default function Header() {
  Modal.setAppElement('button')

  const [showBtn, setShowBtn] = useState(false)
  const { width } = useWindowDimensions()
  const hideBtn = () => {
    const mobileSize = 830

    if (width <= mobileSize) {
      setShowBtn(!showBtn)
    }
  }
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

      <Modal
        className={`${style["modal-container"]} ${style["custom-map-modal"]}`}
        style={{
          overlay: {
            top: '7%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          }
        }}
        isOpen={showBtn}
        animation={true}
      >
        <button className={style["btn-modal"]}>
          <span>
            Change to teacher mode
          </span>
          <i className={style["btn-modal__arrow"]}></i>
        </button>
      </Modal>
    </header>
  )
}
