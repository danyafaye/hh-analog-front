import { FC, useMemo } from 'react';

import * as ST from './styled.ts';
import { CompanyCardProps, ResumeCardProps } from '@components/Main/mockData.ts';
import { getPriceString } from '@utils/common.ts';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon/Icon.tsx';

export type CardSize = 'sm' | 'md';

type MainCardProps = {
  cardData: CompanyCardProps | ResumeCardProps;
  size?: CardSize;
  editableCard: boolean;
};

const MainCard: FC<MainCardProps> = ({ cardData, size = 'md', editableCard }) => {
  const renderActions = useMemo(() => {
    switch (editableCard) {
      case true:
        return (
          <ST.CardActions>
            <Icon
              size="md"
              type={'edit'}
            />
            <Icon
              size="md"
              type={'delete'}
            />
          </ST.CardActions>
        );
      case false:
        return cardData.favorite ? <ST.FavoriteActive /> : <ST.FavoriteCircle />;
    }
  }, [editableCard, cardData.favorite]);

  return (
    <ST.CardWrapper size={size}>
      <ST.CardContentWrapper size={size}>
        <ST.CardContentHeader>
          <ST.CardWidgets>
            <ST.CardDate>{cardData.createdAt}</ST.CardDate>
            {renderActions}
          </ST.CardWidgets>
          <ST.CardName size={size}>{cardData.cardName}</ST.CardName>
        </ST.CardContentHeader>
        <ST.CardContentTags size={size}>
          {cardData.cardTags.map((it, index) => (
            <ST.CardTag key={index}>{it}</ST.CardTag>
          ))}
        </ST.CardContentTags>
      </ST.CardContentWrapper>
      <ST.Line size={size} />
      <ST.CardFooterWrapper size={size}>
        <ST.CardFooterSalary>
          {cardData.cardPrice.length ? getPriceString(cardData.cardPrice) : 'Не указано'}
        </ST.CardFooterSalary>
        <ST.CardFooterInfo>
          <ST.CardSubjectWrapper>
            <ST.CardSubjectName>
              {'companyName' in cardData ? cardData.companyName : cardData.fullName}
            </ST.CardSubjectName>
            <ST.CardSubjectCity>{cardData.city}</ST.CardSubjectCity>
          </ST.CardSubjectWrapper>
          <Button
            onClickHandler={() => {}}
            text={'companyName' in cardData ? 'Отклик' : 'Пригласить'}
          />
        </ST.CardFooterInfo>
      </ST.CardFooterWrapper>
    </ST.CardWrapper>
  );
};

export { MainCard };
