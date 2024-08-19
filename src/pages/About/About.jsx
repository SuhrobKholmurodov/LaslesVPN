import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[20px]">
      <section className="mb-[30px] pl-[5%] pr-[5%] md:mb-[60px]">
        <h1 className="text-[24px] md:text-[28px] font-bold mb-[10px] text-center">
          {t("about.title")}
        </h1>
        <p className="text-[16px] md:text-[20px] leading-[1.6] text-center">
          {t("about.intro")}
        </p>
      </section>

      <div className="grid md:flex md:flex-col gap-[20px]">
        <section className="bg-white p-[20px] md:p-[30px] shadow-lg rounded-lg border-l-[4px] border-[#4A90E2]">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px] text-[#4A90E2]">
            {t("about.missionTitle")}
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6]">
            {t("about.missionText")}
          </p>
        </section>

        <section className="bg-white p-[20px] md:p-[30px] shadow-lg rounded-lg border-l-[4px] border-[#50E3C2]">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px] text-[#50E3C2]">
            {t("about.visionTitle")}
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6]">
            {t("about.visionText")}
          </p>
        </section>

        <section className="bg-white p-[20px] md:p-[30px] shadow-lg rounded-lg border-l-[4px] border-[#B8E986] md:col-span-2">
          <h2 className="text-[20px] md:text-[24px] font-semibold mb-[10px] text-[#B8E986]">
            {t("about.valuesTitle")}
          </h2>
          <ul className="list-disc pl-[20px] text-[16px] md:text-[18px] leading-[1.6]">
            <li>{t("about.value1")}</li>
            <li>{t("about.value2")}</li>
            <li>{t("about.value3")}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
