import Modal from "react-modal"
import Image from 'next/image'
import style from './MenuModal.module.scss'
import logo from '../../../../../public/images/logo.svg'
import close from '../../../../../public/icons/close_big.svg'
import hamburger from '../../../../../public/icons/hamburger.svg'
import { useState } from 'react'

export default function MenuModal() {
    Modal.setAppElement('section')

    const hideMenuModal = () => {
        setShow(!show)
    }

    const [show, setShow] = useState(false)

    return (
        <div>
            <div onClick={hideMenuModal}>
                <Image src={hamburger}/>
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