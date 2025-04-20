import Card from '../components/Card'
import gitIcon from '/src/assets/git.svg'
import githubIcon from '/src/assets/github.svg'

function Git() {
  return (
    <section className='flex justify-center items-center w-full my-14'>
      <div className='grid grid-cols-12 w-full justify-center items-center'>
        <div className='col-span-4'>
          <a href="/git/basics">
            <Card animate={false} title={'1. Basics'} desc="Stuff you'll use every day." kind={'default'} 
              icon={gitIcon} style={'bg-candy-red'} />
          </a>
          <a href="/git/branches">
            <Card animate={false} title={'4. Branches'} kind={'default'} desc="Learn about branching."
              icon={gitIcon} style={'bg-candy-teal'} />
          </a>
          </div>
        <div className='col-span-4'>
          <a href="/git/changes">
            <Card animate={false} title={'2. Changes'} desc="Keep track of the changes." kind={'default'} 
              icon={gitIcon} style={'bg-candy-blue-sky'} />          
          </a>
          <Card animate={false} title={'5. Github'} kind={'default'} desc="Collaborations and Cloud storage."
            icon={githubIcon} style={'bg-candy-yellow-sharp'} />
        </div>
        <div className='col-span-4'>
        <a href="/git/commit">
          <Card animate={false} title={'3. Commit'} kind={'default'} desc="How to write good commit messages."
            icon={gitIcon} style={'bg-candy-blue'} />
        </a>
        <Card animate={false} title={'6. Conflicts'} kind={'default'} desc="Oops! what should we do!?" 
          icon={gitIcon} style={'bg-candy-yellow'} />
        </div>
      </div>
    </section>
  )
}

export default Git
