import { Box, Text, VStack, Heading } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { conceptIntro, conceptPoints } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { IconBadge } from './IconBadge';
import { CloudMark } from './CloudMark';
import { FlowerMark } from './FlowerMark';
import { WaveDivider } from './WaveDivider';
import { MotionBox, MotionSimpleGrid, MotionVStack, useReducedMotionSafe } from './motion';

// カードごとのアイコン配色（スクショ準拠：赤＝カメラ / 青＝ひとびと / 黄＝入れ替え）
const pointColors = [
  { bg: 'terracotta.50', color: 'terracotta.500' },
  { bg: 'sage.50', color: 'sage.500' },
  { bg: 'mustard.50', color: 'mustard.600' },
];

export function Concept() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants: fadeUp, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="concept" position="relative" overflow="hidden" pt={{ base: 14, md: 18 }} pb={{ base: 24, md: 28 }} bg="cream.100">
      <CloudMark
        color="sage.300"
        drift
        filled
        position="absolute"
        top={{ base: '8px', md: '24px' }}
        right={{ base: '-20px', md: '-10px' }}
        boxSize={{ base: '120px', md: '160px' }}
        opacity={0.5}
        pointerEvents="none"
      />
      <FlowerMark
        color="mustard.300"
        sway
        filled
        centerColor="terracotta.500"
        position="absolute"
        bottom={{ base: '8px', md: '20px' }}
        left={{ base: '-12px', md: '-1%' }}
        boxSize={{ base: '72px', md: '110px' }}
        opacity={0.9}
        pointerEvents="none"
      />

      <Box maxW="5xl" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <VStack spacing={7} textAlign="center">
            <SectionHeading eyebrow="CONCEPT" title={t.navConcept} align="center" mx="auto" />
            <Text color="ink.700" fontSize={{ base: 'lg', md: 'xl' }} lineHeight="2" maxW="3xl">
              {conceptIntro[lang]}
            </Text>
          </VStack>
        </MotionBox>

        <MotionSimpleGrid
          columns={{ base: 1, sm: 3 }}
          spacing={6}
          pt={{ base: 12, md: 16 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {conceptPoints.map((pt, i) => (
            <MotionVStack
              key={pt.title.ja}
              align="center"
              textAlign="center"
              spacing={5}
              variants={fadeUp}
              bg="cream.50"
              borderRadius="2xl"
              p={{ base: 8, md: 10 }}
              boxShadow="0 16px 40px -20px rgba(27,34,36,0.15)"
            >
              <IconBadge
                icon={pt.icon}
                size="88px"
                iconSize={7}
                bg={pointColors[i % pointColors.length].bg}
                color={pointColors[i % pointColors.length].color}
              />
              <Heading fontSize={{ base: 'lg', md: 'xl' }} color="ink.900">
                {pt.title[lang]}
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="ink.600" lineHeight="2">
                {pt.body[lang]}
              </Text>
            </MotionVStack>
          ))}
        </MotionSimpleGrid>
      </Box>
      <WaveDivider fill="cream.50" />
    </Box>
  );
}
