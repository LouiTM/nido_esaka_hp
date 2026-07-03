import { Box, VStack, Text, Button, Heading } from '@chakra-ui/react';
import { FiInstagram } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { studioInfo } from '../data/site';
import { FlowerMark } from './FlowerMark';
import { WaveDivider } from './WaveDivider';
import { MotionBox, useReducedMotionSafe } from './motion';

export function InstagramCTA() {
  const { lang } = useLanguage();
  const t = strings[lang];
  const { fadeUpVariants } = useReducedMotionSafe();

  return (
    <Box as="section" id="instagram" position="relative" overflow="hidden" py={{ base: 12, md: 14 }} bg="blush.100">
      <FlowerMark
        color="blush.200"
        sway
        filled
        centerColor="white"
        position="absolute"
        top={{ base: '24px', md: '20%' }}
        left={{ base: '-10px', md: '6%' }}
        boxSize={{ base: '48px', md: '68px' }}
        opacity={0.9}
        pointerEvents="none"
      />

      <Box maxW="3xl" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants}>
          <VStack spacing={4} textAlign="center" paddingBottom="8">
            <Text fontSize="xs" letterSpacing="0.3em" fontWeight="700" color="blush.600" textTransform="uppercase">
              INSTAGRAM
            </Text>
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="ink.900">
              {t.igTitle}
            </Heading>
            <Text fontSize="sm" color="ink.600" lineHeight="2" maxW="480px">
              {t.igBody}
            </Text>
            <Button
              as="a"
              href={studioInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              px={8}
              bg="blush.400"
              color="white"
              leftIcon={<FiInstagram />}
              boxShadow="0 12px 24px -10px rgba(239,149,187,0.7)"
              _hover={{ bg: 'blush.600', transform: 'translateY(-1px)' }}
              transition="all 0.2s"
            >
              {t.igFollow}
            </Button>
          </VStack>
        </MotionBox>
      </Box>
      <WaveDivider fill="cream.100" />
    </Box>
  );
}
