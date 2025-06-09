type QuizChoiceItemProps = {
  text: string
  selected: boolean
  disabled: boolean
}

function QuizChoiceItem ({
  text,
  selected
}: QuizChoiceItemProps) {
  return (
    <div
      className={`rounded-md p-5 basis-full md:basis-[calc(50%-0.5rem)] text-white cursor-pointer content-center text-center ${selected ? 'bg-linear-to-r from-pink to-purple' : 'bg-quiz-navigator-inactive'} hover:bg-linear-to-r hover:from-pink hover:to-purple`}
    >
      { text }
    </div>
  )
}

export default QuizChoiceItem
