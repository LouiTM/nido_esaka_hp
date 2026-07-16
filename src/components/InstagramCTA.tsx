import { Box, VStack, Text, Button, Heading } from '@chakra-ui/react';
import { FiInstagram } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { PopCloud, PopStar, ConfettiDot, ConfettiRect } from './PopDecor';
import { ScallopDivider } from './ScallopDivider';
import { inkShadow, pressable } from '../theme/pop';
import { MotionBox, useReducedMotionSafe } from './motion';

const followBtnProps = pressable(5);

export function InstagramCTA() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <Box as="section" id="instagram" position="relative" overflow="hidden" pt="72px" pb="96px" bg="pop.pink">
      {/* 雲・星・コンフェッティ装飾（外側ラッパーにパララックス係数を付ける） */}
      <Box position="absolute" inset={0} pointerEvents="none">
        <Box data-parallax="0.1" position="absolute" top="30px" left="5%">
          <PopCloud w="120px" h="67px" opacity={0.9} duration={20} />
        </Box>
        <Box data-parallax="0.06" position="absolute" top="40px" right="8%">
          <PopStar color="pop.yellow" w="28px" h="28px" transform="rotate(16deg)" />
        </Box>
        <ConfettiDot color="white" position="absolute" bottom="70px" left="12%" />
        <ConfettiRect color="pop.yellow" position="absolute" top="60%" right="15%" transform="rotate(-22deg)" />
      </Box>

      <Box maxW="768px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
        <VStack spacing="18px" textAlign="center">
          <Box
            display="inline-flex"
            bg="white"
            border="3px solid"
            borderColor="pop.black"
            borderRadius="full"
            px="18px"
            py="5px"
            boxShadow={inkShadow(3)}
            transform="rotate(-2deg)"
          >
            <Text fontFamily="accent" fontSize="14px" fontWeight="800" letterSpacing="0.18em" color="pop.pinkText">
              INSTAGRAM
            </Text>
          </Box>
          <Heading as="h2" fontFamily="heading" fontSize={{ base: '30px', md: '38px' }} fontWeight="900" letterSpacing="0.02em" color="white">
            {t.igTitle}
          </Heading>
          <Text fontSize="15px" fontWeight="500" color="rgba(255,255,255,0.94)" lineHeight="2" maxW="480px">
            {t.igBody}
          </Text>
          <Button
            as="a"
            href={studioInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            {...followBtnProps}
            bg="white"
            color="pop.black"
            h="56px"
            px="34px"
            fontSize="18px"
            fontWeight="800"
            mt={2}
            leftIcon={<FiInstagram size={20} />}
            iconSpacing="10px"
            _hover={{ ...followBtnProps._hover, bg: 'white', color: 'pop.black' }}
          >
            {t.igFollow}
          </Button>
        </VStack>
        </MotionBox>
      </Box>
      <ScallopDivider fill="pop.offwhite" />
    </Box>
  );
}
