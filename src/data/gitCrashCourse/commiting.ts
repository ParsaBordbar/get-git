export const committing = [
    {
        title: 'Conventional Commits',  
        kind:  'reaction',
        desc: 'By Parsa Bordbar',
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
        style: 'bg-[#7B9D7C]',
      },
      
      {
        title: 'Structure',  
        kind:  'reaction',
        desc:  ` In this section we are going to learn how commit proffesianaly and save you and others tons of time!
        we have **header, body and footer for a single commit**, a good header follows this structure, note that **the scope** is optional.`,
        code: [
          {
            text:'<type>[scope]: <description>',
            label:'Header of a good commit:'
          },
          {
            text:'[optional body]',
            label:'Body comes after the Header:'
          },
          {
            text:'[optional footer]',
            label:'and at the end comes the Footer:'
          },
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
        style: 'bg-candy-yellow-sharp',
      },
      
      {
        title: 'a. Example Of A Good Commit',  
        kind:  'reaction',
        desc: 
    `
    fix(cart): correct total price calculation

    Fixed an issue where the total price in the
    shopping cart was not calculating correctly 
    when applying discounts.

    Adjusted the discount logic to correctly 
    apply percentages. Updated unit tests to 
    cover discount scenarios.

    Refs #101: Fixes the issue with incorrect
    pricing.`    
    ,
        // code: [
        //   {
        //     text:'<type>[scope]: <description>',
        //     label:'Header of a good commit:'
        //   },
        // ],
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
        // imgUrl: '/src/assets/commitEx.png',
        style: 'bg-candy-green-light',
      },

      {
        title: 'b. Example Of A Good Commit',  
        kind:  'reaction',
        desc: `Let's take a look at some more examples of good commit messages!
        [click here!](https://github.com/torvalds/linux/commits/master/)
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
        style: 'bg-candy-green-light',
      },

      {
        title: 'Commit Hashes',  
        kind:  'reaction',
        desc: `By now you know about **commits** and how to commit (or do you?)
        so what is a **Commit hash?** it's the unique identifier of a commit like:
        `,
        code: [
          {
            text:'a2cc6ff5ec8f91bc463fd3b0 ...',
          },
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
        style: 'bg-candy-blue-sky',
      },

      {
        title: 'Commit Types',  
        kind:  'reaction',
        desc: `
  ● **fix**: Bug fixes (e.g., correcting a problem in the code).  
  
  &nbsp;  
  
  ● **feat**: Adding a new feature (e.g., introducing new functionality to the project).  
  &nbsp;  
  
  ● **build**: Changes related to project build or configuration (e.g., updating build scripts).  
  
  &nbsp;  
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
        style: 'bg-candy-red',
      },

      {
        title: 'Commit Types',  
        kind:  'reaction',
        desc: `

  ● **chore**: Routine tasks that don’t affect the source code or tests (e.g., updating dependencies).  
  
  &nbsp;  

  ● **docs**: Documentation changes (e.g., updating README files or adding new documentation).  
  
  &nbsp;  
  
  ● **style**: Code formatting changes (e.g., fixing spacing, commas, or code style issues).  
  
  &nbsp;  
  
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
        style: 'bg-candy-teal',
      },

      {
        title: 'Commit Types',  
        kind:  'reaction',
        desc: `

  ● **perf**: Changes that improve performance (e.g., optimizing code for speed).

  &nbsp;  

  ● **test**: Adding or updating tests (e.g., creating new unit tests or increasing test coverage).

  &nbsp;  

  ● **refactor**: Code changes that improve structure without altering functionality (e.g., reorganizing code for clarity).


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
        style: 'bg-candy-yellow',
      },
      {
        title: 'Footer',
        icon:  '/src/assets/git.svg', 
        style: 'bg-candy-pink',
        kind:  'reaction',
        desc: "In the footer you can have different optional comments that we'll go through.",
      },
      {
        title: 'Refs',
        icon:  '/src/assets/git.svg', 
        style: 'bg-candy-blue',
        desc: `We can reference **Issues** & certain commits using **#**.`,
        code: [
          {
            text: 
            `fix(cart): fix total price calculation.
            &nbsp;
            Fixed the total price calculation issue.
            &nbsp;  
            Refs #234: Solves the problem reported in issue #234.
          `,
            label: 'Example:',
          },
        ],
        kind:  'reaction',

      },
      {
        title: 'Co Authored',
        icon:  '/src/assets/git.svg', 
        style: 'bg-candy-yellow-sharp',
        desc: `**Co-authored-by**: If multiple people contributed to the commit, their contributions are acknowledged here in the footer.`,
        code: [
          {
            text: 
            `feat(search): add filters
            &nbsp;
            &nbsp;
            Added filters to search results.
            Co-authored-by: John Doe <john.doe@example.com>
          `,
            label: 'Example:',
          },
        ],
        kind:  'reaction',

      },
      {
        title: 'Refs',
        icon:  '/src/assets/git.svg', 
        style: 'bg-candy-blue-sky',
        desc: `We can reference **Issues** & certain commits using **#**.`,
        code: [
          {
            text: 
            `fix(cart): fix total price calculation.
            &nbsp;
            Fixed the total price calculation issue.
            &nbsp;  
            Refs #234: Solves the problem reported in issue #234.
          `,
            label: 'Example:',
          },
        ],
        kind:  'reaction',

      },
]

