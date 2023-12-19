import { FC } from 'react';

import * as ST from './styled.ts';
import { Button } from '@components/Button';
import officeWorker from '@assets/images/office-worker.png';
import video1 from '@assets/videos/video1.mp4';
import video2 from '@assets/videos/video2.mp4';
import video3 from '@assets/videos/video3.mp4';
import starParticle from '@assets/images/starparticle.png';
import connecting from '@assets/images/connecting3.png';
import dashboardScreen from '@assets/images/dashboardScreen.png';
import vacanciesScreen from '@assets/images/vacanciesScreen.png';
import resumeScreen from '@assets/images/resumeScreen.png';
import { useNavigate } from 'react-router-dom';
import { LINKS } from '@src/links';

const Welcome: FC = () => {
  const navigate = useNavigate();

  const redirectToPage = (link: string) => {
    navigate(link);
  };

  return (
    <ST.WelcomeWrapper>
      <ST.WelcomeContent>
        <ST.SloganWrapper>
          <ST.SloganContentWrapper>
            <ST.SloganMain>
              <ST.Slogan>
                В поиске работы мечты или ищите идеального кандидата на вашу должность?
              </ST.Slogan>
              <ST.SloganDescription>
                Наше приложение — мост между вашими профессиональными целями и их реализацией.
                Найдите идеальную работу или самого подходящего кандидата с легкостью благодаря
                умным фильтрам, персонализированным рекомендациям и интуитивно понятному интерфейсу.
                Ваша карьера заслуживает самого лучшего — доверьте свой поиск нам.
              </ST.SloganDescription>
              <ST.Buttons>
                <ST.SloganButtonWrapper>
                  <Button
                    fontSize="md"
                    styles="unFilled"
                    text="Найти работу"
                    onClick={() => redirectToPage(LINKS.vacancies)}
                  />
                </ST.SloganButtonWrapper>
                <ST.SloganButtonWrapper>
                  <Button
                    fontSize="md"
                    text="К поиску кандидата"
                    onClick={() => redirectToPage(LINKS.resume)}
                  />
                </ST.SloganButtonWrapper>
              </ST.Buttons>
            </ST.SloganMain>
            <ST.ImageWrapper src={officeWorker} />
          </ST.SloganContentWrapper>
        </ST.SloganWrapper>
        <ST.LinePurple>
          <ST.WordBlock>Найди Работу Мечты или Найди Подходящего Кандидата</ST.WordBlock>
        </ST.LinePurple>
        <ST.VideosWrapper>
          <ST.VideoBlock
            src={video1}
            autoPlay
            loop
          />
          <ST.VideoBlock
            src={video2}
            autoPlay
            loop
          />
          <ST.VideoBlock
            src={video3}
            autoPlay
            loop
          />
        </ST.VideosWrapper>
        <ST.CompaniesWrapper>
          <ST.CompaniesUpper>
            СОЕДИНЯЕМ РАБОТОДАТЕЛЯ И СОИСКАТЕЛЯ
            <ST.StarParticle src={starParticle} />
          </ST.CompaniesUpper>
          <ST.CompaniesBottom>
            <ST.ConnectingImage src={connecting} />
            <ST.CompaniesDesc>
              Наше приложение - это мост между работодателем и соискателем, где обе стороны могут
              найти идеальное сочетание для успешного сотрудничества. Для работодателей мы
              предоставляем удобный инструмент для поиска высококвалифицированных кандидатов,
              позволяя экономить время и ресурсы благодаря точным фильтрам и персонализированным
              рекомендациям. А соискателям мы помогаем найти работу своей мечты, предоставляя доступ
              к многочисленным вакансиям, анализу требований рынка труда и возможности поднять свой
              профессиональный уровень. Наше приложение - это не просто платформа, это инструмент
              для создания совершенного партнерства между работодателем и соискателем, где каждая
              сторона находит то, что ищет.
            </ST.CompaniesDesc>
          </ST.CompaniesBottom>
        </ST.CompaniesWrapper>
        <ST.DeveloperWrapper>
          <ST.DeveloperUpper>
            МНОЖЕСТВО РАЗЛИЧНЫХ ПРОФЕССИЙ, ЕСТЬ ИЗ ЧЕГО ВЫБИРАТЬ
          </ST.DeveloperUpper>
          <ST.DeveloperContent>
            <ST.DeveloperBlock
              angle="8"
              color="#5ac08e"
              xPixels="60"
              yPixels="-15"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ST.PencilIcon />
              <ST.DeveloperText>UI/UX ДИЗАЙН</ST.DeveloperText>
            </ST.DeveloperBlock>
            <ST.DeveloperBlock
              angle="-8"
              color="#f9d84b"
              xPixels="20"
              yPixels="0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
            >
              <ST.CodeIcon />
              <ST.DeveloperText>РАЗРАБОТКА</ST.DeveloperText>
            </ST.DeveloperBlock>
            <ST.DeveloperBlock
              angle="8"
              color="#e36f40"
              xPixels="-20"
              yPixels="0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.6 }}
            >
              <ST.StickIcon />
              <ST.DeveloperText>МАРКЕТИНГ</ST.DeveloperText>
            </ST.DeveloperBlock>
            <ST.DeveloperBlock
              angle="-8"
              color="#8cd7fe"
              xPixels="-60"
              yPixels="-15"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.9 }}
            >
              <ST.PenIcon />
              <ST.DeveloperText>ИЛЛЮСТРАЦИЯ</ST.DeveloperText>
            </ST.DeveloperBlock>
          </ST.DeveloperContent>
        </ST.DeveloperWrapper>
        <ST.ShortDescriptionLine>
          <ST.ShortDescription>
            <ST.DashboardIcon />
            <ST.ShortDescriptionText>Дашборд</ST.ShortDescriptionText>
          </ST.ShortDescription>
          <ST.ShortDescription>
            <ST.VacancyIcon />
            <ST.ShortDescriptionText>Вакансии</ST.ShortDescriptionText>
          </ST.ShortDescription>
          <ST.ShortDescription>
            <ST.ResumeIcon />
            <ST.ShortDescriptionText>Резюме</ST.ShortDescriptionText>
          </ST.ShortDescription>
        </ST.ShortDescriptionLine>
        <ST.LongDescriptionWrapper>
          <ST.LongDescriptionContainer
            initial={{ opacity: 0, translateX: '-100%' }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <ST.LongDescriptionScreen src={dashboardScreen} />
            <ST.LongDescriptionText>
              <ST.LongDescriptionTitle>ИЗУЧАЙТЕ ДАШБОРД</ST.LongDescriptionTitle>
              <ST.LongDescriptionInfo>
                На странице представлена вся нужная личная информация по вакансиям, резюме. Так же
                собрана статистика по откликам и просмотрам.
              </ST.LongDescriptionInfo>
            </ST.LongDescriptionText>
          </ST.LongDescriptionContainer>
          <ST.LongDescriptionContainerRight
            initial={{ opacity: 0, translateX: '100%' }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <ST.LongDescriptionTextRight>
              <ST.LongDescriptionTitle>ПРОСМАТРИВАЙТЕ ВАКАНСИИ</ST.LongDescriptionTitle>
              <ST.LongDescriptionInfo>
                На странице расположены актуальные вакансии, отсортированные и отфильтрованные по
                вашим предпочтениям. Настроены персонализированные рекомендации.
              </ST.LongDescriptionInfo>
            </ST.LongDescriptionTextRight>
            <ST.LongDescriptionScreen src={vacanciesScreen} />
          </ST.LongDescriptionContainerRight>
          <ST.LongDescriptionContainer
            initial={{ opacity: 0, translateX: '-100%' }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <ST.LongDescriptionScreen src={resumeScreen} />
            <ST.LongDescriptionText>
              <ST.LongDescriptionTitle>ПРОСМАТРИВАЙТЕ РЕЗЮМЕ</ST.LongDescriptionTitle>
              <ST.LongDescriptionInfo>
                На странице расположены актуальные резюме, отсортированные и отфильтрованные по
                вашим предпочтениям. Настроены персонализированные рекомендации.
              </ST.LongDescriptionInfo>
            </ST.LongDescriptionText>
          </ST.LongDescriptionContainer>
        </ST.LongDescriptionWrapper>
        <ST.PreFooterWrapper>
          <ST.PreFooterText>ПОСТРОИМ ВАШЕ БУДУЩЕЕ ВМЕСТЕ</ST.PreFooterText>
        </ST.PreFooterWrapper>
      </ST.WelcomeContent>
      <ST.WelcomeFooter>
        <ST.ContainerBlock>
          <ST.FooterUpper>Приложение разработано при участии следующих студентов</ST.FooterUpper>
          <ST.FooterBottom>
            <ST.FooterBlock>Владислав Кашкаров</ST.FooterBlock>
            <ST.FooterBlock>Хлопцев Данил</ST.FooterBlock>
            <ST.FooterBlock>Цветков Иван</ST.FooterBlock>
            <ST.FooterBlock>Серпокрылов Данила</ST.FooterBlock>
          </ST.FooterBottom>
        </ST.ContainerBlock>
        <ST.ContainerBlockCopyright>JB - Приложение для поиска работы</ST.ContainerBlockCopyright>
      </ST.WelcomeFooter>
    </ST.WelcomeWrapper>
  );
};

export { Welcome };
