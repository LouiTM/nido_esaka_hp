import { useState } from 'react';
import {
  Box,
  Image,
  AspectRatio,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { galleryPhotos } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { PopCloud, PopStar, ConfettiDot } from './PopDecor';
import { ScallopDivider } from './ScallopDivider';
import { inkShadow } from '../theme/pop';
import { MotionBox, MotionSimpleGrid, useReducedMotionSafe } from './motion';

// サムネイルごとの傾きとハードシャドウ色（デザインリファレンスの並びそのまま）
const TILTS = [-2.2, 1.6, -1.2, 2.4, -1.8, 1.2, -2.4, 1.8, -1.4, 2];
const SHADOW_COLORS = [
  'var(--chakra-colors-pop-orange)',
  'var(--chakra-colors-pop-yellow)',
  'var(--chakra-colors-pop-blue)',
  'var(--chakra-colors-pop-pink)',
];

export function Gallery() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const [selected, setSelected] = useState<number | null>(null);
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="gallery" position="relative" overflow="hidden" pt="80px" pb="120px" bg="pop.blueLight">
      {/* 雲・星・コンフェッティ装飾（外側ラッパーにパララックス係数を付ける） */}
      <Box position="absolute" inset={0} pointerEvents="none">
        <Box data-parallax="0.1" position="absolute" top="40px" right="3%">
          <PopCloud w="130px" h="73px" opacity={0.9} duration={20} />
        </Box>
        <Box data-parallax="0.06" position="absolute" top="80px" left="5%">
          <PopStar color="pop.yellow" w="26px" h="26px" transform="rotate(-12deg)" />
        </Box>
        <ConfettiDot color="pop.orange" position="absolute" bottom="100px" right="7%" />
      </Box>

      <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
          <VStack align="center" spacing={6} mb="56px">
            <SectionHeading eyebrow="GALLERY" title={t.navGallery} kickerBg="pop.blue" tilt={2} underline="pop.blue" />
          </VStack>
        </MotionBox>

        <MotionSimpleGrid
          columns={{ base: 2, sm: 3, lg: 5 }}
          spacing={{ base: 4, md: '28px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {galleryPhotos.map((src, i) => (
            <MotionBox key={i} variants={fadeUpVariants}>
            <Box
              as="button"
              aria-label={`gallery photo ${i + 1}`}
              onClick={() => setSelected(i)}
              position="relative"
              display="block"
              w="full"
              borderRadius="22px"
              overflow="hidden"
              border="3px solid"
              borderColor="pop.black"
              outline="7px solid white"
              sx={{ outlineOffset: '-10px' }}
              boxShadow={`6px 6px 0 ${SHADOW_COLORS[i % SHADOW_COLORS.length]}`}
              cursor="pointer"
              p={0}
              bg="white"
              transform={`rotate(${TILTS[i % TILTS.length]}deg)`}
              transition="transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease"
              _hover={{ transform: 'rotate(0deg) scale(1.05)', zIndex: 2 }}
            >
              <AspectRatio ratio={0.78} borderRadius="18px" overflow="hidden">
                <Image src={src} alt={`nido gallery ${i + 1}`} objectFit="cover" objectPosition="center 30%" />
              </AspectRatio>
            </Box>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Box>

      {/* ライトボックス */}
      <Modal isOpen={selected !== null} onClose={() => setSelected(null)} isCentered size="4xl" motionPreset="scale">
        <ModalOverlay bg="rgba(20,26,28,0.85)" />
        <ModalContent bg="transparent" boxShadow="none" mx={6} alignItems="center">
          <ModalCloseButton
            position="fixed"
            top="24px"
            right="24px"
            w="44px"
            h="44px"
            borderRadius="full"
            bg="pop.yellow"
            color="pop.black"
            border="3px solid"
            borderColor="pop.black"
            fontSize="14px"
            boxShadow={inkShadow(3)}
            _hover={{ bg: 'pop.yellow' }}
            zIndex={1}
          />
          {selected !== null && (
            <Image
              src={galleryPhotos[selected]}
              alt={`nido gallery ${selected + 1}`}
              maxW="full"
              maxH="85vh"
              objectFit="contain"
              borderRadius="24px"
              border="6px solid"
              borderColor="white"
              onClick={() => setSelected(null)}
            />
          )}
        </ModalContent>
      </Modal>

      <ScallopDivider fill="pop.yellowLight" />
    </Box>
  );
}
