import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useFilterParams } from '@hooks/useFilterParams';
import * as ST from './styled.ts';
import { Button } from '@components/Button';

interface IPaginationProps {
  totalCount: number,
  enableButtons?: boolean,
  siblingsCount?: number
}

const getPageButtons = (count: number, currentPage: number, clickHandler, siblingsCount: number) => {
  if (count < 6) return Array
    .from({ length: count }, (_, i) => i + 1)
    .map(item => <ST.PageButton onClick={() => clickHandler({ page: item })}
                                isActive={item === currentPage}>{item}</ST.PageButton>);

  const startInterval = currentPage - siblingsCount <= 1 ? 1 : currentPage - siblingsCount;
  const endInterval = currentPage + siblingsCount >= count ? count : currentPage + siblingsCount;
  let interval = Array
    .from({ length: endInterval - startInterval + 1 }, (_, i) => i + startInterval)
    .map(item => <ST.PageButton onClick={() => clickHandler({ page: item })}
                                isActive={item === currentPage}>{item}</ST.PageButton>);
  if (startInterval > 1) {
    interval = startInterval - siblingsCount > 1 ?
      [<ST.PageButton onClick={() => clickHandler({ page: 1 })}>1</ST.PageButton>,
        <ST.Delimiter>...</ST.Delimiter>, ...interval] : [<ST.PageButton
        onClick={() => clickHandler({ page: 1 })}>1</ST.PageButton>, ...interval];
  }
  if (endInterval < count) {
    interval = endInterval + siblingsCount < count ? [...interval, <ST.Delimiter>...</ST.Delimiter>,
      <ST.PageButton onClick={() => clickHandler({ page: count })}>{count}</ST.PageButton>] : [...interval,
      <ST.PageButton onClick={() => clickHandler({ page: count })}>{count}</ST.PageButton>];
  }
  return interval;
};

const Pagination: FC = ({ totalCount, enableButtons = true, siblingsCount = 1 }: IPaginationProps) => {
  const [{ page, size }, setFilterParams] = useFilterParams();
  const pageCount = useMemo(() => Math.ceil(+totalCount / +size), [totalCount, size]);
  const pageButtons = useMemo(() => getPageButtons(pageCount, +page, setFilterParams, siblingsCount),
    [pageCount, page, setFilterParams, siblingsCount]);
  useEffect(() => {
    if (!parseInt(page) || page > pageCount) setFilterParams({ page: 1 });
  }, [page, pageCount]);
  return (
    <ST.ContentWrapper>
      <ST.Content>
        {enableButtons ?
          <Button type={'button'} text={'Назад'} styles={'unFilled'} disabled={+page === 1} onClick={() => {
            setFilterParams({ page: +page - 1 });
          }} /> : undefined}
        <ST.PagesContainer>{pageButtons}</ST.PagesContainer>
        {enableButtons ?
          <Button type={'button'} text={'Вперед'} styles={'unFilled'} disabled={+page === pageCount} onClick={() => {
            setFilterParams({ page: +page + 1 });
          }} /> : undefined}
      </ST.Content>
    </ST.ContentWrapper>
  );
};

export { Pagination };
