import Modal from "react-modal";
import Image from 'next/image'
import style from './MenuModal.module.scss'
import logo from '../../../../../public/images/logo.svg'
import close from '../../../../../public/icons/close_big.svg'

export default function MenuModal(props) {
    return (
        <Modal className="modal-container custom-map-modal"
            isOpen={props.show}
            animation={true}
        >
            <section>
                <head className={style.header}>
                    <figure className={style.header__logo}>
                        <Image src={logo}/>
                    </figure>
                    <figure className={style.header__close}>
                        <Image src={close}/>
                    </figure>
                </head>
                <main>
                    
                </main>
            </section>
        </Modal>
    )
}