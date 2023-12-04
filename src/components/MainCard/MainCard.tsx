import { FC } from 'react';

import * as ST from './styled.ts';
import {CompanyCardProps, ResumeCardProps} from '@components/Main/mockData.ts';
import { getPriceString } from '@utils/common.ts';
import { Button } from '@components/Button';

type MainCardProps = {
  cardData: CompanyCardProps | ResumeCardProps;
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
          {cardData.cardTags.map((it,index) => (
            <ST.CardTag key={index}>{it}</ST.CardTag>
          ))}
        </ST.CardContentTags>
      </ST.CardContentWrapper>
      <ST.Line />
      <ST.CardFooterWrapper>
        <ST.CardFooterSalary>{cardData.cardPrice.length ? getPriceString(cardData.cardPrice) : 'Не указано'}</ST.CardFooterSalary>
        <ST.CardFooterInfo>
          <ST.CardSubjectWrapper>
            <ST.CardSubjectName>{'companyName' in cardData ?  cardData.companyName : cardData.fullName}</ST.CardSubjectName>
            <ST.CardSubjectCity>{cardData.city}</ST.CardSubjectCity>
          </ST.CardSubjectWrapper>
          <Button
            onClickHandler={() => {}}
            text={'companyName' in cardData ? "Отклик" : "Пригласить"}
          />
        </ST.CardFooterInfo>
      </ST.CardFooterWrapper>
    </ST.CardWrapper>
  );
};

export { MainCard };
