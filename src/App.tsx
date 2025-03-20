import './App.css'
import Card from './components/Card'
import gitIcon from './assets/git.svg'
import { cardType } from './types/types'
import { motion, useScroll } from 'motion/react'
import imgTest from './assets/t.jpg'

const data = [
  {
    title: 'what is Git?', 
    desc:  `**Git** is a **free** and **open source** distributed version control system designed to handle everything 
    from small to very large projects with speed and efficiency. [Git](https://git-scm.com/) is easy to learn and has a tiny footprint
    with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with
    features like cheap local branching, convenient staging areas, and multiple workflows.
    
    `, 
    kind:  'default', 
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
    icon:  gitIcon, 
    imgUrl:  '',
    style: 'bg-[#04BFA4]',
  },
  {
    title: 'what is Git?', 
    kind:  'default', 
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
    icon:  gitIcon, 
    imgUrl:  imgTest,
    style: 'bg-[#F7BD1D]',
  },
  {
    title: 'what is Git?', 
    desc:  `"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
      Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows."`, 
    kind:  'default', 
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
    icon:  gitIcon, 
    imgUrl:  '',
    style: 'bg-[#FFE87E]',
  },
  {
    title: 'what is Git?', 
    kind:  'default', 
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
    icon:  gitIcon, 
    imgUrl:  '',
    style: 'bg-[#F75B2B]',
  },
  {
    title: 'what is Git?', 
    desc:  `"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
      Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows."`, 
    kind:  'default', 
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
    icon:  gitIcon, 
    imgUrl:  '',
    style: 'bg-[#C5C6FF]',
  },
]



function App() {
  const { scrollYProgress } = useScroll();
  return (
    <section className='grid md:grid-cols-10 grid-cols-2'>
        <motion.div
      id="scroll-indicator"
      style={{
        scaleY: scrollYProgress,
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: 10,
        originY: 0,
        zIndex: 10,
        backgroundColor: "#1747E7",
      }}
    />
            <div className='grid justify-around col-span-full gap-5'>
        {
          data.map((card: cardType) => (<Card title={card.title} desc={card.desc} kind={card.kind} tags={card.tags} icon={card.icon} imgUrl={card.imgUrl} style={card.style} />))
        }
      </div>
      
    </section>
  )
}

export default App
