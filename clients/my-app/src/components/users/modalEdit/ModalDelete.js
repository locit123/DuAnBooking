import React from "react";
import ModalAll from "../../modal/ModalAll";
import { Button } from "reactstrap";
const ModalDelete = (props) => {
  const { toggle, isOpen, fi, la, onClick1, onClick2 } = props;
  return (
    <div>
      <ModalAll
        toggle={toggle}
        isOpen={isOpen}
        titleHeader={
          <div>
            Bạn đang muốn xóa user {fi} {la}?
          </div>
        }
        body={
          <div>
            Bạn đã chắc chắn là muốn xóa user {fi} {la}?
          </div>
        }
        footer={[
          <Button key={"xacNhan"} onClick={onClick1} color="primary">
            Xác Nhận
          </Button>,
          <Button key={"huy"} onClick={onClick2} color="primary">
            Hủy
          </Button>,
        ]}
      />
    </div>
  );
};

export default ModalDelete;
