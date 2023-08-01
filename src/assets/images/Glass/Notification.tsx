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
const SvgComponent = ({width, height, ...props}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 101.59 89.81"
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      d="M52.499 54.364c-1.383-2.888-1.751-5.17-.825-8.628l.316-1.176c1.207-4.507.948-7.69-.53-11.198-2.267-5.44-7.39-9.727-13.12-11.262l-.243-.065c-5.608-1.503-11.972-.429-16.667 2.95-3.172 2.326-5.142 5.044-6.383 9.676l-.315 1.176c-.927 3.459-2.326 5.266-5.028 7.06-1.988 1.322-3.071 3.416-3.717 5.824-.645 2.41-.466 4.905.624 7.186 1.476 2.78 4.022 4.984 6.945 6.031 4.194 1.654 8.472 2.999 12.862 4.175 4.388 1.176 8.799 2.025 13.227 2.816 3.053.553 6.36-.083 9.027-1.752 2.082-1.431 3.488-3.501 4.133-5.911.645-2.408.754-4.763-.306-6.902Z"
    />
    <Path
      fill="url(#b)"
      d="M30.986 71.188c-1.298-.663-9.688-2.91-11.143-2.986-1.25-.043-2.692.248-3.064 1.635-.286 1.341.176 2.717 1.05 3.745l-.003.002a10.364 10.364 0 0 0 4.181 3.281c.875.369 1.802.611 2.776.744 1.768.21 3.581-.042 5.259-.752l-.002-.004c1.271-.453 2.359-1.413 2.782-2.718.371-1.386-.732-2.36-1.836-2.947Z"
    />
    <G filter="url(#c)" opacity={0.5}>
      <Path
        fill="#0062FF"
        d="M42.923 49.949c-.518-1.805-.582-3.266.031-5.554l.209-.778c.799-2.982.831-5.032.298-7.235-.816-3.416-3.054-5.943-5.716-6.657l-.114-.03c-2.606-.698-5.7.311-8.11 2.734-1.631 1.663-2.707 3.523-3.528 6.587l-.208.779c-.613 2.288-1.371 3.528-2.75 4.825-1.016.955-1.637 2.366-2.063 3.959-.428 1.594-.465 3.203-.056 4.628.569 1.73 1.677 3.034 3.022 3.57 1.924.865 3.902 1.527 5.942 2.074 2.04.546 4.106.88 6.184 1.175 1.431.208 3.043-.367 4.4-1.58 1.066-1.031 1.84-2.442 2.266-4.037.427-1.593.595-3.125.193-4.46Z"
      />
    </G>
    <G filter="url(#d)">
      <Mask
        id="f"
        width={84.478}
        height={81.388}
        x={19.014}
        y={-1.305}
        fill="#000"
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M19.014-1.305h84.478v81.388H19.014z" />
        <Path d="M93.328 39.154c-3.638-2.794-5.587-5.468-6.644-10.486l-.36-1.706c-1.378-6.539-3.771-10.435-7.932-13.958C71.97 7.524 62.65 5.37 54.337 7.122l-.353.074c-8.137 1.715-15.568 7.211-19.375 14.57-2.545 5.025-3.298 9.774-1.882 16.494l.36 1.706c1.058 5.018.441 8.233-1.846 12.275-1.683 2.977-1.71 6.353-.973 9.846.737 3.497 2.583 6.567 5.454 8.774 3.686 2.593 8.365 3.759 12.777 3.203 6.43-.607 12.764-1.661 19.134-3.004 6.365-1.341 12.548-3.116 18.718-4.975 4.257-1.271 8.067-4.226 10.393-8.087 1.732-3.177 2.185-6.732 1.448-10.229-.736-3.492-2.123-6.57-4.864-8.615Z" />
      </Mask>
      <Path
        fill="#3EA0FE"
        fillOpacity={0.35}
        d="M93.328 39.154c-3.638-2.794-5.587-5.468-6.644-10.486l-.36-1.706c-1.378-6.539-3.771-10.435-7.932-13.958C71.97 7.524 62.65 5.37 54.337 7.122l-.353.074c-8.137 1.715-15.568 7.211-19.375 14.57-2.545 5.025-3.298 9.774-1.882 16.494l.36 1.706c1.058 5.018.441 8.233-1.846 12.275-1.683 2.977-1.71 6.353-.973 9.846.737 3.497 2.583 6.567 5.454 8.774 3.686 2.593 8.365 3.759 12.777 3.203 6.43-.607 12.764-1.661 19.134-3.004 6.365-1.341 12.548-3.116 18.718-4.975 4.257-1.271 8.067-4.226 10.393-8.087 1.732-3.177 2.185-6.732 1.448-10.229-.736-3.492-2.123-6.57-4.864-8.615Z"
      />
      <Path
        fill="url(#e)"
        d="M92.719 39.947a1 1 0 1 0 1.218-1.587l-1.218 1.587ZM78.392 13.004l-.649.76.003.003.646-.763ZM34.61 21.766l-.888-.46-.004.008.892.452Zm-3.368 30.475-.87-.493.87.493Zm4.48 18.62-.609.792.034.025.576-.817ZM48.5 74.064l-.094-.996a1.13 1.13 0 0 0-.031.004l.125.992Zm37.852-7.979-.287-.958h-.002l.289.958Zm10.393-8.087.857.516.021-.038-.878-.478Zm-2.819-19.646a1 1 0 0 0-1.195 1.603l1.195-1.603Zm.012.008c-1.765-1.355-3.07-2.642-4.061-4.161-.99-1.517-1.704-3.317-2.214-5.737l-1.957.413c.548 2.598 1.338 4.644 2.496 6.417 1.156 1.77 2.645 3.217 4.518 4.655l1.218-1.587Zm-6.275-9.898-.36-1.706-1.956.412.36 1.707 1.956-.413Zm-.36-1.706c-1.42-6.737-3.92-10.836-8.263-14.515l-1.293 1.526c3.976 3.367 6.263 7.06 7.6 13.401l1.957-.412Zm-8.26-14.513c-6.673-5.694-16.315-7.912-24.91-6.1l.412 1.957c8.027-1.692 17.027.398 23.2 5.664l1.297-1.521Zm-24.91-6.1-.354.075.412 1.957.354-.075-.413-1.957Zm-.354.075C45.359 7.992 37.672 13.67 33.72 21.307l1.776.919C39.161 15.144 46.336 9.83 54.19 8.175l-.412-1.957Zm-20.06 15.096c-2.653 5.238-3.43 10.22-1.969 17.152l1.957-.412c-1.372-6.508-.642-11.023 1.795-15.836l-1.784-.904Zm-1.969 17.152.36 1.706 1.957-.412-.36-1.706-1.957.412Zm.36 1.706c.511 2.428.605 4.358.322 6.14-.283 1.783-.954 3.482-2.06 5.436l1.74.985c1.182-2.087 1.963-4.016 2.295-6.106.332-2.09.206-4.276-.34-6.867l-1.957.412ZM30.37 51.75c-1.85 3.276-1.842 6.933-1.08 10.544l1.957-.412c-.712-3.374-.65-6.47.864-9.148l-1.74-.984Zm-1.08 10.544c.783 3.718 2.752 7 5.822 9.36l1.219-1.585c-2.671-2.054-4.394-4.91-5.084-8.187l-1.957.413Zm5.856 9.386c3.889 2.735 8.817 3.964 13.478 3.377l-.25-1.984c-4.163.524-8.593-.578-12.077-3.03l-1.15 1.636Zm13.447 3.38c6.476-.611 12.85-1.672 19.246-3.02l-.413-1.957c-6.342 1.337-12.638 2.384-19.021 2.986l.188 1.991Zm19.246-3.02c6.409-1.351 12.625-3.136 18.8-4.997l-.577-1.915c-6.164 1.858-12.313 3.622-18.636 4.955l.413 1.957Zm18.798-4.996c4.497-1.343 8.51-4.457 10.964-8.53l-1.714-1.032c-2.198 3.65-5.806 6.446-9.823 7.646l.573 1.916Zm10.985-8.567c1.852-3.396 2.332-7.195 1.549-10.913l-1.957.413c.69 3.276.264 6.586-1.348 9.543l1.756.957Zm1.549-10.913c-.762-3.611-2.23-6.961-5.246-9.211l-1.195 1.603c2.466 1.84 3.772 4.646 4.484 8.02l1.957-.412Z"
        mask="url(#f)"
      />
    </G>
    <G filter="url(#g)">
      <Mask
        id="i"
        width={28.329}
        height={19.062}
        x={55.782}
        y={72.282}
        fill="#000"
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M55.782 72.282h28.329v19.062H55.782z" />
        <Path d="M76.755 74.58c-2.088-.005-14.259 2.56-16.166 3.408-1.625.755-3.278 2.061-2.854 4.073.504 1.899 1.985 3.356 3.768 4.102l-.003.005a14.845 14.845 0 0 0 7.467 1.482 15.666 15.666 0 0 0 4.026-.849 14.847 14.847 0 0 0 6.23-4.369l-.005-.003c1.33-1.402 2.097-3.333 1.791-5.274-.424-2.012-2.464-2.54-4.254-2.574Z" />
      </Mask>
      <Path
        fill="#3EA0FE"
        fillOpacity={0.35}
        d="M76.755 74.58c-2.088-.005-14.259 2.56-16.166 3.408-1.625.755-3.278 2.061-2.854 4.073.504 1.899 1.985 3.356 3.768 4.102l-.003.005a14.845 14.845 0 0 0 7.467 1.482 15.666 15.666 0 0 0 4.026-.849 14.847 14.847 0 0 0 6.23-4.369l-.005-.003c1.33-1.402 2.097-3.333 1.791-5.274-.424-2.012-2.464-2.54-4.254-2.574Z"
      />
      <Path
        fill="url(#h)"
        d="M76.752 75.58a1 1 0 0 0 .005-2l-.005 2Zm-16.163 2.408-.406-.914-.016.007.422.907Zm-2.854 4.073-.978.206a.855.855 0 0 0 .012.05l.966-.256Zm3.768 4.102.841.54a1 1 0 0 0-.455-1.462l-.386.922Zm-.003.005-.841-.54a1 1 0 0 0 .402 1.439l.44-.899Zm7.467 1.482.064.998h.007l-.071-.998Zm4.026-.849.328.945.017-.006-.345-.939Zm6.23-4.369.764.645a1 1 0 0 0-.213-1.479l-.551.834Zm-.005-.003-.726-.688a1 1 0 0 0 .174 1.522l.552-.834Zm1.791-5.274.988-.155a.985.985 0 0 0-.01-.051l-.978.206Zm-4.235-3.574a1 1 0 0 0-.039 2l.039-2Zm-.017 0c-.626-.002-1.87.176-3.31.425-1.48.256-3.27.605-5.049.98-1.78.375-3.557.778-5.014 1.141-1.419.354-2.63.693-3.201.947l.812 1.828c.381-.17 1.408-.469 2.873-.834 1.427-.356 3.18-.753 4.943-1.125 1.762-.372 3.526-.716 4.976-.966 1.487-.257 2.548-.398 2.965-.396l.005-2Zm-16.59 3.5c-.876.407-1.843.998-2.54 1.83-.724.864-1.156 1.999-.87 3.356l1.957-.412c-.138-.654.044-1.18.446-1.66.43-.513 1.102-.952 1.85-1.3l-.843-1.814Zm-3.398 5.237c.598 2.253 2.335 3.925 4.348 4.768l.772-1.845c-1.553-.65-2.778-1.892-3.187-3.436l-1.933.513Zm3.893 3.305-.003.005 1.682 1.08.003-.004-1.682-1.081Zm.4 1.444a15.844 15.844 0 0 0 7.969 1.58l-.128-1.995a13.844 13.844 0 0 1-6.964-1.382l-.878 1.797Zm7.976 1.58a16.664 16.664 0 0 0 4.283-.901l-.655-1.89c-1.256.436-2.51.706-3.77.796l.142 1.995Zm4.3-.907a15.847 15.847 0 0 0 6.649-4.663l-1.529-1.29a13.847 13.847 0 0 1-5.81 4.075l.69 1.878Zm6.436-6.142-.005-.003-1.103 1.668.005.004 1.103-1.669Zm.17 1.52c1.5-1.584 2.416-3.815 2.053-6.118l-1.975.31c.248 1.578-.37 3.21-1.53 4.431l1.451 1.376Zm2.044-6.169c-.286-1.358-1.14-2.221-2.151-2.72-.973-.48-2.097-.63-3.063-.648l-.039 2c.825.015 1.617.146 2.217.442.563.278.94.684 1.079 1.339l1.957-.413Z"
        mask="url(#i)"
      />
    </G>
    <G filter="url(#j)">
      <Path
        fill="url(#k)"
        d="M67.667 17.77c-1.448-.324-2.91.522-3.362 1.891-.152.762-.03 1.57.4 2.213.43.644 1.105 1.1 1.896 1.267l.104.032c2.354.707 4.045 2.79 4.204 5.192a2.876 2.876 0 0 0 2.96 2.725c1.566-.08 2.765-1.372 2.705-2.895-.343-4.844-3.758-8.987-8.506-10.304l-.4-.12Z"
      />
      <Path
        stroke="url(#l)"
        strokeOpacity={0.5}
        strokeWidth={0.2}
        d="m66.621 23.044.008.002.105.031c2.392.719 4.113 2.837 4.275 5.281v.002a2.776 2.776 0 0 0 2.856 2.63c1.512-.078 2.666-1.324 2.61-2.79-.342-4.8-3.726-8.907-8.434-10.212h-.002l-.397-.12c-1.395-.311-2.802.502-3.24 1.819-.146.738-.027 1.515.386 2.131a2.922 2.922 0 0 0 1.833 1.226Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={61.819}
        x2={1.645}
        y1={28.391}
        y2={57.486}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#39AFFD" />
        <Stop offset={1} stopColor="#477FFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={33.56}
        x2={22.309}
        y1={71.641}
        y2={82.476}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#39AFFD" />
        <Stop offset={1} stopColor="#477FFF" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={32.58}
        x2={83.898}
        y1={19.483}
        y2={63.9}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={60.952}
        x2={68.746}
        y1={78.964}
        y2={90.753}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={76.144}
        x2={72.277}
        y1={21.139}
        y2={32.918}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={71.386}
        x2={74.065}
        y1={29.247}
        y2={20.192}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
