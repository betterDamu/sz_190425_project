const API={
    getAddress:{
        url: "/position",
        method:"get",
        corsUrl:"/4000"
    },
    getCategorys:{
        url: "/index_category",
        method:"get",
        corsUrl:"/4000",
        needToken:true
    },
    getShops:{
        url: "/shops",
        method:"get",
        corsUrl:"/4000",
        needToken:true
    }
}

export default API