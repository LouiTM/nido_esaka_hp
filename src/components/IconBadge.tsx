import { Box, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

interface IconBadgeProps {
  icon: IconType;
  size?: string;
  bg?: string;
  color?: string;
  iconSize?: number;
}

export function IconBadge({
  icon,
  size = '44px',
  bg = 'mustard.50',
  color = 'mustard.700',
  iconSize = 5,
}: IconBadgeProps) {
  return (
    <Box
      w={size}
      h={size}
      borderRadius="full"
      bg={bg}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
    >
      <Icon as={icon} color={color} boxSize={iconSize} />
    </Box>
  );
}
