import Modal from 'react-modal'
import { useState } from 'react'
import Image from 'next/image'
import close from '../../../../../public/icons/close_big.svg'
import style from './LoginModal.module.scss'

export default function LoginModal(props) {
  Modal.setAppElement('section')

  const [show, setShow] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const hideMenuModal = () => setShow(!show)
  const hidePassword = () => setShowPassword(!showPassword)
  const typePassword = () => (showPassword ? 'text' : 'password')

  return (
    <div>
      <div className={style['container']} onClick={hideMenuModal}>
        {props.children}
      </div>
      <Modal
        className={`${style['modal-container']} ${style['custom-map-modal']}`}
        style={{
          overlay: {
            backgroundColor: 'rgba(32, 14, 100, 0.8)',
          },
        }}
        isOpen={show}
        animation={true}
      >
        <section className={style.context}>
          <header>
            <h1 className={style.context__title}>
              Get Started <br />
              <span className={style['context__title--highlight']}>
                Just Login
              </span>
            </h1>
            <figure className={style['context__close']} onClick={hideMenuModal}>
              <div className={style['context__close--circle']}>
                <Image src={close} />
              </div>
            </figure>
          </header>
          <main>
            <form action="#!">
              <div className={style['context__field']}>
                <label htmlFor="username">Username:</label>
                <input
                  autoComplete="username"
                  type="text"
                  name="username"
                  id="username"
                />
              </div>
              <div className={style['context__field']}>
                <label htmlFor="password">Password:</label>
                <input
                  autoComplete="new-password"
                  type={typePassword()}
                  name="password"
                  id="password"
                />
                <i
                  className={style['context__field--icon-eye']}
                  onClick={hidePassword}
                ></i>
              </div>

              <div className={style['context__field']}>
                <button
                  className={`landing_page_buttom landing_page_buttom--font ${style['context__buttom']}`}
                >
                  Login
                </button>
              </div>
            </form>
          </main>
        </section>
      </Modal>
    </div>
  )
}
