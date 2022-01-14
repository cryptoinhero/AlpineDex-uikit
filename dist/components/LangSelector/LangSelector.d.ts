import React from "react";
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
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
