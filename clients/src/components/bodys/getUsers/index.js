import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { getTypeFetch } from "../../../store/saga/actions";
import {
  isErrorState,
  isLoadingState,
  userDataState,
} from "../../../store/selector";
import LoadDataUser from "./loadData/LoadDataUser";
function TableUsers(props) {
  const dispatch = useDispatch();
  const data = useSelector(userDataState);
  const isLoading = useSelector(isLoadingState);
  const isError = useSelector(isErrorState);

  console.log("DATA", data, isLoading, isError);
  useEffect(() => {
    dispatch(getTypeFetch.getRequest("all"));
  }, [dispatch]);
  return (
    <Table striped bordered hover size="sm" className="mt-3">
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {isLoading === false &&
        isError === false &&
        Array.isArray(data) &&
        data.length > 0 ? (
          data.map((item) => <LoadDataUser key={item.id} item={item} />)
        ) : (
          <tr>
            <td colSpan={5}>loading...</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TableUsers;
