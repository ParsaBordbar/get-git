![image](https://github.com/user-attachments/assets/dbd97beb-f3e1-4ef9-824b-ba7ae54696f7)

# Get-Git

Get-Git is an open-source React app that teaches Git with flash cards. It is a sub-project of a broader open-source learning platform focused on teaching the 20% of a topic you need for 80% of real-world workflows.

Read it live at [parsabordbar.github.io/get-git](https://parsabordbar.github.io/get-git/).

## Features

- **Flash-card series.** Eleven short series, each a scrolling deck of cards with a title, tags, markdown body, and copyable commands. A few minutes each.
- **Progress tracking.** Every series ends with a done checkbox. Finished series get a check mark on the home page and in the menu, and the home page shows how many are done with a reset link. Progress lives in your browser's local storage; nothing is sent anywhere.
- **Continue where you left off.** The home page button starts you on Basics, then moves to the next unfinished series as you go.
- **Tags.** Every card is tagged. Click a tag to see all cards about it across every series, or browse the full tag index at `/tags`.
- **Reactions.** Emoji buttons under cards toggle and show a small count. Counts are per device.
- **Gitmoji reference.** A searchable list of commit emoji with one-click copy for both the emoji and its `:code:`.
- **Mobile menu.** A burger menu on small screens lists every series and the tag index, with the current page highlighted.
- **Series navigation.** Previous and next arrows, a Home button, a card-and-minute count, and a read-progress bar along the page edge.
- **Installable.** Web app manifest and a service worker, so the site can be added to a home screen and opened offline.

## Series

1. **Basics**: daily workflow commands like `git status`, `git add`, `git commit`, and `git push`
2. **Changes**: inspecting changes with `git status`, `git log`, `git diff`, and `git restore`
3. **Commit**: writing good commit messages, commit types, and best practices
4. **Branches**: creating, switching, and managing branches
5. **Merge**: bringing two branches back together
6. **GitHub**: remotes, cloning, forks, pull requests, and writing a README in markdown
7. **Conflicts**: reading conflict markers and resolving merge conflicts
8. **Abort**: backing out of a merge, rebase, or cherry-pick gone wrong
9. **Stash**: parking work and coming back to it later
10. **Undo**: recovering lost commits and undoing mistakes
11. **Gitmoji** _(extra)_: an emoji at the start of a commit message says what it does

## Local Usage

1. **Clone the repo**:
   ```bash
   git clone https://github.com/ParsaBordbar/get-git.git
   cd get-git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open** `http://localhost:5173/get-git/` in your browser.

Other scripts:

```bash
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
npm run deploy    # publish dist/ to GitHub Pages
npm run lint      # eslint
npm run format    # prettier
```

## Adding a Series

1. Add a data file under `src/data/gitCrashCourse/` exporting `{ pageName, cards }`.
2. Add a page under `src/pages/` that renders `FlashCardSeries` with those cards.
3. Add the route in `src/routes/routes.tsx`.
4. Add an entry to `src/data/series.ts` (path, title, description, icon, colour). This one entry wires the home grid, the mobile menu, previous/next arrows, and progress tracking.
5. Map the path to its cards in `src/data/cards.ts` so its tags show up on tag pages.

## Directory Structure

- `src/pages` — one page per series, plus Home and Tags
- `src/components` — Card, FlashCardSeries, Header (mobile menu), SideNav, Abstract, ProgressCheck, ReactionBar, and friends
- `src/data` — card content for each series, the series registry, and the tag index
- `src/lib` — local-storage stores for progress and reactions
- `public` — static assets, web app manifest, icons, and the service worker
- `RELEASE.md` — release notes
- `LICENSE` — project license (CC BY-NC-SA 4.0)

## Contributing

Contributions are welcome. Please keep in mind:

- This project is free to use for educational and open-source purposes only.
- Commercial use is not permitted under the license.
- Feel free to open issues or submit pull requests for bug fixes, new series, or improvements.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](LICENSE).

---

###### Coming up

- Global reaction counts backed by a shared store
- More series and a Docker image for local usage

_Happy Git learning!_
