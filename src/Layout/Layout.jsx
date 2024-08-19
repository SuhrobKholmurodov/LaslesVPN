import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, Outlet } from "react-router-dom";

// Components
import SelectLang from "../components/SelectLang";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

// Images
import mainLogo from "../assets/main_logo.png";
import facebookRed from "../assets/facebook_red.svg";
import instagramRed from "../assets/instagram_red.svg";
import burger from "../assets/burger.png";

import twitterRed from "../assets/twitter_red.svg";

const Layout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <div className="flex items-center pl-[5%] pt-[20px] pr-[5%] justify-between">
              <div>
                <img
                  {...bindTrigger(popupState)}
                  src={burger}
                  className="h-[35px] hidden sm:block bg-grey rounded-[5px] w-[45px]"
                  alt=""
                />
              </div>
              <Link className="flex items-center gap-[5px]" to="/">
                <img
                  height={"20px"}
                  width={"20px"}
                  src={mainLogo}
                  alt="mainLogo"
                />
                <p className="font-[700]">LaslesVPN</p>
              </Link>
              <div className="">
                <SelectLang />
              </div>
            </div>
            <Menu className="" {...bindMenu(popupState)}>
              <MenuItem className="w-[350px]" onClick={popupState.close}>
                <li>
                  <NavLink to={"/About"}>{t("navbar.about")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem className="w-[350px]" onClick={popupState.close}>
                <li>
                  <NavLink to={"/Features"}>{t("navbar.features")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem className="w-[350px]" onClick={popupState.close}>
                <li>
                  <NavLink to={"/Pricing"}>{t("navbar.pricing")}</NavLink>
                </li>
              </MenuItem>
              <MenuItem className="w-[350px]" onClick={popupState.close}>
                <li>
                  <NavLink to={"/Testimonials"}>
                    {t("navbar.testimonials")}
                  </NavLink>
                </li>
              </MenuItem>
              <MenuItem className="w-[350px]" onClick={popupState.close}>
                <li>
                  <NavLink to={"/Contact"}>{t("navbar.help")}</NavLink>
                </li>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <div className="bg-[#fafafa] fixed top-0 left-0 right-0">
        <div className="pl-[5%] pr-[5%]">
          <div className="flex md:hidden pt-[15px] items-center pb-[15px] justify-between">
            <div>
              <Link className="flex items-center gap-[5px]" to="/">
                <img
                  height={"20px"}
                  width={"20px"}
                  src={mainLogo}
                  alt="mainLogo"
                />
                <p className="font-[700]">LaslesVPN</p>
              </Link>
            </div>
            <ul className="flex font-mono justify-between w-[550px] ">
              <li>
                <NavLink to={"/About"}>{t("navbar.about")}</NavLink>
              </li>
              <li>
                <NavLink to={"/Features"}>{t("navbar.features")}</NavLink>
              </li>
              <li>
                <NavLink to={"/Pricing"}>{t("navbar.pricing")}</NavLink>
              </li>
              <li>
                <NavLink to={"/Testimonials"}>
                  {t("navbar.testimonials")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Contact"}>{t("navbar.help")}</NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-[20px]">
              <SelectLang />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[65px] md:mt-[5px] pl-[5%] pr-[5%] pt-[20px] overflow-y-auto">
        <Outlet />
      </div>
      <footer className="pl-[5%] mt-[30px] md:grid md:grid-cols-2 md:gap-[30px] flex justify-between pr-[5%] pt-[20px]">
        <div className="flex w-[30%] md:w-[100%]   flex-col gap-[30px]">
          <div className="flex gap-[10px] items-center">
            <img src={mainLogo} alt="" />
            <p className="font-[600] text-[18px]">LaslesVPN</p>
          </div>
          <p className="">{t("footer.text1")}</p>
          <div className="flex gap-[15px] items-center">
            <img height={"30px"} width={"30px"} src={facebookRed} alt="" />
            <img height={"30px"} width={"30px"} src={instagramRed} alt="" />
            <img height={"30px"} width={"30px"} src={twitterRed} alt="" />
          </div>
          <p className="text-[grey]">©2020LaslesVPN</p>
        </div>
        <div>
          <p className="text-[20px] font-[700]">{t("block1.title")}</p>
          <ul className="flex flex-col gap-[10px] pt-[20px]">
            <li>{t("block1.text1")}</li>
            <li>{t("block1.text2")}</li>
            <li>{t("block1.text3")}</li>
            <li>{t("block1.text4")}</li>
            <li>{t("block1.text5")}</li>
            <li>{t("block1.text6")}</li>
          </ul>
        </div>
        <div>
          <p className="text-[20px] font-[700]">{t("block2.title")}</p>
          <ul className="flex flex-col gap-[10px] pt-[20px]">
            <li>{t("block2.text1")}</li>
            <li>{t("block2.text2")}</li>
            <li>{t("block2.text3")}</li>
            <li>{t("block2.text4")}</li>
            <li>{t("block2.text5")}</li>
            <li>{t("block2.text6")}</li>
          </ul>
        </div>
        <div>
          <p className="text-[20px] font-[700]">{t("block3.title")}</p>
          <ul className="flex flex-col gap-[10px] pt-[20px]">
            <li>{t("block3.text1")}</li>
            <li>{t("block3.text2")}</li>
            <li></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
