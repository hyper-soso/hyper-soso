<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Tailwind CSS 작성 규칙

- 클래스는 다음 순서로 작성한다: `col-span` → position (`relative`, `absolute`, `sticky` 등) → 위치·변형 (`inset`, `top`, `right`, `bottom`, `left`, `z-index`, `translate`, `transform`, `rotate`, `scale` 등) → margin → padding → height → width → text/font 관련 → 나머지 → 색상 관련.
- `space-x`, `space-y`는 margin 그룹에, `min-h`/`max-h`와 `min-w`/`max-w`는 각각 height와 width 그룹에 둔다. `size`는 height 그룹에 둔다.
- 글자 크기·정렬·행간·두께 등은 text/font 그룹에 둔다. `text-muted-foreground`, `bg-*`, `border-*`, `ring-*` 등의 **색상** 유틸리티는 맨 마지막에 둔다. 테두리 두께·스타일이나 `bg-clip-*`처럼 색상을 지정하지 않는 클래스는 색상 그룹에 넣지 않는다.
- 반응형 `md:` 클래스는 대응하는 기본 클래스 바로 옆에 쓴다. 기본 클래스가 없으면 해당 속성 그룹에 배치한다.
  - 올바름: `p-4 md:p-8 bg-rose-200`
  - 잘못됨: `p-4 bg-rose-200 md:p-8`
  - 예시: `col-span-1 md:col-span-2 relative top-0 mt-4 md:mt-8 p-4 md:p-8 h-auto w-full text-sm md:text-base font-medium rounded-lg bg-secondary text-muted-foreground`
- `className`뿐 아니라 공통 클래스 문자열과 variant 정의에도 같은 순서를 적용한다. 자동 정렬 도구가 이 순서를 덮어쓰지 않도록 한다.
