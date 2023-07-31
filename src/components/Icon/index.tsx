import React from 'react';
import Buy from '../../assets/images/Glass/Buy';
import Calendar from '../../assets/images/Glass/Calendar';
import Game from '../../assets/images/Glass/Game';
import Heart from '../../assets/images/Glass/Heart';
import Notification from '../../assets/images/Glass/Notification';
import Star from '../../assets/images/Glass/Star';
import Tick from '../../assets/images/Glass/Tick';
import Volume from '../../assets/images/Glass/Volume';

export interface IconProps {
  type:
    | 'buy'
    | 'calendar'
    | 'game'
    | 'heart'
    | 'notification'
    | 'star'
    | 'tick'
    | 'volume';
}

const IconComponent: React.FC<IconProps> = ({type}) => {
  switch (type) {
    case 'buy':
      return <Buy />;
    case 'calendar':
      return <Calendar />;
    case 'game':
      return <Game />;
    case 'heart':
      return <Heart />;
    case 'notification':
      return <Notification />;
    case 'star':
      return <Star />;
    case 'tick':
      return <Tick />;
    case 'volume':
      return <Volume />;
  }
};

export default IconComponent;
