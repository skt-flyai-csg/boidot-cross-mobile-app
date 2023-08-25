import React from 'react';
import {IconProps} from '../../types';
import {
  Buy,
  Calendar,
  Game,
  Heart,
  Notification,
  Star,
  Tick,
  Volume,
} from '../../assets/images/Glass';

const IconComponent = ({type, width, height}: IconProps) => {
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
