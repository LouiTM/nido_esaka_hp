import { Box, Text, VStack, Heading, Icon } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { conceptIntro, conceptPoints } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { PopStar, ConfettiDot, ConfettiRect } from './PopDecor';
import { ScallopDivider } from './ScallopDivider';
import { MotionBox, MotionSimpleGrid, useReducedMotionSafe } from './motion';

// カードごとの配色（オレンジ＝カメラ / 青＝ひとびと / 黄＝入れ替え）と傾き
const pointStyles = [
  { iconBg: 'pop.orange', iconColor: 'white', shadow: 'var(--chakra-colors-pop-orange)', tilt: -1.2 },
  { iconBg: 'pop.blue', iconColor: 'white', shadow: 'var(--chakra-colors-pop-blue)', tilt: 0.8 },
  { iconBg: 'pop.yellow', iconColor: 'pop.black', shadow: 'var(--chakra-colors-pop-yellow)', tilt: -0.8 },
];

export function Concept() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="concept" position="relative" overflow="hidden" pt="80px" pb="120px" bg="pop.offwhite">
      {/* 星・コンフェッティ装飾（外側ラッパーにパララックス係数を付ける） */}
      <Box position="absolute" inset={0} pointerEvents="none">
        <Box data-parallax="0.08" position="absolute" top="60px" left="7%">
          <PopStar color="pop.pink" w="28px" h="28px" transform="rotate(12deg)" />
        </Box>
        <ConfettiDot color="pop.blue" w="13px" h="13px" position="absolute" top="140px" right="8%" />
        <ConfettiRect color="pop.orange" w="11px" h="17px" position="absolute" bottom="120px" left="4%" transform="rotate(-20deg)" />
        <Box data-parallax="-0.06" position="absolute" bottom="90px" right="5%">
          <PopStar color="pop.yellow" w="22px" h="22px" transform="rotate(-10deg)" />
        </Box>
      </Box>

      <Box maxW="1060px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
          <VStack spacing={6} textAlign="center">
            <SectionHeading
              eyebrow="CONCEPT"
              title={t.navConcept}
              kickerBg="pop.yellow"
              kickerColor="pop.black"
              tilt={-2}
              underline="pop.orange"
            />
            <Text color="ink.700" fontSize={{ base: '16px', md: '19px' }} fontWeight="500" lineHeight="2.1" maxW="740px" sx={{ textWrap: 'pretty' }}>
              {conceptIntro[lang]}
            </Text>
          </VStack>
        </MotionBox>

        <MotionSimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing="28px"
          pt="64px"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {conceptPoints.map((pt, i) => {
            const ps = pointStyles[i % pointStyles.length];
            return (
              <MotionBox key={pt.title.ja} variants={fadeUpVariants} display="flex">
              <VStack
                w="full"
                align="center"
                textAlign="center"
                spacing="18px"
                bg="white"
                border="3px solid"
                borderColor="pop.black"
                borderRadius="32px"
                px={8}
                py={10}
                boxShadow={`8px 8px 0 ${ps.shadow}`}
                transform={`rotate(${ps.tilt}deg)`}
                transition="transform 0.2s"
                _hover={{ transform: 'rotate(0deg) translateY(-4px)' }}
              >
                <Box
                  w="92px"
                  h="92px"
                  borderRadius="full"
                  bg={ps.iconBg}
                  border="3px solid"
                  borderColor="pop.black"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={pt.icon} boxSize="34px" color={ps.iconColor} strokeWidth={2.2} />
                </Box>
                <Heading as="h3" fontFamily="heading" fontSize="22px" fontWeight="900" letterSpacing="0.02em" color="pop.black">
                  {pt.title[lang]}
                </Heading>
                <Text fontSize="15px" color="ink.600" lineHeight="2">
                  {pt.body[lang]}
                </Text>
              </VStack>
              </MotionBox>
            );
          })}
        </MotionSimpleGrid>
      </Box>
      <ScallopDivider fill="pop.blueLight" />
    </Box>
  );
}
