export type LinkTypes = 'home' | 'auth' | 'dashboard' | 'resume';

export const LINKS: Record<LinkTypes, string> = {
  home: '/',
  dashboard: '/dashboard',
  resume: '/resume',
  auth: '/auth'
};
