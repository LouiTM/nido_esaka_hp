import { Flex, HStack, Text, Link as ChakraLink, Box, Divider } from '@chakra-ui/react';
import { FiInstagram } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { FlowerMark } from './FlowerMark';
import { MotionBox, useReducedMotionSafe } from './motion';

const NAV_ITEMS: { key: keyof typeof strings.ja; href: string }[] = [
  { key: 'navConcept', href: '#concept' },
  { key: 'navGallery', href: '#gallery' },
  { key: 'navMenu', href: '#menu' },
  { key: 'navVoice', href: '#flow' },
  { key: 'navAccess', href: '#access' },
];

export function Footer() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <MotionBox
      as="footer"
      bg="cream.100"
      color="ink.900"
      pt={12}
      pb={8}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariants}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        gap={6}
      >
        <ChakraLink href="/" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center" gap={2}>
          <FlowerMark color="sage.500" filled centerColor="mustard.500" boxSize="26px" />
          <Text fontFamily="heading" fontSize="xl" fontWeight="800">
            {t.brand}
          </Text>
        </ChakraLink>

        <HStack spacing={{ base: 4, md: 7 }} flexWrap="wrap">
          {NAV_ITEMS.map((item) => (
            <ChakraLink
              key={item.key}
              href={item.href}
              fontSize="sm"
              color="ink.700"
              _hover={{ color: 'mustard.700' }}
            >
              {t[item.key]}
            </ChakraLink>
          ))}
        </HStack>

        <ChakraLink
          href={studioInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          gap={2}
          fontSize="sm"
          color="ink.700"
          _hover={{ color: 'mustard.700' }}
        >
          <FiInstagram />
          {t.instaHandle}
        </ChakraLink>
      </Flex>

      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Divider borderColor="cream.300" my={6} />
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          gap={2}
        >
          <Text fontSize="xs" color="ink.400">
            {t.footerNote}
          </Text>
          <Text fontSize="xs" color="ink.400" whiteSpace="nowrap">
            © nido — {t.footerRights}
          </Text>
        </Flex>
      </Box>
    </MotionBox>
  );
}
