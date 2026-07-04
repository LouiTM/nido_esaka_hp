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
import { WaveDivider } from './WaveDivider';
import { MotionBox, MotionSimpleGrid, useReducedMotionSafe } from './motion';

export function Gallery() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const [selected, setSelected] = useState<number | null>(null);
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  return (
    <Box as="section" id="gallery" position="relative" overflow="hidden" pt={{ base: 14, md: 18 }} pb={{ base: 24, md: 28 }} bg="cream.50">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <VStack align="center" spacing={8} mb={10}>
          <SectionHeading eyebrow="GALLERY" title={t.navGallery} align="center" mx="auto" />
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
          spacing={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {galleryPhotos.map((src, i) => (
            <MotionBox
              key={i}
              as="button"
              aria-label={`gallery photo ${i + 1}`}
              onClick={() => setSelected(i)}
              position="relative"
              borderRadius="3xl"
              overflow="hidden"
              role="group"
              border="5px solid"
              borderColor="white"
              boxShadow="0 14px 30px -12px rgba(27,34,36,0.22)"
              cursor="pointer"
              variants={fadeUpVariants}
              sx={{ transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease' }}
              _hover={{ transform: 'scale(1.04) rotate(-1.2deg)', boxShadow: '0 24px 48px -16px rgba(27,34,36,0.35)' }}
            >
              <AspectRatio ratio={0.78}>
                <Image
                  src={src}
                  alt={`nido gallery ${i + 1}`}
                  objectFit="cover"
                  objectPosition="center 30%"
                  transition="transform 0.4s ease"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
              </AspectRatio>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Box>

      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        isCentered
        size="4xl"
        motionPreset="scale"
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none" mx={4}>
          <ModalCloseButton
            color="white"
            bg="blackAlpha.500"
            borderRadius="full"
            _hover={{ bg: 'blackAlpha.700' }}
            zIndex={1}
          />
          {selected !== null && (
            <Image
              src={galleryPhotos[selected]}
              alt={`nido gallery ${selected + 1}`}
              w="full"
              maxH="85vh"
              objectFit="contain"
              borderRadius="2xl"
              onClick={() => setSelected(null)}
            />
          )}
        </ModalContent>
      </Modal>

      <WaveDivider fill="mustard.50" />
    </Box>
  );
}
