import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransacionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransacionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransacionModal} />
      <Dashboard />
      <GlobalStyle />

      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransacionModal}
      >
          <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}