const tags = [
  { text: "git" },
  { text: "abort" },
  { text: "recovery" },
];

export const abort = {
  pageName: "abort",
  cards: [
    {
      title: "Abort",
      kind: "reaction",
      desc: `Every long-running Git operation has an escape hatch. You are never trapped.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-pink-strawberry",
    },
    {
      title: "First: What State Am I In?",
      kind: "reaction",
      desc: `Merge, rebase, cherry-pick and revert can all pause mid-flight and leave the repo in a special state. The prompt looks wrong, commands complain, nothing behaves.

\`git status\` names the state at the top and tells you the exact commands available. Read it before typing anything else — the right abort depends on which operation you are inside.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git status", label: "What is going on:" },
        { text: "git status --short --branch", label: "The compact version:" },
      ],
    },
    {
      title: "The Three Verbs",
      kind: "reaction",
      desc: `Every pausable operation takes the same three flags:

**--continue** — I fixed it, carry on.

**--abort** — undo the whole operation, put me back where I started.

**--skip** — drop this one commit and move to the next (rebase and cherry-pick only).

Learn the pattern once and it applies to all of them.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git rebase --continue", label: "Carry on:" },
        { text: "git rebase --abort", label: "Back out:" },
        { text: "git rebase --skip", label: "Drop the current commit:" },
      ],
    },
    {
      title: "Abort a Merge",
      kind: "reaction",
      desc: `Mid-conflict and you would rather not deal with it right now? \`--abort\` restores the working tree and index to exactly what they were before the merge started.

It is safe **as long as your pre-merge changes were committed or stashed**. Uncommitted work you had lying around before the merge can be lost.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git merge --abort", label: "Undo the merge, restore everything:" },
        { text: "git merge --quit", label: "Stop the merge but keep the working tree as-is:" },
      ],
    },
    {
      title: "Abort a Rebase",
      kind: "reaction",
      desc: `Rebase replays your commits one at a time, so it can stop repeatedly. \`--abort\` throws away every replayed commit and returns the branch to its original tip.

This is the one people fear most, and it is completely reversible right up until you force-push.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git rebase --abort", label: "Put the branch back how it was:" },
        { text: "git rebase --skip", label: "Skip a commit that no longer applies:" },
        { text: "git rebase --continue", label: "Resume after resolving:" },
      ],
    },
    {
      title: "Abort Cherry-Pick & Revert",
      kind: "reaction",
      desc: `Same three verbs, same behaviour. A cherry-pick or revert that hits a conflict pauses and waits for you.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink",
      code: [
        { text: "git cherry-pick --abort", label: "Cancel the cherry-pick:" },
        { text: "git revert --abort", label: "Cancel the revert:" },
        { text: "git cherry-pick --continue", label: "Resume after resolving:" },
      ],
    },
    {
      title: "--abort vs --quit",
      kind: "reaction",
      desc: `**--abort** rewinds everything — the operation and its changes are gone, you are back at the start.

**--quit** just ends the operation and leaves the working tree exactly as it is now, half-resolved and all. Use it when you want to keep what you have already fixed but stop Git from managing the sequence.

If you are unsure, you want \`--abort\`.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
      code: [
        { text: "git merge --abort", label: "Rewind everything:" },
        { text: "git rebase --quit", label: "Stop managing it, keep the current tree:" },
      ],
    },
    {
      title: "Bail Out of an Editor",
      kind: "reaction",
      desc: `Git dropped you into Vim for a commit or interactive rebase message and you want out.

Quitting **without saving** aborts the operation — Git treats an empty or unchanged message as "never mind". That is the safest escape when you are not sure what you are looking at.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-light",
      code: [
        { text: ":q!", label: "Vim: quit without saving (aborts the operation):" },
        { text: ":wq", label: "Vim: save and continue:" },
        { text: "git config --global core.editor 'nano'", label: "Or stop using Vim entirely:" },
      ],
    },
    {
      title: "ORIG_HEAD: The Panic Button",
      kind: "reaction",
      desc: `Before any operation that moves your branch a long way — merge, rebase, reset — Git saves where you were in \`ORIG_HEAD\`.

If you aborted too late, or completed something you meant to cancel, this is the fastest way back. \`git reflog\` is the fuller version if \`ORIG_HEAD\` has already been overwritten.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git reset --hard ORIG_HEAD", label: "Back to where you were before the last big move:" },
        { text: "git reflog", label: "The full history of HEAD, if that is not enough:" },
      ],
    },
    {
      title: "The Short Version",
      kind: "reaction",
      desc: `**Lost?** → \`git status\`

**Mid-merge** → \`git merge --abort\`

**Mid-rebase** → \`git rebase --abort\`

**Mid-cherry-pick or revert** → \`git cherry-pick --abort\` / \`git revert --abort\`

**Stuck in an editor** → \`:q!\`

**Aborted too late** → \`git reset --hard ORIG_HEAD\`

Nothing here touches the remote. Until you push, every one of these is free.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
    },
  ],
};
