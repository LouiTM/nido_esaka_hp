// ---------------------------------------------------------------------------
// 「ポップ＆ビビッド」デザイン共通のスタイルヘルパー
// （.temp/design_handoff_pop_vivid_top のリファレンス準拠）
// ---------------------------------------------------------------------------

/** Chakraのカラートークンを、SVG属性や生CSS値で使えるvar()参照へ変換する */
export const tokenToCssVar = (c: string) =>
  c.includes('.') ? `var(--chakra-colors-${c.replace(/\./g, '-')})` : c;

/** 黒インクの縦方向ハードシャドウ（ボタンの押し込み表現用） */
export const inkShadow = (y: number) => `0 ${y}px 0 var(--chakra-colors-pop-black)`;

/**
 * ハードシャドウ＋押し込みホバーのボタン共通スタイル。
 * offset=3: ナビ等の小ボタン（押すと translateY(2px)・影1px）、
 * offset=5: ヒーローCTA等の大ボタン（押すと translateY(3px)・影2px）。
 * bg / color は Chakra Button の既定ホバーで変わるため、スプレッド後に
 * `_hover={{ ...pressable(n)._hover, bg: '...', color: '...' }}` で明示すること。
 */
export function pressable(offset: 3 | 5 = 3) {
  const press = offset === 5 ? { y: 3, shadow: 2 } : { y: 2, shadow: 1 };
  return {
    border: '3px solid',
    borderColor: 'pop.black',
    boxShadow: inkShadow(offset),
    transition: 'all 0.15s',
    _hover: {
      transform: `translateY(${press.y}px)`,
      boxShadow: inkShadow(press.shadow),
    },
  } as const;
}
