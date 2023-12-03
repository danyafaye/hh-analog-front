import { FC } from 'react';

import * as ST from './styled.ts';
import { CardProps } from '@components/Main/mockData.ts';
import { getPriceString } from '@utils/common.ts';
import { Button } from '@components/Button';

type MainCardProps = {
  cardData: CardProps;
};

const MainCard: FC<MainCardProps> = ({ cardData }) => {
  return (
    <ST.CardWrapper>
      <ST.CardContentWrapper>
        <ST.CardContentHeader>
          <ST.CardWidgets>
            <ST.CardDate>{cardData.createdAt}</ST.CardDate>
            {cardData.favorite ? <ST.FavoriteActive /> : <ST.FavoriteCircle />}
          </ST.CardWidgets>
          <ST.CardName>{cardData.cardName}</ST.CardName>
        </ST.CardContentHeader>
        <ST.CardContentTags>
          {cardData.cardTags.map((it) => (
            <ST.CardTag>{it}</ST.CardTag>
          ))}
        </ST.CardContentTags>
      </ST.CardContentWrapper>
      <ST.Line />
      <ST.CardFooterWrapper>
        <ST.CardFooterSalary>{getPriceString(cardData.cardPrice)}</ST.CardFooterSalary>
        <ST.CardFooterInfo>
          <ST.CardCompanyWrapper>
            <ST.CardCompanyName>{cardData.companyName}</ST.CardCompanyName>
            <ST.CardCompanyCity>{cardData.companyCity}</ST.CardCompanyCity>
          </ST.CardCompanyWrapper>
          <Button
            onClickHandler={() => {}}
            text="Отклик"
          />
        </ST.CardFooterInfo>
      </ST.CardFooterWrapper>
    </ST.CardWrapper>
  );
};

export { MainCard };
