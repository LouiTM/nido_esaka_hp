import { Box, type BoxProps } from '@chakra-ui/react';

interface WaveDividerProps extends BoxProps {
  /** 次セクションの背景色（Chakraトークン、または任意のCSS色）。この波でその色を塗る。 */
  fill: string;
  /** true にするとセクション上端に配置し、前セクションの背景色を波型に流し込む。 */
  flip?: boolean;
}

// Chakraのカラートークンを、SVGの生属性で使えるCSS変数参照に変換する。
const tokenToCssVar = (c: string) => (c.includes('.') ? `var(--chakra-colors-${c.replace(/\./g, '-')})` : c);

/**
 * セクションの下端に重ねる、次セクションの背景色で塗った緩やかな波。
 * 「空とお花に包まれた」世界観に合わせ、セクションの境界を直線でなく波型にする。
 *
 * 使い方: 波を出したいセクションに position="relative" overflow="hidden" を付け、
 * 最後の子として <WaveDivider fill="次セクションの背景色" /> を置く。
 */
export function WaveDivider({ fill, flip = false, ...rest }: WaveDividerProps) {
  return (
    <Box
      position="absolute"
      left={0}
      right={0}
      {...(flip ? { top: '-1px' } : { bottom: '-1px' })}
      height="56px"
      lineHeight={0}
      pointerEvents="none"
      zIndex={3}
      transform={flip ? 'scaleY(-1)' : undefined}
      {...rest}
    >
      <Box as="svg" viewBox="0 0 1440 56" preserveAspectRatio="none" w="full" h="full" display="block">
        <path d="M0,38 C240,6 480,6 720,32 C960,58 1200,58 1440,28 L1440,57 L0,57 Z" fill={tokenToCssVar(fill)} />
      </Box>
    </Box>
  );
}
