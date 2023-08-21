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
  <Svg width={width} height={height} fill="none" viewBox="0 0 65 66" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M16.46 9.96c-.604.811-1.905 3.577-2.531 4.983l43.492 18.244c.565-1.434 1.636-4.322 1.784-5.297.973-5.533-1.6-10.447-6.912-13.246l-21.54-9.036c-5.757-1.872-11.008-.266-14.292 4.351ZM6.202 33.341l7.72-18.402 43.508 18.251-7.78 18.55c-3.184 7.587-9.916 10.248-17.558 7.043L13.393 50.94c-7.57-3.176-10.396-9.961-7.192-17.6Z"
      clipRule="evenodd"
    />
    <G filter="url(#b)" opacity={0.5}>
      <Path
        fill="#F36980"
        d="m42.69 18.647-12.062-4.869c-4.376-1.766-8.047-.01-9.973 4.76l-6.52 16.154c-1.957 4.848-.508 8.598 3.868 10.364l12.063 4.869c4.446 1.794 8.02.073 9.977-4.776l6.52-16.155c1.926-4.77.573-8.552-3.873-10.347Z"
      />
    </G>
    <G filter="url(#c)">
      <Mask
        id="e"
        width={49}
        height={51}
        x={17.819}
        y={17.508}
        fill="#000"
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M17.819 17.508h49v51h-49z" />
        <Path
          fillRule="evenodd"
          d="M19.234 28.049c-.243.983-.373 4.036-.406 5.575H65.99c-.034-1.541-.163-4.619-.404-5.575-1.243-5.479-5.516-9.015-11.498-9.541H30.732c-6.034.5-10.255 4.013-11.498 9.54Zm-.416 5.575V53.58c0 8.283 5.231 13.446 13.44 13.446h20.276C60.821 67.026 66 61.967 66 53.74V33.623H18.819Zm10.773 11.413c.052 1.203 1.036 2.15 2.227 2.095a2.154 2.154 0 0 0 2.046-2.255 2.142 2.142 0 0 0-2.15-2.097c-1.19.055-2.123 1.051-2.123 2.257Zm10.643 0c.052 1.203 1.036 2.15 2.227 2.095a2.154 2.154 0 0 0 2.046-2.255 2.142 2.142 0 0 0-2.15-2.097c-1.19.055-2.123 1.051-2.123 2.257Zm10.643 9.513c0 1.205.958 2.201 2.15 2.228 1.216 0 2.2-.996 2.2-2.228 0-1.23-.983-2.226-2.2-2.226H53a2.179 2.179 0 0 0-2.124 2.226Zm-8.416 2.097c-1.191.055-2.175-.892-2.227-2.097 0-1.206.932-2.2 2.123-2.255 1.166 0 2.124.92 2.15 2.1a2.153 2.153 0 0 1-2.046 2.252Zm-10.669 0c-1.191.055-2.175-.892-2.227-2.097 0-1.206.932-2.2 2.123-2.255 1.166 0 2.124.92 2.15 2.1a2.153 2.153 0 0 1-2.046 2.252Zm21.234-13.838c-1.19.026-2.123.996-2.123 2.202v.026a2.134 2.134 0 0 0 2.201 2.095c1.165-.024 2.098-1.02 2.072-2.226-.052-1.156-.984-2.097-2.15-2.097Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#FEA76A"
        fillOpacity={0.35}
        fillRule="evenodd"
        d="M19.234 28.049c-.243.983-.373 4.036-.406 5.575H65.99c-.034-1.541-.163-4.619-.404-5.575-1.243-5.479-5.516-9.015-11.498-9.541H30.732c-6.034.5-10.255 4.013-11.498 9.54Zm-.416 5.575V53.58c0 8.283 5.231 13.446 13.44 13.446h20.276C60.821 67.026 66 61.967 66 53.74V33.623H18.819Zm10.773 11.413c.052 1.203 1.036 2.15 2.227 2.095a2.154 2.154 0 0 0 2.046-2.255 2.142 2.142 0 0 0-2.15-2.097c-1.19.055-2.123 1.051-2.123 2.257Zm10.643 0c.052 1.203 1.036 2.15 2.227 2.095a2.154 2.154 0 0 0 2.046-2.255 2.142 2.142 0 0 0-2.15-2.097c-1.19.055-2.123 1.051-2.123 2.257Zm10.643 9.513c0 1.205.958 2.201 2.15 2.228 1.216 0 2.2-.996 2.2-2.228 0-1.23-.983-2.226-2.2-2.226H53a2.179 2.179 0 0 0-2.124 2.226Zm-8.416 2.097c-1.191.055-2.175-.892-2.227-2.097 0-1.206.932-2.2 2.123-2.255 1.166 0 2.124.92 2.15 2.1a2.153 2.153 0 0 1-2.046 2.252Zm-10.669 0c-1.191.055-2.175-.892-2.227-2.097 0-1.206.932-2.2 2.123-2.255 1.166 0 2.124.92 2.15 2.1a2.153 2.153 0 0 1-2.046 2.252Zm21.234-13.838c-1.19.026-2.123.996-2.123 2.202v.026a2.134 2.134 0 0 0 2.201 2.095c1.165-.024 2.098-1.02 2.072-2.226-.052-1.156-.984-2.097-2.15-2.097Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#d)"
        d="m18.828 33.624-.65-.014a.65.65 0 0 0 .65.664v-.65Zm.406-5.575.631.156.003-.014-.634-.142Zm46.757 5.575v.65a.65.65 0 0 0 .65-.664l-.65.014Zm-.404-5.575-.634.143.004.015.63-.158Zm-11.498-9.541.058-.648a.64.64 0 0 0-.058-.002v.65Zm-23.357 0v-.65c-.018 0-.036 0-.054.002l.054.648ZM18.819 33.623v-.65a.65.65 0 0 0-.65.65h.65Zm47.181 0h.65a.65.65 0 0 0-.65-.65v.65ZM31.818 47.132l-.028-.65h-.002l.03.65Zm-2.227-2.095h-.65v.028l.65-.028Zm4.273-.16-.65.015v.013l.65-.028Zm-2.15-2.097v-.65l-.03.001.03.65Zm10.747 4.352-.028-.65h-.002l.03.65Zm-2.227-2.095h-.65v.028l.65-.028Zm4.273-.16-.65.015v.013l.65-.028Zm-2.15-2.097v-.65l-.03.001.03.65Zm10.67 13.998-.015.65h.014v-.65Zm-2.15-2.228h.65v-.014l-.65.014Zm2.124-2.226v-.65h-.015l.015.65ZM40.234 54.55h-.65v.027l.65-.027Zm2.227 2.097-.028-.65h-.002l.03.65Zm-.103-4.352v-.65a.6.6 0 0 0-.03.001l.03.65Zm2.149 2.1-.65.014v.014l.65-.028Zm-14.942.154h-.65v.028l.65-.027Zm2.227 2.098-.028-.65h-.002l.03.65Zm-.104-4.352v-.65l-.03.001.03.65Zm2.15 2.1-.65.014v.014l.65-.028Zm19.188-11.586v-.65h-.014l.014.65Zm-2.123 2.228h-.65v.014l.65-.014Zm2.201 2.095-.013-.65h-.001l.014.65Zm2.072-2.226.65-.014-.001-.015-.65.03ZM19.477 33.638c.017-.762.058-1.901.124-2.97.068-1.092.16-2.04.264-2.463l-1.262-.313c-.138.56-.233 1.63-.3 2.696a80.53 80.53 0 0 0-.125 3.022l1.3.028Zm46.514-.664H18.828v1.3H65.99v-1.3Zm-1.034-4.767c.103.409.193 1.353.26 2.45a80.47 80.47 0 0 1 .124 2.981l1.3-.028a81.674 81.674 0 0 0-.126-3.033c-.065-1.066-.16-2.139-.298-2.687l-1.26.317Zm-10.925-9.052c5.729.505 9.747 3.86 10.921 9.037l1.268-.287c-1.312-5.78-5.84-9.496-12.075-10.045l-.114 1.295Zm-23.3.002h23.357v-1.3H30.732v1.3Zm-10.864 9.034c1.176-5.227 5.142-8.556 10.918-9.036l-.108-1.295c-6.291.522-10.767 4.217-12.078 10.046l1.268.285Zm-.4 25.389V33.624h-1.3V53.58h1.3Zm12.79 12.796c-3.966 0-7.15-1.245-9.34-3.427-2.189-2.183-3.45-5.367-3.45-9.37h-1.3c0 4.281 1.355 7.82 3.833 10.29 2.478 2.47 6.015 3.807 10.257 3.807v-1.3Zm20.276 0H32.258v1.3h20.276v-1.3ZM65.35 53.74c0 3.976-1.248 7.118-3.431 9.266-2.185 2.15-5.374 3.371-9.385 3.371v1.3c4.276 0 7.82-1.307 10.297-3.744 2.477-2.439 3.819-5.94 3.819-10.193h-1.3Zm0-20.115V53.74h1.3V33.624h-1.3Zm-46.531.65H66v-1.3H18.819v1.3Zm12.969 12.208c-.81.038-1.51-.608-1.548-1.473l-1.298.056c.066 1.541 1.334 2.788 2.906 2.716l-.06-1.299Zm1.426-1.577a1.504 1.504 0 0 1-1.424 1.577l.056 1.299a2.804 2.804 0 0 0 2.667-2.932l-1.299.056Zm-1.5-1.475c.817 0 1.482.642 1.5 1.462l1.3-.029a2.792 2.792 0 0 0-2.8-2.733v1.3Zm-1.473 1.607c0-.868.669-1.569 1.503-1.607l-.06-1.299c-1.547.072-2.743 1.363-2.743 2.906h1.3Zm12.19 1.445c-.81.038-1.51-.608-1.547-1.473l-1.3.056c.067 1.541 1.335 2.788 2.907 2.716l-.06-1.299Zm1.427-1.577a1.504 1.504 0 0 1-1.425 1.577l.056 1.299a2.804 2.804 0 0 0 2.667-2.932l-1.298.056Zm-1.5-1.475c.816 0 1.481.642 1.499 1.462l1.3-.029a2.792 2.792 0 0 0-2.8-2.733v1.3Zm-1.474 1.607c0-.868.669-1.569 1.504-1.607l-.06-1.299c-1.548.072-2.744 1.363-2.744 2.906h1.3Zm12.157 11.09c-.83-.018-1.514-.716-1.514-1.578h-1.3c0 1.55 1.232 2.844 2.785 2.878l.029-1.3Zm1.537-1.578c0 .88-.7 1.578-1.552 1.578v1.3c1.584 0 2.852-1.294 2.852-2.877h-1.3Zm-1.552-1.575c.852 0 1.552.698 1.552 1.576h1.3c0-1.582-1.269-2.876-2.852-2.876v1.3Zm-.025 0h.026v-1.3H53v1.3Zm-1.474 1.562a1.529 1.529 0 0 1 1.488-1.562l-.029-1.3a2.829 2.829 0 0 0-2.759 2.89l1.3-.029Zm-11.942.041c.066 1.544 1.334 2.791 2.906 2.719l-.06-1.299c-.81.038-1.51-.607-1.547-1.475l-1.3.055Zm2.742-2.931c-1.546.072-2.743 1.36-2.743 2.904h1.3a1.59 1.59 0 0 1 1.504-1.605l-.06-1.299Zm2.83 2.735a2.792 2.792 0 0 0-2.8-2.736v1.3c.816 0 1.482.642 1.5 1.464l1.3-.028Zm-2.668 2.915a2.803 2.803 0 0 0 2.667-2.929l-1.298.056a1.503 1.503 0 0 1-1.425 1.574l.056 1.299Zm-13.573-2.719c.066 1.544 1.334 2.791 2.906 2.719l-.06-1.299c-.81.038-1.51-.607-1.548-1.475l-1.298.055Zm2.742-2.931c-1.547.072-2.743 1.36-2.743 2.904h1.3c0-.868.668-1.567 1.503-1.605l-.06-1.299Zm2.83 2.735a2.792 2.792 0 0 0-2.8-2.736v1.3c.816 0 1.482.642 1.5 1.464l1.3-.028Zm-2.668 2.915a2.803 2.803 0 0 0 2.667-2.929l-1.299.056a1.503 1.503 0 0 1-1.424 1.574l.056 1.299ZM51.553 45.01c0-.862.659-1.534 1.488-1.552l-.029-1.3c-1.554.035-2.76 1.302-2.76 2.852h1.3Zm0 .026v-.026h-1.3v.026h1.3Zm1.537 1.445a1.484 1.484 0 0 1-1.537-1.459l-1.3.028a2.784 2.784 0 0 0 2.865 2.73l-.028-1.3Zm1.436-1.562c.018.864-.646 1.546-1.435 1.562l.026 1.3c1.542-.032 2.742-1.342 2.709-2.89l-1.3.028Zm-1.5-1.46c.8 0 1.463.648 1.5 1.475l1.299-.058c-.067-1.485-1.268-2.718-2.799-2.718v1.3Z"
        mask="url(#e)"
      />
    </G>
    <G filter="url(#f)">
      <Mask id="i" fill="#fff">
        <Path
          fillRule="evenodd"
          d="M54.088 24.615c0 1.156-.88 2.018-1.994 2.018-1.139 0-1.994-.862-1.994-2.018v-7.992c0-1.156.855-2.02 1.994-2.02 1.114 0 1.994.864 1.994 2.02v7.992Zm-19.37 0c0 1.156-.855 2.018-1.994 2.018-1.14 0-1.994-.862-1.994-2.018v-7.992c0-1.156.854-2.02 1.994-2.02 1.14 0 1.994.864 1.994 2.02v7.992Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="url(#g)"
        fillRule="evenodd"
        d="M54.088 24.615c0 1.156-.88 2.018-1.994 2.018-1.139 0-1.994-.862-1.994-2.018v-7.992c0-1.156.855-2.02 1.994-2.02 1.114 0 1.994.864 1.994 2.02v7.992Zm-19.37 0c0 1.156-.855 2.018-1.994 2.018-1.14 0-1.994-.862-1.994-2.018v-7.992c0-1.156.854-2.02 1.994-2.02 1.14 0 1.994.864 1.994 2.02v7.992Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#h)"
        d="M52.094 26.893c1.258 0 2.254-.979 2.254-2.278h-.52c0 1.013-.764 1.758-1.734 1.758v.52Zm-2.254-2.278c0 1.297.969 2.278 2.254 2.278v-.52c-.993 0-1.734-.743-1.734-1.758h-.52Zm0-7.992v7.992h.52v-7.992h-.52Zm2.254-2.28c-1.286 0-2.254.984-2.254 2.28h.52c0-1.016.742-1.76 1.734-1.76v-.52Zm2.254 2.28c0-1.299-.995-2.28-2.254-2.28v.52c.97 0 1.734.747 1.734 1.76h.52Zm0 7.992v-7.992h-.52v7.992h.52Zm-21.624 2.278c1.286 0 2.254-.981 2.254-2.278h-.52c0 1.015-.741 1.758-1.734 1.758v.52Zm-2.254-2.278c0 1.297.968 2.278 2.254 2.278v-.52c-.993 0-1.734-.743-1.734-1.758h-.52Zm0-7.992v7.992h.52v-7.992h-.52Zm2.254-2.28c-1.286 0-2.254.984-2.254 2.28h.52c0-1.016.741-1.76 1.734-1.76v-.52Zm2.254 2.28c0-1.296-.968-2.28-2.254-2.28v.52c.992 0 1.734.744 1.734 1.76h.52Zm0 7.992v-7.992h-.52v7.992h.52Z"
        mask="url(#i)"
      />
    </G>
    <G filter="url(#j)">
      <Mask id="m" fill="#fff">
        <Path
          fillRule="evenodd"
          d="M29.615 45.061c.052 1.203 1.036 2.15 2.227 2.094a2.154 2.154 0 0 0 2.046-2.254 2.142 2.142 0 0 0-2.15-2.097c-1.191.055-2.123 1.051-2.123 2.257Zm10.642 0c.052 1.203 1.036 2.15 2.227 2.094a2.154 2.154 0 0 0 2.046-2.254 2.142 2.142 0 0 0-2.15-2.097c-1.19.055-2.123 1.051-2.123 2.257ZM50.9 54.573c0 1.206.959 2.202 2.15 2.228 1.217 0 2.2-.996 2.2-2.228 0-1.23-.983-2.225-2.2-2.225h-.026a2.179 2.179 0 0 0-2.124 2.225Zm-8.416 2.097c-1.19.055-2.175-.89-2.227-2.097 0-1.205.933-2.199 2.124-2.254 1.165 0 2.123.92 2.15 2.1a2.153 2.153 0 0 1-2.047 2.251Zm-10.669 0c-1.19.055-2.175-.89-2.227-2.097 0-1.205.932-2.199 2.124-2.254 1.165 0 2.123.92 2.149 2.1a2.153 2.153 0 0 1-2.046 2.251ZM53.05 42.833c-1.192.026-2.124.996-2.124 2.202v.026a2.134 2.134 0 0 0 2.201 2.094c1.166-.023 2.098-1.02 2.072-2.225-.052-1.156-.984-2.097-2.15-2.097Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="url(#k)"
        fillRule="evenodd"
        d="M29.615 45.061c.052 1.203 1.036 2.15 2.227 2.094a2.154 2.154 0 0 0 2.046-2.254 2.142 2.142 0 0 0-2.15-2.097c-1.191.055-2.123 1.051-2.123 2.257Zm10.642 0c.052 1.203 1.036 2.15 2.227 2.094a2.154 2.154 0 0 0 2.046-2.254 2.142 2.142 0 0 0-2.15-2.097c-1.19.055-2.123 1.051-2.123 2.257ZM50.9 54.573c0 1.206.959 2.202 2.15 2.228 1.217 0 2.2-.996 2.2-2.228 0-1.23-.983-2.225-2.2-2.225h-.026a2.179 2.179 0 0 0-2.124 2.225Zm-8.416 2.097c-1.19.055-2.175-.89-2.227-2.097 0-1.205.933-2.199 2.124-2.254 1.165 0 2.123.92 2.15 2.1a2.153 2.153 0 0 1-2.047 2.251Zm-10.669 0c-1.19.055-2.175-.89-2.227-2.097 0-1.205.932-2.199 2.124-2.254 1.165 0 2.123.92 2.149 2.1a2.153 2.153 0 0 1-2.046 2.251ZM53.05 42.833c-1.192.026-2.124.996-2.124 2.202v.026a2.134 2.134 0 0 0 2.201 2.094c1.166-.023 2.098-1.02 2.072-2.225-.052-1.156-.984-2.097-2.15-2.097Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#l)"
        d="m31.842 47.155-.011-.26h-.001l.012.26Zm-2.227-2.094h-.26v.011l.26-.011Zm4.273-.16-.26.006v.005l.26-.01Zm-2.15-2.097v-.26h-.012l.012.26Zm10.746 4.351-.01-.26h-.002l.012.26Zm-2.227-2.094h-.26v.011l.26-.011Zm4.273-.16-.26.006v.005l.26-.01Zm-2.15-2.097v-.26h-.011l.012.26Zm10.67 13.997-.006.26h.006v-.26Zm-2.15-2.228h.26v-.005l-.26.005Zm2.124-2.225v-.26h-.006l.006.26Zm-12.767 2.225h-.26v.012l.26-.012Zm2.227 2.097-.01-.26h-.002l.012.26Zm-.103-4.35v-.261h-.012l.012.26Zm2.15 2.099-.26.006v.005l.26-.011Zm-14.943.154h-.26v.012l.26-.012Zm2.227 2.097-.01-.26h-.002l.012.26Zm-.103-4.35v-.261H31.7l.012.26Zm2.149 2.099-.26.006v.005l.26-.011ZM53.05 42.833v-.26h-.006l.006.26Zm-2.124 2.228h-.26v.006l.26-.006Zm2.201 2.094-.005-.26.005.26ZM55.2 44.93l.26-.006v-.006l-.26.012Zm-23.37 1.966c-1.038.048-1.909-.778-1.954-1.846l-.52.022c.058 1.338 1.155 2.405 2.499 2.343l-.024-.52Zm1.799-1.984a1.894 1.894 0 0 1-1.797 1.984l.022.52a2.414 2.414 0 0 0 2.294-2.526l-.52.022Zm-1.89-1.848c1.026 0 1.867.81 1.89 1.843l.52-.012a2.402 2.402 0 0 0-2.41-2.35v.52Zm-1.863 1.997c0-1.07.827-1.949 1.875-1.997l-.024-.52c-1.334.062-2.371 1.176-2.371 2.517h.52Zm12.597 1.835c-1.039.048-1.909-.778-1.955-1.846l-.52.022c.058 1.338 1.156 2.405 2.5 2.343l-.025-.52Zm1.798-1.984a1.894 1.894 0 0 1-1.797 1.984l.022.52a2.413 2.413 0 0 0 2.295-2.526l-.52.022Zm-1.89-1.848c1.026 0 1.867.81 1.89 1.843l.52-.012a2.402 2.402 0 0 0-2.41-2.35v.52Zm-1.863 1.997c0-1.07.827-1.949 1.876-1.997l-.024-.52c-1.334.062-2.372 1.176-2.372 2.517h.52Zm12.538 11.48c-1.046-.023-1.895-.9-1.895-1.968h-.52c0 1.344 1.068 2.459 2.404 2.488l.011-.52Zm1.936-1.968c0 1.092-.87 1.968-1.941 1.968v.52c1.363 0 2.46-1.115 2.46-2.488h-.52Zm-1.941-1.965c1.07 0 1.94.877 1.94 1.965h.52c0-1.37-1.097-2.485-2.46-2.485v.52Zm-.026 0h.026v-.52h-.026v.52Zm-1.864 1.96a1.919 1.919 0 0 1 1.87-1.96l-.012-.52a2.439 2.439 0 0 0-2.378 2.49l.52-.01Zm-11.162.017c.057 1.34 1.155 2.407 2.498 2.345l-.024-.52c-1.038.049-1.909-.777-1.955-1.848l-.52.023Zm2.37-2.526c-1.333.062-2.37 1.173-2.37 2.514h.52c0-1.07.826-1.946 1.875-1.994l-.024-.52Zm2.422 2.354a2.402 2.402 0 0 0-2.41-2.354v.52c1.026 0 1.867.809 1.89 1.846l.52-.012Zm-2.295 2.517a2.413 2.413 0 0 0 2.295-2.522l-.52.022a1.893 1.893 0 0 1-1.797 1.98l.022.52ZM29.33 54.585c.057 1.34 1.155 2.407 2.498 2.345l-.024-.52c-1.038.049-1.909-.777-1.955-1.848l-.52.023Zm2.37-2.526c-1.333.062-2.37 1.173-2.37 2.514h.52c0-1.07.826-1.946 1.875-1.994l-.024-.52Zm2.422 2.354a2.402 2.402 0 0 0-2.41-2.354v.52c1.026 0 1.867.809 1.89 1.846l.52-.012Zm-2.295 2.517a2.413 2.413 0 0 0 2.295-2.522l-.52.022a1.893 1.893 0 0 1-1.797 1.98l.022.52Zm19.36-11.895c0-1.068.823-1.919 1.87-1.942l-.012-.52c-1.336.03-2.378 1.118-2.378 2.462h.52Zm0 .026v-.026h-.52v.026h.52Zm1.935 1.834a1.874 1.874 0 0 1-1.935-1.84l-.52.012a2.394 2.394 0 0 0 2.467 2.348l-.012-.52Zm1.818-1.96c.023 1.07-.802 1.94-1.817 1.96l.01.52c1.316-.026 2.356-1.148 2.327-2.49l-.52.01Zm-1.89-1.842c1.02 0 1.844.824 1.89 1.849l.52-.024c-.058-1.287-1.098-2.345-2.41-2.345v.52Z"
        mask="url(#m)"
      />
    </G>
    <G filter="url(#n)" opacity={0.5}>
      <Path
        fill="url(#o)"
        fillOpacity={0.5}
        d="M21.226 33.821c0 1.114.862 1.994 2.018 1.994h37.365c1.156 0 2.02-.88 2.02-1.994 0-1.139-.864-1.993-2.02-1.993H23.244c-1.156 0-2.018.854-2.018 1.993Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={41.523}
        x2={22.754}
        y1={10.126}
        y2={54.867}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F36880" />
        <Stop offset={1} stopColor="#FEA76A" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={26.329}
        x2={57.45}
        y1={24.16}
        y2={61.642}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={52.68}
        x2={53.381}
        y1={24.766}
        y2={15.73}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={52.038}
        x2={61.536}
        y1={16.421}
        y2={19.984}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={53.431}
        x2={10.163}
        y1={45.332}
        y2={42.481}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={33.673}
        x2={40.411}
        y1={44.435}
        y2={59.735}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={32.401}
        x2={30.916}
        y1={33.765}
        y2={29.115}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
