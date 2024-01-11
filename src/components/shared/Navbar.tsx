
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { AccessibilityIcon, BellIcon, ChevronDownIcon, DragHandleHorizontalIcon, EnvelopeClosedIcon, ExitIcon, FilePlusIcon, GearIcon, GridIcon, HamburgerMenuIcon, ImageIcon, PersonIcon, RocketIcon, StarIcon } from "@radix-ui/react-icons"

const Navbar = () => {
    return (
        <>
        {/* nav bar for mobile device not responsive */}
        <nav className="flex lg:hidden bg-white h-12 justify-between items-center">
            <div className="px-1 max-w-fit grid place-items-center">
                <img src="assets/makerble-logo.png" className="h-10 w-10"></img>
            </div>
            <div className="px-2 grid place-items-center">
                <HamburgerMenuIcon/>
            </div>
        </nav>
        
        <nav className="hidden lg:flex justify-between h-fit py-2 lg:py-0 px-4 bg-slate-50 border-b-[1px] border-gray-300 ">
            
            <div className=" left flex flex-row">
            <div className="px-1 lg:px-8 lg:py-2 max-w-fit border-r-[1px] border-gray-300">
                <img src="assets/makerble-logo.png" className="h-10 w-10"></img>
            </div>
            <div className="px-1 lg:px-8 w-fit grid place-items-center border-r-[1px] border-gray-300">
                <DropdownMenu>
                    <DropdownMenuTrigger className="nav-item-text">My Apps</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
            <div className="px-1 lg:px-8 w-fit grid place-items-center border-r-[1px] border-gray-300 nav-item-text">Home</div>
            <div className="px-1 lg:px-8 w-fit grid place-items-center border-r-[1px] border-gray-300 nav-item-text">Explore</div>
            <div className="grid place-items-center px-4"><Input placeholder='Search'/></div>
            </div>


            {/* rightside */}
            <div className="right flex flex-row items-center">
            <div className="grid place-items-center mx-4">
            <BellIcon/>
            </div>
            <div className="grid place-items-center mx-4">
            <EnvelopeClosedIcon/>
            </div>
            <div className="grid place-items-center mx-4">
            <RocketIcon/>
            </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                    <div className="px-2 h-7 w-fit flex flex-row items-center rounded-md bg-red-500">
                    <h2 className="text-sm font-bold text-white mx-2">Create</h2>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="#fcfcfc" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    
                    </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem><ImageIcon className="mr-2"/>New Albums</DropdownMenuItem>
                        <DropdownMenuItem><GridIcon className="mr-2"/>New Boards</DropdownMenuItem>
                        <DropdownMenuItem><PersonIcon className="mr-2"/>New Contacts</DropdownMenuItem>
                        <DropdownMenuItem><FilePlusIcon className="mr-2"/>New Projects</DropdownMenuItem>
                        <DropdownMenuItem><AccessibilityIcon className="mr-2"/>New Organisations</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            

            <div className="flex flex-row px-4">
                <div className="rounded-lg h-8 w-8 mr-2 bg-slate-400"></div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex flex-row justify-center items-center nav-item-text">
                            Profile name 
                            <ChevronDownIcon/>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Set Status</DropdownMenuItem>
                        <DropdownMenuItem>Profile</DropdownMenuItem> 
                        
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><ImageIcon className="mr-2"/>My Albums</DropdownMenuItem>
                        <DropdownMenuItem><GridIcon className="mr-2"/>My Boards</DropdownMenuItem>
                        <DropdownMenuItem><PersonIcon className="mr-2"/>My Contacts</DropdownMenuItem>
                        <DropdownMenuItem><FilePlusIcon className="mr-2"/>My Projects</DropdownMenuItem>
                        <DropdownMenuItem><AccessibilityIcon className="mr-2"/>My Organisations</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><GearIcon className="mr-2"/>Settings</DropdownMenuItem>
                        <DropdownMenuItem><DragHandleHorizontalIcon className="mr-2"/>More</DropdownMenuItem>
                        <DropdownMenuItem><StarIcon className="mr-2"/>Upgrade</DropdownMenuItem>
                        <DropdownMenuItem><ExitIcon className="mr-2"/>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            </div>
        </nav>
        </>
    )
}

export default Navbar