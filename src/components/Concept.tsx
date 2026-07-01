import { Box, Text, VStack, Heading } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { conceptIntro, conceptPoints } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { IconBadge } from './IconBadge';
import { CloudMark } from './CloudMark';
import { FlowerMark } from './FlowerMark';
import { MotionBox, MotionSimpleGrid, MotionVStack, useReducedMotionSafe } from './motion';
import { gradients } from '../theme/gradients';

export function Concept() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants: fadeUp, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="concept" position="relative" overflow="hidden" py={{ base: 16, md: 24 }} bgGradient={gradients.bloom}>
      <CloudMark
        color="sage.300"
        drift
        position="absolute"
        top={{ base: '8px', md: '24px' }}
        right={{ base: '-20px', md: '0' }}
        boxSize={{ base: '120px', md: '160px' }}
        opacity={0.18}
        pointerEvents="none"
      />
      <FlowerMark
        color="mustard.500"
        sway
        position="absolute"
        bottom={{ base: '8px', md: '20px' }}
        left={{ base: '-8px', md: '4%' }}
        boxSize={{ base: '40px', md: '56px' }}
        opacity={0.2}
        pointerEvents="none"
      />

      <Box maxW="5xl" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <VStack spacing={6} textAlign="center">
            <SectionHeading eyebrow="CONCEPT" title={t.navConcept} align="center" mx="auto" />
            <Text color="ink.700" fontSize={{ base: 'lg', md: '2xl' }} lineHeight="1.8" maxW="3xl">
              {conceptIntro[lang]}
            </Text>
          </VStack>
        </MotionBox>

        <MotionSimpleGrid
          columns={{ base: 1, sm: 3 }}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 12, md: 16 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {conceptPoints.map((pt) => (
            <MotionVStack key={pt.title.ja} align="center" textAlign="center" spacing={4} variants={fadeUp}>
              <IconBadge icon={pt.icon} size="56px" />
              <Heading fontSize={{ base: 'md', md: 'lg' }} color="ink.900">
                {pt.title[lang]}
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="ink.600" lineHeight="1.8">
                {pt.body[lang]}
              </Text>
            </MotionVStack>
          ))}
        </MotionSimpleGrid>
      </Box>
    </Box>
  );
}
