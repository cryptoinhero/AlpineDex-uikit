import React from "react";
import styled from "styled-components";
import { PineRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  pinePriceUsd?: number;
}

const PriceLink = styled.a`
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

const PinePrice: React.FC<Props> = ({ pinePriceUsd }) => {
  return pinePriceUsd ? (
    <PriceLink
      href="https://pancakeswap.finance/swap?outputCurrency=0xec5b9074717e467be06e96091f3d47c6e7871a95"
      target="_blank"
    >
      <PineRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${pinePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PinePrice);
