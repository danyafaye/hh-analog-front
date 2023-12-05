import { FC, useMemo } from 'react';

import * as ST from './styled.ts';
import { MainCard } from '@components/MainCard';
import { mockData as vacanticesMockData } from '@components/Main/mockData.ts';
import { mockData as dashboardMockData } from '@components/Dashboard/mockData.ts';
import { Icon } from '@components/Icon/Icon.tsx';
import DashboardTable from '@components/Dashboard/DashboardTable/DashboardTable.tsx';
import DashboardChart from '@components/Dashboard/DashboardChart/DashboardChart.tsx';

const Dashboard: FC = () => {
  const userInfo = dashboardMockData.info;

  const renderCards = useMemo(
    () =>
      vacanticesMockData.map((it) => {
        return (
          <MainCard
            cardData={it}
            size={'sm'}
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

        <ST.BlockContainer
          noMargin
          noOverflow
        >
          <ST.BlockContainer
            column
            noMargin
            noOverflow
          >
            <ST.Header>Отклики</ST.Header>
            <ST.BlockContent>
              <DashboardTable data={dashboardMockData.feedback} />
            </ST.BlockContent>
          </ST.BlockContainer>
          <ST.ChartContainer
            column
            noMargin
          >
            <ST.Header>Просмотры профиля</ST.Header>
            <ST.BlockContent>
              <DashboardChart data={dashboardMockData.views} />
            </ST.BlockContent>
          </ST.ChartContainer>
        </ST.BlockContainer>

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
    </ST.Wrapper>
  );
};

export { Dashboard };
