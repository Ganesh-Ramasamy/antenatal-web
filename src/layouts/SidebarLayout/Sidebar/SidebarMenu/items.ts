import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';

import PersonIcon from '@mui/icons-material/Person';
export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  
  {
    heading: '',
    items: [
      {
        name: 'Patients',
        link: '/patients',
        icon: PersonIcon
      }
    ]
  }
];

export default menuItems;
