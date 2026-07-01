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
    <Box as="section" id="gallery" py={{ base: 16, md: 24 }} bg="cream.50">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <VStack align="center" spacing={8} mb={10}>
          <SectionHeading eyebrow="GALLERY" title={t.navGallery} align="center" mx="auto" />

          <Wrap spacing={3} justify="center">
            <WrapItem>
              <Button
                size="sm"
                borderRadius="full"
                variant={active === 'all' ? 'solid' : 'outline'}
                bg={active === 'all' ? 'terracotta.500' : 'transparent'}
                color={active === 'all' ? 'white' : 'ink.700'}
                borderColor="terracotta.300"
                _hover={{ bg: active === 'all' ? 'terracotta.600' : 'terracotta.50' }}
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
                  variant={active === cat.key ? 'solid' : 'outline'}
                  bg={active === cat.key ? 'terracotta.500' : 'transparent'}
                  color={active === cat.key ? 'white' : 'ink.700'}
                  borderColor="terracotta.300"
                  _hover={{ bg: active === cat.key ? 'terracotta.600' : 'terracotta.50' }}
                  onClick={() => setActive(cat.key)}
                >
                  {cat.label[lang]}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          spacing={{ base: 3, md: 5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {filtered.map((item, idx) => (
            <MotionBox
              key={item.id}
              position="relative"
              borderRadius="20px"
              overflow="hidden"
              role="group"
              gridRowEnd={idx % 5 === 0 ? 'span 2' : undefined}
              variants={fadeUpVariants}
            >
              <AspectRatio ratio={idx % 5 === 0 ? 0.75 : 1}>
                <Image
                  src={item.src}
                  alt={item.caption[lang]}
                  objectFit="cover"
                  objectPosition={item.category === 'kids' && idx === 0 ? 'center 25%' : 'center'}
                  transition="transform 0.4s ease"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
              </AspectRatio>
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, blackAlpha.600, transparent 55%)"
                opacity={0}
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.3s"
              />
              <Text
                position="absolute"
                bottom={3}
                left={3}
                right={3}
                color="white"
                fontSize="xs"
                opacity={0}
                transform="translateY(6px)"
                _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                transition="all 0.3s"
              >
                {item.caption[lang]}
              </Text>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Box>
    </Box>
  );
}
