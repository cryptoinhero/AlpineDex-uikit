import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <path d="M306.69,223.19a48.37,48.37,0,1,0,48.37,48.37A48.42,48.42,0,0,0,306.69,223.19Zm-7.31,74.19H280.51a6.5,6.5,0,0,1-6.5-6.5V252.24a6.5,6.5,0,0,1,13,0v32.14h12.37a6.5,6.5,0,0,1,0,13ZM329,281.33h-5.44v9.55a6.5,6.5,0,0,1-13,0V252.24a6.5,6.5,0,0,1,6.5-6.5H329a17.17,17.17,0,0,1,17.15,17.15v1.29A17.18,17.18,0,0,1,329,281.33Z" fill="#b8aed3"/>
      <path d="M329,258.74h-5.44v9.59H329a4.15,4.15,0,0,0,4.15-4.15v-1.29A4.15,4.15,0,0,0,329,258.74Z" fill="#b8aed3"/>
      <path d="M245.33,271.56a61.46,61.46,0,0,1,49.42-60.19c-20.62-27.75-49.77-63.06-61.12-76.68C214.29,156.35,144.94,237,144.94,279.81a88.9,88.9,0,0,0,160.2,53.08A61.42,61.42,0,0,1,245.33,271.56Z" fill="#b8aed3"/>
    </Svg>
  );
};

export default Icon;
