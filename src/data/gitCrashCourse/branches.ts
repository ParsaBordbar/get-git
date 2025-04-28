export const branches = [
    {
      title: 'Branches',  
      kind:  'default',
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
      icon:  './assets/git.svg', 
      imgUrl:  '',
      style: 'bg-candy-pink-strawberry',
    },
    {
      title: 'Git Branch', 
      desc:  `
A **branch** is a new/separate version of the main repository;
&nbsp;  
&nbsp;  
**Why use branches?**

&nbsp;
&nbsp;
- Edit the code directly without impacting the main branch.    
&nbsp;
&nbsp;

Parallel Development.
&nbsp;  
      `, 
      kind:  'reaction',
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
      icon:  './assets/git.svg', 
      imgUrl:  '',
      style: 'bg-candy-blue-sky',
    },
    {
      title: 'Creating a New Branch',
      kind:  'reaction',
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
      icon:  './assets/git.svg', 
      code: [
        {
          text:'git branch <new_branch>',
          label: 'creating a new branch:'
        },
        {
          text:'git branch',
          label: 'Viewing all branches:'
        },
      ],
      style: "bg-candy-yellow",
    },
    {
      title: 'Changing Branch',
      kind:  'reaction',
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
      icon:  './assets/git.svg', 
      code: [
        {
          text:'git checkout <branch_name>',
          label: 'Changing to a branch:'
        },
        {
          text:'git switch <branch_name>',
          label: 'You can also change the branch using:'
        },
      ],    
      style: 'bg-[#FFA9E8]',
    },
    {
      title: 'Difference Between Switch & Checkout', 
      desc:  `git switch for straightforward branch operations to benefit from its clarity and safety, and reserve git checkout for more advanced tasks like checking out commits or restoring files`,
      icon:  './assets/git.svg', 
      imgUrl:  '',
      style: 'bg-candy-teal',
      kind: 'reaction'
    },
    
  ]