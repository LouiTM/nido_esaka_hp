import { Box, type BoxProps } from '@chakra-ui/react';
import { tokenToCssVar } from '../theme/pop';

interface ScallopDividerProps extends BoxProps {
  /** 次セクションの背景色（Chakraトークン、または任意のCSS色）。このスカラップをその色で塗る。 */
  fill: string;
}

// 半円（rx40 ry20）を80px間隔で18個連ねたスカラップ形状（1440px基準）
const ARCS = Array.from({ length: 18 }, () => 'a40,20 0 0 1 80,0').join(' ');
const SCALLOP_PATH = `M0,20 ${ARCS} L1440,40 L0,40 Z`;

/**
 * セクション下端に重ねる、高さ40pxの「スカラップ（半円の連続）」区切り。
 * ポップ＆ビビッド版の全セクション境界に使う。
 *
 * 使い方: セクションに position="relative" overflow="hidden" を付け、
 * 最後の子として <ScallopDivider fill="次セクションの背景色" /> を置く。
 */
export function ScallopDivider({ fill, ...rest }: ScallopDividerProps) {
  return (
    <Box
      position="absolute"
      left={0}
      right={0}
      bottom="-1px"
      height="40px"
      lineHeight={0}
      pointerEvents="none"
      zIndex={3}
      {...rest}
    >
      <Box as="svg" viewBox="0 0 1440 40" preserveAspectRatio="none" w="full" h="full" display="block">
        <path d={SCALLOP_PATH} fill={tokenToCssVar(fill)} />
      </Box>
    </Box>
  );
}
