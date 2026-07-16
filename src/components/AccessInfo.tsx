import { Box, VStack, Text, AspectRatio, Button } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { ScallopDivider } from './ScallopDivider';
import { pressable } from '../theme/pop';
import { MotionBox, MotionSimpleGrid, useReducedMotionSafe } from './motion';

const mapBtnProps = pressable(5);

interface InfoRowProps {
  label: string;
  /** ラベルピルの淡色背景（Chakraトークン） */
  labelBg: string;
  /** ラベルピルの文字色（Chakraトークン） */
  labelColor: string;
  children: React.ReactNode;
}

function InfoRow({ label, labelBg, labelColor, children }: InfoRowProps) {
  return (
    <VStack align="flex-start" spacing={2}>
      <Box
        display="inline-flex"
        bg={labelBg}
        border="2px solid"
        borderColor="pop.black"
        borderRadius="full"
        px="14px"
        py="3px"
        fontSize="13px"
        fontWeight="800"
        color={labelColor}
      >
        {label}
      </Box>
      {children}
    </VStack>
  );
}

export function AccessInfo() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <Box as="section" id="access" position="relative" overflow="hidden" pt="80px" pb="110px" bg="pop.offwhite">
      <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }}>
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
          <VStack align="center" spacing={6} mb="56px">
            <SectionHeading eyebrow="ACCESS" title={t.navAccess} kickerBg="pop.pink" tilt={2} underline="pop.pink" />
          </VStack>
        </MotionBox>

        <MotionSimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <VStack align="stretch" spacing="26px" maxW="460px" mx={{ base: 0, lg: 'auto' }} w="full">
            <InfoRow label={t.addressTitle} labelBg="pop.yellowLight" labelColor="pop.yellowText">
              <Text fontWeight="700" fontSize="16px" color="pop.black">
                {studioInfo.address[lang]}
              </Text>
            </InfoRow>

            <InfoRow label={t.accessTitle} labelBg="pop.blueLight" labelColor="pop.blueText">
              {studioInfo.access.map((line) => (
                <Text key={line.ja} fontSize="14px" color="ink.700">
                  {line[lang]}
                </Text>
              ))}
            </InfoRow>

            <InfoRow label={t.genreTitle} labelBg="pop.orangeLight" labelColor="pop.orangeText">
              <Text fontSize="14px" color="ink.700" lineHeight="1.9">
                {studioInfo.genreLabel[lang]}
              </Text>
            </InfoRow>

            <InfoRow label={t.hoursTitle} labelBg="pop.pinkLight" labelColor="pop.pinkText">
              <Text fontSize="14px" color="ink.700">
                {t.hoursBody}
              </Text>
            </InfoRow>

            <Button
              as="a"
              href={studioInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...mapBtnProps}
              alignSelf="flex-start"
              bg="pop.yellow"
              color="pop.black"
              h="52px"
              px="30px"
              fontSize="17px"
              fontWeight="800"
              leftIcon={<FiMapPin size={19} />}
              iconSpacing="10px"
              _hover={{ ...mapBtnProps._hover, bg: 'pop.yellow', color: 'pop.black' }}
            >
              {t.openInMaps}
            </Button>
          </VStack>

          <Box
            position="relative"
            borderRadius="32px"
            overflow="hidden"
            bg="pop.blueLight"
            border="3px solid"
            borderColor="pop.black"
            boxShadow="10px 10px 0 var(--chakra-colors-pop-blue)"
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
      <ScallopDivider fill="pop.pink" />
    </Box>
  );
}
