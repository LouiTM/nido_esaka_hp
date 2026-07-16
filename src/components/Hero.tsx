import { Box, Flex, Heading, Text, VStack, Button, Image } from '@chakra-ui/react';
import { FiInstagram, FiMessageCircle } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { realPhoto, studioInfo } from '../data/site';
import { PopGarland, PopCloud, PopBalloon, PopStar, ConfettiDot, ConfettiRect } from './PopDecor';
import { ScallopDivider } from './ScallopDivider';
import { inkShadow, pressable } from '../theme/pop';
import { MotionBox, useReducedMotionSafe } from './motion';

// ヒーロー背景テーマ「サニーイエロー」の配色（デザインリファレンスの選択値）
const hero = {
  bg: 'pop.yellow',
  text: 'pop.black',
  sub: 'rgba(27,34,36,0.82)',
  accent: 'pop.orangeText',
  shadow: 'var(--chakra-colors-pop-orange)',
  pill: 'pop.yellowTextSoft',
  badge: 'pop.pink',
};

const ctaProps = pressable(5);

export function Hero() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { heroItemVariants } = useReducedMotionSafe();

  return (
    <Box as="section" id="top" position="relative" overflow="hidden" bg={hero.bg} pt="72px">
      <PopGarland />

      {/* 雲・風船・星・コンフェッティ装飾（外側ラッパーにパララックス係数を付ける） */}
      <Box position="absolute" inset={0} pointerEvents="none">
        <Box data-parallax="0.1" position="absolute" top="14%" left="4%">
          <PopCloud w="170px" h="96px" duration={18} />
        </Box>
        <Box data-parallax="0.06" position="absolute" top="10%" right="6%">
          <PopCloud w="110px" h="62px" opacity={0.9} duration={22} reverse />
        </Box>
        <Box data-parallax="-0.05" position="absolute" bottom="12%" left="3%">
          <PopBalloon color="pop.yellow" curve="left" w="64px" h="118px" duration={7} />
        </Box>
        <Box data-parallax="0.07" position="absolute" bottom="30%" left="10%">
          <PopBalloon color="pop.orange" curve="right" w="50px" h="92px" duration={9} />
        </Box>
        <Box data-parallax="0.06" position="absolute" top="24%" left="46%">
          <PopStar color="pop.yellow" w="34px" h="34px" transform="rotate(-14deg)" />
        </Box>
        <Box data-parallax="0.08" position="absolute" bottom="18%" right="4%">
          <PopStar color="white" w="22px" h="22px" transform="rotate(18deg)" />
        </Box>
        <ConfettiDot color="pop.pink" position="absolute" top="40%" left="38%" />
        <ConfettiRect color="pop.yellow" position="absolute" top="62%" left="47%" transform="rotate(24deg)" />
        <ConfettiDot color="pop.orange" w="11px" h="11px" position="absolute" top="16%" right="26%" />
        <ConfettiRect color="white" position="absolute" bottom="24%" right="30%" transform="rotate(-18deg)" />
      </Box>

      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        pt={6}
        pb="96px"
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        gap={{ base: 10, lg: 12 }}
      >
        <VStack
          flex="1.1"
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          spacing="26px"
          zIndex={1}
        >
          <MotionBox custom={0} initial="hidden" animate="visible" variants={heroItemVariants}>
            <Box
              display="inline-flex"
              alignItems="center"
              gap={2}
              bg="white"
              border="3px solid"
              borderColor="pop.black"
              borderRadius="full"
              px="18px"
              py="6px"
              boxShadow={inkShadow(3)}
              transform="rotate(-2deg)"
            >
              <Text fontFamily="accent" fontSize="13px" fontWeight="800" letterSpacing="0.16em" color={hero.pill}>
                {t.heroEyebrow}
              </Text>
            </Box>
          </MotionBox>

          <MotionBox custom={1} initial="hidden" animate="visible" variants={heroItemVariants}>
            <Heading
              as="h1"
              fontFamily="heading"
              fontSize="clamp(38px, 4.6vw, 64px)"
              fontWeight="900"
              letterSpacing="0.02em"
              lineHeight="1.32"
              whiteSpace={{ base: 'normal', md: 'nowrap' }}
              color={hero.text}
              sx={{ textWrap: 'pretty' }}
            >
              {t.heroTitle1}
              <br />
              <Box as="span" color={hero.accent}>
                {t.heroTitle2}
              </Box>
            </Heading>
          </MotionBox>

          <MotionBox custom={1.5} initial="hidden" animate="visible" variants={heroItemVariants}>
            <Text fontSize="17px" fontWeight="500" color={hero.sub} lineHeight="2.1" maxW="480px">
              {t.heroLead}
            </Text>
          </MotionBox>

          <MotionBox
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroItemVariants}
            display="flex"
            gap={4}
            pt="6px"
            flexWrap="wrap"
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Button
              as="a"
              href={studioInfo.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...ctaProps}
              bg="pop.line"
              color="white"
              h="56px"
              px="32px"
              fontSize="18px"
              fontWeight="800"
              leftIcon={<FiMessageCircle size={20} />}
              iconSpacing="10px"
              _hover={{ ...ctaProps._hover, bg: 'pop.line', color: 'white' }}
            >
              {t.heroLineBtn}
            </Button>
            <Button
              as="a"
              href={studioInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...ctaProps}
              bg="white"
              color="pop.black"
              h="56px"
              px="32px"
              fontSize="18px"
              fontWeight="800"
              leftIcon={<FiInstagram size={20} />}
              iconSpacing="10px"
              _hover={{ ...ctaProps._hover, bg: 'white', color: 'pop.black' }}
            >
              {t.heroIgBtn}
            </Button>
          </MotionBox>
        </VStack>

        <Box flex="1" position="relative" w="full" maxW="520px">
          <Box
            position="relative"
            borderRadius="full"
            overflow="hidden"
            aspectRatio={1}
            border="10px solid"
            borderColor="white"
            boxShadow={`14px 14px 0 ${hero.shadow}, 14px 14px 0 3px var(--chakra-colors-pop-black)`}
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
            top="-18px"
            right={{ base: '-8px', md: '-20px' }}
            w={{ base: '104px', md: '124px' }}
            aspectRatio={1}
            borderRadius="full"
            bg={hero.badge}
            color="white"
            border="3px solid"
            borderColor="pop.black"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            fontFamily="heading"
            fontSize={{ base: '15px', md: '17px' }}
            fontWeight="900"
            lineHeight="1.45"
            whiteSpace="pre-line"
            transform="rotate(9deg)"
            boxShadow={inkShadow(5)}
          >
            {t.heroBadge}
          </Box>
        </Box>
      </Flex>

      <ScallopDivider fill="pop.offwhite" />
    </Box>
  );
}
