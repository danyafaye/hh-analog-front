export const enum mainPageType {
  vacancies,
  resume
}

export interface IMainContent {
  contentTitle: string,

}

export const vacanciesContent: IMainContent = {
  contentTitle: 'Вакансий',
}

export const resumeContent: IMainContent = {
  contentTitle: 'Резюме'
}
