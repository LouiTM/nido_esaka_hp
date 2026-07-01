import { Box, SimpleGrid, Image, VStack, Text, Button, Heading, Flex, HStack } from '@chakra-ui/react';
import { FiInstagram, FiExternalLink } from 'react-icons/fi';
import { SiLine } from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { placeholderImage, realPhoto, studioInfo } from '../data/site';
import { IconBadge } from './IconBadge';
import { CloudMark } from './CloudMark';
import { MotionBox, useReducedMotionSafe } from './motion';

const igImages = [
  realPhoto,
  placeholderImage('nido-ig-2', 400, 400),
  placeholderImage('nido-ig-3', 400, 400),
  placeholderImage('nido-ig-4', 400, 400),
  placeholderImage('nido-ig-5', 400, 400),
  placeholderImage('nido-ig-6', 400, 400),
];

export function InstagramCTA() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <Box as="section" id="instagram" py={{ base: 16, md: 24 }}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          bg="terracotta.500"
          borderRadius="32px"
          overflow="hidden"
          position="relative"
          align="stretch"
        >
          <CloudMark
            color="whiteAlpha.600"
            drift
            position="absolute"
            top="8px"
            left="8px"
            boxSize="90px"
            opacity={0.25}
            pointerEvents="none"
          />
          <VStack
            flex="1"
            align="flex-start"
            justify="center"
            spacing={5}
            p={{ base: 8, md: 12 }}
            color="white"
          >
            <IconBadge icon={FiInstagram} bg="whiteAlpha.300" color="white" />
            <Heading fontSize={{ base: '2xl', md: '3xl' }}>{t.contactTitle}</Heading>
            <Text fontSize="sm" opacity={0.92} lineHeight="1.8">
              {t.contactBody}
            </Text>
            <Text fontSize="sm" fontWeight="700" letterSpacing="0.05em">
              {t.instaHandle}
            </Text>
            <HStack spacing={3} pt={2} flexWrap="wrap">
              <Button
                as="a"
                href={studioInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                bg="#06C755"
                color="white"
                leftIcon={<SiLine />}
                _hover={{ bg: '#05a648' }}
              >
                {t.lineFollow}
              </Button>
              <Button
                as="a"
                href={studioInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                bg="white"
                color="terracotta.600"
                rightIcon={<FiExternalLink />}
                _hover={{ bg: 'cream.100' }}
              >
                {t.instaFollow}
              </Button>
            </HStack>
          </VStack>

          <SimpleGrid flex="1" columns={3} spacing={0.5}>
            {igImages.map((src, i) => (
              <Box key={i} position="relative" aspectRatio={1} overflow="hidden" bg="terracotta.600">
                <Image
                  src={src}
                  alt=""
                  w="full"
                  h="full"
                  objectFit="cover"
                  objectPosition={i === 0 ? 'center 25%' : 'center'}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
        </MotionBox>
      </Box>
    </Box>
  );
}
