import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
import { PlusOutlined } from "@ant-design/icons";
import ModalAdd from "./modal/ModalAdd";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/modal/actions";
import typeValue from "../../../store/modal/valueModal/actions";
const AddNewUser = (props) => {
  const dispatch = useDispatch();
  const handleClickModal = useCallback(() => {
    dispatch(showModal());
    dispatch(typeValue.setStatus("create"));
    dispatch(typeValue.setEmail(""));
    dispatch(typeValue.setPassword(""));
    dispatch(typeValue.setFirstName(""));
    dispatch(typeValue.setLastName(""));
    dispatch(typeValue.setAddress(""));
    dispatch(typeValue.setGender("Male"));
    dispatch(typeValue.setRole("Patient"));
    dispatch(typeValue.setPhoneNumber(""));
    dispatch(typeValue.setImage(""));
  }, [dispatch]);
  return (
    <div>
      <ModalAdd />
      <Button variant="primary" onClick={handleClickModal}>
        <PlusOutlined /> Add New User
      </Button>
    </div>
  );
};

export default AddNewUser;
