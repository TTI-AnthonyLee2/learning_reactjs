import ReactDOM from 'react-dom';
import { StyledBackdrop, StyledModal } from '../../styles/Modal.styled';

const portalEl = document.getElementById('modal');

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop />, portalEl)}
      {ReactDOM.createPortal(<StyledModal>{children}</StyledModal>, portalEl)}
    </>
  )
}

export default Modal;