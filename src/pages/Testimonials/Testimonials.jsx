import React from "react";
import { useTranslation } from "react-i18next";
import ronalo from "../../assets/ronalo.png";
import messi from "../../assets/messi.png";
import secondMessi from "../../assets/secondMessi.png";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[10px] md:pb-[20px] md:mb-[20px] bg-[#F7F7F7]">
      <section className="container mx-auto p-[20px] md:p-[10px]">
        <h1 className="text-[36px] md:text-[28px] font-bold mb-[20px] text-center">
          {t("testimonials.title")}
        </h1>
        <p className="text-[18px] md:text-[24px] text-center mb-[40px]">
          {t("testimonials.subtitle")}
        </p>

        <div className="flex flex-wrap md:grid md:grid-cols-1 justify-center md:mb-[0px] mb-[40px]">
          <section className="w-full md:w-[100%] p-[20px] md:p-[30px] mb-[20px] md:mb-[30px] bg-[white] shadow-lg rounded-lg">
            <div className="flex items-center mb-[20px]">
              <img
                src={ronalo}
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full mr-[20px]"
              />
              <div>
                <h2 className="text-[20px] font-semibold md:mb-[0px] mb-[10px]">
                  {t("testimonials.testimonial1.name")}
                </h2>
                <p className="text-[16px] md:text-[18px] leading-[1.6]">
                  {t("testimonials.testimonial1.position")}
                </p>
              </div>
            </div>
            <p className="text-[16px] md:text-[18px] mb-[20px]">
              {t("testimonials.testimonial1.text")}
            </p>
          </section>

          <section className="w-full md:w-[100%] p-[20px] md:p-[30px] mb-[20px] md:mb-[30px] bg-[white] shadow-lg rounded-lg">
            <div className="flex items-center mb-[20px]">
              <img
                src={messi}
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full mr-[20px]"
              />
              <div>
                <h2 className="text-[20px] font-semibold mb-[10px] md:mb-[0px]">
                  {t("testimonials.testimonial2.name")}
                </h2>
                <p className="text-[16px] md:text-[18px] leading-[1.6]">
                  {t("testimonials.testimonial2.position")}
                </p>
              </div>
            </div>
            <p className="text-[16px] md:text-[18px] mb-[20px]">
              {t("testimonials.testimonial2.text")}
            </p>
          </section>

          <section className="w-full md:w-[100%] p-[20px] md:p-[30px] mb-[20px] md:mb-[0px] bg-[white] shadow-lg rounded-lg">
            <div className="flex items-center mb-[20px]">
              <img
                src={secondMessi}
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full mr-[20px]"
              />
              <div>
                <h2 className="text-[20px] font-semibold mb-[10px] md:mb-[0px]">
                  {t("testimonials.testimonial3.name")}
                </h2>
                <p className="text-[16px] md:text-[18px] leading-[1.6]">
                  {t("testimonials.testimonial3.position")}
                </p>
              </div>
            </div>
            <p className="text-[16px] md:text-[18px] mb-[20px]">
              {t("testimonials.testimonial3.text")}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
