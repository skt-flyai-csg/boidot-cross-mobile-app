import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  G,
  Rect,
  Mask,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={27} height={25} fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M18.891 4.292c-.345-.437-.69-.637-1.215-.637H6.038c-.276 0-.5-.228-.526-.533L5.35.995C5.323.672 5.107.407 4.814.349L2.76.01c-.353-.059-.69.199-.75.587-.06.38.181.75.526.817A1.73 1.73 0 0 1 3.937 2.98l.692 9.033c.095 1.254 1.043 2.222 2.189 2.222h9.401c1.095 0 2.026-.883 2.18-2.08l.82-6.23c.077-.57.017-1.196-.328-1.633Z"
      clipRule="evenodd"
    />
    <G filter="url(#b)">
      <Rect
        width={10.335}
        height={6.692}
        x={6.098}
        y={6.196}
        fill="#2AA42B"
        fillOpacity={0.5}
        rx={1.914}
      />
    </G>
    <G filter="url(#c)">
      <Mask
        id="e"
        width={21}
        height={22}
        x={6}
        y={2.759}
        fill="#000"
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M6 2.759h21v22H6z" />
        <Path
          fillRule="evenodd"
          d="M8.954 7.734c-.572 0-.946.217-1.321.692s-.44 1.157-.356 1.775l.89 6.775c.169 1.303 1.18 2.262 2.37 2.262h10.224c1.246 0 2.277-1.052 2.38-2.415l.862-11.259 1.415-.268c.375-.073.637-.475.572-.889-.066-.422-.431-.702-.815-.639l-2.235.37c-.319.064-.553.352-.581.703l-.178 2.314c-.028.331-.272.579-.572.579H8.954Zm11.957 13.137c.787 0 1.425.702 1.425 1.57 0 .857-.637 1.559-1.425 1.559-.777 0-1.415-.702-1.415-1.56 0-.867.638-1.57 1.415-1.57Zm-10.542 0c.788 0 1.425.702 1.425 1.57 0 .857-.637 1.559-1.425 1.559-.777 0-1.415-.702-1.415-1.56 0-.867.638-1.57 1.415-1.57Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#72DC60"
        fillOpacity={0.35}
        fillRule="evenodd"
        d="M8.954 7.734c-.572 0-.946.217-1.321.692s-.44 1.157-.356 1.775l.89 6.775c.169 1.303 1.18 2.262 2.37 2.262h10.224c1.246 0 2.277-1.052 2.38-2.415l.862-11.259 1.415-.268c.375-.073.637-.475.572-.889-.066-.422-.431-.702-.815-.639l-2.235.37c-.319.064-.553.352-.581.703l-.178 2.314c-.028.331-.272.579-.572.579H8.954Zm11.957 13.137c.787 0 1.425.702 1.425 1.57 0 .857-.637 1.559-1.425 1.559-.777 0-1.415-.702-1.415-1.56 0-.867.638-1.57 1.415-1.57Zm-10.542 0c.788 0 1.425.702 1.425 1.57 0 .857-.637 1.559-1.425 1.559-.777 0-1.415-.702-1.415-1.56 0-.867.638-1.57 1.415-1.57Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#d)"
        d="m7.633 8.426.3.237-.3-.237Zm-.356 1.775.379-.051v.002l-.38.05Zm.89 6.775.38-.05v.001l-.38.05Zm14.974-.153-.381-.03.381.03Zm.862-11.259-.381-.03a.383.383 0 0 1 .31-.346l.071.376Zm1.415-.268.073.375h-.001l-.072-.375Zm.572-.889-.378.06.378-.06Zm-.815-.639-.063-.377.063.377Zm-2.235.37-.075-.375.012-.002.063.378Zm-.581.703-.382-.03.382.03Zm-.178 2.314.381.029v.003l-.381-.032ZM7.332 8.189c.208-.263.433-.478.707-.625a1.89 1.89 0 0 1 .915-.213v.766c-.234 0-.407.043-.554.122-.15.081-.3.212-.467.424l-.6-.474Zm-.435 2.064c-.09-.663-.033-1.47.435-2.064l.601.474c-.28.356-.355.912-.277 1.487l-.759.103Zm.89 6.773-.89-6.775.76-.1.89 6.776-.76.1Zm2.75 2.595c-1.408 0-2.56-1.13-2.75-2.595l.76-.099c.147 1.14 1.02 1.928 1.99 1.928v.766Zm10.224 0H10.538v-.766H20.76v.766Zm2.762-2.77c-.116 1.53-1.284 2.77-2.762 2.77v-.766c1.015 0 1.908-.865 1.999-2.061l.763.057Zm.862-11.258-.862 11.259-.763-.059.862-11.258.763.058Zm1.105.079-1.415.268-.143-.752 1.415-.268.143.752Zm.878-1.325c.094.59-.274 1.208-.877 1.324l-.145-.751c.146-.028.303-.216.266-.453l.756-.12Zm-1.255-.957c.618-.101 1.16.351 1.255.959l-.756.117c-.037-.237-.225-.345-.375-.32l-.124-.756Zm-2.236.371 2.235-.37.125.755-2.235.37-.125-.755Zm-.9 1.05c.04-.497.378-.947.889-1.048l.148.751c-.127.025-.257.152-.274.358l-.763-.061ZM21.8 7.125l.178-2.313.763.059-.178 2.313-.763-.059Zm-.19.226c.068 0 .176-.06.19-.229l.763.065c-.042.494-.42.93-.953.93V7.35Zm-12.655 0H21.61v.766H8.954V7.35Zm12.999 15.09c0-.692-.5-1.188-1.042-1.188v-.765c1.033 0 1.807.91 1.807 1.953h-.765Zm-1.042 1.176c.543 0 1.042-.497 1.042-1.177h.765c0 1.035-.776 1.943-1.807 1.943v-.766ZM19.88 22.44c0 .682.5 1.177 1.032 1.177v.766c-1.023 0-1.797-.91-1.797-1.942h.765Zm1.032-1.187c-.53 0-1.032.494-1.032 1.188h-.765c0-1.042.772-1.953 1.797-1.953v.765Zm-9.5 1.188c0-.692-.5-1.188-1.042-1.188v-.765c1.033 0 1.808.91 1.808 1.953h-.766Zm-1.042 1.176c.544 0 1.042-.497 1.042-1.177h.766c0 1.035-.776 1.943-1.808 1.943v-.766ZM9.337 22.44c0 .682.5 1.177 1.032 1.177v.766c-1.023 0-1.797-.91-1.797-1.942h.765Zm1.032-1.187c-.53 0-1.032.494-1.032 1.188h-.765c0-1.042.773-1.953 1.797-1.953v.765Z"
        mask="url(#e)"
      />
    </G>
    <G filter="url(#f)">
      <Mask id="i" fill="#fff">
        <Path
          fillRule="evenodd"
          d="M12.037 13.103h2.596c.393 0 .702-.351.702-.775 0-.433-.309-.774-.702-.774h-2.596c-.394 0-.703.34-.703.774 0 .424.31.775.703.775Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="url(#g)"
        fillRule="evenodd"
        d="M12.037 13.103h2.596c.393 0 .702-.351.702-.775 0-.433-.309-.774-.702-.774h-2.596c-.394 0-.703.34-.703.774 0 .424.31.775.703.775Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#h)"
        fillOpacity={0.5}
        d="M12.037 13.026h2.596v.153h-2.596v-.153Zm2.596 0c.344 0 .626-.309.626-.698h.153c0 .458-.336.851-.78.851v-.153Zm.626-.698c0-.398-.282-.698-.626-.698v-.153c.442 0 .779.382.779.851h-.153Zm-.626-.698h-2.596v-.153h2.596v.153Zm-2.596 0c-.345 0-.626.3-.626.698h-.153c0-.469.336-.85.779-.85v.152Zm-.626.698c0 .39.282.698.626.698v.153c-.443 0-.78-.393-.78-.85h.154Z"
        mask="url(#i)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={19.248}
        x2={9.676}
        y1={0}
        y2={13.566}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#9BF763" />
        <Stop offset={1} stopColor="#26AB5B" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={23.014}
        x2={9.931}
        y1={6.117}
        y2={21.133}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={11.618}
        x2={16.048}
        y1={11.834}
        y2={12.207}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={14.904}
        x2={11.507}
        y1={12.073}
        y2={12.122}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;