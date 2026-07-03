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
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { FlowerMark } from './FlowerMark';

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
      bg="cream.50"
      borderBottom="1px solid"
      borderColor="cream.200"
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
        <ChakraLink href="/" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center" gap={2}>
          <FlowerMark color="sage.500" filled centerColor="mustard.500" boxSize="28px" />
          <Text fontFamily="heading" fontSize="2xl" fontWeight="800" color="ink.900">
            {t.brand}
          </Text>
        </ChakraLink>

        <HStack spacing={7} display={{ base: 'none', lg: 'flex' }}>
          {NAV_ITEMS.map((item) => (
            <ChakraLink
              key={item.key}
              href={item.href}
              fontSize="sm"
              fontWeight="600"
              color="ink.700"
              _hover={{ color: 'mustard.700' }}
            >
              {t[item.key]}
            </ChakraLink>
          ))}
        </HStack>

        <HStack spacing={3}>
          <Button
            variant="outline"
            borderColor="ink.900"
            borderWidth="2px"
            color="ink.900"
            onClick={toggleLang}
            fontSize="xs"
            fontWeight="700"
            borderRadius="full"
            w="42px"
            h="42px"
            minW="42px"
            p={0}
            _hover={{ bg: 'cream.200' }}
            display={{ base: 'none', sm: 'inline-flex' }}
          >
            {t.langSwitch}
          </Button>
          <Button
            as="a"
            href={studioInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            bg="#06C755"
            color="white"
            px={7}
            _hover={{ bg: '#05a648' }}
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
                href={studioInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                bg="#06C755"
                color="white"
                _hover={{ bg: '#05a648' }}
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
