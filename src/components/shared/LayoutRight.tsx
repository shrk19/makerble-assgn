import PersonalProgress from "./PersonalProgress"
import Tasks from "./Tasks"

const LayoutRight = () => {
  return (
    <div className="w-full lg:w-1/4 md:mr-2">
      <PersonalProgress/>
      <Tasks/>
    </div>
  )
}

export default LayoutRight