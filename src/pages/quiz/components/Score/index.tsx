import { useQuizContext } from "../../contexts/quiz-context"

function Score () {
  const {
    score
  } = useQuizContext()
  return (
    <>
      <div className="bg-linear-to-r from-pink to-purple px-4 py-1 rounded-2xl shadow-lg">
        <span className="mr-3 text-xs align-middle" >🏆</span>{ score } / 10 Points
      </div>
    </>
  )
}

export default Score
