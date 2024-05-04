import React from "react";
import ModalAll from "../../modal/ModalAll";
import { Error, Form } from "../../form/Form";
import { Button } from "reactstrap";
const ModalEdit = (props) => {
  const {
    onChange1,
    value1,
    onChange2,
    value2,
    onChange3,
    value3,
    messError,
    className,
    isOpen,
    toggle,
    onClick1,
    onClick2,
  } = props;
  const BodyElement1 = [
    {
      label: "FirstName:",
      placeholder: "Nhập firstName:",
      onChange: onChange1,
      className: "form-control",
      type: "text",
      name: "firstName",
      value: value1,
    },
    {
      label: "LastName:",
      placeholder: "Nhập lastName:",
      onChange: onChange2,
      className: "form-control",
      type: "text",
      value: value2,
    },
    {
      label: "Address:",
      placeholder: "Nhập address:",
      onChange: onChange3,
      className: "form-control",
      type: "text",
      value: value3,
    },
    { messError: messError, className: className },
  ];

  const body1 = BodyElement1.map((item, index) => {
    if (item.label) {
      return (
        <Form
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          onChange={item.onChange}
          className={item.className}
          type={item.type}
          value={item.value}
        />
      );
    } else {
      return (
        <Error
          key={index}
          messError={item.messError}
          className={item.className}
        />
      );
    }
  });
  return (
    <div>
      <ModalAll
        isOpen={isOpen}
        toggle={toggle}
        titleHeader={<div>Edit User</div>}
        body={body1}
        footer={[
          <Button key={"update"} onClick={onClick1} color="primary">
            Update
          </Button>,
          <Button key={"cancel"} onClick={onClick2} color="primary">
            Cancel
          </Button>,
        ]}
      />
    </div>
  );
};

export default ModalEdit;
