import { createSignal } from "solid-js";
import { BsChatRightText } from 'solid-icons/bs'
const Header=()=>{
	return(
		<nav class="w-full">
            <div class="w-full flex justify-center"> 
                <img class="w-32" src="https://raw.githubusercontent.com/knztnt/InvSys/master/client/src/navbar-logo-blue.png" />
            </div>
            <div class="flex flex-wrap space-y-1.5">
                <a href="#" class="flex w-full space-x-4 h-10 items-center px-4 hover:bg-sky-400 hover:cursor-pointer justify-end border-t border-gray-300">
                    <span class="font-semibold">ڈَیش بورْڈ</span> 
                    <BsChatRightText class="mt-1.5" />
                </a>
                <a href="#" class="flex w-full space-x-4 h-10 items-center px-4 hover:bg-sky-400 hover:cursor-pointer justify-end border-t border-gray-300">
                    <span class="font-semibold">ڈَیش بورْڈ</span> 
                    <BsChatRightText class="mt-1.5" />
                </a>
                <a href="#" class="flex w-full space-x-4 h-10 items-center px-4 hover:bg-sky-400 hover:cursor-pointer justify-end border-t border-gray-300">
                    <span class="font-semibold">ڈَیش بورْڈ</span> 
                    <BsChatRightText class="mt-1.5" />
                </a>
                <a href="#" class="flex w-full space-x-4 h-10 items-center px-4 hover:bg-sky-400 hover:cursor-pointer justify-end border-t border-gray-300">
                    <span class="font-semibold">ڈَیش بورْڈ</span> 
                    <BsChatRightText class="mt-1.5" />
                </a>
            </div>
        </nav>
	)
}
export default Header;