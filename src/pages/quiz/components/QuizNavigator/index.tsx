
type QuizNavigatorProps = {
  index: number
  onQuizNavigatorClicked: (index: number) => void
  active: boolean
}

function QuizNavigator ({
  index,
  onQuizNavigatorClicked,
  active
}: QuizNavigatorProps) {
  return (
    <div
      className={`w-10 h-10 rounded-4xl text-white cursor-pointer content-center text-center ${active ? 'bg-linear-to-r from-pink to-purple' : 'bg-quiz-navigator-inactive'}`}
      onClick={() => onQuizNavigatorClicked(index)}
    >
      { index + 1 }
    </div>
  )
}

export default QuizNavigator
