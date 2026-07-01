import { Box, SimpleGrid, VStack, HStack } from '@chakra-ui/react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

// ---------------------------------------------------------------------------
// アニメーションの役割分担:
// - 常時ループする装飾アニメーション（ApertureMarkの回転・FlowerMarkの揺れ・
//   CloudMarkの漂い）は各コンポーネント側でCSS @keyframes を使い、
//   `prefers-reduced-motion` はCSSメディアクエリで無効化する。
// - スクロール/マウントで発火するコンテンツのアニメーション（フェードイン・
//   ステガー表示）はここの framer-motion variants を使い、
//   `useReducedMotionSafe` で reduced-motion 時は無効化する。
// ---------------------------------------------------------------------------

export const MotionBox = motion(Box);
export const MotionSimpleGrid = motion(SimpleGrid);
export const MotionVStack = motion(VStack);
export const MotionHStack = motion(HStack);

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// Hero など、マウント時に要素を1つずつ時間差で登場させたい場合用。
// `custom` prop（index）を渡すと、その順番でdelayがつく。
export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 },
  }),
};

const instant: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export function useReducedMotionSafe() {
  const prefersReduced = useReducedMotion();
  if (!prefersReduced) {
    return { fadeUpVariants, staggerContainer, heroItemVariants };
  }
  return { fadeUpVariants: instant, staggerContainer: instant, heroItemVariants: instant };
}
