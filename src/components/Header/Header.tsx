import { FC } from 'react';

import * as ST from './styled.ts';
import { useNavigate } from 'react-router-dom'
import { LINKS } from '@src/links/index.ts'

const Header: FC = () => {
  const navigate = useNavigate()

  const redirectAuth = () => {
    navigate(LINKS.auth)
  }
  
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
        <ST.Profile onClick={redirectAuth}/>
      </ST.NavMenu>
    </ST.Wrapper>
  );
};

export { Header };
