import React from "react";
import TextField from "@mui/material/TextField";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="all">
      <div className="pb-[20px] z-[-1] text-center pt-[15px]">
        <p className="text-[36px] md:text-[28px] font-bold mb-[20px] md:mb-[-30px] text-center">
          {t("contacts.title")}
        </p>
      </div>
      <section className="pt-[10px] flex justify-between sm:grid md:grid sm:grid-cols-1 gap-[40px] pb-[50px]">
        <div className="shadow shadow-slate-300 p-[30px]">
          <div className="flex flex-col pb-[30px] border-b-2 gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <div className="border p-[7px] bg-[#F53838] rounded-full">
                <LocalPhoneOutlinedIcon className="text-[white]" />
              </div>
              <p className="font-[500] text-[20px]">{t("contacts.text1")}</p>
            </div>
            <p>{t("contacts.text2")}</p>
            <p>{t("contacts.text3")}</p>
          </div>
          <div className="flex flex-col pb-[30px] pt-[30px] gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <div className="border p-[7px] bg-[#F53838] rounded-full">
                <EmailOutlinedIcon className="text-[white]" />
              </div>
              <p className="font-[500] text-[20px]">{t("contacts.text4")}</p>
            </div>
            <p>{t("contacts.text5")}</p>
            <p>{t("contacts.text6")}</p>
            <p>{t("contacts.text7")}</p>
          </div>
        </div>
        <div className="shadow shadow-slate-300 p-[30px]">
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-[25px]">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
          </div>
          <div>
            <input
              className="h-[220px] pb-[175px] pl-[10px] border-[1.5px] border-[#d4d2d2] focus:outline-[#325fc6] rounded-[5px] text-[#000000] w-[100%] mt-[20px]"
              type="text"
              placeholder="Your Massage"
            />
          </div>
          <div className="pt-[50px] sm:pt-[20px] sm:mb-[-5px] sm:ml-0">
            <button className=" bg-[#F53838] w-[100%] text-[white] rounded-[4px] h-[50px]">
              {t("contacts.textBtn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
