const tags = [
  { text: "git", url: "smt" },
  { text: "merge", url: "smt" },
  { text: "branches", url: "smt" },
];

export const merge = {
  pageName: "merge",
  cards: [
    {
      title: "Merge",
      kind: "reaction",
      desc: `You branched off, you did the work. Now bring it home.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-green-light",
    },
    {
      title: "Merge Goes One Way",
      kind: "reaction",
      desc: `Merging is not symmetric. You **check out the branch that should receive the work**, then merge the other one into it.

To get \`feature\` into \`main\`, you stand on \`main\`. Getting this backwards is the single most common merge mistake.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git switch main", label: "1. Stand where the work should land:" },
        { text: "git merge feature", label: "2. Pull the other branch in:" },
      ],
    },
    {
      title: "Fast-Forward",
      kind: "reaction",
      desc: `If \`main\` has not moved since you branched, there is nothing to reconcile. Git just slides the \`main\` label forward onto your commits.

No merge commit is created. The history stays a straight line — which is tidy, but it also erases the fact that a branch ever existed.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git merge feature", label: "Fast-forward when possible:" },
        { text: "git merge --ff-only feature", label: "Refuse to merge unless it fast-forwards:" },
      ],
    },
    {
      title: "Three-Way Merge",
      kind: "reaction",
      desc: `If **both** branches have new commits, Git cannot slide a label. It looks at three points — your branch tip, their branch tip, and the last commit they shared — and builds a **merge commit** with two parents.

This is the normal case on a team, and it is where conflicts can appear.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git merge feature", label: "Merge with a merge commit:" },
        { text: "git merge -m 'merge: feature into main' feature", label: "Set the merge message yourself:" },
      ],
    },
    {
      title: "--no-ff: Keep the Story",
      kind: "reaction",
      desc: `\`--no-ff\` forces a merge commit even when a fast-forward was possible.

Worth it when a branch represents one unit of work — a feature, a fix, a release. The merge commit is a bookmark saying *this is where that work landed*, and it lets you revert the whole branch as one thing later.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git merge --no-ff feature", label: "Always make a merge commit:" },
        { text: "git revert -m 1 <merge-commit>", label: "Later: undo the whole merged branch:" },
      ],
    },
    {
      title: "--squash: One Clean Commit",
      kind: "reaction",
      desc: `\`--squash\` takes everything the branch did and stages it as **one** set of changes. No merge commit, no branch history — just the end result, waiting for you to commit it.

Good for a branch full of "wip", "fix typo", "actually fix typo". Note Git does **not** commit for you, and does not record the merge, so the branch will still look unmerged.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink",
      code: [
        { text: "git merge --squash feature", label: "1. Flatten the branch into the staging area:" },
        { text: "git commit -m 'feat: add login flow'", label: "2. Commit it as one change:" },
      ],
    },
    {
      title: "Look Before You Merge",
      kind: "reaction",
      desc: `You can see what a merge would bring in before committing to it.

\`--no-commit --no-ff\` performs the merge but stops before creating the commit, so you can inspect it — and \`git merge --abort\` still backs you out cleanly.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
      code: [
        { text: "git log main..feature --oneline", label: "What commits would come in:" },
        { text: "git diff main...feature", label: "What the change actually looks like:" },
        { text: "git merge --no-commit --no-ff feature", label: "Merge but stop before committing:" },
      ],
    },
    {
      title: "When It Conflicts",
      kind: "reaction",
      desc: `A conflict is not an error. Git is telling you two branches changed the same lines and it will not guess which one wins.

Nothing is lost, and you are never stuck: \`git merge --abort\` puts everything back exactly as it was.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
      code: [
        { text: "git status", label: "See which files are conflicted:" },
        { text: "git add <file>", label: "Mark a file as resolved:" },
        { text: "git merge --continue", label: "Finish the merge:" },
        { text: "git merge --abort", label: "Or back out entirely:" },
      ],
    },
    {
      title: "After the Merge",
      kind: "reaction",
      desc: `Once the work has landed, the branch label has done its job. Deleting it removes the name, never the commits.

\`--merged\` lists branches that are fully contained in your current branch — those are the safe ones to delete.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git branch --merged", label: "Which branches are fully merged:" },
        { text: "git branch -d feature", label: "Delete a merged branch (refuses if not merged):" },
        { text: "git push origin --delete feature", label: "Delete it on the remote too:" },
      ],
    },
    {
      title: "Seeing the Shape",
      kind: "reaction",
      desc: `Merge history is a graph, not a list. \`--graph\` draws it, and it is the fastest way to understand what actually happened to a repo.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git log --graph --oneline --all", label: "Draw the branch graph:" },
        { text: "git log --merges --oneline", label: "Show only merge commits:" },
      ],
    },
  ],
};
