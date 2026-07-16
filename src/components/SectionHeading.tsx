import { Box, Heading, Text, VStack, type StackProps } from '@chakra-ui/react';
import { inkShadow, tokenToCssVar } from '../theme/pop';

interface SectionHeadingProps extends StackProps {
  /** キッカーピルの英字ラベル（CONCEPT / GALLERY など） */
  eyebrow: string;
  title: string;
  /** キッカーピルの背景色（Chakraトークン） */
  kickerBg: string;
  /** キッカーピルの文字色。既定は白。 */
  kickerColor?: string;
  /** キッカーピルの傾き（deg） */
  tilt?: number;
  /** 見出し下の手描き風アンダーラインの色（Chakraトークン） */
  underline: string;
}

/**
 * ポップ＆ビビッド版のセクション見出し。
 * キッカーピル（黒3px縁・ハードシャドウ・傾き）＋ H2（42px/900）＋
 * 波型SVGストロークのアンダーラインの縦積み。
 */
export function SectionHeading({
  eyebrow,
  title,
  kickerBg,
  kickerColor = 'white',
  tilt = -2,
  underline,
  ...rest
}: SectionHeadingProps) {
  return (
    <VStack align="center" spacing={6} textAlign="center" {...rest}>
      <Box
        display="inline-flex"
        bg={kickerBg}
        border="3px solid"
        borderColor="pop.black"
        borderRadius="full"
        px="18px"
        py="5px"
        boxShadow={inkShadow(3)}
        transform={`rotate(${tilt}deg)`}
      >
        <Text fontFamily="accent" fontSize="14px" fontWeight="800" letterSpacing="0.18em" color={kickerColor}>
          {eyebrow}
        </Text>
      </Box>
      <VStack spacing={2}>
        <Heading
          as="h2"
          fontFamily="heading"
          fontSize={{ base: '34px', md: '42px' }}
          fontWeight="900"
          letterSpacing="0.02em"
          color="pop.black"
        >
          {title}
        </Heading>
        <Box as="svg" viewBox="0 0 160 12" w="150px" h="12px" fill="none">
          <path
            d="M4,8 q16,-9 32,0 t32,0 t32,0 t32,0 t24,0"
            stroke={tokenToCssVar(underline)}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </Box>
      </VStack>
    </VStack>
  );
}
