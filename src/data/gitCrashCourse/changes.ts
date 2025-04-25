export const changes = [
    {
        title: 'Changes',  
        kind:  'reaction',
        desc: `Or git stages and how to move between them!`,
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        icon:  '/src/assets/git.svg', 
        imgUrl:  '',
        style: 'bg-candy-yellow',
    },
    {
        title: 'Stages',  
        kind:  'reaction',
        desc: 
        `
Files in Git can be in **two stages**:
    &nbsp;  
    &nbsp;  
    **Tracked** - files that Git knows about and are added to the repository.
    &nbsp;  
    &nbsp;  
    **Untracked** - files that are in your working directory, but not added to the repository
        `,
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        icon:  '/src/assets/git.svg', 
        imgUrl:  '',
        style: 'bg-candy-blue-sky',
    },
    {
        title: 'Git Status',  
        kind:  'reaction',
        desc: `We can see files status with git status command:`,
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        icon:  '/src/assets/git.svg', 
        imgUrl:  '/src/assets/status.png',
        style: 'bg-candy-yellow-sharp',
    },
    {
        title: 'Staged Files',  
        kind:  'reaction',
        desc: `Staged files are files that are ready to be committed to the repository you are working on. We discussed more about staging in [this CardSet](http://localhost:5173/git/basics)!`,
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        icon:  '/src/assets/git.svg', 
        imgUrl:  '/src/assets/status.png',
        style: 'bg-candy-teal',
    },
    {
        title: 'Git Add', 
        desc:  `You can add files to **staging area** so that git can keep track of the changes:`, 
        kind:  'reaction',
        code: [
          {
            text: 'git add <file_name>'
          }
        ],
        tags: [
          {
            text: 'git',
            url: 'smt'
          },
          {
            text: 'github',
            url: 'smt'
          },
          {
            text: 'version_control',
            url: 'smt'
          }
        ], 
        icon:  '/src/assets/git.svg', 
        imgUrl:  '',
        style: 'bg-candy-pink',
      },
      {
        title: 'Viewing & Comparing',
        desc: `So you proudly Committed your code but you wanna see what have you committed until   now how you can see what have been done? `,
        kind: 'reaction',
        style: 'bg-candy-red',
        icon:  '/src/assets/git.svg',
      },
    {
        title: 'Git Log',  
        kind:  'reaction',
        desc: `
 -Shows a history of commits in the repository.
    
 &nbsp;

 -Displays [commit hashes](http://localhost:5173/git/commit), author, date, and [messages](http://localhost:5173/git/commit).`,
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt',
            }
        ],
        icon:  '/src/assets/git.svg', 
        style: 'bg-candy-green-light',
        code: [
            {
                label: '',
                text:'git log'
            },
            {
                label: 'For a One-line summary use:',
                text:'git log --oneline',
            },
            {
                label: 'To see changes in commits:',
                text: 'git log -p'
            },
        ],
    },
    
      {
        title: 'Git Show',
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        desc: `
Displays detailed information about a **specific** commit.

&nbsp;
&nbsp;

Includes commit message, author, date, and code changes.`,
        kind: 'reaction',
        style: 'bg-candy-green-M',
        icon:  '/src/assets/git.svg',
        code: [
            {   label: '',
                text: 'git show <commit-hash>'
            },
        ],
      },

      {
        title: 'Git Diff',
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        desc: `We can Compere states and stages and commits with diff command!
        `,
        kind: 'reaction',
        style: 'bg-candy-yellow-warm',
        icon:  '/src/assets/git.svg',
        code: [
            {   label: 'Compare working directory with last committed version:',
                text: 'git diff'
            },
            {   label: 'Compare staged files with the last commit:',
                text: 'git diff --staged'
            },
            {   label: 'Compare Two Commits:',
                text: 'git diff <commit1> <commit2>'
            },
        ],
      },

      {
        title: 'Undoing Changes',
        kind: 'reaction',
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        desc: `So ... how we can Ctrl + z when we messed-up ?
        `,
        style: 'bg-candy-blue-sky',
        icon:  '/src/assets/git.svg',
      },

      {
        title: 'Git Restore',
        kind: 'reaction',
        tags: [
            {
            text: 'git',
            url: 'smt'
            },
            {
            text: 'github',
            url: 'smt'
            },
            {
            text: 'version_control',
            url: 'smt'
            }
        ], 
        desc: `We can **restore** a file or multiple files to previous committed versions.
        `,
        style: 'bg-candy-teal',
        icon:  '/src/assets/git.svg',
        code: [
            {
                text:'git restore <file>',
                label: 'Restoring Single Files:',
            },
            {
                text:'git restore .',
                label: 'Restoring the Entire Repo:',
            },
            {
                text: 'git reset --soft HEAD~1',
                label: "From Commit to stage:"
            }
        ]
      },
]

