import { PlusIcon } from "@radix-ui/react-icons"

const PersonalProgress = () => {
  return (
    <div className="w-full h-fit rounded-lg p-4 my-2 bg-white border-[1px] border-gray-300">
        <h2 className="head">Personal Progress</h2>
        <hr className="my-1"/>
        
        <div className="flex flex-row justify-between py-2">

            <div className="h-9 w-9 rounded-full bg-pink-600"></div>
            <div>
            <p className="text-xs text-gray-500">Either of your parents are living?</p>
            <div className="h-4 w-full bg-yellow-400 rounded-md grid place-items-center">
                <p className="text-xs text-white ">3</p>
            </div>
            </div>
            <div className="flex items-center"><PlusIcon/></div>
        </div>

        <div className="flex flex-row justify-between py-2">
            <div className="h-9 w-9 rounded-full bg-orange-600"></div>
            <div>
            <p className="text-xs text-gray-500">Either of your parents are living?</p>
            <div className="h-4 w-full bg-green-600 rounded-md grid place-items-center">
                <p className="text-xs text-white ">3</p>
            </div>
            </div>
            <div className="flex items-center"><PlusIcon/></div>
        </div>

        <div className="flex flex-row justify-between py-2">
            <div className="h-9 w-9 rounded-full bg-purple-600"></div>
            <div>
            <p className="text-xs text-gray-500">Either of your parents are living?</p>
            <div className="h-4 w-full bg-blue-600 rounded-md grid place-items-center">
                <p className="text-xs text-white ">3</p>
            </div>
            </div>
            <div className="flex items-center"><PlusIcon/></div>
        </div>
        
    </div>
  )
}

export default PersonalProgress