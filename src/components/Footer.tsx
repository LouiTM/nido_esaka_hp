import { Flex, HStack, Text, Link as ChakraLink, VStack, Box } from '@chakra-ui/react';
import { FiInstagram } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { MotionBox, useReducedMotionSafe } from './motion';

export function Footer() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const year = new Date().getFullYear();
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <MotionBox
      as="footer"
      bg="ink.900"
      color="cream.100"
      py={10}
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
        <VStack align="flex-start" spacing={1}>
          <Text fontFamily="heading" fontSize="xl" fontWeight="700">
            {t.brand}
          </Text>
          <Text fontSize="xs" color="cream.300">
            {t.brandSub}
          </Text>
        </VStack>

        <HStack spacing={5}>
          <ChakraLink
            href={studioInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap={2}
            fontSize="sm"
            _hover={{ color: 'terracotta.300' }}
          >
            <FiInstagram />
            {t.instaHandle}
          </ChakraLink>
        </HStack>
      </Flex>

      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={8}>
        <Text fontSize="xs" color="cream.300" opacity={0.7}>
          {t.footerNote}
        </Text>
        <Text fontSize="xs" color="cream.300" opacity={0.5} mt={2}>
          © {year} nido. {t.footerRights}
        </Text>
      </Box>
    </MotionBox>
  );
}
