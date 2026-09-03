import { flashCardSeries } from "../../types/types";

export const gitConflictCard: flashCardSeries = {
  pageName: "gitConflictCard",
  cards: [
    {
      title: "What Is a Git Conflict?",
      desc: `A **Git conflict** occurs when two branches have changes to the same lines in a file, and Git cannot automatically merge them.

    This happens typically during:`,
      code: [
        {
          text: "git merge",
          label: "Merging:",
        },
        {
          text: "git pull",
          label: "Pilling:",
        },
        {
          text: "git rebase",
          label: "Rebasing::",
        },
      ],
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "merge_conflict" },
        { text: "version_control" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FF9999]",
    },
    {
      title: "Detecting Conflicts",
      desc: `When a conflict occurs, Git will pause the operation and mark files as **unmerged**. You can check them using:`,
      kind: "reaction",
      code: [
        {
          label: "Show conflicted files:",
          text: "git status",
        },
      ],
      tags: [
        { text: "git" },
        { text: "conflict_check" },
        { text: "version_control" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FFCC70]",
    },
    {
      title: "Conflict Markers",
      desc: `Git adds **conflict markers** in files to show conflicting code. Example:

\`\`\`
Their version
\`\`\`

You need to **edit the file manually** and choose the correct content.`,
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "conflict_markers" },
        { text: "manual_merge" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#F7BD1D]",
    },
    {
      title: "Resolving Conflicts",
      desc: `After editing files and removing conflict markers, you must stage them to tell Git the conflict is resolved.`,
      kind: "reaction",
      code: [
        {
          label: "Stage resolved file:",
          text: "git add <filename>",
        },
      ],
      tags: [
        { text: "git" },
        { text: "conflict_resolution" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#7B9D7C]",
    },
    {
      title: "Completing the Merge",
      desc: `Once all conflicts are resolved and staged, complete the merge with a commit:`,
      kind: "reaction",
      code: [
        {
          label: "Commit after resolving:",
          text: "git commit",
        },
      ],
      tags: [
        { text: "git" },
        { text: "merge_commit" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#C5C6FF]",
    },
    {
      title: "Abort a Merge (Optional)",
      desc: `If things get messy and you want to cancel the merge entirely:`,
      kind: "reaction",
      code: [
        {
          label: "Abort merge:",
          text: "git merge --abort",
        },
      ],
      tags: [
        { text: "git" },
        { text: "merge_abort" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FFA9E8]",
    },
    {
      title: "Visual Conflict Resolution",
      desc: `Many editors (e.g., **VSCode**, **Sublime**, or tools like **GitKraken**) provide visual interfaces to resolve conflicts easily.

Look for:  
- Sections marked "Current Change" vs "Incoming Change"  
- One-click options to "Accept Current", "Accept Incoming", or "Accept Both"`,
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "gui" },
        { text: "merge_tools" },
      ],
      icon: "./assets/git.svg",
      imgUrl: "./assets/visual-merge.png",
      style: "bg-[#04BFA4]",
    },
    {
      title: "Practice Scenario: Git Conflict",
      desc: `Try creating a conflict manually:

1. Create a file and commit it
2. Create a branch and edit the same line
3. Switch to main, edit same line, commit
4. Merge the branch: \`git merge branch_name\`  
You'll hit a conflict — now practice resolving it!`,
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "exercise" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FFE87E]",
    },
  ],
};
