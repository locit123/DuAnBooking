import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const ModalAll = (props, args) => {
  const { titleHeader, body, footer, isOpen, toggle } = props;

  return (
    <div>
      <Modal
        backdrop={"static"}
        keyboard={false}
        isOpen={isOpen}
        toggle={toggle}
        {...args}
      >
        <ModalHeader toggle={toggle}>{titleHeader}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalAll;
