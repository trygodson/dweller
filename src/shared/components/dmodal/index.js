import Modal from 'react-modal';

const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  overlay: { backgroundColor: 'rgba(0,0,0,0.35)' },
};

const DModal = ({ modalOpen, setModalOpen, children, ...props }) => {
  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => setModalOpen(false)}
      style={customStyles2}
      contentLabel="Example Modal"
      {...props}
    >
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      {children}
    </Modal>
  );
};

export default DModal;
