import { FC, useMemo } from 'react';

import * as ST from './styled.ts';
import { MainCard } from '@components/MainCard';
import { mockData as vacanticesMockData } from '@components/Main/mockData.ts';
import { mockData as profileMockData } from '@components/Dashboard/mockData.ts';
import { Icon } from '@components/Icon/Icon.tsx';

const Dashboard: FC = () => {
  const renderCards = useMemo(
    () =>
      vacanticesMockData.map((it) => {
        return <MainCard cardData={it} />;
      }),
    [vacanticesMockData],
  );

  const renderProfileTags = useMemo(
    () => profileMockData.tags.map((it) => <ST.ProfileTag>{it}</ST.ProfileTag>),
    [profileMockData],
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

        <ST.BlockContainer noMargin>Графика и хуйня</ST.BlockContainer>

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
                src={
                  'https://www.figma.com/file/u3WM9IFfg4LqD4Dfpq3wnY/image/aa73e64136fab335d1d3c2f26ec09d713e6e84f6'
                }
              />
            </ST.ProfileBlock>
            <ST.ProfileBlock column>
              <ST.ProfileName>Петр Петрович</ST.ProfileName>
              <ST.ProfileAge>20 лет</ST.ProfileAge>
              <ST.ProfileBirthday>01.11.2003</ST.ProfileBirthday>
            </ST.ProfileBlock>
            <ST.ProfileBlock>
              <ST.ProfileLocationContainer>
                <Icon
                  size="md"
                  type={'address'}
                />
                <ST.ProfileLocationAddress>Россия, Москва</ST.ProfileLocationAddress>
              </ST.ProfileLocationContainer>
            </ST.ProfileBlock>
            <ST.ProfileTagsContainer>{renderProfileTags}</ST.ProfileTagsContainer>
            <ST.ProfileFooter>
              <ST.ProfileLink to={'/'}>
                <Icon
                  size="md"
                  type={'telegram'}
                />
                @petr762008
              </ST.ProfileLink>
              <ST.ProfileLink to={'/'}>
                <Icon
                  size="md"
                  type={'github'}
                />
              </ST.ProfileLink>
              <ST.ProfileLink to={'/'}>
                <Icon
                  size="md"
                  type={'google'}
                />
              </ST.ProfileLink>
            </ST.ProfileFooter>
          </ST.ProfileContent>
        </ST.ProfileContainer>
      </ST.ProfileWrapper>
    </ST.Wrapper>
  );
};

export { Dashboard };
