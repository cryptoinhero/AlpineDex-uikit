import React from "react";
import styled from "styled-components";
import { MailIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  pinePriceUsd?: number;
}

const MailLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Mail: React.FC<Props> = () => {
  return (
    <MailLink
      href="https://alpinecoin.org/adex-mail.html"
      target="_blank"
    >
      <MailIcon width="24px"/>
    </MailLink>);
};

export default React.memo(Mail);
