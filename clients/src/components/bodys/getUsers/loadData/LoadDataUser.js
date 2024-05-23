import React, { useCallback } from "react";
import Button from "react-bootstrap/esm/Button";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../store/modal/actions";
import typeValue from "../../../../store/modal/valueModal/actions";
const LoadDataUser = ({ item }) => {
  const dispatch = useDispatch();
  const handleClickEdit = useCallback(() => {
    dispatch(showModal());
    dispatch(typeValue.setFirstName(item.firstName));
    dispatch(typeValue.setLastName(item.lastName));
    dispatch(typeValue.setAddress(item.address));
    dispatch(typeValue.setGender(item.gender));
    dispatch(typeValue.setRole(item.roleId));

    dispatch(typeValue.setStatus(["update", item.id]));
  }, [dispatch, item]);

  const handleClickDelete = useCallback(() => {
    dispatch(showModal());
    dispatch(
      typeValue.setStatus(["delete", item.id, item.firstName, item.lastName])
    );
  }, [dispatch, item]);
  return (
    <tr>
      <td>{item.email}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.address}</td>
      <td className="td-button">
        <Button className="bt" onClick={handleClickEdit}>
          <EditOutlined className="edit" />
        </Button>
        <Button className="bt-2" onClick={handleClickDelete}>
          <DeleteFilled className="delete" />
        </Button>
      </td>
    </tr>
  );
};

export default LoadDataUser;
