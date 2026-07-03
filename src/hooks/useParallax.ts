import { useEffect } from 'react';

/**
 * data-parallax="0.1" のような属性を持つ要素を、所属セクション（closest('section')）
 * の中心がビューポート中心からどれだけずれているかに応じて縦方向にずらす、
 * 軽量なパララックス。装飾（花・雲モチーフ）専用 — コンテンツには使わないこと。
 *
 * `prefers-reduced-motion: reduce` の場合は何もしない。
 *
 * 使い方:
 *   // App.tsx の先頭で一度だけ呼ぶ
 *   useParallax();
 *
 *   // 動かしたい装飾要素（外側ラッパー）に data-parallax を付ける。
 *   // 係数は 0.06〜0.14 程度を推奨（絶対値が大きいほど大きく動く）。負値で逆方向。
 *   <Box data-parallax="0.1"><FlowerMark ... /></Box>
 */
export function useParallax() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const vh = window.innerHeight;
        document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
          const section = el.closest('section') ?? el.parentElement;
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const mid = rect.top + rect.height / 2 - vh / 2;
          const factor = parseFloat(el.dataset.parallax || '0') || 0;
          el.style.transform = `translateY(${(mid * factor).toFixed(1)}px)`;
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
