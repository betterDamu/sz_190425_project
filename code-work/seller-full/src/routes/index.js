import Msite from "pages/Msite/Msite"
import Order from "pages/Order/Order"
import Profile from "pages/Profile/Profile"
import Search from "pages/Search/Search"
import Login from "pages/Login/Login"
import UserDetail from "pages/UserDetail/UserDetail"
import Shop from "pages/Shop/Shop"
import goods from "pages/ele-goods/ele-goods.vue"
import ratings from "pages/ele-ratings/ele-ratings.vue"
import shops from "pages/ele-shops/ele-shops.vue"
export default [
    {path:"/Msite",component:Msite,meta:{showFooter:true}},
    {path:"/Order",component:Order,meta:{showFooter:true}},
    {path:"/Profile",component:Profile,meta:{showFooter:true}},
    {path:"/Search",component:Search,meta:{showFooter:true}},
    {path:"/Login",component:Login},
    {path:"/UserDetail",component:UserDetail},
    {path:"/Shop/:id",component:Shop,props:true,children:[
            {path:"goods",component:goods,props:true},
            {path:"ratings",component:ratings,props:true},
            {path:"shops",component:shops,props:true},
            {path:"",redirect:"goods"},
    ]},
    {path:"/",redirect:"/Msite"},
]