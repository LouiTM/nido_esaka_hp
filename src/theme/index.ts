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
    // コーラルレッド（バルーン・蝶ネクタイ）— 差し色
    50: '#FDECE8',
    100: '#FBD2C9',
    300: '#F19582',
    500: '#E85D45',
    600: '#D1462F',
    700: '#A83321',
  },
  mustard: {
    // サニーイエロー（バルーン・フラッグ）— プライマリアクセント
    50: '#FFF7E0',
    300: '#F9D876',
    500: '#F0B429',
    600: '#CE9312',
    // 700は文字色専用の濃色（500/600は黄系で白文字・淡色背景とのコントラストが
    // 不足するため、テキストやアイコンに使う濃いアンバー系を別途用意）。
    700: '#8A5A00',
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
    100: '#FAD9E6', // Instagramセクションの背景ピンク
    200: '#F7C9DC',
    400: '#EF95BB',
    600: '#D66397',
  },
  // -------------------------------------------------------------------------
  // 「ポップ＆ビビッド」リデザイン用トークン（.temp/design_handoff_pop_vivid_top）
  // 既存パステル4色をそのままビビッド化した4色＋淡色＋濃字色のセット。
  // 全要素の縁取り・ハードシャドウには pop.black を使う。
  // -------------------------------------------------------------------------
  pop: {
    black: '#1B2224', // インク縁取り・文字
    offwhite: '#FFFDF6',
    blue: '#2BA6E8',
    blueLight: '#D9F1FF',
    blueText: '#1B7FB8', // 淡色背景上のリンク・文字用
    orange: '#FF5A3C',
    orangeLight: '#FFE3DC',
    orangeText: '#E03A1D',
    yellow: '#FFC61A',
    yellowLight: '#FFF3C4',
    yellowText: '#8A5A00', // 黄系背景上の濃字
    yellowTextSoft: '#B37E00',
    pink: '#FF7BAC',
    pinkLight: '#FFE0EC',
    pinkText: '#E14E85',
    line: '#06C755', // LINEブランドグリーン
    border: '#F0E9D8', // ヘッダー・フッターの罫線
  },
};

const fonts = {
  // 「もっと丸く・柔らかく」の要望により、明朝体から丸ゴシック（M PLUS Rounded 1c）に変更。
  // 本文は既存のZen Kaku Gothic Newを維持。
  heading: `'M PLUS Rounded 1c', 'Zen Kaku Gothic New', sans-serif`,
  body: `'Zen Kaku Gothic New', 'Hiragino Sans', sans-serif`,
  // ポップ＆ビビッド版の英字ラベル用（キッカーピル・EN ボタン・価格表記など）
  accent: `'Baloo 2', 'M PLUS Rounded 1c', sans-serif`,
};

// 角丸を全体的に強める（「丸く」の要望）。Chakraのデフォルトより一段階ずつ大きい。
// 2xl=カード、3xl=写真フレームの基準角丸としてコンポーネント側から参照する。
const radii = {
  sm: '10px',
  md: '16px',
  lg: '22px',
  xl: '28px',
  '2xl': '56px',
  '3xl': '64px',
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  radii,
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'pop.offwhite',
        color: 'ink.900',
        scrollBehavior: 'smooth',
      },
      '::selection': {
        backgroundColor: 'pop.yellow',
        color: 'ink.900',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        // 丸ゴシックは太いほど可愛らしく見えるため、600→800に引き上げ。
        fontWeight: '800',
        letterSpacing: '0.02em',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '700',
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
