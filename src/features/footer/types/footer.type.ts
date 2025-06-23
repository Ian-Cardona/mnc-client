export type Platform = 'facebook' | 'instagram' | 'linkedin';

export interface ISocial {
  platform: Platform;
  url: string;
}

export interface IFooterLink {
  label: string;
  path: string;
  external?: boolean;
}

export interface IFooter {
  copyright: string;
  address: string;
  socials: ISocial[];
  links: IFooterLink[];
}