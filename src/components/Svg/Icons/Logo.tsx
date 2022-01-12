import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <image width="400" height="182" href='/images/LogoWithoutText.png'/>
    </Svg>
    
  );
};

export default Icon;
