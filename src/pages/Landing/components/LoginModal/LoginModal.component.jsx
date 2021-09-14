import Modal from "react-modal"
import { useState } from 'react'
import style from './LoginModal.module.scss'

export default function LoginModal(props) {
  Modal.setAppElement('section')

  const [show, setShow] = useState(false)
  const hideMenuModal = () => setShow(!show)

  return (
    <div>
      <div className={style["container"]} onClick={hideMenuModal}>
        {props.children}
      </div>
      <Modal
        className={`${style["modal-container"]} ${style["custom-map-modal"]}`}
        isOpen={show}
        animation={true}
      >
        <section className={style.content}>
          <header>
            
          </header>
          <main>
            
          </main> 
        </section>          
      </Modal>
    </div>
  )
}