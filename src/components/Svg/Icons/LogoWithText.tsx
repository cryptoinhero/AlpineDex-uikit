import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 163 40" {...props}>
      <image height="40" href='/images/LogoText.png'/>
    </Svg>
  );
};

export default Icon;
