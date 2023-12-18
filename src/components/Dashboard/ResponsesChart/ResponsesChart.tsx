import { FC } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    date: '26.10.23',
    viewed: 3,
    invitation: 0,
    refusal: 12,
    notViewed: 0,
  },
  {
    date: '27.10.23',
    viewed: 10,
    invitation: 1,
    refusal: 0,
    notViewed: 3,
  },
  {
    date: '28.10.23',
    viewed: 5,
    invitation: 2,
    refusal: 1,
    notViewed: 3,
  },
  {
    date: '29.10.23',
    viewed: 3,
    invitation: 0,
    refusal: 5,
    notViewed: 12,
  },
  {
    date: '30.10.23',
    viewed: 1,
    invitation: 1,
    refusal: 1,
    notViewed: 1,
  },
];

import * as ST from './styled.ts';
import { COLORS } from '@src/constants/styles.ts';
const ResponsesChart: FC = () => {
  return (
    <ST.Wrapper>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value, name) => [value, name]} />
          <Area
            type="monotone"
            dataKey="invitation"
            stackId="1"
            name="Приглашение"
            stroke={COLORS.$SECONDARY_GREEN}
            fill={COLORS.$SECONDARY_GREEN}
          />
          <Area
            type="monotone"
            dataKey="viewed"
            stackId="1"
            stroke={COLORS.$PRIMARY_DARK_GRAY}
            name="Просмотрено"
            fill={COLORS.$PRIMARY_DARK_GRAY}
          />
          <Area
            type="monotone"
            dataKey="notViewed"
            stackId="1"
            name="Не просмотрено"
            stroke={COLORS.$SECONDARY_DARK_GRAY}
            fill={COLORS.$SECONDARY_DARK_GRAY}
          />
          <Area
            type="monotone"
            dataKey="refusal"
            stackId="1"
            name="Отказ"
            stroke={COLORS.$SECONDARY_RED}
            fill={COLORS.$SECONDARY_RED}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ST.Wrapper>
  );
};

export { ResponsesChart };
