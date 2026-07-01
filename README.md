# nido（ニド）江坂フォトスタジオ サイト

TypeScript + React + Chakra UI (v2) 製の、フロントエンドのみの1ページサイトです。

## 反映済みの実データ

- コンセプト文（セルフフォトスタジオ、5ブース使い放題、プロカメラマン依頼可 など）
- 料金メニュー（KIDS & PETS Basic Plans / Family Simple / オプション）
- 住所：大阪府吹田市南金田2丁目26-28
- アクセス：江坂駅 徒歩約13分／豊津・南吹田駅 徒歩約20分
- ご予約導線：公式LINE + Instagram DM
- 実際のInstagram投稿写真を1枚使用（`public/images/nido-about.png`）

## ⚠️ まだ仮のままの部分

- **公式LINEのURL** — `src/data/site.ts` の `studioInfo.lineUrl` が `'#'` のままです。
  LINE公式アカウントのURL（`https://lin.ee/xxxx` など）をいただき次第、差し替えます。
- **写真** — 実写真は1枚のみ反映済みで、他は https://picsum.photos のダミー画像です。
  ギャラリー・Hero・コンセプトセクションの写真を追加でお送りいただければ差し替えます。
  差し替え箇所は `src/data/site.ts` の `galleryItems` / `placeholderImage(...)` の呼び出し部分です。
- **営業時間・定休日** — 情報をいただいていないため掲載していません。分かり次第追加できます。
- **地図** — `src/components/AccessInfo.tsx` は現在プレースホルダー表示です。Googleマップの
  埋め込み iframe に差し替え可能です。

## セットアップ

```bash
npm install
npm run dev       # 開発サーバー起動
npm run build     # 本番ビルド（dist/ に出力）
```

## 構成

- `src/theme` — Chakra UI のカラー・フォントなどのブランドトークン（実写真の配色＝
  スカイブルー×コーラルレッド×サニーイエロー×キッズピンクを反映）
- `src/i18n` — 日本語 / 英語の言語切り替え（右上のボタンでトグル、localStorage に保存）
- `src/data/site.ts` — ギャラリー・メニュー・アクセス情報などのコンテンツデータ
- `src/components` — セクションごとのコンポーネント（Hero, Concept, Gallery, Menu, Flow, InstagramCTA, AccessInfo, Footer）

## デザインについて

実際の投稿写真（青backdrop×赤黄のバルーン×パーティー感）の配色をそのままブランド
カラーに採用し、背景はすっきり明るいクリームに抑えつつ、スカイブルー・コーラル
レッド・サニーイエロー・キッズピンクの4色をポップに使い分けています。カメラの
絞り羽根と鳥の巣の"編み"を重ねたリングモチーフ（`ApertureMark`）をシグネチャー
要素として、見出しや背景装飾に繰り返し使用しています。

参考にいただいた Studio Alice（カラフルでポップな配色・アイコン付きナビ）と
mines（淡いピンク×花・上品なロゴタイプ）のイメージ（スクリーンショット）も
踏まえ、「カラフルだけどうるさくない」バランスを狙っています。
