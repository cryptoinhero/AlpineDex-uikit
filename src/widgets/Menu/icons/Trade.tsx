import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <path d="M299.79,257.07H200a12.08,12.08,0,0,1-11.8-12.32v-29a5.82,5.82,0,0,0-9.5-1.9L105.57,287a5.82,5.82,0,0,0,0,8.23l73.11,73.11a5.82,5.82,0,0,0,9.94-4.11V338.94a5.82,5.82,0,0,1,5.82-5.82H299.79Z" fill="#b8aed3"/>
      <path d="M394.43,204.81,321.32,131.7a5.82,5.82,0,0,0-9.94,4.11V162.6a5.83,5.83,0,0,1-5.82,5.82H201.18v75.65H301a12.08,12.08,0,0,1,11.8,12.32v29.45a5.82,5.82,0,0,0,8.53.31L394.43,213A5.82,5.82,0,0,0,394.43,204.81Z" fill="#b8aed3"/>
    </Svg>
  );
};

export default Icon;
