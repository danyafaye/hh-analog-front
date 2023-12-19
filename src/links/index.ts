export type LinkTypes = 'vacancies' | 'auth' | 'dashboard' | 'resume' | 'welcome';

export const LINKS: Record<LinkTypes, string> = {
  vacancies: '/vacancies',
  dashboard: '/dashboard',
  resume: '/resume',
  auth: '/auth',
  welcome: '/welcome',
};
