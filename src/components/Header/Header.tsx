import { FC } from 'react';

import * as ST from './styled.ts';
import { LINKS } from '@src/links';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const redirectToPage = (link: string) => {
    navigate(link);
  };

  return (
    <ST.Wrapper>
      <ST.Logo
        active={pathname === LINKS.welcome}
        onClick={() => redirectToPage(LINKS.welcome)}
      />
      <ST.NavMenu>
        <ST.Link
          to={LINKS.dashboard}
          active={pathname === LINKS.dashboard}
        >
          Дашборд
        </ST.Link>
        <ST.Link
          to={LINKS.vacancies}
          active={pathname === LINKS.vacancies}
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
        <ST.Favorites onClick={() => redirectToPage(`${LINKS.dashboard}#favorites`)} />
        <ST.Notifications />
        <ST.Profile
          isActive={pathname === LINKS.auth}
          onClick={() => redirectToPage(LINKS.auth)}
        />
      </ST.NavMenu>
    </ST.Wrapper>
  );
};

export { Header };
