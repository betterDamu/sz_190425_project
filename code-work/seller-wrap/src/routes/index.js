import Msite from "pages/Msite/Msite"
import Order from "pages/Order/Order"
import Profile from "pages/Profile/Profile"
import Search from "pages/Search/Search"
import Login from "pages/Login/Login"
export default [
    {path:"/Msite",component:Msite,meta:{showFooter:true}},
    {path:"/Order",component:Order,meta:{showFooter:true}},
    {path:"/Profile",component:Profile,meta:{showFooter:true}},
    {path:"/Search",component:Search,meta:{showFooter:true}},
    {path:"/Login",component:Login},
    {path:"/",redirect:"/Msite"},
]