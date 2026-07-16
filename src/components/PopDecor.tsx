import { Box, type BoxProps } from '@chakra-ui/react';
import { tokenToCssVar } from '../theme/pop';

// ---------------------------------------------------------------------------
// ポップ＆ビビッド版の装飾SVG（雲・風船・星・コンフェッティ・ガーランド旗）。
// すべて絶対配置・pointer-events:none で使う前提。位置は親からposition propsで渡す。
// 常時ループするアニメーションは index.css の @keyframes（nido-drift / nido-bob）を
// 参照し、`prefers-reduced-motion` 時は .nido-anim クラスで停止する。
// ---------------------------------------------------------------------------

interface PopCloudProps extends BoxProps {
  /** drift アニメーションの周期（秒）。0で静止。 */
  duration?: number;
  /** アニメーションを逆再生する */
  reverse?: boolean;
}

/** ふわふわ漂う白い雲 */
export function PopCloud({ duration = 18, reverse = false, ...rest }: PopCloudProps) {
  return (
    <Box
      as="svg"
      className="nido-anim"
      viewBox="0 0 160 90"
      fill="none"
      pointerEvents="none"
      animation={duration ? `nido-drift ${duration}s ease-in-out infinite${reverse ? ' reverse' : ''}` : undefined}
      {...rest}
    >
      <g fill="white">
        <ellipse cx="45" cy="55" rx="45" ry="26" />
        <ellipse cx="85" cy="42" rx="38" ry="30" />
        <ellipse cx="120" cy="58" rx="30" ry="22" />
      </g>
    </Box>
  );
}

interface PopBalloonProps extends BoxProps {
  /** 風船の色（Chakraトークン可） */
  color: string;
  /** 紐のカーブ方向 */
  curve?: 'left' | 'right';
  /** bob アニメーションの周期（秒）。0で静止。 */
  duration?: number;
}

/** ぷかぷか浮かぶ風船（黒3px縁取り） */
export function PopBalloon({ color, curve = 'left', duration = 7, ...rest }: PopBalloonProps) {
  const fill = tokenToCssVar(color);
  const ink = tokenToCssVar('pop.black');
  const stringPath = curve === 'left' ? 'M30,64 Q22,84 32,106' : 'M30,64 Q38,84 28,106';
  return (
    <Box
      as="svg"
      className="nido-anim"
      viewBox="0 0 60 110"
      fill="none"
      pointerEvents="none"
      animation={duration ? `nido-bob ${duration}s ease-in-out infinite` : undefined}
      {...rest}
    >
      <path d={stringPath} stroke={ink} strokeWidth="3" fill="none" />
      <ellipse cx="30" cy="34" rx="24" ry="30" fill={fill} stroke={ink} strokeWidth="3" />
      <polygon points="24,62 36,62 30,70" fill={fill} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
    </Box>
  );
}

interface PopStarProps extends BoxProps {
  /** 星の色（Chakraトークン可） */
  color: string;
}

/** 黒縁取りの星。傾きは transform="rotate(..deg)" で渡す。 */
export function PopStar({ color, ...rest }: PopStarProps) {
  return (
    <Box as="svg" viewBox="0 0 100 100" pointerEvents="none" {...rest}>
      <polygon
        points="50,5 61,38 95,38 68,59 78,92 50,72 22,92 32,59 5,38 39,38"
        fill={tokenToCssVar(color)}
        stroke={tokenToCssVar('pop.black')}
        strokeWidth="5"
      />
    </Box>
  );
}

/** 丸コンフェッティ（黒2px縁取りのドット） */
export function ConfettiDot({ color, ...rest }: PopStarProps) {
  return (
    <Box
      w="12px"
      h="12px"
      borderRadius="full"
      bg={color}
      border="2px solid"
      borderColor="pop.black"
      pointerEvents="none"
      {...rest}
    />
  );
}

/** 角コンフェッティ（黒2px縁取りの小さな長方形）。傾きは transform で渡す。 */
export function ConfettiRect({ color, ...rest }: PopStarProps) {
  return (
    <Box
      w="10px"
      h="16px"
      bg={color}
      border="2px solid"
      borderColor="pop.black"
      borderRadius="4px"
      pointerEvents="none"
      {...rest}
    />
  );
}

// ガーランド旗の三角形（座標と色はデザインリファレンスそのまま）
const GARLAND_FLAGS: { points: string; fill: string }[] = [
  { points: '30,9 102,10 66,52', fill: '#FF5A3C' },
  { points: '150,11 222,13 186,55', fill: '#FFC61A' },
  { points: '270,13 342,14 306,56', fill: '#FFFFFF' },
  { points: '390,14 462,15 426,58', fill: '#FF7BAC' },
  { points: '510,15 582,16 546,58', fill: '#FFC61A' },
  { points: '630,16 702,16 666,59', fill: '#FF5A3C' },
  { points: '750,16 822,16 786,59', fill: '#FFFFFF' },
  { points: '870,15 942,15 906,58', fill: '#FF7BAC' },
  { points: '990,14 1062,14 1026,57', fill: '#FFC61A' },
  { points: '1110,13 1182,12 1146,56', fill: '#FF5A3C' },
  { points: '1230,11 1302,10 1266,54', fill: '#FFFFFF' },
  { points: '1350,9 1422,8 1386,51', fill: '#FF7BAC' },
];

/** ヒーロー最上部に張る波状のガーランド旗（4色ローテーション・黒3px縁） */
export function PopGarland(props: BoxProps) {
  const ink = tokenToCssVar('pop.black');
  return (
    <Box
      as="svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      position="absolute"
      top={0}
      left={0}
      w="full"
      h="60px"
      pointerEvents="none"
      {...props}
    >
      <path d="M0,6 Q720,22 1440,6" stroke={ink} strokeWidth="3" fill="none" />
      {GARLAND_FLAGS.map((flag) => (
        <polygon key={flag.points} points={flag.points} fill={flag.fill} stroke={ink} strokeWidth="3" />
      ))}
    </Box>
  );
}
