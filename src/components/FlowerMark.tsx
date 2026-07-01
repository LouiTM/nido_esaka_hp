import { Box, type BoxProps } from '@chakra-ui/react';

interface FlowerMarkProps extends BoxProps {
  color?: string;
  sway?: boolean;
}

/**
 * "nido" のシグネチャーモチーフ ApertureMark のきょうだいとなる、花の線画モチーフ。
 * 「子供・花・空」の雰囲気づけとして、セクション背景に控えめに添える。
 */
export function FlowerMark({ color = 'blush.400', sway = false, ...rest }: FlowerMarkProps) {
  const petals = Array.from({ length: 6 });
  return (
    <Box
      as="svg"
      viewBox="0 0 100 100"
      fill="none"
      sx={
        sway
          ? {
              transformOrigin: 'center',
              animation: 'nido-sway 6s ease-in-out infinite',
              '@keyframes nido-sway': {
                '0%, 100%': { transform: 'rotate(-6deg)' },
                '50%': { transform: 'rotate(6deg)' },
              },
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
              },
            }
          : undefined
      }
      {...rest}
    >
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="27"
          rx="10"
          ry="20"
          stroke={color}
          strokeWidth="1.2"
          opacity={0.55}
          transform={`rotate(${i * 60} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="7" fill={color} opacity={0.85} />
    </Box>
  );
}
