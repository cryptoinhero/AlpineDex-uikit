import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 500 500" {...props}>
      <path d="M376.36,163.11a26,26,0,0,0-20-20,67.86,67.86,0,0,0-62.29,18.46l-25.85,25.85,63.82,63.82,25.85-25.85A67.87,67.87,0,0,0,376.36,163.11Z" fill="#b8aed3"/>
      <path d="M212.81,204.44l-15.67,15.67a20.45,20.45,0,0,1-4.3,3.27l30.72,30.72,23.24-23.24-30.72-30.72a20.45,20.45,0,0,1-3.27,4.3Z" fill="#b8aed3"/>
      <path d="M156.42,186.81a7.39,7.39,0,0,0,2.18,5.25l18.85,18.86a7.42,7.42,0,0,0,10.49,0l15.68-15.68a7.42,7.42,0,0,0,0-10.49L184.76,165.9a7.4,7.4,0,0,0-10.49,0L158.6,181.57A7.37,7.37,0,0,0,156.42,186.81Z" fill="#b8aed3"/>
      <path d="M279.33,216.92l-23.24,23.23-.09-.1L232.75,263.3l.1.09-31,31,23.23,23.23L301,241.71l.24-.22,1.33-1.33Z" fill="#b8aed3"/>
      <path d="M149.4,172.38l15.68-15.68c.15-.16.33-.29.49-.45l-18.88-18.88L126.75,157.3l19.83,18.62A21.18,21.18,0,0,1,149.4,172.38Z" fill="#b8aed3"/>
      <polygon points="264 297.1 328.9 359.44 352.14 336.2 288.52 272.57 264 297.1" fill="#b8aed3"/>
      <path d="M149.4,201.25a20.87,20.87,0,0,1-1.47-1.65c-27.51,35.82-39,72.91-28.36,94.08,9.46-22.18,26.19-48,48.47-73.79Z" fill="#b8aed3"/>
      <path d="M152.37,319.11l48,48,23.77-32-39.74-39.74Zm50.94,15.54a6.5,6.5,0,0,1-9.19,9.19l-18.47-18.47a6.5,6.5,0,1,1,9.19-9.19Z" fill="#b8aed3"/>
      <path d="M212.59,175.34c25.8-22.28,51.61-39,73.79-48.47-17.11-8.58-60.63,12-91.37,30.89Z" fill="#b8aed3"/>
    </Svg>
  );
};

export default Icon;
