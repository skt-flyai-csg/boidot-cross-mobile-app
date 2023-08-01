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
  width: number;
  height: number;
}

const IconComponent: React.FC<IconProps> = ({type, width, height}) => {
  switch (type) {
    case 'buy':
      return <Buy width={width} height={height} />;
    case 'calendar':
      return <Calendar width={width} height={height} />;
    case 'game':
      return <Game width={width} height={height} />;
    case 'heart':
      return <Heart width={width} height={height} />;
    case 'notification':
      return <Notification width={width} height={height} />;
    case 'star':
      return <Star width={width} height={height} />;
    case 'tick':
      return <Tick width={width} height={height} />;
    case 'volume':
      return <Volume width={width} height={height} />;
  }
};

export default IconComponent;
