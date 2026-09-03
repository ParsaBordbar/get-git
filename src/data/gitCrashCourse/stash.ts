const tags = [
  { text: "git", url: "smt" },
  { text: "stash", url: "smt" },
  { text: "workflow", url: "smt" },
];

export const stash = {
  pageName: "stash",
  cards: [
    {
      title: "Stash",
      kind: "reaction",
      desc: `A shelf for work that is not ready to be a commit.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-milky",
    },
    {
      title: "What Stash Is For",
      kind: "reaction",
      desc: `You are halfway through something. A bug comes in, or you need to switch branches, and Git refuses because you would lose your changes.

Stash takes everything uncommitted, stores it away, and hands you a clean working tree. Your work is safe and your branch looks untouched.

It is a **stack** — the newest stash sits on top.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git stash", label: "Park everything, get a clean tree:" },
        { text: "git stash push -m 'wip: half-done login form'", label: "Park it with a label you'll recognise:" },
      ],
    },
    {
      title: "Untracked Files Are Skipped",
      kind: "reaction",
      desc: `The default \`git stash\` only takes **tracked** files. Brand new files Git has never seen stay in your working directory — which surprises people, because it looks like the stash silently ignored them.

\`-u\` includes untracked files. \`-a\` also includes ignored ones, which you almost never want.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git stash -u", label: "Include new, untracked files:" },
        { text: "git stash -a", label: "Include ignored files too (rarely what you want):" },
        { text: "git stash --staged", label: "Stash only what is currently staged:" },
      ],
    },
    {
      title: "See What You Parked",
      kind: "reaction",
      desc: `Stashes are named \`stash@{0}\`, \`stash@{1}\` and so on — \`{0}\` is always the most recent.

This is why labelling matters. Three unlabelled stashes from last week are three mysteries.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git stash list", label: "List every stash:" },
        { text: "git stash show stash@{0}", label: "Summary of what's in one:" },
        { text: "git stash show -p stash@{0}", label: "The full diff:" },
      ],
    },
    {
      title: "pop vs apply",
      kind: "reaction",
      desc: `**pop** restores the stash and **deletes** it from the stack.

**apply** restores it and **keeps** it, so you can put the same changes onto more than one branch — or retry if the first attempt goes badly.

When you are not certain the changes will apply cleanly, use \`apply\`. You can always drop it afterwards.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git stash pop", label: "Restore the newest and remove it:" },
        { text: "git stash apply", label: "Restore the newest, keep it stashed:" },
        { text: "git stash apply stash@{2}", label: "Restore a specific one:" },
      ],
    },
    {
      title: "Stash Onto a New Branch",
      kind: "reaction",
      desc: `Stashed on \`main\`, then realised the work deserves its own branch? \`git stash branch\` creates the branch **from the commit the stash was made on**, applies the stash there, and drops it.

It also sidesteps conflicts: because it starts from the original commit, the changes always apply cleanly.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-light",
      code: [
        { text: "git stash branch feature/login", label: "New branch from the newest stash:" },
        { text: "git stash branch feature/login stash@{1}", label: "From a specific stash:" },
      ],
    },
    {
      title: "Stash Part of Your Work",
      kind: "reaction",
      desc: `\`-p\` walks you through your changes hunk by hunk and asks what to stash. Useful when one file holds both the fix you want to keep and the debugging noise you do not.

Answer **y** to stash a hunk, **n** to keep it in your tree, **s** to split it smaller, **q** to stop.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink",
      code: [
        { text: "git stash -p", label: "Choose what gets stashed:" },
        { text: "git stash push -m 'debug logs' -- src/App.tsx", label: "Stash only certain paths:" },
      ],
    },
    {
      title: "When a Stash Conflicts",
      kind: "reaction",
      desc: `If the branch moved on while your work sat on the shelf, restoring it can conflict. Resolve it like any other conflict.

One trap: after a conflicted \`pop\`, the stash is **not** dropped. That is deliberate — your safety net stays until you say otherwise. Drop it once you are happy.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
      code: [
        { text: "git status", label: "See the conflicted files:" },
        { text: "git add <file>", label: "Mark each one resolved:" },
        { text: "git stash drop", label: "Then remove the stash you just recovered:" },
      ],
    },
    {
      title: "Cleaning Up",
      kind: "reaction",
      desc: `Stashes have no expiry and never show up in \`git log\`, so they quietly pile up for months.

\`clear\` is not undoable through normal means — dropped stashes are unreachable and \`git fsck\` is your only recourse. Check \`git stash list\` first.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git stash drop stash@{1}", label: "Remove one:" },
        { text: "git stash clear", label: "Remove all of them (careful):" },
        { text: "git fsck --unreachable | grep commit", label: "Last resort after a bad clear:" },
      ],
    },
    {
      title: "Stash Isn't a Filing Cabinet",
      kind: "reaction",
      desc: `Stash is for **minutes to hours**, not weeks. It is invisible in the log, it is not pushed to the remote, and it does not survive a fresh clone.

If work needs to live longer than an afternoon, it wants a branch and a commit — even a scruffy \`wip:\` one. You can always tidy the history later.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
    },
  ],
};
