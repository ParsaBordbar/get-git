import Card from '../components/Card'

function Git() {
  return (
    <section className='flex justify-center items-center w-full my-14'>
      <div className='grid grid-cols-12 w-full justify-center items-center'>
        <div className='col-span-4'>
          <a href="/get-git/basics">
            <Card animate={false} title={'1. Basics'} desc="Stuff you'll use every day." kind={'default'} 
              icon={'./assets/git.svg'} style={'bg-candy-red'} />
          </a>
          <a href="/get-git/branches">
            <Card animate={false} title={'4. Branches'} kind={'default'} desc="Learn about branching."
              icon={'./assets/git.svg'} style={'bg-candy-teal'} />
          </a>
          </div>
        <div className='col-span-4'>
          <a href="/get-git/changes">
            <Card animate={false} title={'2. Changes'} desc="Keep track of the changes." kind={'default'} 
              icon={'./assets/git.svg'} style={'bg-candy-blue-sky'} />          
          </a>
          <a href="/get-git/github">
            <Card animate={false} title={'5. Github'} kind={'default'} desc="Collaborations and Cloud storage."
              icon={'./assets/github.svg'} style={'bg-candy-yellow-sharp'} />
          </a>
        </div>
        <div className='col-span-4'>
        <a href="/get-git/commit">
          <Card animate={false} title={'3. Commit'} kind={'default'} desc="How to write good commit messages."
            icon={'./assets/git.svg'} style={'bg-candy-blue'} />
        </a>
        <a href="/get-git/conflicts">
          <Card animate={false} title={'6. Conflicts'} kind={'default'} desc="Oops! what should we do!?" 
            icon={'./assets/git.svg'} style={'bg-candy-yellow'} />
        </a>
        </div>
      </div>
    </section>
  )
}

export default Git
