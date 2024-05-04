import React from "react";
import { Error, Form } from "../form/Form";

const ModelLogin = (props) => {
  const {
    onChange1,
    value1,
    onChange2,
    value2,
    eye,
    type,
    onClick,
    messError,
    className,
  } = props;
  const formOject = [
    {
      key: 1,
      onChange: onChange1,
      label: "Email And PhoneNumber:",
      placeholder: "Vui Lòng nhập email or phone",
      className: "form-control",
      value: value1,
      type: "email",
    },
    {
      key: 2,
      onChange: onChange2,
      label: "Password:",
      placeholder: "Vui Lòng nhập password",
      value: value2,
      className: "form-control",
      eye: eye,
      type: type,
      onClick: onClick,
    },
    {
      key: 3,
      messError: messError,
      className: className,
    },
  ];

  return (
    <div>
      {formOject.map((item, index) => {
        if (item.key === 1) {
          return (
            <Form
              key={index}
              onChange={item.onChange}
              label={item.label}
              placeholder={item.placeholder}
              value={item.value}
              type={item.type}
              className={item.className}
            />
          );
        }
        if (item.key === 3) {
          return (
            <Error
              key={index}
              messError={item.messError}
              className={item.className}
            />
          );
        }
        if (item.key === 2) {
          return (
            <Form
              key={index}
              onChange={item.onChange}
              label={item.label}
              placeholder={item.placeholder}
              value={item.value}
              type={item.type}
              eye={item.eye}
              onClick={item.onClick}
              className={item.className}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ModelLogin;
