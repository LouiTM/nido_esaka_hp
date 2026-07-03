import { Box, VStack, Text, AspectRatio, Button } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { WaveDivider } from './WaveDivider';
import { MotionSimpleGrid, useReducedMotionSafe } from './motion';

interface InfoRowProps {
  label: string;
  children: React.ReactNode;
}

function InfoRow({ label, children }: InfoRowProps) {
  return (
    <VStack align="flex-start" spacing={1.5}>
      <Text fontSize="sm" fontWeight="700" color="mustard.600">
        {label}
      </Text>
      {children}
    </VStack>
  );
}

export function AccessInfo() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <Box as="section" id="access" position="relative" overflow="hidden" pt={{ base: 14, md: 18 }} pb={{ base: 20, md: 24 }} bg="cream.100">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading eyebrow="ACCESS" title={t.navAccess} align="center" mx="auto" mb={12} />

        <MotionSimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <VStack align="stretch" spacing={7} maxW={{ lg: 'md' }} mx={{ base: 0, lg: 'auto' }} w="full">
            <InfoRow label={t.addressTitle}>
              <Text fontWeight="700" color="ink.900">
                {studioInfo.address[lang]}
              </Text>
            </InfoRow>

            <InfoRow label={t.accessTitle}>
              {studioInfo.access.map((line) => (
                <Text key={line.ja} fontSize="sm" color="ink.700">
                  {line[lang]}
                </Text>
              ))}
            </InfoRow>

            <InfoRow label={t.genreTitle}>
              <Text fontSize="sm" color="ink.700">
                {studioInfo.genreLabel[lang]}
              </Text>
            </InfoRow>

            <InfoRow label={t.hoursTitle}>
              <Text fontSize="sm" color="ink.700">
                {t.hoursBody}
              </Text>
            </InfoRow>

            <Button
              as="a"
              href={studioInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              alignSelf="flex-start"
              size="lg"
              px={8}
              bg="mustard.500"
              color="white"
              leftIcon={<FiMapPin />}
              _hover={{ bg: 'mustard.600', transform: 'translateY(-1px)' }}
              transition="all 0.2s"
            >
              {t.openInMaps}
            </Button>
          </VStack>

          <Box
            position="relative"
            borderRadius="2xl"
            overflow="hidden"
            bg="sage.300"
            boxShadow="0 20px 40px -18px rgba(27,34,36,0.25)"
          >
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
          </Box>
        </MotionSimpleGrid>
      </Box>
      <WaveDivider fill="blush.100" />
    </Box>
  );
}
