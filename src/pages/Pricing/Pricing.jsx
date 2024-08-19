import React from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pl-[5%] pr-[5%] pt-[20px] md:pt-[40px] bg-[#f0f4f8] min-h-screen z-[-1]">
      <section className="text-center mb-[40px] md:mb-[80px]">
        <h1 className="text-[28px] md:text-[28px] font-extrabold mb-[15px] text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#503733] to-[#D63D6F]">
          {t("pricing.title")}
        </h1>
        <p className="text-[18px] md:text-[22px] leading-[1.6] text-gray-700">
          {t("pricing.subtitle")}
        </p>
      </section>

      <div className="grid md:grid-cols-1 pb-[20px] gap-[30px]">
        <div className="bg-gradient-to-r from-[#F5F7F9] to-[#FFFFFF] p-[25px] md:p-[35px] border rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[200px] h-[200px] bg-[#503733] rounded-full opacity-30"></div>
          <h2 className="text-[22px] md:text-[28px] font-semibold mb-[10px] text-[#333333]">
            {t("pricing.card1.title")}
          </h2>
          <p className="text-[18px] md:text-[20px] mb-[15px] text-[#555555]">
            {t("pricing.card1.description")}
          </p>
          <p className="text-[24px] md:text-[30px] font-bold mb-[15px] text-[#503733]">
            {t("pricing.card1.price")}
          </p>
          <button className="bg-[#503733] text-[white] px-[20px] py-[10px] rounded-lg transition">
            {t("pricing.card1.button")}
          </button>
        </div>

        <div className="bg-gradient-to-r from-[#F5F7F9] to-[#FFFFFF] p-[25px] md:p-[35px] border rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[200px] h-[200px] bg-[#782742] rounded-full opacity-30"></div>
          <h2 className="text-[22px] md:text-[28px] font-semibold mb-[10px] text-[#333333]">
            {t("pricing.card2.title")}
          </h2>
          <p className="text-[18px] md:text-[20px] mb-[15px] text-[#555555]">
            {t("pricing.card2.description")}
          </p>
          <p className="text-[24px] md:text-[30px] font-bold mb-[15px] text-[#782742]">
            {t("pricing.card2.price")}
          </p>
          <button className="bg-[#782742] text-[white] px-[20px] py-[10px] rounded-lg hover:bg-[#B74C6B] transition">
            {t("pricing.card2.button")}
          </button>
        </div>

        <div className="bg-gradient-to-r from-[#F5F7F9] to-[#FFFFFF] p-[25px] md:p-[35px] border rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[200px] bg-[#4A90E2] rounded-full opacity-30"></div>
          <h2 className="text-[22px] md:text-[28px] font-semibold mb-[10px] text-[#333333]">
            {t("pricing.card3.title")}
          </h2>
          <p className="text-[18px] md:text-[20px] mb-[15px] text-[#555555]">
            {t("pricing.card3.description")}
          </p>
          <p className="text-[24px] md:text-[30px] font-bold mb-[15px] text-[#4A90E2]">
            {t("pricing.card3.price")}
          </p>
          <button className="bg-[#4A90E2] text-white px-[20px] py-[10px] rounded-lg hover:bg-[#357ABD] transition">
            {t("pricing.card3.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
