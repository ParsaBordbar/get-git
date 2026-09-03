const tags = [
  { text: "git", url: "smt" },
  { text: "undo", url: "smt" },
  { text: "recovery", url: "smt" },
];

export const undo = {
  pageName: "undo",
  cards: [
    {
      title: "Undo & Recovery",
      kind: "reaction",
      desc: `You broke something. Git almost certainly still has it.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-red",
    },
    {
      title: "Where Did It Go?",
      kind: "reaction",
      desc: `Before undoing anything, work out **which stage** the change is sitting in — the fix is different for each.

**Working directory** — edited, never staged.

**Staging area** — you ran \`git add\`, but not \`git commit\`.

**Committed** — it is in your local history.

**Pushed** — it is on the remote, and other people may have it.

\`git status\` tells you which. Read it first, every time.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "./assets/stages.png",
      style: "bg-candy-blue-sky",
    },
    {
      title: "Unstage a File",
      kind: "reaction",
      desc: `Added something by accident? Take it back out of the staging area. Your edits are **not** touched — the file just stops being staged.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git restore --staged <file>", label: "Unstage one file:" },
        { text: "git restore --staged .", label: "Unstage everything:" },
      ],
    },
    {
      title: "Throw Away Local Edits",
      kind: "reaction",
      desc: `This one **destroys work**. Uncommitted changes are the only thing Git cannot get back for you — there is no commit to recover from.

If you are not sure, \`git stash\` instead. It is the same undo, but reversible.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
      code: [
        { text: "git restore <file>", label: "Discard changes to one file:" },
        { text: "git restore .", label: "Discard everything (careful):" },
        { text: "git stash", label: "Safer: park it instead of deleting it:" },
      ],
    },
    {
      title: "Amend the Last Commit",
      kind: "reaction",
      desc: `Forgot a file, or typo'd the message? \`--amend\` replaces the last commit instead of stacking a new one on top.

It **rewrites history**, so only amend commits you have not pushed yet.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git commit --amend", label: "Fix the message:" },
        {
          text: "git add <file> && git commit --amend --no-edit",
          label: "Add a forgotten file, keep the message:",
        },
      ],
    },
    {
      title: "The Three Resets",
      kind: "reaction",
      desc: `\`git reset\` moves the branch pointer backwards. What happens to your **files** depends on the flag:

**--soft** — commit undone, changes stay **staged**. Use this to re-commit differently.

**--mixed** (the default) — commit undone, changes stay in your working directory, unstaged.

**--hard** — commit undone and your files are **overwritten**. This is the one that loses work.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git reset --soft HEAD~1", label: "Undo commit, keep it staged:" },
        { text: "git reset --mixed HEAD~1", label: "Undo commit, keep the files:" },
        { text: "git reset --hard HEAD~1", label: "Undo commit and the changes:" },
      ],
    },
    {
      title: "Revert: Undo in Public",
      kind: "reaction",
      desc: `Once a commit is **pushed**, do not \`reset\` it — you would be rewriting history other people already pulled.

\`git revert\` instead creates a **new commit** that undoes the old one. History stays intact and everyone stays in sync.

Rule of thumb: **reset** for private history, **revert** for shared history.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-light",
      code: [
        { text: "git revert <commit>", label: "Undo one commit safely:" },
        { text: "git revert HEAD", label: "Undo the most recent commit:" },
        {
          text: "git revert --no-commit <commit>",
          label: "Stage the undo without committing:",
        },
      ],
    },
    {
      title: "Stash: Park Your Work",
      kind: "reaction",
      desc: `You need to switch branches, but you are mid-change and not ready to commit. Stash shelves the work and gives you a clean tree back.

By default \`git stash\` skips untracked files — pass \`-u\` if you want those too.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
      code: [
        { text: "git stash push -m 'wip: login form'", label: "Park it, with a label:" },
        { text: "git stash list", label: "See what you parked:" },
        { text: "git stash pop", label: "Bring the newest one back:" },
        { text: "git stash apply stash@{2}", label: "Bring back a specific one, keep the stash:" },
      ],
    },
    {
      title: "Committed to the Wrong Branch",
      kind: "reaction",
      desc: `Classic. You committed to \`main\` when you meant to be on a feature branch.

Branch off where you are — the commit comes with you — then rewind \`main\` back to where it should have been.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git branch feature/my-work", label: "1. Save the commit onto a new branch:" },
        { text: "git reset --hard HEAD~1", label: "2. Rewind the branch you were on:" },
        { text: "git switch feature/my-work", label: "3. Go where you meant to be:" },
      ],
    },
    {
      title: "Reflog: Git's Black Box",
      kind: "reaction",
      desc: `\`git reflog\` records **every** position HEAD has been in — including the commits you thought you destroyed with \`reset --hard\`.

Nothing committed is truly gone for about 90 days. When you are certain you lost work, look here **before** you panic.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git reflog", label: "See everywhere HEAD has been:" },
        { text: "git reset --hard HEAD@{3}", label: "Jump back to a previous position:" },
        { text: "git checkout -b rescue HEAD@{3}", label: "Safer: recover onto a new branch:" },
      ],
    },
    {
      title: "Recover a Deleted Branch",
      kind: "reaction",
      desc: `Deleting a branch only deletes the **label**. The commits are still there — you just lost the name pointing at them.

Find the tip commit in the reflog, then hang a new branch on it.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git reflog", label: "1. Find the branch's last commit:" },
        { text: "git branch <name> <commit>", label: "2. Point a branch at it again:" },
      ],
    },
    {
      title: "Recover a Deleted File",
      kind: "reaction",
      desc: `If the file was ever committed, you can pull it straight back out of history — no need to undo anything else.

\`git log\` with \`--\` scoped to the path finds the commit that last had it.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git log --oneline -- <file>", label: "Find when it last existed:" },
        { text: "git restore --source=<commit> -- <file>", label: "Pull that version back:" },
      ],
    },
    {
      title: "The Short Version",
      kind: "reaction",
      desc: `**Staged it by mistake** → \`git restore --staged\`

**Bad edit, not committed** → \`git stash\`, or \`git restore\` if you are sure

**Bad commit, not pushed** → \`git reset\`

**Bad commit, already pushed** → \`git revert\`

**Lost a commit or a branch** → \`git reflog\`

The only thing Git cannot save is work you never staged or committed. Commit early — it is your undo button.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-red",
    },
  ],
};
