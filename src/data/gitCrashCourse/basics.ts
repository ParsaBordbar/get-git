export const basics = {
  pageName: "Basics",
  cards: [
    {
      title: "Git Crash Course",
      kind: "default",
      desc: "By Parsa Bordbar",
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-blue-sky",
    },
    {
      title: "What Is Git?",
      desc: `**Git** is a **free** and **open source** distributed version control system designed to handle everything 
      from small to very large projects with speed and efficiency. [Git](https://git-scm.com/) is easy to learn and has a tiny footprint
      with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with
      features like cheap local branching, convenient staging areas, and multiple workflows.
      
      `,
      kind: "reaction",
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-[#04BFA4]",
    },
    {
      title: "Installation",
      kind: "reaction",
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      code: [
        {
          text: "sudo apt install git",
          label: "Debian Base Linux:",
        },
        {
          text: "sudo pacman -S git",
          label: "Arch Base Linux:",
        },
        {
          text: "brew install git",
          label: "Mac Os:",
        },
      ],
      desc: "If you use windows download it from [here](https://git-scm.com/download/win)",
      style: "bg-[#07AF57]",
    },
    {
      title: "Set Your Identity",
      kind: "reaction",
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      code: [
        {
          text: 'git config --global user.name "Your Name"',
          label: "Setting your name:",
        },
        {
          text: 'git config --global user.email "your.email@example.com',
          label: "Setting your Email",
        },
      ],
      style: "bg-[#FFA9E8]",
    },
    {
      title: "Stages",
      kind: "reaction",
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "./assets/stages.png",
      style: "bg-[#7B9D7C]",
    },
    {
      title: "New Repository",
      desc: `We can initialize a new Repository in current Directory with:`,
      code: [
        {
          text: "git init",
        },
      ],
      kind: "reaction",
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-[#FFE87E]",
    },
    {
      title: "Git Status",
      kind: "reaction",
      desc: "Tells you which files are modified, staged, or untracked.",
      code: [
        {
          text: "git status",
        },
      ],
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-[#04BFA4]",
    },
    {
      title: "Git Add",
      desc: `You can add files to **staging area** so that git can keep track of the changes:`,
      kind: "reaction",
      code: [
        {
          text: "git add <file_name>",
        },
      ],
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-[#C5C6FF]",
    },
    {
      title: "Git Commit",
      desc: `A **meaning** full message that says what has been changed in the new code.`,
      kind: "reaction",
      code: [
        {
          text: "git commit -m <commit_message>",
        },
      ],
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-[#F7BD1D]",
    },
    {
      title: "Git Push",
      desc: `Sharing our code with other in the remote repo, **Github** in this case.`,
      kind: "reaction",
      code: [
        {
          label: "Pushing to a repo we have cloned or stablish:",
          text: "git push",
        },
        {
          label: "Pushing the local repo into Github:",
          text: `git remote add origin <github_repo>
          git branch -M main
          git push -u origin main`,
        },
      ],
      tags: [
        {
          text: "git",
          url: "smt",
        },
        {
          text: "github",
          url: "smt",
        },
        {
          text: "version_control",
          url: "smt",
        },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#7B9D7C]",
    },
  ],
};
