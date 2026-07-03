// ---------------------------------------------------------------------------
// サイトコンテンツ
//
// 住所・アクセス・コンセプト・料金はユーザーからご提供いただいた実際の情報を
// 反映しています。ギャラリー写真は一部（実際のInstagram投稿からお借りした
// 1枚）を除き、https://picsum.photos のプレースホルダーです。営業日・定休日は
// Instagramのカレンダーで随時更新されるため、サイトには掲載せずInstagramへ誘導
// しています。追加の写真が届き次第、差し替えてください。
// ---------------------------------------------------------------------------

import type { IconType } from 'react-icons';
import { FiCamera, FiUsers, FiRepeat } from 'react-icons/fi';

export interface Bilingual {
  ja: string;
  en: string;
}

export const placeholderImage = (seed: string, w = 900, h = 1100) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// 実際のInstagram投稿からお借りした写真（About nido スライド）
export const realPhoto = '/images/nido-about.png';

// --- ギャラリー -------------------------------------------------------------

export interface GalleryCategory {
  key: string;
  label: Bilingual;
}

export const galleryCategories: GalleryCategory[] = [
  { key: 'family', label: { ja: 'ファミリー', en: 'Family' } },
  { key: 'kids', label: { ja: 'キッズ', en: 'Kids' } },
  { key: 'pets', label: { ja: 'ペット', en: 'Pets' } },
  { key: 'model', label: { ja: 'モデル撮影', en: 'Model' } },
];

export interface GalleryItem {
  id: string;
  category: string;
  src: string;
  caption: Bilingual;
}

// 写真が届くまでは、実際のInstagram投稿からお借りした1枚を全カード共通で使用する
// （デザインカンプに合わせた措置。差し替え時は src を個別に変更してください）。
export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'kids', src: realPhoto, caption: { ja: 'カラフルなブースで1才のお誕生日撮影', en: 'First birthday shoot on a colorful backdrop' } },
  { id: 'g2', category: 'family', src: realPhoto, caption: { ja: '兄妹のじゃれあい', en: 'Siblings at play' } },
  { id: 'g3', category: 'pets', src: realPhoto, caption: { ja: '愛犬との1枚', en: 'With the family dog' } },
  { id: 'g4', category: 'model', src: realPhoto, caption: { ja: '海外風ブースでの撮影', en: 'Overseas-style booth shoot' } },
  { id: 'g5', category: 'family', src: realPhoto, caption: { ja: '三世代の記念日', en: 'Three generations' } },
  { id: 'g6', category: 'kids', src: realPhoto, caption: { ja: '衣装を着替えて撮り放題', en: 'Unlimited outfit changes' } },
  { id: 'g7', category: 'pets', src: realPhoto, caption: { ja: '猫ちゃんもモデルデビュー', en: 'Cats make great models too' } },
  { id: 'g8', category: 'model', src: realPhoto, caption: { ja: 'ポートフォリオ撮影', en: 'Portfolio session' } },
];

// --- メニュー・料金 -----------------------------------------------------------
// 出典：ご提供いただいたメニュー表（KIDS & PETS Basic Plans / Family Simple）

export interface PriceTier {
  duration: Bilingual;
  price: string;
  note?: Bilingual;
}

export interface MenuGroup {
  key: string;
  title: string;
  subtitle?: Bilingual;
  description: Bilingual;
  tiers: PriceTier[];
  featured?: boolean;
}

export const menuGroups: MenuGroup[] = [
  {
    key: 'kidsPets',
    title: 'KIDS & PETS',
    subtitle: { ja: 'ベーシックプラン', en: 'Basic Plans' },
    description: {
      ja: 'お子様やペットの自然な表情を、セルフで気軽に撮り放題。',
      en: 'A relaxed, self-shoot session for kids and pets \u2014 shoot as much as you like.',
    },
    tiers: [
      { duration: { ja: '30分', en: '30 min' }, price: '¥8,500', note: { ja: '全5ブース利用可', en: 'All 5 booths' } },
      { duration: { ja: '1時間', en: '60 min' }, price: '¥16,000', note: { ja: '全5ブース利用可', en: 'All 5 booths' } },
      { duration: { ja: '30分', en: '30 min' }, price: '¥4,000', note: { ja: '1ブースのみ', en: '1 booth only' } },
    ],
    featured: true,
  },
  {
    key: 'familySimple',
    title: 'FAMILY SIMPLE',
    description: {
      ja: 'オーナー撮影付きで、人数を気にせずご家族みんなで。',
      en: 'Owner-assisted shooting included \u2014 the whole family, no per-person fee.',
    },
    tiers: [
      {
        duration: { ja: '30分', en: '30 min' },
        price: '¥10,000',
        note: { ja: 'オーナー撮影費込・人数追加料金なし', en: 'Owner shooting included, no per-person fee' },
      },
    ],
  },
];

export interface MenuOption {
  label: Bilingual;
  price: string;
}

export const menuOptions: MenuOption[] = [
  { label: { ja: '日曜日料金', en: 'Sunday surcharge' }, price: '+¥2,500' },
  { label: { ja: '子供追加', en: 'Extra child' }, price: '¥4,000' },
  { label: { ja: '大人追加', en: 'Extra adult' }, price: '¥3,000' },
  { label: { ja: 'カメラレンタル', en: 'Camera rental' }, price: '¥3,500' },
  { label: { ja: 'オーナー撮影', en: 'Owner shooting' }, price: '¥5,000' },
  { label: { ja: 'プロカメラマン', en: 'Professional photographer' }, price: '¥5,500〜' },
];

// --- コンセプト -------------------------------------------------------------

export const conceptIntro: Bilingual = {
  ja: '"nido"は、大阪・江坂のセルフフォトスタジオ＆モデル事務所。ご家族、お子様、ペットまで、飾らない"いつもの姿"を、5つのブースで自由に撮り放題で残せます。',
  en: '"nido" is a self-photo studio & model agency in Esaka, Osaka. Families, kids, and pets \u2014 capture every side of your loved ones, just as they are, across 5 booths.',
};

export interface ConceptPoint {
  icon: IconType;
  title: Bilingual;
  body: Bilingual;
}

export const conceptPoints: ConceptPoint[] = [
  {
    icon: FiCamera,
    title: { ja: 'セルフ撮影が基本', en: 'Self-shoot, at your pace' },
    body: {
      ja: 'スマホやご自身のカメラで、時間内は自由に撮り放題です。',
      en: 'Shoot freely with your own phone or camera for the whole time slot.',
    },
  },
  {
    icon: FiUsers,
    title: { ja: 'プロの手も借りられる', en: 'Pro help when you want it' },
    body: {
      ja: '一眼レフのレンタルや、提携プロカメラマンへの依頼も選べます。',
      en: 'Rent a DSLR, or book one of our partner photographers if you like.',
    },
  },
  {
    icon: FiRepeat,
    title: { ja: '5ブース使い放題', en: '5 booths, unlimited shooting' },
    body: {
      ja: '海外風ブースを含む5ブースを自由に移動、衣装・小物も使い放題です。',
      en: 'Move freely between 5 themed booths, including an overseas-style set, with unlimited costumes and props.',
    },
  },
];

// --- ご利用の流れ -------------------------------------------------------------

export interface FlowStep {
  step: string;
  title: Bilingual;
  body: Bilingual;
}

export const flowSteps: FlowStep[] = [
  {
    step: '01',
    title: { ja: '公式LINE・DMでご予約', en: 'Book via LINE or DM' },
    body: {
      ja: '公式LINEまたはInstagramのDMから、ご希望日時とプランをご連絡ください。',
      en: 'Message us on official LINE or Instagram DM with your preferred date and plan.',
    },
  },
  {
    step: '02',
    title: { ja: 'ご来店', en: 'Visit the studio' },
    body: {
      ja: '江坂駅・豊津/南吹田駅から徒歩圏内。スタッフがご案内します。',
      en: 'A short walk from Esaka or Toyotsu/Minami-Suita stations. Our staff will show you around.',
    },
  },
  {
    step: '03',
    title: { ja: '撮り放題', en: 'Shoot freely' },
    body: {
      ja: '5ブースを自由に移動しながら、時間内は撮影し放題。衣装や小物も使い放題です。',
      en: 'Move between all 5 booths and shoot as much as you like, with unlimited costumes and props.',
    },
  },
  {
    step: '04',
    title: { ja: 'お好みでオプション', en: 'Add options if you like' },
    body: {
      ja: 'オーナー撮影や一眼レフ、プロカメラマンの同行もオプションで追加できます。',
      en: 'Add owner shooting, a DSLR rental, or a professional photographer as needed.',
    },
  },
];

// --- アクセス・基本情報 --------------------------------------------------------

export const studioInfo = {
  instagramUrl: 'https://www.instagram.com/nido_esaka/',
  instagramHandle: '@nido_esaka',
  lineUrl: 'https://lin.ee/mGYYpb',
  address: {
    ja: '大阪府吹田市南金田2丁目26-28',
    en: '2-26-28 Minamikaneda, Suita, Osaka',
  } as Bilingual,
  // Googleマップ埋め込み用（APIキー不要のクエリ埋め込み）
  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('〒564-0044 大阪府吹田市南金田2-26-28 ファミリーコーポ江坂103 nido') +
    '&output=embed',
  // 「Googleマップで見る」ボタンから遷移する実際の地図ページ
  googleMapsUrl:
    'https://www.google.com/maps?q=%E3%80%92564-0044+%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%90%B9%E7%94%B0%E5%B8%82%E5%8D%97%E9%87%91%E7%94%B0%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%96%E2%88%92%EF%BC%92%EF%BC%98+%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%9D%E6%B1%9F%E5%9D%82+103+nido&ftid=0x6000e5a2bd35b33b:0x31d74f52f0a00ccc&entry=gps',
  access: [
    { ja: '江坂駅より徒歩約13分', en: 'Approx. 13 min walk from Esaka Sta.' },
    { ja: '豊津駅・南吹田駅より徒歩約20分', en: 'Approx. 20 min walk from Toyotsu / Minami-Suita Sta.' },
  ] as Bilingual[],
  reservationNote: {
    ja: 'ご予約は公式LINEまたはInstagram DMから承っています。',
    en: 'Reservations are accepted via official LINE or Instagram DM.',
  } as Bilingual,
  genreLabel: { ja: '家族・お子様・ペット・モデル撮影 ほか', en: 'Family, kids, pets, model shoots & more' } as Bilingual,
};
