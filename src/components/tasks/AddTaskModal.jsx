import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Zero">
      <p className="text-sm text-gray-500">
        Your payment has been successfully submitted. We&apos;ve sent you an
        email with all of the details of your order.
      </p>
    </Modal>
  );
};

export default AddTaskModal;
