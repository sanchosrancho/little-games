# Table Rivals landing

Static GitHub Pages website, published from this repository's `main` branch.

- English: https://sanchosrancho.github.io/little-games/table-rivals/
- Russian: https://sanchosrancho.github.io/little-games/table-rivals/ru/
- Privacy and Support: `privacy/`, `support/` under each language.

Preview from the repository root: `python3 -m http.server 8768`, then open
`http://localhost:8768/table-rivals/`.

No build, package installation, third-party scripts, analytics, forms or cookies.
Arena tabs progressively enhance the six descriptions; all remain available
without JavaScript. The hero and table selector show real court captures from build 1.0 (7), with
matching colours and descriptions of wind, ricochet flashes, shutter feedback,
portal transfers and side-pocket goals. The initial selected court is Portals.
Reduced-motion preferences stop smooth scrolling and transitions.

## Beta access

The CTA opens an email to `littlegamesios@gmail.com`. The current TestFlight beta
is closed and has no public invitation URL. Replace the CTA and beta wording only
after a public destination is available. Release pricing is intentionally unset:
all tables are currently open in the beta and IAP is not connected.

Online Game Center play is labelled beta. Two-device physical testing is still
pending. Local play and computer matches work offline. Required OS: iOS/iPadOS 17.

## Assets

`assets/hero.jpg` and `hero-small.jpg` are compressed exports of the original
Table Rivals header in the app repository:
`apps/table-rivals/Release/creative-assets/table-rivals-header-source.png`.
Generation prompt/provenance lives beside the source in that repository.
`assets/icon.svg` is a website-specific vector court mark.
All assets, CSS and JavaScript are hosted with this site.

Keep English and Russian pages, canonical/alternate links, metadata and the privacy
policy in sync when changing product behaviour. Publishing the website does not
submit or release the iOS app.

## Court update — 23 October 2026

`assets/courts/` contains WebP exports at 360px and 720px widths, preserving the
original artwork and language of the live captures (resized and compressed only):

- English: actual SpriteKit court captures from the successful final build-7
  Pro benchmark, `apps/table-rivals/build/arena-phone-attachments/`, attachment
  names `arena-live-*`. These captures show the court without SwiftUI overlays.
- Russian: full gameplay UI screenshots from
  `apps/table-rivals/Release/arena-preview/iphone-*.png`.

Both sets use the released build-7 artwork and physics. No game imagery or labels
were generated or repainted for this update. The original header remains the
social sharing image. Gameplay claims follow the app's
`docs/arena-design-2026-10-21.json`; no physical-iPhone FPS claim is made.
