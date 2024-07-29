
import Menu from '@/app/_components/menucomponent/Menucomponent'

import {menu} from "@/app/_api/menu.json";

export default function Menupage(){
    return<Menu categories={menu}/>
}
