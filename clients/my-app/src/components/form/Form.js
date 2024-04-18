import React from "react";
import "./Form.scss";
const Form = (props) => {
  const { label, placeholder, name, onChange, value, eye, type, onClick } =
    props;
  return (
    <div className="form-group mt-3 mb-3">
      <label className="mb-2">{label}</label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
        name={name}
        value={value}
        type={type}
      />
      <div onClick={onClick}>{eye}</div>
    </div>
  );
};
const Select = (props) => {
  const { label, name, v1, v2, v3, gt1, gt2, gt3 } = props;
  return (
    <div className="form-group mt-3 mb-3">
      <label className="mb-2">{label}</label>
      <select name={name} className="col-12 form-control">
        <option value={v1}>{gt1}</option>
        <option value={v2}>{gt2}</option>
        <option value={v3}>{gt3}</option>
      </select>
    </div>
  );
};

export { Form, Select };
