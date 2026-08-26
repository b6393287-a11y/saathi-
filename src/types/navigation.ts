import type { Translation } from '@/i18n/translations';

export type PageId =
  | 'home'
  | 'ask'
  | 'yojana'
  | 'scan'
  | 'fee'
  | 'rule'
  | 'whatsNew'
  | 'safety';

export interface NavItem {
  id: PageId;
  labelKey: keyof Translation['nav'];
}
