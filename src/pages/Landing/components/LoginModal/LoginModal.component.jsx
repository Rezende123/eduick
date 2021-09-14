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
        <section className={style.context}>
          <header>
              <h1 className={style.context__title}>
                Get Started <br/>
                <span className={style["context__title--highlight"]}>Just Login</span>
              </h1>            
          </header>
          <main>
            <form action="javascript:void(0);">
              <div className={style["context__field"]}>
                <label htmlFor="username">Username:</label>
                <input autocomplete="off" type="text" name="username" id="username" />
              </div>
              <div className={style["context__field"]}>
                <label htmlFor="password">Password:</label>
                <input autocomplete="off" type="password" name="password" id="password" />
                <i className={style["context__field--icon-eye"]}></i>
              </div>
            </form>
          </main> 
        </section>          
      </Modal>
    </div>
  )
}