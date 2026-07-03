import { Box, type BoxProps } from '@chakra-ui/react';

interface CloudMarkProps extends BoxProps {
  color?: string;
  drift?: boolean;
  /**
   * true にすると塗りつぶしのもこもこ雲にする（リデザインの「空感」強化）。
   * false（既定）では従来どおりの線画のまま。
   */
  filled?: boolean;
}

/**
 * "nido" のシグネチャーモチーフ ApertureMark のきょうだいとなる、雲のモチーフ。
 * 「空」の雰囲気づけとして、セクション背景に添える。
 */
// Chakraのカラートークンを、SVGの生属性で使えるCSS変数参照に変換する。
const tokenToCssVar = (c: string) => (c.includes('.') ? `var(--chakra-colors-${c.replace(/\./g, '-')})` : c);

export function CloudMark({ color = 'sage.300', drift = false, filled = false, ...rest }: CloudMarkProps) {
  const cssColor = tokenToCssVar(color);
  return (
    <Box
      as="svg"
      viewBox="0 0 160 90"
      fill="none"
      sx={
        drift
          ? {
              animation: 'nido-drift 18s ease-in-out infinite',
              '@keyframes nido-drift': {
                '0%, 100%': { transform: 'translateX(0)' },
                '50%': { transform: 'translateX(14px)' },
              },
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
              },
            }
          : undefined
      }
      {...rest}
    >
      {filled ? (
        <g fill={cssColor}>
          <ellipse cx="45" cy="55" rx="45" ry="26" />
          <ellipse cx="85" cy="42" rx="38" ry="30" />
          <ellipse cx="120" cy="58" rx="30" ry="22" />
        </g>
      ) : (
        <>
          <circle cx="45" cy="50" r="26" stroke={cssColor} strokeWidth="1.2" opacity={0.5} />
          <circle cx="85" cy="38" r="32" stroke={cssColor} strokeWidth="1.2" opacity={0.5} />
          <circle cx="120" cy="52" r="22" stroke={cssColor} strokeWidth="1.2" opacity={0.5} />
          <line x1="20" y1="72" x2="140" y2="72" stroke={cssColor} strokeWidth="1.2" opacity={0.35} />
        </>
      )}
    </Box>
  );
}
