import { Box, type BoxProps } from '@chakra-ui/react';

interface CloudMarkProps extends BoxProps {
  color?: string;
  drift?: boolean;
}

/**
 * "nido" のシグネチャーモチーフ ApertureMark のきょうだいとなる、雲の線画モチーフ。
 * 「空」の雰囲気づけとして、セクション背景に控えめに添える。
 */
export function CloudMark({ color = 'sage.300', drift = false, ...rest }: CloudMarkProps) {
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
      <circle cx="45" cy="50" r="26" stroke={color} strokeWidth="1.2" opacity={0.5} />
      <circle cx="85" cy="38" r="32" stroke={color} strokeWidth="1.2" opacity={0.5} />
      <circle cx="120" cy="52" r="22" stroke={color} strokeWidth="1.2" opacity={0.5} />
      <line x1="20" y1="72" x2="140" y2="72" stroke={color} strokeWidth="1.2" opacity={0.35} />
    </Box>
  );
}
