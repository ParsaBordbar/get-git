# Get-Git 2.0.0

Released 2026-09-03. Live at https://parsabordbar.github.io/get-git/

Get-Git is a set of flash-card series for learning Git. This release
turns it from a single scrolling deck into a small course you can work
through, track, and browse.

## New

- **Home page.** A proper landing page with a headline, a "Start with
  Basics" button, and a grid of all series. The button moves to the next
  unfinished series once you have started.
- **Mobile menu.** A burger button on small screens opens a list of every
  series plus the tag index, with the current page highlighted.
- **Five new series.** Merge, Abort, Stash, Undo, and Gitmoji (an
  searchable emoji-for-commits reference, marked as extra material).
- **Progress.** Every series ends with a done checkbox. Finished series
  get a check mark on the home page and in the menu, and the home page
  shows how many are done with a reset link. Progress lives in your
  browser's local storage; nothing is sent anywhere.
- **Tags.** Card tags are now links. `/tags/<tag>` lists every card with
  that tag across all series, and `/tags` indexes all tags with counts.
- **Reactions.** The emoji buttons under cards now toggle and show a
  small count. Counts are per device for now.
- **Installable.** Web app manifest, icons, and a service worker so the
  site can be added to a home screen and opened offline.
- **Series navigation.** Fixed previous/next arrows on desktop, a Home
  button under the card count, and a read-progress bar along the page
  edge.

## Changed

- Home page cards replaced by compact tiles that use the same candy
  colours and chunky borders as the flash cards.
- Series list is now a single registry that drives the home grid, the
  menu, previous/next links, and the tag index.
- Border and font tokens are declared explicitly instead of falling back
  to inherited values.
- Icons resolve through the site base URL so they load on nested routes.

## Removed

- Delta Chat series and its assets.
- All code comments and placeholder tag URLs.

## Upgrading a deployed copy

The service worker cache name is `get-git-v2`. Bump it in `public/sw.js`
on every deploy so returning visitors pick up the new build.

```bash
npm install
npm run build
npm run deploy
```
