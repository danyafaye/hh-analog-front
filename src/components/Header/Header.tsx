import { FC } from 'react';

import * as ST from './styled.ts';
import { LINKS } from '@src/links';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const redirectAuth = () => {
    navigate(LINKS.auth);
  };

  return (
    <ST.Wrapper>
      <ST.Logo />
      <ST.NavMenu>
        <ST.Link
          to={LINKS.dashboard}
          active={pathname === LINKS.dashboard}
        >
          Дашборд
        </ST.Link>
        <ST.Link
          to={LINKS.home}
          active={pathname === LINKS.home}
        >
          Вакансии
        </ST.Link>
        <ST.Link
          to={LINKS.resume}
          active={pathname === LINKS.resume}
        >
          Резюме
        </ST.Link>
      </ST.NavMenu>
      <ST.NavMenu>
        <ST.Favorites />
        <ST.Notifications />
        <ST.Profile
          isActive={pathname === LINKS.auth}
          onClick={redirectAuth}
        />
      </ST.NavMenu>
    </ST.Wrapper>
  );
};

export { Header };
