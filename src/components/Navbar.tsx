import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';

const NAV_ITEMS: { key: keyof typeof strings.ja; href: string }[] = [
  { key: 'navConcept', href: '#concept' },
  { key: 'navGallery', href: '#gallery' },
  { key: 'navMenu', href: '#menu' },
  { key: 'navVoice', href: '#flow' },
  { key: 'navAccess', href: '#access' },
];

export function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = strings[lang];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="cream.100"
      borderBottom="1px solid"
      borderColor="cream.300"
      backdropFilter="saturate(180%) blur(6px)"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={3}
        align="center"
        justify="space-between"
      >
        <ChakraLink href="/" _hover={{ textDecoration: 'none' }}>
          <Text fontFamily="heading" fontSize="2xl" fontWeight="700" color="ink.900">
            {t.brand}
          </Text>
        </ChakraLink>

        <HStack spacing={6} display={{ base: 'none', lg: 'flex' }}>
          {NAV_ITEMS.map((item) => (
            <ChakraLink
              key={item.key}
              href={item.href}
              fontSize="sm"
              color="ink.700"
              _hover={{ color: 'terracotta.600' }}
            >
              {t[item.key]}
            </ChakraLink>
          ))}
        </HStack>

        <HStack spacing={3}>
          <Button
            size="sm"
            variant="outline"
            borderColor="ink.900"
            color="ink.900"
            onClick={toggleLang}
            fontSize="xs"
            letterSpacing="0.1em"
            display={{ base: 'none', sm: 'inline-flex' }}
          >
            {t.langSwitch}
          </Button>
          <Button
            as="a"
            href={studioInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            bg="terracotta.500"
            color="white"
            leftIcon={<FiInstagram />}
            _hover={{ bg: 'terracotta.600' }}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            {t.ctaReserveShort}
          </Button>
          <IconButton
            aria-label="menu"
            icon={<HiOutlineMenu />}
            variant="ghost"
            display={{ base: 'inline-flex', lg: 'none' }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="cream.100">
          <DrawerCloseButton />
          <DrawerBody pt={16}>
            <VStack align="flex-start" spacing={6}>
              {NAV_ITEMS.map((item) => (
                <ChakraLink
                  key={item.key}
                  href={item.href}
                  fontSize="lg"
                  onClick={onClose}
                  color="ink.900"
                >
                  {t[item.key]}
                </ChakraLink>
              ))}
              <Button
                size="sm"
                variant="outline"
                borderColor="ink.900"
                onClick={() => {
                  toggleLang();
                }}
              >
                {t.langSwitch}
              </Button>
              <Button
                as="a"
                href={studioInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                bg="terracotta.500"
                color="white"
                leftIcon={<FiInstagram />}
                _hover={{ bg: 'terracotta.600' }}
              >
                {t.ctaReserve}
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
