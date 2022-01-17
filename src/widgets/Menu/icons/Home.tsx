import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <path d="M250,159.36a6.52,6.52,0,0,1,3.83,1.25L372.5,247.15l11.2-15.36L255.6,138.38a9.48,9.48,0,0,0-11.2,0L116.3,231.79l11.2,15.36,118.67-86.54A6.52,6.52,0,0,1,250,159.36Z" fill="#b8aed3"/>
      <path d="M250,173.91l-95.48,69.62V357.17a12.77,12.77,0,0,0,12.77,12.77h49.53v-76.2a13,13,0,0,1,13-13h40.3a13,13,0,0,1,13,13v76.2h49.53a12.77,12.77,0,0,0,12.77-12.77V243.53Z" fill="#b8aed3"/>
      <polygon points="345.48 187.84 345.48 130.06 307.86 130.06 307.86 160.4 345.48 187.84" fill="#b8aed3"/>
    </Svg>
  );
};

export default Icon;
