import { useContext } from 'react';
import ReactDOM from 'react-dom';

import { StyledBackdrop, StyledModal } from '../../styles/Modal.styled';

import ModalContext from '../../store/ModalContext';

const portalEl = document.getElementById('modal');

const Modal = ({ children }) => {
  const modalCtx = useContext(ModalContext);

  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop onClick={modalCtx.hideModal} />, portalEl)}
      {ReactDOM.createPortal(<StyledModal>{children}</StyledModal>, portalEl)}
    </>
  )
}

export default Modal;