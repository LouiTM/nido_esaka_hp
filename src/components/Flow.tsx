import { Box, VStack, HStack, Text, Heading, Divider } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { flowSteps } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { FlowerMark } from './FlowerMark';
import { MotionSimpleGrid, MotionVStack, useReducedMotionSafe } from './motion';
import { gradients } from '../theme/gradients';

export function Flow() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="flow" position="relative" overflow="hidden" py={{ base: 16, md: 24 }} bg="cream.50" bgGradient={gradients.sky}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <SectionHeading eyebrow="HOW IT WORKS" title={t.navVoice} align="center" mx="auto" mb={12} />

        <MotionSimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 8, lg: 6 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {flowSteps.map((step, idx) => (
            <MotionVStack key={step.step} align="flex-start" spacing={3} position="relative" variants={fadeUpVariants}>
              {idx === 0 && (
                <FlowerMark
                  color="mustard.500"
                  sway
                  position="absolute"
                  top="-28px"
                  right="-8px"
                  boxSize="32px"
                  opacity={0.3}
                  pointerEvents="none"
                />
              )}
              <HStack spacing={3} align="baseline">
                <Text
                  fontFamily="heading"
                  fontSize="4xl"
                  color="terracotta.300"
                  fontWeight="700"
                  lineHeight="1"
                >
                  {step.step}
                </Text>
              </HStack>
              <Heading fontSize="md" color="ink.900">
                {step.title[lang]}
              </Heading>
              <Text fontSize="sm" color="ink.600" lineHeight="1.8">
                {step.body[lang]}
              </Text>
              {idx < flowSteps.length - 1 && (
                <Divider display={{ base: 'block', lg: 'none' }} borderColor="cream.300" pt={2} />
              )}
            </MotionVStack>
          ))}
        </MotionSimpleGrid>
      </Box>
    </Box>
  );
}
