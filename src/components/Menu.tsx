import { Box, VStack, HStack, Text, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { menuGroups, menuOptions } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { PopBalloon, PopStar } from './PopDecor';
import { ScallopDivider } from './ScallopDivider';
import { inkShadow } from '../theme/pop';
import { MotionBox, MotionSimpleGrid, MotionVStack, useReducedMotionSafe } from './motion';

const menuBadgeKeyByGroup: Record<string, 'menuBadgeKids' | 'menuBadgeFamily'> = {
  kidsPets: 'menuBadgeKids',
  familySimple: 'menuBadgeFamily',
};

// グループごとの配色・傾き（KIDS & PETS＝オレンジ / FAMILY SIMPLE＝ブルー）
const groupStyles: Record<
  string,
  { chipBg: string; chipColor: string; tierBg: string; priceColor: string; shadow: string; tilt: number }
> = {
  kidsPets: {
    chipBg: 'pop.yellowLight',
    chipColor: 'pop.yellowText',
    tierBg: 'pop.orangeLight',
    priceColor: 'pop.orangeText',
    shadow: 'var(--chakra-colors-pop-orange)',
    tilt: -0.6,
  },
  familySimple: {
    chipBg: 'pop.blueLight',
    chipColor: 'pop.blueText',
    tierBg: 'pop.blueLight',
    priceColor: 'pop.blueText',
    shadow: 'var(--chakra-colors-pop-blue)',
    tilt: 0.6,
  },
};

// オプション価格の文字色ローテーション（デザインリファレンスの並びそのまま）
const OPTION_PRICE_COLORS = [
  'pop.orangeText',
  'pop.blueText',
  'pop.pinkText',
  'pop.yellowTextSoft',
  'pop.orangeText',
  'pop.blueText',
];

export function Menu() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="menu" position="relative" overflow="hidden" pt="80px" pb="120px" bg="pop.yellowLight">
      {/* 風船・星装飾（外側ラッパーにパララックス係数を付ける） */}
      <Box position="absolute" inset={0} pointerEvents="none">
        <Box data-parallax="0.07" position="absolute" top="120px" right="4%">
          <PopBalloon color="pop.pink" curve="left" w="56px" h="102px" duration={8} />
        </Box>
        <Box data-parallax="-0.06" position="absolute" bottom="140px" left="4%">
          <PopStar color="pop.blue" w="26px" h="26px" transform="rotate(14deg)" />
        </Box>
      </Box>

      <Box maxW="1060px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
          <VStack align="center" spacing={6} mb="56px">
            <SectionHeading eyebrow="MENU" title={t.menuTitle} kickerBg="pop.orange" tilt={-2} underline="pop.yellow" />
          </VStack>
        </MotionBox>

        <MotionSimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="36px"
          alignItems="start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {menuGroups.map((group) => {
            const gs = groupStyles[group.key] ?? groupStyles.kidsPets;
            return (
              <MotionBox key={group.key} variants={fadeUpVariants}>
              <VStack
                align="stretch"
                spacing={5}
                px={{ base: 6, md: '36px' }}
                py={{ base: 8, md: '40px' }}
                borderRadius="36px"
                bg="white"
                border="3px solid"
                borderColor="pop.black"
                boxShadow={`10px 10px 0 ${gs.shadow}`}
                position="relative"
                transform={`rotate(${gs.tilt}deg)`}
              >
                {group.featured && (
                  <HStack
                    position="absolute"
                    top="-22px"
                    right="20px"
                    spacing="6px"
                    bg="pop.orange"
                    color="white"
                    border="3px solid"
                    borderColor="pop.black"
                    borderRadius="full"
                    px="18px"
                    py="6px"
                    fontFamily="heading"
                    fontSize="14px"
                    fontWeight="900"
                    transform="rotate(3deg)"
                    boxShadow={inkShadow(3)}
                  >
                    <PopStar color="pop.yellow" w="14px" h="14px" />
                    <Text as="span">{t.menuRecommend}</Text>
                  </HStack>
                )}
                {menuBadgeKeyByGroup[group.key] && (
                  <Box
                    alignSelf="flex-start"
                    bg={gs.chipBg}
                    color={gs.chipColor}
                    border="2px solid"
                    borderColor="pop.black"
                    borderRadius="full"
                    px="14px"
                    py="4px"
                    fontSize="12px"
                    fontWeight="700"
                  >
                    {t[menuBadgeKeyByGroup[group.key]]}
                  </Box>
                )}
                <VStack align="flex-start" spacing={1}>
                  <Heading as="h3" fontFamily="accent" fontSize="30px" fontWeight="800" letterSpacing="0.04em" color="pop.black">
                    {group.title}
                  </Heading>
                  {group.subtitle && (
                    <Text fontSize="14px" fontWeight="700" color="pop.orangeText" letterSpacing="0.08em">
                      {group.subtitle[lang]}
                    </Text>
                  )}
                </VStack>

                <Text fontSize="14px" color="ink.600" lineHeight="1.9">
                  {group.description[lang]}
                </Text>

                <VStack align="stretch" spacing={3}>
                  {group.tiers.map((tier, i) => (
                    <HStack
                      key={i}
                      justify="space-between"
                      bg={gs.tierBg}
                      border="2px solid"
                      borderColor="pop.black"
                      borderRadius="18px"
                      px={5}
                      py="14px"
                      spacing={4}
                    >
                      <HStack spacing={2} align="baseline" flexWrap="wrap">
                        <Text fontFamily="heading" fontWeight="900" color="pop.black">
                          {tier.duration[lang]}
                        </Text>
                        {tier.note && (
                          <Text fontSize="12px" fontWeight="500" color="ink.600">
                            {tier.note[lang]}
                          </Text>
                        )}
                      </HStack>
                      <Text fontFamily="accent" fontSize="24px" fontWeight="800" color={gs.priceColor} whiteSpace="nowrap">
                        {tier.price}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
              </MotionBox>
            );
          })}
        </MotionSimpleGrid>

        <MotionVStack
          mt="56px"
          align="stretch"
          spacing={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <Text fontFamily="heading" fontSize="18px" fontWeight="900" color="pop.black">
            {t.optionsTitle}
          </Text>
          <Wrap spacing={3}>
            {menuOptions.map((opt, i) => (
              <WrapItem key={opt.label.ja}>
                <HStack
                  spacing={2}
                  px={5}
                  py="10px"
                  bg="white"
                  border="2px solid"
                  borderColor="pop.black"
                  borderRadius="full"
                  boxShadow={inkShadow(3)}
                >
                  <Text fontSize="14px" fontWeight="700" color="pop.black">
                    {opt.label[lang]}
                  </Text>
                  <Text fontFamily="accent" fontSize="15px" fontWeight="800" color={OPTION_PRICE_COLORS[i % OPTION_PRICE_COLORS.length]}>
                    {opt.price}
                  </Text>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>
          <Text fontSize="12px" color="ink.400">
            {t.priceNote}
          </Text>
        </MotionVStack>
      </Box>
      <ScallopDivider fill="pop.offwhite" />
    </Box>
  );
}
