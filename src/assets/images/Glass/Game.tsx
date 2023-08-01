import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Mask,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props: SvgProps) => (
  <Svg width={48} height={48} viewBox="0 0 97.67 99.1" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M63.564 16.992c-3.91-.04-7.778-.12-11.647-.12v-.76c-.041-5.997-5.05-10.914-11.2-10.954h-4.032c-1.222 0-2.24-.96-2.24-2.16C34.445 1.36 33.101 0 31.391 0c-1.67 0-3.055 1.36-3.055 2.999 0 4.477 3.747 8.156 8.349 8.156h4.032c2.77 0 5.09 2.239 5.09 4.997v.68c-5.538 0-10.995.08-16.33.16C15.303 16.992 5 27.067 5 40.98v17.872C5 72.765 15.304 82.84 29.436 82.84c5.66.12 11.403.16 17.105.16 5.701 0 11.362-.04 17.023-.16C77.696 82.84 88 72.765 88 58.852V40.98c0-13.913-10.304-23.988-24.436-23.988Z"
      />
    </G>
    <G filter="url(#c)" opacity={0.5}>
      <Path
        fill="#E31352"
        d="M59.528 29.795H32.901c-9.703 0-15.2 4.05-15.2 11.2v19.6c0 7.15 5.497 11.2 15.2 11.2h26.626c9.702 0 15.174-4.05 15.174-11.2v-19.6c0-7.15-5.472-11.2-15.174-11.2Z"
      />
    </G>
    <G filter="url(#d)">
      <Mask
        id="f"
        width={84}
        height={68}
        x={20}
        y={33}
        fill="#000"
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M20 33h84v68H20z" />
        <Path
          fillRule="evenodd"
          d="M74.753 34.109c1.287.017 2.576.035 3.87.048 13.905 0 24.044 9.914 24.044 23.603v17.584c0 13.69-10.139 23.603-24.043 23.603-5.57.118-11.14.157-16.75.157-5.61 0-11.26-.039-16.83-.157C31.137 98.947 21 89.034 21 75.344V57.76c0-13.69 10.138-23.603 24.083-23.603 5.25-.078 10.62-.157 16.07-.157 2.003 0 4.006 0 6.01.04 2.526 0 5.052.034 7.59.069ZM57.145 69.484h-4.207v4.17c0 1.613-1.363 2.95-3.006 2.95-1.683 0-3.005-1.337-3.005-2.95v-4.17h-4.248c-1.643 0-3.005-1.298-3.005-2.95 0-1.613 1.362-2.95 3.005-2.95h4.248v-4.131c0-1.613 1.322-2.95 3.005-2.95 1.643 0 3.006 1.337 3.006 2.95v4.13h4.207c1.643 0 3.006 1.338 3.006 2.95 0 1.653-1.363 2.951-3.006 2.951Zm17.032-6.646h.4c1.643 0 3.006-1.299 3.006-2.95 0-1.614-1.363-2.951-3.006-2.951h-.4c-1.683 0-3.006 1.337-3.006 2.95 0 1.652 1.323 2.95 3.006 2.95Zm6.851 13.53h.4c1.644 0 3.006-1.297 3.006-2.95 0-1.612-1.362-2.95-3.005-2.95h-.4c-1.684 0-3.006 1.338-3.006 2.95 0 1.653 1.322 2.95 3.005 2.95Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#FF749F"
        fillOpacity={0.35}
        fillRule="evenodd"
        d="M74.753 34.109c1.287.017 2.576.035 3.87.048 13.905 0 24.044 9.914 24.044 23.603v17.584c0 13.69-10.139 23.603-24.043 23.603-5.57.118-11.14.157-16.75.157-5.61 0-11.26-.039-16.83-.157C31.137 98.947 21 89.034 21 75.344V57.76c0-13.69 10.138-23.603 24.083-23.603 5.25-.078 10.62-.157 16.07-.157 2.003 0 4.006 0 6.01.04 2.526 0 5.052.034 7.59.069ZM57.145 69.484h-4.207v4.17c0 1.613-1.363 2.95-3.006 2.95-1.683 0-3.005-1.337-3.005-2.95v-4.17h-4.248c-1.643 0-3.005-1.298-3.005-2.95 0-1.613 1.362-2.95 3.005-2.95h4.248v-4.131c0-1.613 1.322-2.95 3.005-2.95 1.643 0 3.006 1.337 3.006 2.95v4.13h4.207c1.643 0 3.006 1.338 3.006 2.95 0 1.653-1.363 2.951-3.006 2.951Zm17.032-6.646h.4c1.643 0 3.006-1.299 3.006-2.95 0-1.614-1.363-2.951-3.006-2.951h-.4c-1.683 0-3.006 1.337-3.006 2.95 0 1.652 1.323 2.95 3.006 2.95Zm6.851 13.53h.4c1.644 0 3.006-1.297 3.006-2.95 0-1.612-1.362-2.95-3.005-2.95h-.4c-1.684 0-3.006 1.338-3.006 2.95 0 1.653 1.322 2.95 3.005 2.95Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#e)"
        d="m78.624 34.157-.01 1h.01v-1Zm-3.871-.048.014-1-.014 1Zm3.87 64.838v-1h-.02l.02 1Zm-33.58 0 .021-1h-.02v1Zm.04-64.79v1h.015l-.015-1Zm22.08-.118-.02 1h.02v-1ZM52.938 69.484v-1a1 1 0 0 0-1 1h1Zm-6.011 0h1a1 1 0 0 0-1-1v1Zm0-5.9v1a1 1 0 0 0 1-1h-1Zm6.01 0h-1a1 1 0 0 0 1 1v-1Zm25.697-30.427c-1.292-.013-2.58-.03-3.867-.048l-.028 2c1.287.017 2.578.035 3.874.048l.02-2Zm25.033 24.603c0-14.26-10.605-24.603-25.043-24.603v2c13.37 0 23.043 9.484 23.043 22.603h2Zm0 17.584V57.76h-2v17.584h2ZM78.624 99.947c14.438 0 25.043-10.342 25.043-24.603h-2c0 13.12-9.672 22.603-23.043 22.603v2Zm-16.75.158c5.614 0 11.191-.04 16.77-.158l-.042-2c-5.56.118-11.123.157-16.729.157v2.001Zm-16.852-.158c5.58.118 11.237.158 16.851.158v-2c-5.605 0-11.248-.04-16.809-.158l-.042 2ZM20 75.344c0 14.26 10.605 24.603 25.043 24.603v-2C31.672 97.947 22 88.463 22 75.344h-2Zm0-17.584v17.584h2V57.76h-2Zm25.083-24.603C30.606 33.157 20 43.5 20 57.76h2c0-13.118 9.67-22.603 23.083-22.603v-2ZM61.153 33c-5.46 0-10.836.079-16.085.157l.03 2C50.348 35.08 55.711 35 61.152 35v-2Zm6.03.04c-2.016-.04-4.029-.04-6.03-.04v2c2.004 0 3.998 0 5.99.04l.04-2Zm7.584.069c-2.537-.035-5.07-.07-7.604-.07v2c2.518 0 5.037.035 7.576.07l.028-2Zm-21.83 37.375h4.208v-2h-4.207v2Zm1 3.17v-4.17h-2v4.17h2Zm-4.005 3.95c2.178 0 4.006-1.767 4.006-3.95h-2c0 1.043-.897 1.95-2.006 1.95v2Zm-4.005-3.95c0 2.174 1.779 3.95 4.005 3.95v-2c-1.14 0-2.005-.898-2.005-1.95h-2Zm0-4.17v4.17h2v-4.17h-2Zm-3.248 1h4.248v-2h-4.248v2Zm-4.005-3.95c0 2.23 1.837 3.95 4.005 3.95v-2c-1.117 0-2.005-.876-2.005-1.95h-2Zm4.005-3.95c-2.177 0-4.005 1.767-4.005 3.95h2c0-1.043.897-1.95 2.005-1.95v-2Zm4.248 0h-4.248v2h4.248v-2Zm-1-3.131v4.13h2v-4.13h-2Zm4.005-3.95c-2.226 0-4.005 1.776-4.005 3.95h2c0-1.052.866-1.95 2.005-1.95v-2Zm4.006 3.95c0-2.183-1.828-3.95-4.006-3.95v2c1.109 0 2.006.907 2.006 1.95h2Zm0 4.13v-4.13h-2v4.13h2Zm3.207-1h-4.207v2h4.207v-2Zm4.006 3.95c0-2.182-1.828-3.95-4.006-3.95v2c1.108 0 2.006.908 2.006 1.95h2Zm-4.006 3.951c2.17 0 4.006-1.72 4.006-3.95h-2c0 1.074-.889 1.95-2.006 1.95v2Zm17.432-8.646h-.4v2h.4v-2Zm2.006-1.95c0 1.073-.889 1.95-2.006 1.95v2c2.17 0 4.006-1.72 4.006-3.95h-2Zm-2.006-1.951c1.109 0 2.006.907 2.006 1.95h2c0-2.182-1.828-3.95-4.006-3.95v2Zm-.4 0h.4v-2h-.4v2Zm-2.006 1.95c0-1.052.866-1.95 2.006-1.95v-2c-2.227 0-4.006 1.776-4.006 3.95h2Zm2.006 1.95c-1.149 0-2.006-.867-2.006-1.95h-2c0 2.222 1.788 3.95 4.006 3.95v-2Zm7.252 13.532h-.4v2h.4v-2Zm2.005-1.95c0 1.074-.888 1.95-2.005 1.95v2c2.169 0 4.005-1.72 4.005-3.95h-2Zm-2.005-1.95c1.108 0 2.005.906 2.005 1.95h2c0-2.183-1.827-3.95-4.005-3.95v2Zm-.4 0h.4v-2h-.4v2Zm-2.006 1.95c0-1.052.866-1.95 2.005-1.95v-2c-2.226 0-4.005 1.776-4.005 3.95h2Zm2.005 1.95c-1.148 0-2.005-.868-2.005-1.95h-2c0 2.221 1.787 3.95 4.005 3.95v-2Z"
        mask="url(#f)"
      />
    </G>
    <G filter="url(#g)">
      <Mask id="j" fill="#fff">
        <Path
          fillRule="evenodd"
          d="M74.159 62.858h.4c1.644 0 3.006-1.298 3.006-2.95 0-1.613-1.362-2.95-3.005-2.95h-.401c-1.683 0-3.006 1.337-3.006 2.95 0 1.652 1.323 2.95 3.006 2.95Zm6.852 13.534h.401c1.643 0 3.005-1.298 3.005-2.95 0-1.614-1.362-2.951-3.005-2.951h-.4c-1.684 0-3.006 1.337-3.006 2.95 0 1.653 1.322 2.95 3.005 2.95Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="url(#h)"
        fillRule="evenodd"
        d="M74.159 62.858h.4c1.644 0 3.006-1.298 3.006-2.95 0-1.613-1.362-2.95-3.005-2.95h-.401c-1.683 0-3.006 1.337-3.006 2.95 0 1.652 1.323 2.95 3.006 2.95Zm6.852 13.534h.401c1.643 0 3.005-1.298 3.005-2.95 0-1.614-1.362-2.951-3.005-2.951h-.4c-1.684 0-3.006 1.337-3.006 2.95 0 1.653 1.322 2.95 3.005 2.95Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#i)"
        d="M74.56 62.458h-.401v.8h.4v-.8Zm2.605-2.55c0 1.421-1.173 2.55-2.605 2.55v.8c1.853 0 3.405-1.467 3.405-3.35h-.8Zm-2.605-2.55c1.429 0 2.605 1.165 2.605 2.55h.8c0-1.84-1.549-3.35-3.405-3.35v.8Zm-.401 0h.4v-.8h-.4v.8Zm-2.606 2.55c0-1.388 1.14-2.55 2.606-2.55v-.8c-1.9 0-3.406 1.513-3.406 3.35h.8Zm2.606 2.55c-1.47 0-2.606-1.126-2.606-2.55h-.8c0 1.88 1.509 3.35 3.406 3.35v-.8Zm7.253 13.534h-.4v.8h.4v-.8Zm2.605-2.55c0 1.42-1.172 2.55-2.605 2.55v.8c1.853 0 3.405-1.467 3.405-3.35h-.8Zm-2.605-2.551c1.43 0 2.605 1.165 2.605 2.55h.8c0-1.84-1.548-3.35-3.405-3.35v.8Zm-.4 0h.4v-.8h-.4v.8Zm-2.606 2.55c0-1.388 1.14-2.55 2.605-2.55v-.8c-1.9 0-3.405 1.513-3.405 3.35h.8Zm2.605 2.55c-1.469 0-2.605-1.125-2.605-2.55h-.8c0 1.88 1.509 3.35 3.405 3.35v-.8Z"
        mask="url(#j)"
      />
    </G>
    <G filter="url(#k)">
      <Mask id="n" fill="#fff">
        <Path d="M57.129 69.506H52.92v4.17c0 1.612-1.362 2.95-3.005 2.95-1.683 0-3.006-1.338-3.006-2.95v-4.17h-4.247c-1.643 0-3.006-1.299-3.006-2.95 0-1.614 1.363-2.951 3.006-2.951h4.247v-4.13c0-1.613 1.323-2.95 3.006-2.95 1.643 0 3.005 1.337 3.005 2.95v4.13h4.208c1.643 0 3.005 1.337 3.005 2.95 0 1.652-1.362 2.95-3.005 2.95Z" />
      </Mask>
      <Path
        fill="url(#l)"
        d="M57.129 69.506H52.92v4.17c0 1.612-1.362 2.95-3.005 2.95-1.683 0-3.006-1.338-3.006-2.95v-4.17h-4.247c-1.643 0-3.006-1.299-3.006-2.95 0-1.614 1.363-2.951 3.006-2.951h4.247v-4.13c0-1.613 1.323-2.95 3.006-2.95 1.643 0 3.005 1.337 3.005 2.95v4.13h4.208c1.643 0 3.005 1.337 3.005 2.95 0 1.652-1.362 2.95-3.005 2.95Z"
      />
      <Path
        fill="url(#m)"
        d="M52.921 69.506v-.4h-.4v.4h.4Zm-6.01 0h.4v-.4h-.4v.4Zm0-5.901v.4h.4v-.4h-.4Zm6.01 0h-.4v.4h.4v-.4Zm4.208 5.5H52.92v.8h4.208v-.8Zm-4.608.4v4.17h.8v-4.17h-.8Zm0 4.17c0 1.386-1.176 2.55-2.605 2.55v.8c1.857 0 3.405-1.509 3.405-3.35h-.8Zm-2.605 2.55c-1.466 0-2.606-1.161-2.606-2.55h-.8c0 1.838 1.505 3.35 3.406 3.35v-.8Zm-2.606-2.55v-4.17h-.8v4.17h.8Zm-.4-4.57h-4.247v.8h4.247v-.8Zm-4.247 0c-1.433 0-2.606-1.129-2.606-2.55h-.8c0 1.884 1.552 3.35 3.406 3.35v-.8Zm-2.606-2.55c0-1.385 1.177-2.55 2.606-2.55v-.8c-1.857 0-3.406 1.51-3.406 3.35h.8Zm2.606-2.55h4.247v-.8h-4.247v.8Zm4.647-.4v-4.13h-.8v4.13h.8Zm0-4.13c0-1.389 1.14-2.55 2.606-2.55v-.8c-1.9 0-3.406 1.512-3.406 3.35h.8Zm2.606-2.55c1.429 0 2.605 1.165 2.605 2.55h.8c0-1.841-1.548-3.35-3.405-3.35v.8Zm2.605 2.55v4.13h.8v-4.13h-.8Zm.4 4.53h4.208v-.8H52.92v.8Zm4.208 0c1.429 0 2.605 1.165 2.605 2.55h.8c0-1.84-1.548-3.35-3.405-3.35v.8Zm2.605 2.55c0 1.421-1.173 2.55-2.605 2.55v.8c1.853 0 3.405-1.466 3.405-3.35h-.8Z"
        mask="url(#n)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={52.61}
        x2={-20.321}
        y1={47.058}
        y2={82.519}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF759F" />
        <Stop offset={1} stopColor="#FF196E" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={34}
        x2={72.67}
        y1={41.585}
        y2={101.662}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={83.477}
        x2={68.694}
        y1={60.467}
        y2={60.796}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={73.265}
        x2={85.769}
        y1={59.222}
        y2={69.792}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={58.682}
        x2={35.874}
        y1={60.154}
        y2={60.912}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={42.917}
        x2={55.688}
        y1={58.866}
        y2={74.978}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
