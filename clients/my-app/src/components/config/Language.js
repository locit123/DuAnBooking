import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    // Định nghĩa các ngôn ngữ và các bản dịch tương ứng
    en: {
      translation: {
        homeHeader: {
          speciality: "Specialized",
          searchDoctor: "Find doctors by specialty",
          healthFacility: "Health facilities",
          selectRoom: "Choose a hospital or clinic",
          doctor: "Doctor",
          selectDoctor: "Choose a good doctor",
          fee: "Examination package",
          checkHealth: "General health check",
          support: "Support",
          PopularizeExpertise: "Popularize expertise",
          skeletalMuscle: "skeletal muscle",
          OutstandingMedicalFacilities: "Outstanding medical facilities",
          ThuCucMedicalSystem: "Thu Cuc medical system",
          ExcellentDoctor: "Excellent doctor",
          systemManagement: "system management",
          manageUsers: "manage Users",
          ManageReduxUsers: "Manage redux users",
        },
        banner: {
          title1: "MEDICAL FOUNDATION",
          title2: "COMPREHENSIVE HEALTH CARE",
          title3: "Google Play",
          title4: "App Store",
          child0: "Examination",
          child1: "Specialized",
          child2: "Remote",
          child3: "General",
          child4: "tests",
          child5: "Medical",
          child6: "health",
          child7: "Mental",
          child8: "Dental",
        },
        userManage: {
          system: "System",
        },
      },
    },
    vn: {
      translation: {
        homeHeader: {
          speciality: "Chuyên khoa",
          searchDoctor: "Tìm bác sĩ theo chuyên khoa",
          healthFacility: "Cơ sở y tế",
          selectRoom: "Chọn bệnh viện phòng khám",
          doctor: "Bác sĩ",
          selectDoctor: "Chọn bác sĩ giỏi",
          fee: "Gói khám",
          checkHealth: "Khám sức khỏe tổng quát",
          support: "Hỗ trợ",
          PopularizeExpertise: "Chuyên khoa phổ biến",
          skeletalMuscle: "Cơ xương khớp",
          OutstandingMedicalFacilities: "Cơ sở y tế nổi bật",
          ThuCucMedicalSystem: "Hệ thống y tế Thu Cúc",
          ExcellentDoctor: "Bác sĩ nổi bật",
          systemManagement: "Quản lí hệ thống",
          manageUsers: "Quản lí người sử dụng",
          ManageReduxUsers: "Quản lí User Redux",
        },
        banner: {
          title1: "NỀN TẢNG Y TẾ",
          title2: "CHĂM SÓC SỨC KHỎE TOÀN DIỆN",
          title3: "Google Play",
          title4: "App Store",
          child0: "Khám",
          child1: "Chuyên Khoa",
          child2: "Từ Xa",
          child3: "Tổng quát",
          child4: "Xét nghiệm",
          child5: "y học",
          child6: "Sức khỏe ",
          child7: "tinh thần",
          child8: "nha Khoa",
        },
        userManage: {
          system: "Hệ Thống",
        },
      },
    },
  },
  lng: "en", // Ngôn ngữ mặc định
  fallbackLng: "vn", // Ngôn ngữ dự phòng
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
