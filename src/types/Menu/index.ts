import {ReactNode} from 'react';

export interface MenuCardProps {
  iconType: 'calendar' | 'game' | 'tick';
  title: string;
  children: ReactNode;
}
