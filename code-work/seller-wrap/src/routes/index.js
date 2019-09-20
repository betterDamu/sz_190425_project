import Msite from "pages/Msite/Msite"
import Order from "pages/Order/Order"
import Profile from "pages/Profile/Profile"
import Search from "pages/Search/Search"
export default [
    {path:"/Msite",component:Msite},
    {path:"/Order",component:Order},
    {path:"/Profile",component:Profile},
    {path:"/Search",component:Search},
    {path:"/",redirect:"/Msite"},
]