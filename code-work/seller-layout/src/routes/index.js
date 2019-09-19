import goods from "pages/ele-goods/ele-goods.vue"
import ratings from "pages/ele-ratings/ele-ratings.vue"
import shops from "pages/ele-shops/ele-shops.vue"
export default [
    {path:"/goods",component:goods},
    {path:"/ratings",component:ratings},
    {path:"/shops",component:shops},
    {path:"/",redirect:"/goods"}
]