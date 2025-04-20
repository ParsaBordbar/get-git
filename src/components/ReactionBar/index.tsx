import { ReactionButtonType } from "../../types/types"
import ReactionButton from "../ReactionButton"

const reactions = [
    {
        text: `👍`
    },
    {
      text: '👎'  
    },
    {
        text: `😍`
    },
    {
      text: '😎'  
    },
    {
        text: `💅`
    },
    {
      text: '🤔'  
    },
]

function ReactionBar() {
  return (
    <>
        {/* <hr className="ml-3 mr-20 border-2 rounded-full border-stone-800 flex "/> */}
        <div className="flex justify-between items-center mx-4 mt-5">
            {
                reactions.map((reaction : ReactionButtonType, index:number) => (
                    <ReactionButton text={reaction.text} key={index}/>                
                ))
            }
        </div>
    </>
  )
}

export default ReactionBar