import Modal from "react-modal"
import Image from 'next/image'
import style from './MenuModal.module.scss'
import logo from '../../../../../public/images/logo.svg'
import close from '../../../../../public/icons/close_big.svg'
import { useState } from 'react'

export default function MenuModal(props) {
  Modal.setAppElement('section')

  const [show, setShow] = useState(false)
  const hideMenuModal = () => setShow(!show)

  return (
    <div>
      <div onClick={hideMenuModal}>
        {props.children}
      </div>
      <Modal className={`${style["modal-container"]} ${style["custom-map-modal"]}`}
        isOpen={show}
        animation={true}
      >
        <section className={style.container}>
          <header className={style.header}>
            <figure className={style.header__logo}>
              <Image src={logo}/>
            </figure>
            <figure onClick={hideMenuModal}>
              <Image src={close}/>
            </figure>
          </header>
          <main className={style.menu}>
            <ul className={style["menu__list-pages"]}>
              <li>How it works</li>
              <li>About Us</li>
            </ul>

            <button className={`landing_page_buttom landing_page_buttom--font ${style["menu__buttom"]}`}>
              Get Started
            </button>
          </main>
        </section>
      </Modal>
    </div>
  )
}