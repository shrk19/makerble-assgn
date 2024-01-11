

const Footer = () => {
  return (
    <div className="h-fit mt-8 bg-white">
    <div className='flex flex-row'>
        <div className='h-1 w-1/5 bg-blue-500'></div>
        <div className='h-1 w-1/5 bg-green-500'></div>
        <div className='h-1 w-1/5 bg-yellow-500'></div>
        <div className='h-1 w-1/5 bg-orange-500'></div>
        <div className='h-1 w-1/5 bg-red-500'></div>
    </div>
    <div className="py-10 w-full grid place-items-center">
    <img src="assets/makerble-name-logo.png" className="h-12 "></img>
    <p className="text-gray-400">Made by Shreya Kumari</p>
    </div>
    </div>
  )
}

export default Footer