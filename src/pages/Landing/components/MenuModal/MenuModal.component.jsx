import Modal from "react-modal";
import Image from 'next/image'
import style from './MenuModal.module.scss'
import logo from '../../../../../public/images/logo.svg'
import close from '../../../../../public/icons/close_big.svg'

export default function MenuModal(props) {
    Modal.setAppElement('section');

    return (
        <Modal className={`${style["modal-container"]} ${style["custom-map-modal"]}`}
            isOpen={props.show}
            animation={true}
        >
            <section>
                <header className={style.header}>
                    <figure className={style.header__logo}>
                        <Image src={logo}/>
                    </figure>
                    <figure>
                        <Image src={close}/>
                    </figure>
                </header>
                <main>
                    
                </main>
            </section>
        </Modal>
    )
}