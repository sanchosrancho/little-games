# Little Puzzle Worlds website

The existing `/little-games/halloween/` URLs remain the landing, privacy and support URLs for the renamed app. Pages also explain the transition for existing Little Halloween owners.

Content matches version 2.0: Halloween and Underwater World, 20 scenes each, first 6 free in each world, separate non-consumable unlocks, existing Halloween ownership/progress preserved, independent music/effects, 16 languages, iPhone/iPad and Duo layouts. No fixed IAP prices are shown; StoreKit supplies local prices.

The landing and support explicitly mark 2.0 as forthcoming while live App Store version 1.0.1 is still available. **After manually releasing 2.0**, replace the coming-soon notice in `index.html` and the version-availability paragraph in `support/index.html`.

Assets reuse the app's existing original artwork: the new AppIcon, the universal collection creative, the clownfish and pumpkin. The banner is a web-sized JPEG export of the collection creative; the source/prompt are maintained in `sanchosrancho/halloween-ios` on `codex/puzzle-worlds`, under `Release/creative-assets/worlds-2.0/`. No new third-party art, fonts, scripts or analytics were added.

Contact: littlegamesios@gmail.com. Publish through the existing main-branch GitHub Pages deployment.
