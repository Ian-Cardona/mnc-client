import type { INavBarLink } from '../../navbar/types/navbar.types';

export type Platform = 'facebook' | 'instagram' | 'linkedin';

export interface IFooterForm {
  header: string;
  subheader: string;
}

export interface IFooterSocial {
  platform: Platform;
  url: string;
}

export interface IFooterInfo {
  address: string;
  contact: string;
  email: string;
}

export interface IFooter {
  form: IFooterForm;
  socials: IFooterSocial[];
  links: INavBarLink[];
  info: IFooterInfo;
  copyright: string;
}

export interface IFooterFormInput {
  emailer: string;
  contact: string;
  message: string;
};
