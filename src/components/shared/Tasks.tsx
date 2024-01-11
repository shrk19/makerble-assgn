
import { Checkbox } from "@/components/ui/checkbox"
import { DotsVerticalIcon, PlusIcon } from "@radix-ui/react-icons"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const Tasks = () => {
    return (
        <div className="w-full h-fit rounded-lg p-4 bg-white border-[1px] border-gray-300 ">
            <div className="flex flex-row justify-between">
                <h2 className="head">Tasks</h2>
                <div className="flex flex-row items-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z" fill="#fbbf24" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    <p className="text-xs text-yellow-400 mr-1">7 Pending</p>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="#4ade80" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    <p className="text-xs text-green-400">2 Completed</p>
                </div>
                <p className="expand-text">Filters</p>
            </div>

            <hr className="my-1"/>
            <div className="h-1/2 overflow-y-auto">
            <div className="p-1 my-1 rounded-sm  flex flex-row justify-between items-center">
                <Input placeholder="Enter New Task.." className="mr-2"/>
                <Button className="h-7 px-2 bg-red-500"><PlusIcon/>  </Button> 
            </div>
            
            <div className="border-[1px] border-blue-500 p-2 my-1 rounded-sm  flex flex-row justify-between items-center">
                <p className="text-xs">Follow up call needed</p>
                <div className="flex flex-row">
                    <Checkbox/>
                    <DotsVerticalIcon/>
                </div>
            </div>

            <div className="border-[1px] border-green-400 p-2 my-1 rounded-sm  flex flex-row justify-between items-center">
                <p className="text-xs">Follow up call needed</p>
                <div className="flex flex-row">
                    <Checkbox/>
                    <DotsVerticalIcon/>
                </div>
            </div>

            <div className="border-[1px] border-orange-500 p-2 my-1 rounded-sm  flex flex-row justify-between items-center">
                <p className="text-xs">Follow up call needed</p>
                <div className="flex flex-row">
                    <Checkbox/>
                    <DotsVerticalIcon/>
                </div>
            </div>

            <div className="border-[1px] border-red-500 p-2 my-1 rounded-sm  flex flex-row justify-between items-center">
                <p className="text-xs">Follow up call needed</p>
                <div className="flex flex-row">
                    <Checkbox/>
                    <DotsVerticalIcon/>
                </div>
            </div>

            <div className="border-[1px] border-purple-500 p-2 my-1 rounded-sm  flex flex-row justify-between items-center">
                <p className="text-xs">Follow up call needed</p>
                <div className="flex flex-row">
                    <Checkbox/>
                    <DotsVerticalIcon/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Tasks