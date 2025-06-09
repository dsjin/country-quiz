import Header from "./components/Header"
import { QuizContextProvider } from "./providers/quiz-provider"
import './index.css'
import QuizBox from "./components/QuizBox"

function Quiz () {
  return (
    <QuizContextProvider>
      <div id="QuizContainer" className="px-5 md:p-0 grid grid-cols-12 gap-[32px] h-screen content-center bg-no-repeat bg-cover">
        <Header />
        <QuizBox />
      </div>
    </QuizContextProvider>
  )
}

export default Quiz
