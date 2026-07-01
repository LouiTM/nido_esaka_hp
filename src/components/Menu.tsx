import { Box, VStack, HStack, Text, Heading, Badge, Divider } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { menuGroups, menuOptions } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { MotionSimpleGrid, MotionVStack, MotionHStack, useReducedMotionSafe } from './motion';
import { gradients } from '../theme/gradients';

export function Menu() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="menu" py={{ base: 16, md: 24 }} bgGradient={gradients.sun}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading eyebrow="MENU & PRICE" title={t.navMenu} align="center" mx="auto" mb={12} />

        <MotionSimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={6}
          maxW="4xl"
          mx="auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {menuGroups.map((group) => (
            <MotionVStack
              key={group.key}
              align="stretch"
              spacing={5}
              p={7}
              borderRadius="28px"
              bg={group.featured ? 'ink.900' : 'cream.50'}
              color={group.featured ? 'cream.100' : 'ink.900'}
              border="1px solid"
              borderColor={group.featured ? 'ink.900' : 'cream.300'}
              boxShadow={group.featured ? '0 24px 50px -20px rgba(27,34,36,0.45)' : 'none'}
              position="relative"
              variants={fadeUpVariants}
            >
              {group.featured && (
                <Badge
                  position="absolute"
                  top={-3}
                  left={7}
                  bg="terracotta.500"
                  color="white"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="xs"
                >
                  Popular
                </Badge>
              )}
              <VStack align="flex-start" spacing={1}>
                {group.subtitle && (
                  <Text fontSize="xs" opacity={0.7} letterSpacing="0.1em">
                    {group.subtitle[lang]}
                  </Text>
                )}
                <Heading fontSize="xl" letterSpacing="0.05em">
                  {group.title}
                </Heading>
              </VStack>

              <Text fontSize="sm" opacity={0.85} lineHeight="1.8">
                {group.description[lang]}
              </Text>

              <VStack align="stretch" spacing={0} divider={<Divider borderColor={group.featured ? 'whiteAlpha.300' : 'cream.300'} />}>
                {group.tiers.map((tier, i) => (
                  <HStack key={i} justify="space-between" py={3}>
                    <VStack align="flex-start" spacing={0}>
                      <Text fontWeight="700">{tier.duration[lang]}</Text>
                      {tier.note && (
                        <Text fontSize="xs" opacity={0.7}>
                          {tier.note[lang]}
                        </Text>
                      )}
                    </VStack>
                    <Text fontSize="xl" fontWeight="700">
                      {tier.price}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </MotionVStack>
          ))}
        </MotionSimpleGrid>

        <VStack maxW="4xl" mx="auto" mt={8} align="stretch" spacing={3}>
          <Text fontSize="xs" fontWeight="700" letterSpacing="0.1em" color="terracotta.600">
            {t.optionsTitle.toUpperCase()}
          </Text>
          <MotionSimpleGrid
            columns={{ base: 1, sm: 2 }}
            spacing={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {menuOptions.map((opt) => (
              <MotionHStack
                key={opt.label.ja}
                justify="space-between"
                px={5}
                py={3}
                bg="cream.200"
                borderRadius="14px"
                variants={fadeUpVariants}
              >
                <Text fontSize="sm" color="ink.700">
                  {opt.label[lang]}
                </Text>
                <Text fontSize="sm" fontWeight="700" color="ink.900">
                  {opt.price}
                </Text>
              </MotionHStack>
            ))}
          </MotionSimpleGrid>
        </VStack>

        <Text textAlign="center" fontSize="xs" color="ink.400" mt={8}>
          {t.priceNote}
        </Text>
      </Box>
    </Box>
  );
}
