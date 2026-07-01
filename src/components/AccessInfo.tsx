import { Box, VStack, HStack, Text, AspectRatio, Link, Button } from '@chakra-ui/react';
import { FiMapPin, FiTrendingUp, FiTag, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { IconBadge } from './IconBadge';
import { MotionSimpleGrid, useReducedMotionSafe } from './motion';

export function AccessInfo() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <Box as="section" id="access" py={{ base: 16, md: 24 }} bg="cream.50">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading eyebrow="ACCESS" title={t.navAccess} align="center" mx="auto" mb={10} />

        <MotionSimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={10}
          alignItems="center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <VStack align="stretch" spacing={6}>
            <HStack align="flex-start" spacing={4}>
              <IconBadge icon={FiMapPin} />
              <VStack align="flex-start" spacing={0.5}>
                <Text fontWeight="700" color="ink.900">
                  {t.addressTitle}
                </Text>
                <Text fontSize="sm" color="ink.600">
                  {studioInfo.address[lang]}
                </Text>
              </VStack>
            </HStack>

            <HStack align="flex-start" spacing={4}>
              <IconBadge icon={FiTrendingUp} />
              <VStack align="flex-start" spacing={0.5}>
                <Text fontWeight="700" color="ink.900">
                  {t.accessTitle}
                </Text>
                {studioInfo.access.map((line) => (
                  <Text key={line.ja} fontSize="sm" color="ink.600">
                    {line[lang]}
                  </Text>
                ))}
              </VStack>
            </HStack>

            <HStack align="flex-start" spacing={4}>
              <IconBadge icon={FiTag} />
              <VStack align="flex-start" spacing={0.5}>
                <Text fontWeight="700" color="ink.900">
                  {t.genreTitle}
                </Text>
                <Text fontSize="sm" color="ink.600">
                  {studioInfo.genreLabel[lang]}
                </Text>
              </VStack>
            </HStack>

            <HStack align="flex-start" spacing={4}>
              <IconBadge icon={FiCalendar} />
              <VStack align="flex-start" spacing={0.5}>
                <Text fontWeight="700" color="ink.900">
                  {t.hoursTitle}
                </Text>
                <Link
                  href={studioInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="sm"
                  color="terracotta.600"
                >
                  {t.hoursBody}
                </Link>
              </VStack>
            </HStack>

            <Text fontSize="xs" color="ink.400" pt={2}>
              {t.mapNote}
            </Text>
          </VStack>

          <Box position="relative" borderRadius="28px" overflow="hidden">
            <AspectRatio ratio={4 / 3}>
              <Box
                as="iframe"
                src={studioInfo.mapEmbedSrc}
                title="nido map"
                border="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AspectRatio>
            <Button
              as="a"
              href={studioInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              position="absolute"
              bottom={3}
              right={3}
              size="sm"
              bg="white"
              color="ink.900"
              rightIcon={<FiExternalLink />}
              boxShadow="0 6px 16px -6px rgba(27,34,36,0.35)"
              _hover={{ bg: 'cream.100' }}
            >
              {t.openInMaps}
            </Button>
          </Box>
        </MotionSimpleGrid>
      </Box>
    </Box>
  );
}
