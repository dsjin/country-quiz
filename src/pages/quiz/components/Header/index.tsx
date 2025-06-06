import Score from "../Score"

function Header() {
  return (
    <div className="flex justify-between items-center col-span-12 lg:col-span-10 xl:col-span-8 col-start-1 lg:col-start-2 xl:col-start-3 h-20 text-white">
      <h1 className="text-2xl font-medium">Country Quiz</h1>
      <Score />
    </div>
  )
}

export default Header
