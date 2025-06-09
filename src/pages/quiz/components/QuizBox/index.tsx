import type { QuizItem } from '../../../../assets/types/quiz'
import { useQuizContext } from '../../contexts/quiz-context'
import QuizChoiceItem from '../QuizChoiceItem'
import QuizNavigator from '../QuizNavigator'

function QuizBox() {
  const { quizItems, currentQuiz } = useQuizContext()
  return (
    <div className="flex justify-center items-center col-span-12 lg:col-span-10 xl:col-span-8 col-start-1 lg:col-start-2 xl:col-start-3 h-[60vh] bg-quiz-bg rounded-md shadow-lg">
      <div className="flex flex-col justify-between w-11/12 md:w-7/12 h-10/12">
        <div className="flex w-full h-fit justify-center gap-2 md:justify-between md:gap-0 flex-wrap">
          {quizItems.map((item: QuizItem, index: number) => {
            return (
              <QuizNavigator
                key={index}
                index={index}
                onQuizNavigatorClicked={(index: number) => console.log(index)}
                active={
                  currentQuiz === index || item.selectedAnswer !== undefined
                }
              />
            )
          })}
        </div>
        <div>
          {quizItems[currentQuiz]
            ? quizItems[currentQuiz].question
            : 'Unknown Question'}
        </div>
        <div className="flex flex-wrap gap-2">
          {quizItems[currentQuiz]
            ? quizItems[currentQuiz].choiceItems.map(
                (value: string, index: number) => {
                  return <QuizChoiceItem key={index} text={value} disabled={false} selected={index === 0} />
                }
              )
            : ''}
        </div>
      </div>
    </div>
  )
}

export default QuizBox
