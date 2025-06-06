import Header from "./components/Header"
import { QuizContextProvider } from "./providers/quiz-provider"
import './index.css'
import QuizBox from "./components/QuizBox"

function Quiz () {
  return (
    <QuizContextProvider>
      <div id="QuizContainer" className="grid grid-cols-12 gap-[32px] h-screen content-center bg-no-repeat bg-cover">
        <Header />
        <QuizBox />
      </div>
    </QuizContextProvider>
  )
}

export default Quiz
