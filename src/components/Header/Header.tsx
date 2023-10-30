import { FC } from 'react';

import * as ST from './styled.ts';

const Header: FC = () => {
  return (
    <ST.Wrapper>
      <ST.Logo />
      <ST.NavMenu>
        <ST.NavButton>Дашборд</ST.NavButton>
        <ST.NavButton active>Вакансии</ST.NavButton>
        <ST.NavButton>Резюме</ST.NavButton>
      </ST.NavMenu>
      <ST.NavMenu>
        <ST.Favorites />
        <ST.Notifications />
        <ST.Profile />
      </ST.NavMenu>
    </ST.Wrapper>
  );
};

export { Header };
