import { Box, Text, Heading } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { flowSteps } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { FlowerMark } from './FlowerMark';
import { WaveDivider } from './WaveDivider';
import { MotionSimpleGrid, MotionVStack, useReducedMotionSafe } from './motion';

export function Flow() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="flow" position="relative" overflow="hidden" py={{ base: 20, md: 24 }} bg="sage.50">
      {/* 前後のセクションとの境界を、クリーム色の波で挟む */}
      <WaveDivider flip fill="cream.100" />

      <FlowerMark
        color="sage.300"
        sway
        filled
        centerColor="white"
        position="absolute"
        top={{ base: '48px', md: '96px' }}
        right={{ base: '-10px', md: '5%' }}
        boxSize={{ base: '52px', md: '80px' }}
        opacity={0.9}
        pointerEvents="none"
      />

      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <SectionHeading eyebrow="HOW IT WORKS" title={t.navVoice} align="center" mx="auto" mb={14} />

        <MotionSimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, lg: 8 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {flowSteps.map((step) => (
            <MotionVStack key={step.step} align="center" textAlign="center" spacing={4} variants={fadeUpVariants}>
              <Box
                w="64px"
                h="64px"
                borderRadius="full"
                bg="mustard.500"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontFamily="heading"
                fontWeight="800"
                fontSize="xl"
                boxShadow="0 10px 20px -8px rgba(206,147,18,0.6)"
              >
                {step.step}
              </Box>
              <Heading fontSize="md" color="ink.900">
                {step.title[lang]}
              </Heading>
              <Text fontSize="sm" color="ink.600" lineHeight="2" maxW="260px">
                {step.body[lang]}
              </Text>
            </MotionVStack>
          ))}
        </MotionSimpleGrid>
      </Box>
      <WaveDivider fill="cream.100" />
    </Box>
  );
}
