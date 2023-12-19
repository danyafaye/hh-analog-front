import { FC, useEffect, useMemo, useRef } from 'react';

import * as ST from './styled.ts';
import { MainCard } from '@components/MainCard';
import { mockData as vacanticesMockData, resumeMockData } from '@components/Main/mockData.ts';
import { mockData as dashboardMockData } from '@components/Dashboard/mockData.ts';
import { Icon } from '@components/Icon/Icon.tsx';
import DashboardTable from '@components/Dashboard/DashboardTable/DashboardTable.tsx';
import DashboardChart from '@components/Dashboard/DashboardChart/DashboardChart.tsx';
import { useLocation } from 'react-router-dom';
import { ResponsesChart } from '@components/Dashboard/ResponsesChart/ResponsesChart.tsx';

const Dashboard: FC = () => {
  const userInfo = dashboardMockData.info;

  const myResumeMock = resumeMockData[1];

  const favoritesVacancies = vacanticesMockData.filter((i) => i.favorite);

  const location = useLocation();

  const myRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (myRef && location.hash.includes('#favorites')) {
      myRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  }, [myRef, location.hash]);

  const renderCards = useMemo(
    () =>
      vacanticesMockData.map((it) => {
        return (
          <MainCard
            cardData={it}
            size={'sm'}
            editableCard={false}
          />
        );
      }),
    [vacanticesMockData],
  );

  const renderProfileTags = useMemo(
    () => dashboardMockData.tags.map((it) => <ST.ProfileTag>{it}</ST.ProfileTag>),
    [dashboardMockData],
  );

  const renderProfileLinks = useMemo(
    () =>
      dashboardMockData.links.map((it) => (
        <ST.ProfileLink to={it.link}>
          <Icon
            size="md"
            type={it.icon}
          />
          {it.text}
        </ST.ProfileLink>
      )),
    [dashboardMockData],
  );

  return (
    <ST.Wrapper>
      <ST.ProfileWrapper>
        <ST.BlockContainer
          column
          noMargin
        >
          <ST.Header>Вакансии для вас</ST.Header>
          <ST.BlockContent>{renderCards}</ST.BlockContent>
        </ST.BlockContainer>

        <ST.BlockContainerMyStat
          noMargin
          noOverflow
        >
          <ST.BlockContainer
            column
            noMargin
            noOverflow
          >
            <ST.Header>Отклики</ST.Header>
            <DashboardTable data={dashboardMockData.feedback} />
          </ST.BlockContainer>
          <ST.ChartContainer
            column
            noMargin
          >
            <ST.Header>Просмотры профиля</ST.Header>
            <DashboardChart data={dashboardMockData.views} />
          </ST.ChartContainer>
        </ST.BlockContainerMyStat>

        <ST.ProfileContainer>
          <ST.ProfileContent>
            <ST.ProfileActionsContainer>
              <Icon
                size="md"
                type={'edit'}
              />
              <Icon
                size="md"
                type={'delete'}
              />
            </ST.ProfileActionsContainer>
            <ST.ProfileBlock>
              <ST.ProfileAvatar
                src={userInfo.avatar}
                loading={'lazy'}
              />
            </ST.ProfileBlock>
            <ST.ProfileBlock column>
              <ST.ProfileName>{userInfo.name}</ST.ProfileName>
              <ST.ProfileAge>{userInfo.age}</ST.ProfileAge>
              <ST.ProfileBirthday>{userInfo.birthdayDate}</ST.ProfileBirthday>
            </ST.ProfileBlock>
            <ST.ProfileBlock>
              <ST.ProfileLocationContainer>
                <Icon
                  size="md"
                  type={'address'}
                />
                <ST.ProfileLocationAddress>{userInfo.address}</ST.ProfileLocationAddress>
              </ST.ProfileLocationContainer>
            </ST.ProfileBlock>
            <ST.ProfileTagsContainer>{renderProfileTags}</ST.ProfileTagsContainer>
            <ST.ProfileFooter>{renderProfileLinks}</ST.ProfileFooter>
          </ST.ProfileContent>
        </ST.ProfileContainer>
      </ST.ProfileWrapper>
      <ST.ResponseWrapper>
        <ST.Header>Статистика откликов</ST.Header>
        <ResponsesChart />
      </ST.ResponseWrapper>
      <ST.ResumeWrapper>
        <ST.Header>Ваши резюме</ST.Header>
        <MainCard
          cardData={myResumeMock}
          editableCard
        />
      </ST.ResumeWrapper>
      <ST.FavoritesVacanciesWrapper>
        <ST.Header>Избранные вакансии</ST.Header>
        <ST.FavoritesVacancies ref={myRef}>
          {favoritesVacancies.map((it) => (
            <MainCard
              editableCard={false}
              key={it.id}
              cardData={it}
            />
          ))}
        </ST.FavoritesVacancies>
      </ST.FavoritesVacanciesWrapper>
    </ST.Wrapper>
  );
};

export { Dashboard };
