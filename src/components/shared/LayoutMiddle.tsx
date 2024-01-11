import Card from "./Card"
import Post from "./Post"


const LayoutMiddle = () => {
  return (
    <div className="w-full lg:w-1/2 md:mx-2 ">
      <Post />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default LayoutMiddle