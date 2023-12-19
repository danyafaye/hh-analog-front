import { FC } from 'react';
import { ProfileViewsData } from '@components/Dashboard/mockData.ts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import * as ST from './styled.ts';
import { COLORS } from '@src/constants/styles.ts';

type DashboardChartProps = {
  data?: ProfileViewsData[];
};

const DashboardChart: FC<DashboardChartProps> = ({ data }) => {
  return (
    <ST.Wrapper>
      {data ? (
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={data}
            margin={{
              top: 23,
              right: 0,
              left: -20,
              bottom: 0,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis dataKey="count" />
            <Tooltip formatter={(value) => [value, 'Количество']} />
            <Bar
              dataKey="count"
              fill={COLORS.$SECONDARY_BLUE}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ST.EmptyData>Просмотров профиля нет</ST.EmptyData>
      )}
    </ST.Wrapper>
  );
};

export default DashboardChart;
