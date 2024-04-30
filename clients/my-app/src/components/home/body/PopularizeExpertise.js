import React from "react";
import { useTranslation } from "react-i18next";
import "./PopularizeExpertise.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from "../../images/a1.png";
import a2 from "../../images/bv.png";
import a3 from "../../images/bs.jpg";
import SessionBody from "./SessionBody";
const PopularizeExpertise = (props) => {
  const { t } = useTranslation();
  //-------------------BODY1------------------
  const bodyComponents = [
    {
      className: "box-item",
      src: a1,
      alt: "Cơ xương khớp 1",
      title: `${t("homeHeader.skeletalMuscle")} 1`,
    },
    {
      className: "box-item",
      src: a1,
      alt: "Cơ xương khớp 2",
      title: `${t("homeHeader.skeletalMuscle")} 2`,
    },
    {
      className: "box-item",
      src: a1,
      alt: "Cơ xương khớp 3",
      title: `${t("homeHeader.skeletalMuscle")} 3`,
    },
    {
      className: "box-item",
      src: a1,
      alt: "Cơ xương khớp 4",
      title: `${t("homeHeader.skeletalMuscle")} 4`,
    },
    {
      className: "box-item",
      src: a1,
      alt: "Cơ xương khớp 5",
      title: `${t("homeHeader.skeletalMuscle")} 5`,
    },
    {
      className: "box-item",
      src: a1,
      alt: "Cơ xương khớp 6",
      title: `${t("homeHeader.skeletalMuscle")} 6`,
    },
  ];
  const body1 = bodyComponents.map((item, index) => {
    return (
      <div key={index} className={item.className}>
        <img src={item.src} alt={item.alt} />
        <h3>{item.title}</h3>
      </div>
    );
  });
  //-------------------BODY2------------------
  const bodyComponents2 = [
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc1",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 1`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc2",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 2`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc3",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 3`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc4",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 4`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc5",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 5`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc6",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 6`,
    },
  ];

  const body2 = bodyComponents2.map((item, index) => {
    return (
      <div key={index} className={item.className}>
        <img src={item.src} alt={item.alt} />
        <h3>{item.title}</h3>
      </div>
    );
  });
  //-------------------BODY3------------------
  const bodyComponents3 = [
    {
      className: "box-item item3",
      image: a3,
      alt: "BacSi1",
      titleName: "Bác Sĩ 1",
      chuyenKhoa: "Thần Kinh",
    },
    {
      className: "box-item item3",
      image: a3,
      alt: "BacSi2",
      titleName: "Bác Sĩ 2",
      chuyenKhoa: "Nhi Khoa",
    },
    {
      className: "box-item item3",
      image: a3,
      alt: "BacSi3",
      titleName: "Bác Sĩ 3",
      chuyenKhoa: "Xương Khớp",
    },
    {
      className: "box-item item3",
      image: a3,
      alt: "BacSi4",
      titleName: "Bác Sĩ 4",
      chuyenKhoa: "Da Liễu",
    },
    {
      className: "box-item item3",
      image: a3,
      alt: "BacSi5",
      titleName: "Bác Sĩ 5",
      chuyenKhoa: "Tiêu Hóa Bệnh Viêm Gan",
    },
    {
      className: "box-item item3 ",
      image: a3,
      alt: "BacSi6",
      titleName: "Bác Sĩ 6",
      chuyenKhoa: "Sức Khỏe Tâm Thần",
    },
  ];
  const body3 = bodyComponents3.map((item, index) => {
    return (
      <div key={index} className={item.className}>
        <img src={item.image} alt={item.image} />
        <h3>{item.titleName}</h3>
        <h3>{item.chuyenKhoa}</h3>
      </div>
    );
  });
  //-------------------BODY4------------------
  const bodyComponents4 = [
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc1",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 1`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc2",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 2`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc3",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 3`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc4",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 4`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc5",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 5`,
    },
    {
      className: "box-item",
      src: a2,
      alt: "Hệ thống y tế Thu Cúc6",
      title: `${t("homeHeader.ThuCucMedicalSystem")} 6`,
    },
  ];

  const body4 = bodyComponents4.map((item, index) => {
    return (
      <div key={index} className={item.className}>
        <img src={item.src} alt={item.alt} />
        <h3>{item.title}</h3>
      </div>
    );
  });
  return (
    <div className="container">
      <SessionBody title={t("homeHeader.PopularizeExpertise")} body={body1} />
      <SessionBody
        title={t("homeHeader.OutstandingMedicalFacilities")}
        body={body2}
      />
      <SessionBody title={t("homeHeader.ExcellentDoctor")} body={body3} />
      <SessionBody title={"Cẩm Mang"} body={body4} />
    </div>
  );
};

export default PopularizeExpertise;
