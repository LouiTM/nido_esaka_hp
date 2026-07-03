import { Box, type BoxProps } from '@chakra-ui/react';

interface FlowerMarkProps extends BoxProps {
  color?: string;
  sway?: boolean;
  /**
   * true にすると花びらを塗りつぶしにする（リデザインの「もっとお花感・カラフルに」
   * という要望に対応）。false（既定）では従来どおりの線画のまま。
   */
  filled?: boolean;
  /** filled=true の時の中心の丸の色。既定は白系（花芯を明るく見せる）。 */
  centerColor?: string;
}

/**
 * Chakraのカラートークン（例: 'blush.400'）を、SVGのfill/stroke属性で使える
 * CSS変数参照に変換する。SVG要素の生属性はChakraのトークン解決を通らないため。
 */
const tokenToCssVar = (c: string) => (c.includes('.') ? `var(--chakra-colors-${c.replace(/\./g, '-')})` : c);

/**
 * "nido" のシグネチャーモチーフ ApertureMark のきょうだいとなる、花のモチーフ。
 * 「子供・花・空」の雰囲気づけとして、セクション背景に添える。
 * `filled` で「線画（控えめ）」と「塗り（大胆・カラフル）」を切り替えられる。
 */
export function FlowerMark({
  color = 'blush.400',
  sway = false,
  filled = false,
  centerColor = 'cream.50',
  ...rest
}: FlowerMarkProps) {
  const petals = Array.from({ length: 5 });
  const petalColor = tokenToCssVar(color);
  const coreColor = tokenToCssVar(filled ? centerColor : color);
  return (
    <Box
      as="svg"
      viewBox="0 0 100 100"
      fill="none"
      sx={
        sway
          ? {
              // 「左右にとてもゆっくり揺れる」— 茎で揺れる花のように下端を支点にする
              transformOrigin: 'center bottom',
              animation: 'nido-sway 10s ease-in-out infinite',
              '@keyframes nido-sway': {
                '0%, 100%': { transform: 'rotate(-5deg)' },
                '50%': { transform: 'rotate(5deg)' },
              },
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
              },
            }
          : undefined
      }
      {...rest}
    >
      {filled
        ? petals.map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="25"
              rx="14"
              ry="22"
              fill={petalColor}
              transform={`rotate(${i * 72} 50 50)`}
            />
          ))
        : petals.map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="27"
              rx="10"
              ry="20"
              stroke={petalColor}
              strokeWidth="1.2"
              opacity={0.55}
              transform={`rotate(${i * 72} 50 50)`}
            />
          ))}
      <circle cx="50" cy="50" r={filled ? 12 : 7} fill={coreColor} opacity={filled ? 1 : 0.85} />
    </Box>
  );
}
