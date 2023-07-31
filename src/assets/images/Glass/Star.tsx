import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  G,
  Mask,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props: SvgProps) => (
  <Svg width={46} height={45} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M20.048 23.846c-1.209-.973-1.415-2.662-.478-3.912.936-1.25 2.713-1.658 4.115-.943l2.218 1.13c1.759.896 2.267 3.041 1.091 4.61-1.175 1.57-3.517 1.873-5.034.653l-1.912-1.538Z"
    />
    <G filter="url(#b)" opacity={0.5}>
      <Path
        fill="#FF00F5"
        d="M21.123 23.243a1.654 1.654 0 0 1-.283-2.313c.554-.739 1.604-.98 2.433-.557l1.31.668c1.04.53 1.34 1.797.646 2.725-.695.927-2.08 1.107-2.976.386l-1.13-.91Z"
      />
    </G>
    <G filter="url(#c)">
      <Mask
        id="e"
        width={16}
        height={14}
        x={15}
        y={20.299}
        fill="#000"
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M15 20.299h16v14H15z" />
        <Path d="M29.475 28.11c-.575 0-1.042-.431-1.042-.96 0-.53.467-.96 1.042-.96.14 0 .273-.05.371-.14a.465.465 0 0 0 .154-.343v-1.74c0-1.472-1.302-2.668-2.9-2.668h-8.2c-1.598 0-2.9 1.196-2.9 2.668v1.796c0 .128.055.251.154.342.098.09.232.141.371.141.594 0 1.042.389 1.042.904 0 .529-.467.96-1.042.96-.29 0-.525.216-.525.482v1.74C16 31.801 17.3 33 18.9 33h8.2c1.6 0 2.9-1.197 2.9-2.669v-1.739c0-.266-.235-.483-.525-.483Z" />
      </Mask>
      <Path
        fill="#E8D1FF"
        fillOpacity={0.35}
        d="M29.475 28.11c-.575 0-1.042-.431-1.042-.96 0-.53.467-.96 1.042-.96.14 0 .273-.05.371-.14a.465.465 0 0 0 .154-.343v-1.74c0-1.472-1.302-2.668-2.9-2.668h-8.2c-1.598 0-2.9 1.196-2.9 2.668v1.796c0 .128.055.251.154.342.098.09.232.141.371.141.594 0 1.042.389 1.042.904 0 .529-.467.96-1.042.96-.29 0-.525.216-.525.482v1.74C16 31.801 17.3 33 18.9 33h8.2c1.6 0 2.9-1.197 2.9-2.669v-1.739c0-.266-.235-.483-.525-.483Z"
      />
      <Path
        fill="url(#d)"
        d="M29.475 29.11a1 1 0 1 0 0-2v2Zm.371-3.06-.677-.737.677.736Zm.154-.343h1-1Zm0-1.74h-1 1Zm-14 0h1-1Zm0 1.796h-1 1Zm.154.342.677-.736-.677.736Zm13.321 1.004a1 1 0 1 0 0 2v-2Zm0 0c-.037 0-.056-.013-.06-.017-.001-.002.003.002.008.013.006.012.01.028.01.045h-2c0 1.158.995 1.96 2.042 1.96v-2Zm-.042.041a.11.11 0 0 1-.01.045l-.007.012c.003-.003.022-.017.059-.017v-2c-1.048 0-2.042.802-2.042 1.96h2Zm.042.04c.378 0 .757-.137 1.048-.405l-1.354-1.472a.451.451 0 0 1 .306-.123v2Zm1.048-.405c.294-.27.477-.657.477-1.078h-2c0-.165.072-.305.169-.394l1.354 1.472ZM31 25.707v-1.74h-2v1.74h2Zm0-1.74c0-2.1-1.83-3.668-3.9-3.668v2c1.126 0 1.9.826 1.9 1.668h2Zm-3.9-3.668h-8.2v2h8.2v-2Zm-8.2 0c-2.07 0-3.9 1.567-3.9 3.668h2c0-.842.774-1.668 1.9-1.668v-2ZM15 23.966v1.797h2v-1.796h-2Zm0 1.797c0 .421.183.807.477 1.078l1.354-1.472c.097.09.169.23.169.394h-2Zm.477 1.078c.291.268.67.405 1.048.405v-2c.1 0 .21.036.306.123l-1.354 1.472Zm1.048.405c.081 0 .102.026.089.014a.165.165 0 0 1-.047-.11h2c0-1.197-1.034-1.904-2.042-1.904v2Zm.042-.096c0-.017.004-.033.01-.045.005-.011.01-.015.007-.013-.003.004-.022.017-.059.017v2c1.047 0 2.042-.801 2.042-1.959h-2Zm-.042-.04c-.762 0-1.525.587-1.525 1.482h2a.497.497 0 0 1-.475.517v-2ZM15 28.591v1.74h2v-1.74h-2Zm0 1.74c0 2.1 1.828 3.668 3.9 3.668v-2c-1.127 0-1.9-.826-1.9-1.669h-2ZM18.9 34h8.2v-2h-8.2v2Zm8.2 0c2.072 0 3.9-1.569 3.9-3.669h-2c0 .843-.773 1.67-1.9 1.67v2Zm3.9-3.669v-1.739h-2v1.74h2Zm0-1.739c0-.895-.763-1.483-1.525-1.483v2a.497.497 0 0 1-.475-.517h2Z"
        mask="url(#e)"
      />
    </G>
    <G filter="url(#f)">
      <Path
        fill="url(#g)"
        d="m25.401 26.882-.825.746.195 1.055a.461.461 0 0 1-.207.471.544.544 0 0 1-.546.036L23 28.692l-1.021.498a.548.548 0 0 1-.544-.035.463.463 0 0 1-.206-.472l.194-1.055-.825-.746a.454.454 0 0 1-.131-.494.508.508 0 0 1 .42-.327l1.138-.154.51-.96A.522.522 0 0 1 23 24.68H23a.52.52 0 0 1 .463.269l.51.96 1.141.154c.195.025.356.15.417.326a.452.452 0 0 1-.13.494Z"
      />
      <Path
        stroke="url(#h)"
        strokeOpacity={0.5}
        strokeWidth={0.2}
        d="m25.334 26.808-.825.746-.041.038.01.054.195 1.055a.361.361 0 0 1-.164.37h-.001c-.13.089-.3.1-.446.03V29.1l-1.018-.498-.044-.02-.044.02-1.02.498h-.001a.448.448 0 0 1-.444-.028.363.363 0 0 1-.164-.37l.195-1.056.01-.055-.042-.037-.825-.746a.355.355 0 0 1-.104-.387.408.408 0 0 1 .34-.26l1.138-.155.05-.006.024-.046.51-.96A.422.422 0 0 1 23 24.78a.42.42 0 0 1 .376.216l.51.96.024.045.051.006 1.14.155h.001c.16.021.288.123.336.26a.352.352 0 0 1-.104.387Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={21.453}
        x2={20.774}
        y1={17.42}
        y2={26.944}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#E0C2FE" />
        <Stop offset={0.885} stopColor="#E547FF" />
        <Stop offset={1} stopColor="#FF45F8" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={18.229}
        x2={27.612}
        y1={22.662}
        y2={34.098}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={25.196}
        x2={19.497}
        y1={25.504}
        y2={25.712}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={20.992}
        x2={25.338}
        y1={26.212}
        y2={26.238}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
