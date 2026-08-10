# Image assets

Drop files here with these exact names and they replace the placeholders automatically —
no code changes needed. Anything missing renders as a labeled sage placeholder, so the
layout never breaks while you're gathering assets.

## Hero

| File | Status | What it is |
| --- | --- | --- |
| `heroimage.png` | ✅ in place | Your ballet leap cutout — the anchor of the hero cluster. Trimmed to 2045×1659. |
| `laptop.png` | ✅ in place | Your code-laptop graphic, 653×523. Placed bare — no frame or card. Represents **Software Engineering**. |
| `analytics.png` | ✅ in place | Your analytics dashboard, 716×563. Placed bare. Represents **Data + Analytics**. |
| `accesories.png` | source | The original upload holding both graphics side by side. `laptop.png` and `analytics.png` were split out of it; kept so they can be re-cut if needed. |
| `poloroid.png` | ✅ in place | Your barre polaroid, 386×473. Its border, tape and tilt are baked into the PNG, so it's placed bare with no extra frame or rotation. Sits just above her front knee, corner tucked behind her skirt. |
| `backdrop.png` | ✅ in place | Watercolour sage shape with the botanical sprig built in — the cluster's background layer, replacing the old CSS circle. Trimmed to 872×1000. |

## About

| File | Status | What it is |
| --- | --- | --- |
| `portrait.png` | ✅ in place | Your arabesque cutout. Trimmed to 1053×1327; the About frame uses a 4:5 box to match. |

## About the trimmed files

Both cutouts arrived on large canvases that were mostly transparent — `portrait.png` was
only 42% figure by width, so it rendered tiny inside its frame. They've been cropped to the
figure's actual bounds (plus a 1–2% margin), which is what lets them scale up properly.

The untouched uploads are kept as `heroimage-original.png`, `portrait-original.png` and `backdrop-original.png`. If
you ever replace a cutout, crop the transparent margin off it the same way — otherwise it
will render small no matter what size the container is.
