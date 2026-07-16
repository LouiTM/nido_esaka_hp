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
  { key: 'navAccess', href: '#access' },
];

export function Footer() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <MotionBox
      as="footer"
      bg="pop.offwhite"
      color="pop.black"
      pt={12}
      pb={8}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariants}
    >
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        gap={6}
      >
        <ChakraLink href="#top" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center" gap="10px">
          <FlowerMark pop boxSize="30px" />
          <Text fontFamily="heading" fontSize="22px" fontWeight="900">
            {t.brand}
          </Text>
        </ChakraLink>

        <HStack spacing={{ base: 4, md: '28px' }} flexWrap="wrap">
          {NAV_ITEMS.map((item) => (
            <ChakraLink
              key={item.key}
              href={item.href}
              fontSize="14px"
              fontWeight="700"
              color="ink.700"
              _hover={{ color: 'pop.orangeText' }}
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
          fontSize="14px"
          fontWeight="700"
          color="ink.700"
          _hover={{ color: 'pop.orangeText' }}
        >
          <FiInstagram size={16} />
          {t.instaHandle}
        </ChakraLink>
      </Flex>

      <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }}>
        <Divider borderTopWidth="2px" borderColor="pop.border" opacity={1} my={6} />
        <Text fontSize="12px" color="ink.400" textAlign={{ base: 'left', md: 'right' }}>
          © nido — {t.footerRights}
        </Text>
      </Box>
    </MotionBox>
  );
}
