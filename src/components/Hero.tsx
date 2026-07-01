import { Box, Flex, Heading, Text, VStack, Button, Image, HStack } from '@chakra-ui/react';
import { FiInstagram, FiChevronDown } from 'react-icons/fi';
import { SiLine } from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { realPhoto, placeholderImage, studioInfo } from '../data/site';
import { ApertureMark } from './ApertureMark';
import { FlowerMark } from './FlowerMark';
import { MotionBox, useReducedMotionSafe } from './motion';
import { gradients } from '../theme/gradients';

export function Hero() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { heroItemVariants } = useReducedMotionSafe();

  return (
    <Box
      as="section"
      id="top"
      position="relative"
      overflow="hidden"
      pt={{ base: 8, md: 12 }}
      bgGradient={gradients.bloom}
    >
      {/* 背景の巨大なアパチャーリング（署名モチーフ） */}
      <ApertureMark
        color="terracotta.300"
        spin
        position="absolute"
        top={{ base: '-120px', md: '-220px' }}
        right={{ base: '-160px', md: '-220px' }}
        boxSize={{ base: '360px', md: '620px' }}
        opacity={0.5}
        pointerEvents="none"
      />
      <FlowerMark
        color="blush.400"
        sway
        position="absolute"
        bottom={{ base: '20px', md: '40px' }}
        left={{ base: '4px', md: '24px' }}
        boxSize={{ base: '48px', md: '64px' }}
        opacity={0.3}
        pointerEvents="none"
      />

      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        gap={{ base: 10, lg: 6 }}
        pb={{ base: 10, md: 12 }}
      >
        <VStack
          flex="1"
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          spacing={6}
          zIndex={1}
        >
          <MotionBox custom={0} initial="hidden" animate="visible" variants={heroItemVariants}>
            <Text
              fontSize="xs"
              letterSpacing="0.35em"
              fontWeight="600"
              color="terracotta.600"
              textTransform="uppercase"
            >
              {t.heroEyebrow}
            </Text>
          </MotionBox>
          <MotionBox custom={1} initial="hidden" animate="visible" variants={heroItemVariants}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
              lineHeight="1.25"
              color="ink.900"
            >
              {t.heroTitle1}
              <br />
              <Box as="span" color="terracotta.500">
                {t.heroTitle2}
              </Box>
            </Heading>
          </MotionBox>
          <MotionBox custom={2} initial="hidden" animate="visible" variants={heroItemVariants}>
            <HStack spacing={4} pt={2} flexWrap="wrap">
              <Button
                as="a"
                href={studioInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                bg="#06C755"
                color="white"
                leftIcon={<SiLine />}
                _hover={{ bg: '#05a648', transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                LINE
              </Button>
              <Button
                as="a"
                href={studioInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                bg="terracotta.500"
                color="white"
                leftIcon={<FiInstagram />}
                _hover={{ bg: 'terracotta.600', transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                DM
              </Button>
            </HStack>
          </MotionBox>
        </VStack>

        <Box flex="1" position="relative" w="full" maxW={{ base: '360px', lg: 'none' }}>
          <Box
            position="relative"
            borderRadius="full"
            overflow="hidden"
            aspectRatio={1}
            border="6px solid"
            borderColor="cream.100"
            boxShadow="0 20px 60px -20px rgba(27, 34, 36, 0.35)"
          >
            <Image
              src={realPhoto}
              alt="nido studio"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="center 30%"
            />
          </Box>
          <Box
            position="absolute"
            bottom={{ base: '-24px', md: '-32px' }}
            left={{ base: '-16px', md: '-40px' }}
            w={{ base: '110px', md: '160px' }}
            aspectRatio={0.8}
            borderRadius="24px"
            overflow="hidden"
            border="5px solid"
            borderColor="cream.100"
            boxShadow="0 12px 30px -10px rgba(27, 34, 36, 0.3)"
            transform="rotate(-6deg)"
            bg="sage.500"
          >
            <Image
              src={placeholderImage('nido-hero-sub', 400, 500)}
              alt=""
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Flex>

      <Flex justify="center" pb={8} display={{ base: 'none', md: 'flex' }}>
        <VStack spacing={1} color="ink.400" fontSize="xs" letterSpacing="0.2em">
          <Text>{t.heroScroll}</Text>
          <FiChevronDown />
        </VStack>
      </Flex>
    </Box>
  );
}
