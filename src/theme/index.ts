import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// ---------------------------------------------------------------------------
// nido / 江坂フォトスタジオ ブランドトークン
//
// コンセプト：「巣（nest）」＝ 撮影ブースという小さな世界で、家族・子ども・
// ペットの"いろんな表情"を自由に撮る場所。実際の投稿写真（青backdrop×赤黄の
// バルーン×パーティー感）の色気分をそのまま採用し、背景はすっきり明るいクリーム
// に抑えつつ、スカイブルー・コーラルレッド・サニーイエロー・キッズピンクの
// 4色をポップに使い分ける。「カラフルできれい」という要望に対し、彩度は
// はっきり、面積は絞る＝カラフルなのに騒がしくならないバランスを狙う。
// ---------------------------------------------------------------------------

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  cream: {
    50: '#FFFEFC',
    100: '#FCFAF4', // メイン背景
    200: '#F5F0E4',
    300: '#EAE2CE',
  },
  ink: {
    50: '#EFF2F3',
    400: '#6B7478',
    600: '#3A4245',
    700: '#262E31',
    900: '#1B2224', // メインテキスト
  },
  terracotta: {
    // コーラルレッド（バルーン・蝶ネクタイ）— プライマリアクセント
    50: '#FDECE8',
    100: '#FBD2C9',
    300: '#F19582',
    500: '#E85D45', // プライマリ
    600: '#D1462F',
    700: '#A83321',
  },
  mustard: {
    // サニーイエロー（バルーン・フラッグ）— セカンダリアクセント
    50: '#FFF7E0',
    300: '#F9D876',
    500: '#F0B429',
    600: '#CE9312',
  },
  sage: {
    // スカイブルー（ブース背景）— 差し色
    50: '#EAF5FA',
    300: '#93CBE0',
    500: '#3F9FC2', // sageキーだが実体はブルー（既存コンポーネントとの互換のため名称維持）
    600: '#2C7FA0',
  },
  blush: {
    // キッズピンク（Studio Alice参照）— 差し色
    50: '#FDEDF3',
    200: '#F7C9DC',
    400: '#EF95BB',
    600: '#D66397',
  },
};

const fonts = {
  heading: `'Shippori Mincho', 'Noto Serif JP', serif`,
  body: `'Zen Kaku Gothic New', 'Hiragino Sans', sans-serif`,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'cream.100',
        color: 'ink.900',
        scrollBehavior: 'smooth',
      },
      '::selection': {
        backgroundColor: 'terracotta.300',
        color: 'ink.900',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '600',
        letterSpacing: '0.02em',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '500',
        borderRadius: 'full',
      },
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
});

export default theme;
