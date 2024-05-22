import React from "react";
import Button from "react-bootstrap/esm/Button";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
const LoadDataUser = ({ item }) => {
  return (
    <tr>
      <td>{item.email}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.address}</td>
      <td className="td-button">
        <Button className="bt">
          <EditOutlined className="edit" />
        </Button>
        <Button className="bt-2">
          <DeleteFilled className="delete" />
        </Button>
      </td>
    </tr>
  );
};

export default LoadDataUser;
