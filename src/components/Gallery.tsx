import { useMemo, useState } from 'react';
import {
  Box,
  Image,
  Text,
  Wrap,
  WrapItem,
  Button,
  AspectRatio,
  VStack,
} from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { galleryCategories, galleryItems } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { WaveDivider } from './WaveDivider';
import { MotionBox, MotionSimpleGrid, useReducedMotionSafe } from './motion';

export function Gallery() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const [active, setActive] = useState<string>('all');
  const { fadeUpVariants, staggerContainer } = useReducedMotionSafe();

  const filtered = useMemo(
    () => (active === 'all' ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active],
  );

  return (
    <Box as="section" id="gallery" position="relative" overflow="hidden" pt={{ base: 14, md: 18 }} pb={{ base: 24, md: 28 }} bg="cream.50">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <VStack align="center" spacing={8} mb={10}>
          <SectionHeading eyebrow="GALLERY" title={t.navGallery} align="center" mx="auto" />

          <Wrap spacing={3} justify="center">
            <WrapItem>
              <Button
                size="sm"
                borderRadius="full"
                px={5}
                variant={active === 'all' ? 'solid' : 'outline'}
                bg={active === 'all' ? 'mustard.500' : 'cream.50'}
                color={active === 'all' ? 'white' : 'ink.700'}
                borderColor="mustard.300"
                _hover={{ bg: active === 'all' ? 'mustard.600' : 'mustard.50' }}
                onClick={() => setActive('all')}
              >
                {t.galleryFilterAll}
              </Button>
            </WrapItem>
            {galleryCategories.map((cat) => (
              <WrapItem key={cat.key}>
                <Button
                  size="sm"
                  borderRadius="full"
                  px={5}
                  variant={active === cat.key ? 'solid' : 'outline'}
                  bg={active === cat.key ? 'mustard.500' : 'cream.50'}
                  color={active === cat.key ? 'white' : 'ink.700'}
                  borderColor="mustard.300"
                  _hover={{ bg: active === cat.key ? 'mustard.600' : 'mustard.50' }}
                  onClick={() => setActive(cat.key)}
                >
                  {cat.label[lang]}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
          spacing={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {filtered.map((item) => (
            <MotionBox
              key={item.id}
              position="relative"
              borderRadius="3xl"
              overflow="hidden"
              role="group"
              border="5px solid"
              borderColor="white"
              boxShadow="0 14px 30px -12px rgba(27,34,36,0.22)"
              variants={fadeUpVariants}
              sx={{ transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease' }}
              _hover={{ transform: 'scale(1.04) rotate(-1.2deg)', boxShadow: '0 24px 48px -16px rgba(27,34,36,0.35)' }}
            >
              <AspectRatio ratio={0.78}>
                <Image
                  src={item.src}
                  alt={item.caption[lang]}
                  objectFit="cover"
                  objectPosition="center 30%"
                  transition="transform 0.4s ease"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
              </AspectRatio>
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, blackAlpha.500, transparent 45%)"
                pointerEvents="none"
              />
              <Text
                position="absolute"
                bottom={3}
                left={4}
                right={4}
                color="white"
                fontSize="xs"
                fontWeight="600"
                lineHeight="1.6"
              >
                {item.caption[lang]}
              </Text>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Box>
      <WaveDivider fill="mustard.50" />
    </Box>
  );
}
