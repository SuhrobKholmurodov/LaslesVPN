import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select1 from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import ru from ".././assets/ru.png";
import us from ".././assets/us.png";
import "../App.css";

export default function SelectLang() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lng, setlng] = useState("en");

  return (
    <Box sx={{ minWidth: "auto" }}>
      <FormControl fullWidth>
        <Select1
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lng}
          className="w-[150px] md:w-[133px] md:h-[35px] text-[black]"
          onChange={(e) => {
            changeLanguage(e.target.value);
            setlng(e.target.value);
          }}
        >
          <MenuItem value={"en"}>
            <div className="flex items-center gap-[5px]">
              <img height={"25px"} width={"25px"} src={us} alt="" />
              <p>{t("lang.en")}</p>
            </div>
          </MenuItem>
          <MenuItem value={"ru"}>
            <div className="flex items-center gap-[5px]">
              <img height={"25px"} width={"25px"} src={ru} alt="" />
              <p>{t("lang.ru")}</p>
            </div>
          </MenuItem>
        </Select1>
      </FormControl>
    </Box>
  );
}
