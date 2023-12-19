import { FC, useState } from 'react';

import * as ST from './styled.ts';
import { LINKS } from '@src/links';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Header: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [openBurger, setOpenBurger] = useState(false);
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
        <ST.Profile
          isActive={pathname === LINKS.auth}
          onClick={() => redirectToPage(LINKS.auth)}
        />
      </ST.NavMenu>
      {openBurger ? (
        <ST.Close onClick={() => setOpenBurger(false)} />
      ) : (
        <ST.Burger onClick={() => setOpenBurger(true)} />
      )}
      <AnimatePresence>
        {openBurger && (
          <>
            <ST.SideMenuBack onClick={() => setOpenBurger(false)}></ST.SideMenuBack>
            <ST.SideMenu
              key={'side-menu'}
              initial={{ opacity: 0, translateX: '100%' }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: '100%' }}
              transition={{ duration: 0.5 }}
            >
              <ST.Link
                to={LINKS.dashboard}
                active={pathname === LINKS.dashboard}
                onClick={() => setOpenBurger(false)}
              >
                Дашборд
              </ST.Link>
              <ST.Link
                to={LINKS.vacancies}
                active={pathname === LINKS.vacancies}
                onClick={() => setOpenBurger(false)}
              >
                Вакансии
              </ST.Link>
              <ST.Link
                to={LINKS.resume}
                active={pathname === LINKS.resume}
                onClick={() => setOpenBurger(false)}
              >
                Резюме
              </ST.Link>
              <ST.SideMenuFlex>
                <ST.Favorites
                  onClick={() => {
                    setOpenBurger(false);
                    redirectToPage(`${LINKS.dashboard}#favorites`);
                  }}
                />
                <ST.Profile
                  isActive={pathname === LINKS.auth}
                  onClick={() => {
                    setOpenBurger(false);
                    redirectToPage(LINKS.auth);
                  }}
                />
              </ST.SideMenuFlex>
            </ST.SideMenu>
          </>
        )}
      </AnimatePresence>
    </ST.Wrapper>
  );
};

export { Header };
