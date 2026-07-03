import { Box, VStack, HStack, Text, Heading, Badge, Wrap, WrapItem } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { menuGroups, menuOptions } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { FlowerMark } from './FlowerMark';
import { CloudMark } from './CloudMark';
import { WaveDivider } from './WaveDivider';
import { MotionSimpleGrid, MotionVStack, useReducedMotionSafe } from './motion';

const menuBadgeKeyByGroup: Record<string, 'menuBadgeKids' | 'menuBadgeFamily'> = {
  kidsPets: 'menuBadgeKids',
  familySimple: 'menuBadgeFamily',
};

// グループごとの配色（スクショ準拠：KIDS & PETS＝ピンク×赤 / FAMILY SIMPLE＝ブルー）
const groupStyles: Record<
  string,
  { badgeBg: string; badgeColor: string; tierBg: string; priceColor: string }
> = {
  kidsPets: { badgeBg: 'mustard.50', badgeColor: 'mustard.700', tierBg: 'terracotta.50', priceColor: 'terracotta.600' },
  familySimple: { badgeBg: 'sage.50', badgeColor: 'sage.600', tierBg: 'sage.50', priceColor: 'sage.600' },
};

export function Menu() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="menu" position="relative" overflow="hidden" pt={{ base: 14, md: 18 }} pb={{ base: 24, md: 28 }} bg="mustard.50">
      <FlowerMark
        color="mustard.300"
        sway
        filled
        centerColor="terracotta.500"
        position="absolute"
        top={{ base: '24px', md: '80px' }}
        left={{ base: '-10px', md: '3%' }}
        boxSize={{ base: '60px', md: '96px' }}
        opacity={0.9}
        pointerEvents="none"
      />
      <CloudMark
        color="white"
        drift
        filled
        position="absolute"
        bottom={{ base: '40px', md: '80px' }}
        right={{ base: '-30px', md: '-10px' }}
        boxSize={{ base: '110px', md: '150px' }}
        opacity={0.6}
        pointerEvents="none"
      />

      <Box maxW="5xl" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <SectionHeading eyebrow="MENU" title={t.menuTitle} align="center" mx="auto" mb={12} />

        <MotionSimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 6, md: 8 }}
          alignItems="start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {menuGroups.map((group) => {
            const gs = groupStyles[group.key] ?? groupStyles.kidsPets;
            return (
              <MotionVStack
                key={group.key}
                align="stretch"
                spacing={5}
                p={{ base: 7, md: 9 }}
                borderRadius="2xl"
                bg="cream.50"
                border={group.featured ? '3px solid' : 'none'}
                borderColor="mustard.500"
                boxShadow="0 18px 40px -22px rgba(27,34,36,0.2)"
                position="relative"
                variants={fadeUpVariants}
              >
                {group.featured && (
                  <Badge
                    position="absolute"
                    top="-14px"
                    right={8}
                    bg="mustard.500"
                    color="white"
                    borderRadius="full"
                    px={4}
                    py={1}
                    fontSize="xs"
                    fontWeight="700"
                    textTransform="none"
                  >
                    {t.menuRecommend}
                  </Badge>
                )}
                {menuBadgeKeyByGroup[group.key] && (
                  <Badge
                    alignSelf="flex-start"
                    bg={gs.badgeBg}
                    color={gs.badgeColor}
                    borderRadius="full"
                    px={3}
                    py={1}
                    fontSize="xs"
                    fontWeight="700"
                    textTransform="none"
                  >
                    {t[menuBadgeKeyByGroup[group.key]]}
                  </Badge>
                )}
                <VStack align="flex-start" spacing={1}>
                  <Heading fontSize="2xl" letterSpacing="0.05em" color="ink.900">
                    {group.title}
                  </Heading>
                  {group.subtitle && (
                    <Text fontSize="sm" fontWeight="700" color="mustard.600" letterSpacing="0.08em">
                      {group.subtitle[lang]}
                    </Text>
                  )}
                </VStack>

                <Text fontSize="sm" color="ink.600" lineHeight="1.9">
                  {group.description[lang]}
                </Text>

                <VStack align="stretch" spacing={3}>
                  {group.tiers.map((tier, i) => (
                    <HStack
                      key={i}
                      justify="space-between"
                      bg={gs.tierBg}
                      borderRadius="xl"
                      px={5}
                      py={4}
                      spacing={4}
                    >
                      <HStack spacing={2} align="baseline" flexWrap="wrap">
                        <Text fontWeight="800" color="ink.900">
                          {tier.duration[lang]}
                        </Text>
                        {tier.note && (
                          <Text fontSize="xs" color="ink.600">
                            {tier.note[lang]}
                          </Text>
                        )}
                      </HStack>
                      <Text fontSize="xl" fontWeight="800" color={gs.priceColor} whiteSpace="nowrap">
                        {tier.price}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </MotionVStack>
            );
          })}
        </MotionSimpleGrid>

        <VStack mt={{ base: 10, md: 12 }} align="stretch" spacing={4}>
          <Text fontSize="md" fontWeight="800" color="ink.900">
            {t.optionsTitle}
          </Text>
          <Wrap spacing={3}>
            {menuOptions.map((opt) => (
              <WrapItem key={opt.label.ja}>
                <HStack
                  spacing={2}
                  px={5}
                  py={2.5}
                  bg="cream.50"
                  border="1px solid"
                  borderColor="mustard.300"
                  borderRadius="full"
                >
                  <Text fontSize="sm" fontWeight="600" color="ink.900">
                    {opt.label[lang]}
                  </Text>
                  <Text fontSize="sm" fontWeight="800" color="mustard.600">
                    {opt.price}
                  </Text>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>
          <Text fontSize="xs" color="ink.400">
            {t.priceNote}
          </Text>
        </VStack>
      </Box>
      <WaveDivider fill="cream.100" />
    </Box>
  );
}
