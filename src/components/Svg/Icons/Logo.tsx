import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <image width="182" height="80" href='/images/LogoWithoutText.png'/>
    </Svg>
  );
};

export default Icon;
