import { cardType } from "../../types/types";

export const gitGithubConcepts: cardType[] = [
  {
    title: 'What Is GitHub?',
    desc: `**[GitHub](github.com)** is a cloud-based hosting service for Git repositories.  
It lets you **store**, **share**, and **collaborate** on code with others online.

- Built on top of Git
- Offers issue tracking, pull requests, CI/CD, and more`,
    kind: 'reaction',
    tags: [
      { text: 'github', url: 'smt' },
      { text: 'git', url: 'smt' },
      { text: 'version_control', url: 'smt' }
    ],
    icon: './assets/github.svg',
    style: 'bg-candy-red',
  },
  {
    title: 'What Is a Repository?',
    desc: `A **repository** (repo) is like a folder that stores your project's files and Git history.

- Local repo: On your machine
- Remote repo: Hosted on GitHub

You can connect both to **push** or **pull** changes.`,
    kind: 'reaction',
    tags: [
      { text: 'git', url: 'smt' },
      { text: 'github', url: 'smt' },
      { text: 'repo', url: 'smt' }
    ],
    icon: './assets/github.svg',
    style: 'bg-[#FFA9E8]',
  },
  {
    title: 'Clone a GitHub Repo',
    desc: `To download a GitHub project locally, use \`git clone\`:`,
    kind: 'reaction',
    code: [
      {
        label: 'Clone a repo:',
        text: 'git clone https://github.com/user/repo.git'
      }
    ],
    tags: [
      { text: 'git', url: 'smt' },
      { text: 'clone', url: 'smt' }
    ],
    icon: './assets/github.svg',
    style: 'bg-[#F7BD1D]',
  },
  {
    title: 'Fork vs Clone',
    desc: `- **Clone**: Copies a repo to your local machine  
- **Fork**: Copies a repo to **your GitHub account**

Forking is great when you don't own the repo and want to contribute.`,
    kind: 'reaction',
    tags: [
      { text: 'github', url: 'smt' },
      { text: 'fork', url: 'smt' },
      { text: 'clone', url: 'smt' }
    ],
    icon: './assets/github.svg',
    style: 'bg-[#FFCC70]',
  },
  {
    title: 'Branches in GitHub',
    desc: `A **branch** allows you to work on new features or fixes separately.

Main branch: \`main\` or \`master\`  
Create new branch:`,
    kind: 'reaction',
    code: [
      {
        label: 'Create a new branch:',
        text: 'git checkout -b feature-branch'
      }
    ],
    tags: [
      { text: 'git', url: 'smt' },
      { text: 'branch', url: 'smt' }
    ],
    icon: './assets/github.svg',
    style: 'bg-[#C5C6FF]',
  },
  {
    title: 'Pull Requests (PR)',
    desc: `A **pull request** is how you suggest changes to someone else's repository.

Steps:
1. Fork → Clone → Create branch → Commit
2. Push and open a PR on GitHub
3. Discuss, review, and merge!`,
    kind: 'reaction',
    tags: [
      { text: 'github', url: 'smt' },
      { text: 'pull_request', url: 'smt' }
    ],
    icon: './assets/github.svg',
    style: 'bg-[#04BFA4]',
  },
  {
    title: 'Add Remote Origin',
    desc: `If your local repo isn’t linked to GitHub yet, use:`,
    kind: 'reaction',
    code: [
      {
        label: 'Connect your repo to GitHub:',
        text: 'git remote add origin https://github.com/user/repo.git'
      },
      {
        label: 'Push for the first time:',
        text: 'git push -u origin main'
      }
    ],
    tags: [
      { text: 'git', url: 'smt' },
      { text: 'github', url: 'smt' },
      { text: 'remote', url: 'smt' }
    ],
    icon: './assets/github.svg',
    style: 'bg-[#FFE87E]',
  },
  {
    title: 'GitHub README.md',
    desc: `A **README.md** file explains what your project is and how to use it.

Write it in **Markdown**, and GitHub will render it beautifully on your repo’s homepage.`,
    kind: 'reaction',
    tags: [
      { text: 'github', url: 'smt' },
      { text: 'readme', url: 'smt' },
      { text: 'markdown', url: 'smt' }
    ],
    icon: './assets/github.svg',
    imgUrl: './assets/readme-example.png',
    style: 'bg-[#7B9D7C]',
  }
];
