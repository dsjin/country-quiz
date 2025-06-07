import { useQuizContext } from "../../contexts/quiz-context"
import QuizNavigator from "../QuizNavigator"

function QuizBox () {
  const {
    quizItems,
    currentQuiz
  } = useQuizContext()
  return (
    <div className="flex justify-center items-center col-span-12 lg:col-span-10 xl:col-span-8 col-start-1 lg:col-start-2 xl:col-start-3 h-[50vh] bg-quiz-bg rounded-md shadow-lg">
      <div
        className="flex w-5/12 h-10/12"
      >
        <div className="flex w-full justify-between">
          {
            quizItems.map((_, index: number) => {
              return <QuizNavigator key={index} index={index} onQuizNavigatorClicked={(index: number) => console.log(index)} active={currentQuiz === index} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default QuizBox
