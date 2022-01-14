import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
import { Colors } from "../../theme";
import { Language } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  dropdownPosition?: Position;
  buttonScale?: Scale;
  hideLanguage?: boolean;
}

const LangSelector: React.FC<Props> = ({ 
  currentLang, 
  langs, 
  setLang,
  dropdownPosition = "top-right",
  buttonScale = "md",
}) => (
  <Dropdown
    position={ dropdownPosition }
    target={
      <Button scale={buttonScale} variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);

