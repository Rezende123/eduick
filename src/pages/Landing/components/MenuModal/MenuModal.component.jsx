import Modal from "react-modal";

export default function MenuModal(props) {
    return (
        <Modal className="modal-container custom-map-modal"
            isOpen={props.show}
            // onHide={this.toggleState}
            animation={true}
        >
            <h1>Oi</h1>
        </Modal>
  
    )
}