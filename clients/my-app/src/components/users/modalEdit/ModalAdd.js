import React from "react";
import { Button } from "reactstrap";
import { Error, Form, Select } from "../../form/Form";
import ModalAll from "../../modal/ModalAll";
const ModalAdd = (props) => {
  const {
    onChange1,
    value1,
    onChange2,
    value2,
    onChange3,
    value3,
    onChange4,
    value4,
    onChange5,
    value5,
    onChange6,
    value6,
    onChange7,
    value7,
    onChange8,
    value8,
    messError,
    className,
    isOpen,
    toggle,
    onClick1,
    onClick2,
  } = props;
  const bodyElement2 = [
    {
      name: 1,
      onChange: onChange1,
      label: "Email:",
      placeholder: "Nhập email",
      className: "form-control",
      value: value1,
      type: "email",
    },
    {
      name: 2,
      onChange: onChange2,
      label: "Password:",
      placeholder: "Nhập password",
      className: "form-control",
      value: value2,
      type: "password",
    },
    {
      name: 3,
      onChange: onChange3,
      label: "FirstName:",
      placeholder: "Nhập firstName",
      className: "form-control",
      value: value3,
      type: "text",
    },
    {
      name: 4,
      onChange: onChange4,
      label: "LastName:",
      placeholder: "Nhập lastName",
      className: "form-control",
      value: value4,
      type: "text",
    },
    {
      name: 5,
      onChange: onChange5,
      label: "Address:",
      placeholder: "Nhập address",
      className: "form-control",
      value: value5,
      type: "text",
    },
    {
      name: 6,
      onChange: onChange6,
      label: "PhoneNumber:",
      placeholder: "Nhập phoneNumber",
      className: "form-control",
      value: value6,
      type: "number",
    },
    {
      name: 7,
      label: "Gender:",
      v1: "1",
      v2: "2",
      v3: "3",
      gt1: "Female",
      gt2: "Male",
      gt3: "Other",
      onChange: onChange7,
      value: value7,
    },
    {
      name: 8,
      label: "RoleId:",
      v1: "1",
      v2: "2",
      v3: "3",
      gt1: "Admin",
      gt2: "Doctor",
      gt3: "Patient",
      onChange: onChange8,
      value: value8,
    },
    { messError: messError, className: className },
  ];
  const body2 = bodyElement2.map((item, index) => {
    if (item.name > 0 && item.name <= 6) {
      return (
        <Form
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          className={item.className}
          value={item.value}
          type={item.type}
          onChange={item.onChange}
        />
      );
    }
    if (item.name > 6 && item.name <= 8) {
      return (
        <div className="row" key={index}>
          <div className="col-6">
            <Select
              label={item.label}
              v1={item.v1}
              v2={item.v2}
              v3={item.v3}
              gt1={item.gt1}
              gt2={item.gt2}
              gt3={item.gt3}
            />
          </div>
        </div>
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
        titleHeader={<div>Create New User</div>}
        body={body2}
        footer={[
          <Button key={"them"} onClick={onClick1}>
            Thêm
          </Button>,
          <Button key={"cancel"} onClick={onClick2}>
            Cancel
          </Button>,
        ]}
      />
    </div>
  );
};

export default ModalAdd;
