import React, { useState } from 'react';

const ModalContext = React.createContext({
  shouldShowModal: false,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalContextProvider = ({ children }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const showModal = () => {
    setShouldShowModal(true);
  }

  const hideModal = () => {
    setShouldShowModal(false);
  }

  return (
    <ModalContext.Provider value={{
      shouldShowModal: shouldShowModal,
      showModal: showModal,
      hideModal: hideModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext;