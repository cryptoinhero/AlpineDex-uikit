import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <image width="400px" height="182px" href='/images/LogoText.png'/>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
