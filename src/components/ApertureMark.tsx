import { Box, type BoxProps } from '@chakra-ui/react';

interface ApertureMarkProps extends BoxProps {
  color?: string;
  spin?: boolean;
}

/**
 * "nido" のシグネチャーモチーフ。
 * カメラの絞り羽根と、鳥の巣の"編み"を重ねた六枚羽根のリング。
 * 見出し脇の小さな印や、写真フレームのアクセントとして繰り返し使用する。
 */
export function ApertureMark({ color = 'terracotta.500', spin = false, ...rest }: ApertureMarkProps) {
  const blades = Array.from({ length: 6 });
  return (
    <Box
      as="svg"
      viewBox="0 0 100 100"
      fill="none"
      sx={
        spin
          ? {
              animation: 'nido-spin 40s linear infinite',
              '@keyframes nido-spin': {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
              },
            }
          : undefined
      }
      {...rest}
    >
      <circle cx="50" cy="50" r="47" stroke={color} strokeWidth="1.2" opacity={0.35} />
      {blades.map((_, i) => (
        <path
          key={i}
          d="M50 50 L50 8 A42 42 0 0 1 86.4 29 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          opacity={0.6}
          transform={`rotate(${i * 60} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="6" fill={color} opacity={0.85} />
    </Box>
  );
}
