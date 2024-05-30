import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLanguageState } from "../../../../store/selector";
import { Buffer } from "buffer";

const LoadingBacSiNoiBat = ({ item }) => {
  const [img, setImg] = useState("");
  const language = useSelector(getLanguageState);

  useEffect(() => {
    if (item.image) {
      const images = Buffer.from(item.image, "base64").toString("binary");
      setImg(images);
    }
  }, [item]);
  return (
    <div className="box-1">
      <div className="item-1">
        <div className="img">
          <img src={img} alt="a2" />
        </div>
        <div className="p-s">
          <p>
            {language === "vn"
              ? item.positionData.valueVi
              : item.positionData.valueEn}
            , {item.firstName}
            {item.lastName}
          </p>
          <span>Cơ Xương Khớp</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingBacSiNoiBat;
