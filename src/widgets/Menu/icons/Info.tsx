import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <path d="M182.43,243.38H143.27a10.41,10.41,0,0,0-10.41,10.4V362.49h60V253.78A10.4,10.4,0,0,0,182.43,243.38Z" fill="#b8aed3"/>
      <path d="M269.58,137.51H230.42A10.41,10.41,0,0,0,220,147.92V362.49h60V147.92A10.41,10.41,0,0,0,269.58,137.51Z" fill="#b8aed3"/>
      <path d="M356.73,206.14H317.57a10.4,10.4,0,0,0-10.4,10.4v146h60v-146A10.41,10.41,0,0,0,356.73,206.14Z" fill="#b8aed3"/>
      <path d="M386.24,369H113.76a6.5,6.5,0,1,1,0-13H386.24a6.5,6.5,0,0,1,0,13Z" fill="#b8aed3"/>
    </Svg>
  );
};

export default Icon;
