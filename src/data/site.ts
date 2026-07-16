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

// 写真が届くまでは、実際のInstagram投稿からお借りした1枚を全カード共通で使用する
// （差し替え時は配列の各要素を個別の画像パスに変更してください）。
export const galleryPhotos: string[] = Array.from({ length: 10 }, () => realPhoto);

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
  ja: '"nido"は、大阪・江坂のフォトスタジオ。ご家族、ファミリー、お子様、ペットなど、いろんな形の家族の飾らないいつもの姿を5つのブースで自由に撮り放題で残せます。',
  en: '"nido" is a photo studio in Esaka, Osaka. Families of every shape \u2014 parents, kids, and pets \u2014 freely capture your everyday, unposed moments across 5 booths, shooting as much as you like.',
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

// --- アクセス・基本情報 --------------------------------------------------------

export const studioInfo = {
  instagramUrl: 'https://www.instagram.com/nido_esaka/',
  instagramHandle: '@nido_esaka',
  lineUrl: 'https://l.instagram.com/?u=https%3A%2F%2Flin.ee%2FmGYYpbm%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnm-A6N3_YUxESpbvLTfPI0Y509zrU5qEmRbt5YGKBrAJzRBQxts4YbkDS7rM_aem_t1clPnQBB11WEn3v7AwEIA&e=AUA14P_ibPHcKiesyDKowjJzXpCeNJGXldeX_oaGQlN-YNeYdsuKCy0Up5eGv5L4EH24GYbpLLPvJleJTt8v2Y-G62e1IlNDHi_nRF4xAzLXtuEnphhLf5EQCl-FN7YqmGkDd75Db4QdH67H90fZmio',
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
  genreLabel: {
    ja: '家族、お子様、ペット、マタニティ、夫婦、カップル、宣材写真、モデル撮影など',
    en: 'Family, kids, pets, maternity, married couples, couples, portfolio shoots, model shoots & more',
  } as Bilingual,
};
