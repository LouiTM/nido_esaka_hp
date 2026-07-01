import { Box, Heading, Text, VStack, type StackProps } from '@chakra-ui/react';
import { ApertureMark } from './ApertureMark';

interface SectionHeadingProps extends StackProps {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, align = 'left', ...rest }: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <VStack
      align={isCenter ? 'center' : 'flex-start'}
      spacing={3}
      textAlign={isCenter ? 'center' : 'left'}
      {...rest}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <ApertureMark boxSize="18px" />
        <Text
          fontSize="xs"
          letterSpacing="0.3em"
          fontWeight="600"
          color="terracotta.600"
          textTransform="uppercase"
        >
          {eyebrow}
        </Text>
      </Box>
      <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="ink.900">
        {title}
      </Heading>
    </VStack>
  );
}
