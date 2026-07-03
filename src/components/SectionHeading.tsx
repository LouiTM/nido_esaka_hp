import { Heading, Text, VStack, type StackProps } from '@chakra-ui/react';

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
      <Text
        fontSize="xs"
        letterSpacing="0.3em"
        fontWeight="700"
        color="mustard.600"
        textTransform="uppercase"
      >
        {eyebrow}
      </Text>
      <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="ink.900">
        {title}
      </Heading>
    </VStack>
  );
}
