import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
import { PlusOutlined } from "@ant-design/icons";
import ModalAdd from "./modal/ModalAdd";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/modal/actions";
import typeValue from "../../../store/modal/valueModal/actions";
import { useTranslation } from "react-i18next";

const AddNewUser = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClickModal = useCallback(() => {
    dispatch(showModal());
    dispatch(typeValue.setStatus("create"));
    dispatch(typeValue.setEmail(""));
    dispatch(typeValue.setPassword(""));
    dispatch(typeValue.setFirstName(""));
    dispatch(typeValue.setLastName(""));
    dispatch(typeValue.setAddress(""));
    dispatch(typeValue.setGender("M"));
    dispatch(typeValue.setRole("R3"));
    dispatch(typeValue.setPhoneNumber(""));
    dispatch(typeValue.setPosition("P0"));
    dispatch(typeValue.setImage(""));
  }, [dispatch]);
  return (
    <div>
      <ModalAdd />
      <Button variant="primary" onClick={handleClickModal}>
        <PlusOutlined /> {t("AddNewUser")}
      </Button>
    </div>
  );
};

export default AddNewUser;
