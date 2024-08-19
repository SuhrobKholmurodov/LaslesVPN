import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper/core";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Images
import programmer1 from "../../assets/programmer_1.png";
import programmer2 from "../../assets/programmer_2.png";
import redProfile from "../../assets/red_profile.png";
import redLocation from "../../assets/red_location.png";
import redBlock from "../../assets/red_block.png";
import done from "../../assets/done.png";
import prize from "../../assets/prize.png";
import map from "../../assets/map.png";
import amazon from "../../assets/amazon.png";
import spotify from "../../assets/spotify.png";
import twitter from "../../assets/twitter.svg";
import reddit from "../../assets/reddit.png";
import netflix from "../../assets/netflix.png";
import discord from "../../assets/discord.png";
import tiktok from "../../assets/tiktok.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import star from "../../assets/stars.png";
import firstBoy from "../../assets/first_boy.png";
import firstGirl from "../../assets/first_girl.png";

// Components
import Button from "../../components/Button";
import Card from "../../components/Card";
const Home = () => {
  const { t, i18n } = useTranslation();
  SwiperCore.use([Navigation]);
  const swiperRef = useRef(null);

  return (
    <div className="main_div_home h-[100vh]">
      <section className="flex md:flex-col pt-[30px] items-center justify-between">
        <div className="w-[50%] md:w-[100%] md:gap-[15px] flex flex-col gap-[35px]">
          <h2 className="font-[700] md:text-[25px] text-[36px]">
            {t("sec1.title")}
          </h2>
          <p>{t("sec1.subtitle")}</p>
          <Button
            bg={"#F53838"}
            boxShadow={"0px 20px 40px 0px #F5383859"}
            text={t("sec1.buttext")}
            borRadius={"5px"}
            h={"40px"}
            w={"180px"}
            col={"white"}
            borNone={"none"}
          />
        </div>
        <div>
          <img
            className="h-[300px] md:mt-[10px] md:shadow-lg md:rounded-lg object-cover w-[450px]"
            src={programmer1}
            alt="programmer"
          />
        </div>
      </section>
      <section className="pt-[40px] mt-[40px] md:items-start md:pl-[10px] md:gap-[30px] rounded-[5px] md:flex-col shadow-md pl-[120px] pb-[40px] pr-[120px] flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <div>
            <img
              className="h-[45px] bg-[#FFECEC] border-none p-[10px] w-[45px] border-[2px] rounded-[50%]"
              src={redProfile}
              alt="redProfile"
            />
          </div>
          <div className="grid grid-cols-1 gap-[5px]">
            <p className="font-[800] text-[22px]">90+</p>
            <p>{t("sec2.users")}</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div>
            <img
              className="h-[45px] bg-[#FFECEC] border-none p-[10px] w-[45px] border-[2px] rounded-[50%]"
              src={redLocation}
              alt="redLocation"
            />
          </div>
          <div className="grid grid-cols-1 gap-[5px]">
            <p className="font-[800] text-[22px]">30+</p>
            <p>{t("sec2.location")}</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div>
            <img
              className="h-[45px] bg-[#FFECEC] border-none p-[10px] w-[45px] border-[2px] rounded-[50%]"
              src={redBlock}
              alt="redBlock"
            />
          </div>
          <div className="grid grid-cols-1 gap-[5px]">
            <p className="font-[800] text-[22px]">50+</p>
            <p>{t("sec2.servers")}</p>
          </div>
        </div>
      </section>
      <section className="flex mt-[30px] md:flex-col pt-[30px] items-center justify-between">
        <div>
          <img
            className="h-[300px] md:mt-[10px] md:shadow-lg md:rounded-lg object-cover w-[450px]"
            src={programmer2}
            alt="programmer2"
          />
        </div>
        <div className="w-[50%] md:w-[100%] md:gap-[15px] flex flex-col gap-[35px]">
          <h2 className="font-[700] md:mt-[10px] md:text-[25px] text-[36px]">
            {t("sec3.title")}
          </h2>
          <p>{t("sec3.subtitle")}</p>
          <div className="flex gap-[10px] flex-col">
            <div className="flex items-center gap-[5px]">
              <img height={"25px"} width={"25px"} src={done} alt="" />
              <p>{t("sec3.text1")}</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img height={"25px"} width={"25px"} src={done} alt="" />
              <p>{t("sec3.text2")}</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img height={"25px"} width={"25px"} src={done} alt="" />
              <p>{t("sec3.text3")}</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img height={"25px"} width={"25px"} src={done} alt="" />
              <p>{t("sec3.text4")}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-[10px] md:text-center items-center justify-center mt-[30px]">
        <p className="font-[700] text-[25px]">{t("middiv.text1")}</p>
        <p className="w-1/2 text-center md:w-[100%]">{t("middiv.text2")}</p>
      </div>
      <section className="flex justify-between md:gap-[15px] md:grid md:grid-cols-1 pt-[30px]">
        <div className="rounded-[15px] w-[30%] md:w-[100%] p-[10px] pt-[35px] pb-[35px] justify-between text-center flex flex-col items-center border-[2px] border-[#DDDDDD]">
          <div className="flex flex-col mb-[-25px] items-center">
            <img
              className="h-[140px] object-cover w-[120px]"
              src={prize}
              alt=""
            />
            <p className="font-[700] text-[21px] pt-[10px]">
              {t("card1.title1")}
            </p>
          </div>
          <div className="flex pt-[40px] flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text1")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text2")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text3")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text4")}</p>
            </div>
          </div>
          <div className="pt-[60px] flex flex-col gap-[15px]">
            <p className="font-[600] text-[21px]">{t("card1.text7")}</p>
            <Button
              text={t("card1.textBtn")}
              borRadius={"20px"}
              col={"red"}
              hover={""}
              borNone={"2px solid red"}
              h={"40px"}
              w={"180px"}
            />
          </div>
        </div>
        <div className="rounded-[15px] w-[30%] md:w-[100%] p-[10px] pt-[35px] pb-[35px] text-center flex flex-col justify-between items-center border-[2px] border-[#DDDDDD]">
          <div className="flex pb-[20px] flex-col items-center">
            <img
              className="h-[140px] object-cover w-[120px]"
              src={prize}
              alt=""
            />
            <p className="font-[700] text-[21px] pt-[10px]">
              {t("card1.title2")}
            </p>
          </div>
          <div className="flex pt-[20px] flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text1")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text2")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text3")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text4")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text5")}</p>
            </div>
          </div>
          <div className="pt-[60px] flex flex-col gap-[15px]">
            <p className="font-[600] text-[21px]">{t("card1.text7")}</p>
            <Button
              text={t("card1.textBtn")}
              borRadius={"20px"}
              col={"red"}
              hover={""}
              borNone={"2px solid red"}
              h={"40px"}
              w={"180px"}
            />
          </div>
        </div>
        <div className="rounded-[15px] w-[30%] md:w-[100%] p-[10px] pt-[35px] pb-[35px] text-center justify-between flex flex-col items-center border-[2px] border-[#DDDDDD]">
          <div className="flex flex-col mb-[60px] items-center">
            <img
              className="h-[140px] object-cover w-[120px]"
              src={prize}
              alt=""
            />
            <p className="font-[700] text-[21px] pt-[10px]">
              {t("card1.title3")}
            </p>
          </div>
          <div className="flex pt-[20px] flex-col gap-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text1")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text2")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text3")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text4")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text5")}</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img className="h-[23px] w-[23px]" src={done} alt="" />
              <p>{t("card1.text6")}</p>
            </div>
          </div>
          <div className="pt-[60px] flex flex-col gap-[15px]">
            <p className="font-[600] text-[21px]">{t("card1.text7")}</p>
            <Button
              bg={"#F53838"}
              boxShadow={"0px 20px 40px 0px #F5383859"}
              text={t("card1.textBtn")}
              borRadius={"20px"}
              h={"40px"}
              w={"180px"}
              col={"white"}
              borNone={"none"}
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-[10px] md:text-center items-center justify-center pt-[50px]">
        <p className="font-[700] text-[25px]">{t("div.text1")}</p>
        <p className="w-1/2 text-center md:w-[100%]">{t("div.text2")}</p>
      </div>
      <div className="flex justify-center items-center w-full h-full md:mt-[-260px]">
        <img
          className="w-full h-auto max-w-none md:max-w-full object-cover"
          src={map}
          alt="Map"
        />
      </div>
      <div className="pt-[40px] md:mt-[-300px] pb-[50px]">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          breakpoints={{
            830: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img src={netflix} alt="Netflix" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={amazon} alt="Amazon" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={discord} alt="Discord" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={reddit} alt="Reddit" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={spotify} alt="Spotify" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={twitter} alt="Twitter" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={google} alt="Google" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={facebook} alt="Facebook" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[130px] h-[70px] border-[2px] md:w-[65px] md:h-[35px] flex items-center justify-center border-[grey] rounded-md">
              <div className="h-[60px] w-[60px] md:h-[40px] md:w-[40px]">
                <img className="p-[10px]" src={tiktok} alt="TikTok" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col gap-[10px] pb-[20px] md:text-center items-center justify-center pt-[50px] md:pt-[10px]">
        <p className="font-[700] text-[25px]">{t("lastDiv.text1")}</p>
        <p className="w-1/2 text-center md:w-[100%]">{t("lastDiv.text2")}</p>
      </div>

      {/* SWIPER */}

      <div className="pt-[40px] pb-[50px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              photo={firstBoy}
              name={t("cards1.name")}
              username={t("cards1.city")}
              description={t("cards1.desc")}
              starPhoto={star}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              photo={firstGirl}
              name={t("cards2.name")}
              username={t("cards2.city")}
              description={t("cards2.desc")}
              starPhoto={star}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              photo={firstBoy}
              name={t("cards3.name")}
              username={t("cards3.city")}
              description={t("cards3.desc")}
              starPhoto={star}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              photo={firstGirl}
              name={t("cards4.name")}
              username={t("cards4.city")}
              description={t("cards4.desc")}
              starPhoto={star}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex mb-[50px] items-center mt-[20px] md:flex-col rounded-md justify-between shadow shadow-[grey] p-[40px]">
        <div className="flex flex-col md:text-center md:gap-[10px] gap-[10px] items-start justify-start text-balance">
          <p className="font-[700] text-[25px]">{t("lastBlock.text1")}</p>
          <p className="text-center md:pb-[20px]">{t("lastBlock.text2")}</p>
        </div>
        <Button
          bg={"#F53838"}
          boxShadow={"0px 20px 40px 0px #F5383859"}
          text={t("lastBlock.textBtn")}
          borRadius={"20px"}
          h={"40px"}
          w={"180px"}
          col={"white"}
          borNone={"none"}
        />
      </div>
    </div>
  );
};

export default Home;
