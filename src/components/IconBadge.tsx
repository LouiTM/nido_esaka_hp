import { Box, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

interface IconBadgeProps {
  icon: IconType;
  size?: string;
  bg?: string;
  color?: string;
}

export function IconBadge({ icon, size = '44px', bg = 'terracotta.50', color = 'terracotta.500' }: IconBadgeProps) {
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
      <Icon as={icon} color={color} boxSize={5} />
    </Box>
  );
}
