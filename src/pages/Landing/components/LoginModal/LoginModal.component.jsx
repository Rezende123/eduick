import Modal from "react-modal"
import LoginModal from './LoginModal.module.scss'

export default function LoginModal(props) {
  Modal.setAppElement('section')

  const [show, setShow] = useState(false)
  const hideMenuModal = () => setShow(!show)

  return (
    <div>
      <div onClick={hideMenuModal}>
        {props.children}
      </div>
      <Modal
        className={`${style["modal-container"]} ${style["custom-map-modal"]}`}
        isOpen={show}
        animation={true}
      >
        <section>
          <header>
          </header>
          <main>
          </main> 
        </section>          
      </Modal>
    </div>
  )
}