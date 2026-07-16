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
import { pressable } from '../theme/pop';

// 各ナビ項目のホバー時ピル背景色（セクションごとのテーマ淡色）
const NAV_ITEMS: { key: keyof typeof strings.ja; href: string; hoverBg: string }[] = [
  { key: 'navConcept', href: '#concept', hoverBg: 'pop.yellowLight' },
  { key: 'navGallery', href: '#gallery', hoverBg: 'pop.blueLight' },
  { key: 'navMenu', href: '#menu', hoverBg: 'pop.orangeLight' },
  { key: 'navAccess', href: '#access', hoverBg: 'pop.pinkLight' },
];

const pressableProps = pressable(3);

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
      bg="white"
      borderBottom="2px solid"
      borderColor="pop.border"
    >
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={3}
        align="center"
        justify="space-between"
      >
        <ChakraLink href="/" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center" gap="10px">
          <FlowerMark pop boxSize="34px" />
          <Text fontFamily="heading" fontSize="26px" fontWeight="900" color="pop.black">
            {t.brand}
          </Text>
        </ChakraLink>

        <HStack spacing={2} display={{ base: 'none', lg: 'flex' }}>
          {NAV_ITEMS.map((item) => (
            <ChakraLink
              key={item.key}
              href={item.href}
              fontSize="14px"
              fontWeight="700"
              color="pop.black"
              px={4}
              py={2}
              borderRadius="full"
              _hover={{ bg: item.hoverBg, color: 'pop.black', textDecoration: 'none' }}
            >
              {t[item.key]}
            </ChakraLink>
          ))}
        </HStack>

        <HStack spacing={3}>
          <Button
            {...pressableProps}
            bg="pop.yellow"
            color="pop.black"
            onClick={toggleLang}
            fontFamily="accent"
            fontSize="13px"
            fontWeight="800"
            w="44px"
            h="44px"
            minW="44px"
            p={0}
            _hover={{ ...pressableProps._hover, bg: 'pop.yellow' }}
            display={{ base: 'none', sm: 'inline-flex' }}
          >
            {t.langSwitch}
          </Button>
          <Button
            as="a"
            href={studioInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            {...pressableProps}
            bg="pop.line"
            color="white"
            h="44px"
            px="26px"
            fontSize="15px"
            fontWeight="800"
            _hover={{ ...pressableProps._hover, bg: 'pop.line', color: 'white' }}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            {t.ctaReserveShort}
          </Button>
          <IconButton
            aria-label="menu"
            icon={<HiOutlineMenu />}
            variant="ghost"
            color="pop.black"
            display={{ base: 'inline-flex', lg: 'none' }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="pop.offwhite">
          <DrawerCloseButton />
          <DrawerBody pt={16}>
            <VStack align="flex-start" spacing={6}>
              {NAV_ITEMS.map((item) => (
                <ChakraLink
                  key={item.key}
                  href={item.href}
                  fontSize="lg"
                  fontWeight="700"
                  onClick={onClose}
                  color="pop.black"
                >
                  {t[item.key]}
                </ChakraLink>
              ))}
              <Button
                {...pressableProps}
                size="sm"
                bg="pop.yellow"
                color="pop.black"
                fontFamily="accent"
                fontWeight="800"
                _hover={{ ...pressableProps._hover, bg: 'pop.yellow' }}
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
                {...pressableProps}
                bg="pop.line"
                color="white"
                fontWeight="800"
                _hover={{ ...pressableProps._hover, bg: 'pop.line', color: 'white' }}
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
