import React from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pl-[5%] text-[white] pr-[5%] pt-[20px] md:pt-[40px] bg-[#f0f4f8] min-h-screen z-[-1]">
      <section className="mb-[30px] md:mb-[60px] text-center">
        <h1 className="text-[24px] md:text-[28px] font-bold mb-[10px] text-[#333]">
          {t("features.title")}
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#666]">
          {t("features.subtitle")}
        </p>
      </section>
      <div className="grid md:grid-cols-1 pb-[20px] gap-[20px]">
        <div className="bg-gradient-to-r from-[#2f4f7f] to-[#455a64] p-[20px] md:p-[30px] shadow-lg rounded-lg text-white transform transition-transform hover:scale-105">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px]">
            {t("features.feature1.title")}
          </h2>
          <p className="text-[16px] md:text-[18px]">
            {t("features.feature1.description")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#2f4f7f] to-[#455a64] p-[20px] md:p-[30px] shadow-lg rounded-lg text-white transform transition-transform hover:scale-105">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px]">
            {t("features.feature2.title")}
          </h2>
          <p className="text-[16px] md:text-[18px]">
            {t("features.feature2.description")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#2f4f7f] to-[#455a64] p-[20px] md:p-[30px] shadow-lg rounded-lg text-white transform transition-transform hover:scale-105">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px]">
            {t("features.feature3.title")}
          </h2>
          <p className="text-[16px] md:text-[18px]">
            {t("features.feature3.description")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#2f4f7f] to-[#455a64] p-[20px] md:p-[30px] shadow-lg rounded-lg text-white transform transition-transform hover:scale-105">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px]">
            {t("features.feature4.title")}
          </h2>
          <p className="text-[16px] md:text-[18px]">
            {t("features.feature4.description")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#2f4f7f] to-[#455a64] p-[20px] md:p-[30px] shadow-lg rounded-lg text-white transform transition-transform hover:scale-105">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px]">
            {t("features.feature5.title")}
          </h2>
          <p className="text-[16px] md:text-[18px]">
            {t("features.feature5.description")}
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#2f4f7f] to-[#455a64] p-[20px] md:p-[30px] shadow-lg rounded-lg text-white transform transition-transform hover:scale-105">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px]">
            {t("features.feature6.title")}
          </h2>
          <p className="text-[16px] md:text-[18px]">
            {t("features.feature6.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
