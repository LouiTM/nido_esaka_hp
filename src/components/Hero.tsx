import { Box, Flex, Heading, Text, VStack, Button, Image, HStack } from '@chakra-ui/react';
import { FiInstagram, FiChevronDown, FiMessageCircle } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { realPhoto, studioInfo } from '../data/site';
import { FlowerMark } from './FlowerMark';
import { CloudMark } from './CloudMark';
import { MotionBox, useReducedMotionSafe } from './motion';

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
      bgGradient="linear(to-b, sage.50 0%, cream.100 50%)"
    >
      {/* 空とお花のカラフルな装飾（パララックス＋ゆっくり左右に揺れる） */}
      <Box data-parallax="0.1" position="absolute" top={{ base: '6%', md: '8%' }} left={{ base: '4%', md: '5%' }} pointerEvents="none">
        <CloudMark color="white" drift filled boxSize={{ base: '110px', md: '160px' }} opacity={0.95} />
      </Box>
      <Box data-parallax="0.06" position="absolute" top={{ base: '4%', md: '5%' }} left={{ base: '58%', md: '43%' }} pointerEvents="none">
        <FlowerMark color="sage.300" sway filled centerColor="white" boxSize={{ base: '30px', md: '38px' }} opacity={0.95} />
      </Box>
      <Box data-parallax="0.07" position="absolute" top={{ base: '26%', md: '32%' }} right={{ base: '2%', md: '3%' }} pointerEvents="none">
        <FlowerMark color="mustard.500" sway filled centerColor="terracotta.500" boxSize={{ base: '44px', md: '60px' }} opacity={0.95} />
      </Box>
      <Box data-parallax="0.05" position="absolute" bottom={{ base: '20%', md: '7%' }} right={{ base: '3%', md: '10%' }} pointerEvents="none">
        <FlowerMark color="blush.200" sway filled centerColor="mustard.300" boxSize={{ base: '30px', md: '38px' }} opacity={0.95} />
      </Box>
      <Box data-parallax="-0.06" position="absolute" bottom={{ base: '16px', md: '32px' }} left={{ base: '4px', md: '32px' }} pointerEvents="none">
        <FlowerMark color="blush.400" sway filled boxSize={{ base: '64px', md: '90px' }} opacity={0.95} />
      </Box>

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
              fontWeight="700"
              color="mustard.600"
              textTransform="uppercase"
            >
              {t.heroEyebrow}
            </Text>
          </MotionBox>
          <MotionBox custom={1} initial="hidden" animate="visible" variants={heroItemVariants}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
              lineHeight="1.38"
              color="ink.900"
            >
              {t.heroTitle1}
              <br />
              <Box as="span" color="mustard.500">
                {t.heroTitle2}
              </Box>
            </Heading>
          </MotionBox>
          <MotionBox custom={1.5} initial="hidden" animate="visible" variants={heroItemVariants}>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="ink.600" lineHeight="2.2" maxW="480px">
              {t.heroLead}
            </Text>
          </MotionBox>
          <MotionBox custom={2} initial="hidden" animate="visible" variants={heroItemVariants}>
            <HStack spacing={4} pt={2} flexWrap="wrap">
              <Button
                as="a"
                href={studioInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                px={8}
                bg="#06C755"
                color="white"
                leftIcon={<FiMessageCircle />}
                boxShadow="0 12px 24px -10px rgba(6,199,85,0.6)"
                _hover={{ bg: '#05a648', transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                {t.heroLineBtn}
              </Button>
              <Button
                as="a"
                href={studioInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                px={8}
                bg="mustard.500"
                color="white"
                leftIcon={<FiInstagram />}
                boxShadow="0 12px 24px -10px rgba(240,180,41,0.6)"
                _hover={{ bg: 'mustard.600', transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                {t.heroIgBtn}
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
            border="8px solid"
            borderColor="cream.50"
            boxShadow="0 28px 64px -20px rgba(27, 34, 36, 0.35)"
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
            borderRadius="3xl"
            overflow="hidden"
            border="6px solid"
            borderColor="cream.50"
            boxShadow="0 16px 34px -12px rgba(27, 34, 36, 0.3)"
            transform="rotate(-9deg)"
            bg="sage.500"
          >
            <Image src={realPhoto} alt="" w="full" h="full" objectFit="cover" objectPosition="center 30%" />
          </Box>
          <Box
            position="absolute"
            top={{ base: '-8px', md: '-24px' }}
            right={{ base: '-8px', md: '-40px' }}
            w={{ base: '84px', md: '110px' }}
            aspectRatio={1}
            borderRadius="full"
            bg="blush.400"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            fontSize={{ base: 'xs', md: 'sm' }}
            fontWeight="700"
            lineHeight="1.5"
            whiteSpace="pre-line"
            transform="rotate(9deg)"
            boxShadow="0 12px 24px -8px rgba(214,99,151,0.5)"
          >
            {t.heroBadge}
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
