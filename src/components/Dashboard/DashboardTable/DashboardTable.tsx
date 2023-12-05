import { FC, useMemo } from 'react';
import { ProfileFeedbackData } from '@components/Dashboard/mockData.ts';

import * as ST from './styled.ts';
import { getPriceString, getStatusString } from '@utils/common.ts';

type DashboardTableProps = {
  data?: ProfileFeedbackData[];
};

const DashboardTable: FC<DashboardTableProps> = ({ data }) => {
  const renderTableRows = useMemo(
    () =>
      data?.map((it) => (
        <ST.Row>
          <ST.VacancyColumn>
            <ST.VacancyName>{it.name}</ST.VacancyName>
            <ST.VacancyCompany>{it.company}</ST.VacancyCompany>
          </ST.VacancyColumn>
          <ST.StatusColumn status={it.status}>{getStatusString(it.status)}</ST.StatusColumn>
          <ST.PriceColumn>
            {it.price.length ? getPriceString(it.price) : 'Не указано'}
          </ST.PriceColumn>
          <ST.DateColumn>{it.date}</ST.DateColumn>
        </ST.Row>
      )),
    [data],
  );

  return (
    <ST.Wrapper>
      <ST.Content>
        <ST.Header>
          <ST.Column>Вакансия</ST.Column>
          <ST.Column>Статус</ST.Column>
          <ST.Column>Доход</ST.Column>
          <ST.Column>Дата</ST.Column>
        </ST.Header>
        {renderTableRows || <ST.EmptyData>Нет откликов</ST.EmptyData>}
      </ST.Content>
    </ST.Wrapper>
  );
};

export default DashboardTable;
