import React from "react";
import Button from "react-bootstrap/Button";
import { PlusOutlined } from "@ant-design/icons";
const AddNewUser = (props) => {
  return (
    <div>
      <Button variant="primary">
        <PlusOutlined /> Add New User
      </Button>
    </div>
  );
};

export default AddNewUser;
