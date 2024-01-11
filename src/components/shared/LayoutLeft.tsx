
import { PlusIcon } from "@radix-ui/react-icons"
import { Input } from "../ui/input"
import { Button } from "@/components/ui/button"

const LayoutLeft = () => {
  return (
    <div className="hidden lg:block w-full lg:w-1/4 h-fit bg-slate-50 border-r-[1px] border-gray-300">
        <div className="min-h-screen h-fit w-full p-4">
            <div className="flex flex-row justify-between items-center pb-2">
            <h2 className="head">Top Projects</h2>
            <Button className="h-7 px-2 bg-red-500"><PlusIcon/>  </Button> 
            </div>
            <Input placeholder="Find Project"/>
            <div className="project-list py-2">
                <div className="flex flex-row py-2">
                    <img src="assets/makerble-logo.png" className="h-[24px] w-[24px] mr-2"></img>
                    <p>Project 1</p>
                </div>
                <div className="flex flex-row py-2">
                    <img src="assets/makerble-logo.png" className="h-[24px] w-[24px] mr-2"></img>
                    <p>Project 1</p>
                </div>
                <div className="flex flex-row py-2">
                    <img src="assets/makerble-logo.png" className="h-[24px] w-[24px] mr-2"></img>
                    <p>Project 1</p>
                </div>
            <p className="expand-text grid place-items-end pb-2">See All</p>
            <hr />
            </div>
            <div className="flex flex-row justify-between items-center pb-2">
            <h2 className="head">Top Albums</h2>
            
            </div>
            <div className="py-2">
                <div className="flex flex-row py-2">
                    <img src="assets/makerble-logo.png" className="h-[24px] w-[24px] mr-2"></img>
                    <p>Project 1</p>
                </div>
                <div className="flex flex-row py-2">
                    <img src="assets/makerble-logo.png" className="h-[24px] w-[24px] mr-2"></img>
                    <p>Project 1</p>
                </div>
                <div className="flex flex-row py-2">
                    <img src="assets/makerble-logo.png" className="h-[24px] w-[24px] mr-2"></img>
                    <p>Project 1</p>
                </div>
                <p className="expand-text grid place-items-end pb-2">See All</p>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default LayoutLeft