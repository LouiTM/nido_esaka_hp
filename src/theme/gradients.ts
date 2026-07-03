// ---------------------------------------------------------------------------
// 水彩風の背景ウォッシュ（グラデーション）
//
// 既存のブランドカラー（terracotta/mustard/sage/blush）の淡いシェード（50番台）
// を使い、各セクションのムードに合わせて敷く柔らかい背景を用意する。色相自体は
// 変更せず、opacityとグラデーションの滲みで「水彩っぽさ」を出す。
// Chakra の `bgGradient` prop は単一の gradient() 呼び出ししか解釈できないため、
// レイヤーは1つに絞っている。
// ---------------------------------------------------------------------------

export const gradients = {
  // 空・子供らしい爽やかさ（Gallery / Flow背景の下敷きとして残置。Flow本体は
  // 「空感」を強めるためsage.50のベタ塗りに変更 — Flow.tsx参照）
  sky: 'radial(circle at 20% 15%, sage.50, transparent 60%)',
  // 花畑のような柔らかさ（Hero / Concept）
  bloom: 'radial(circle at 85% 10%, blush.50, transparent 60%)',
  // ブランドカラー（terracotta）を活かした温かみ（Menu / InstagramCTA）
  sun: 'radial(circle at 80% 0%, mustard.50, transparent 60%)',
};
