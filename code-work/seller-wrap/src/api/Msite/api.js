const API={
    getAddress:{
        url: "/position",
        method:"get",
        corsUrl:"/4000"
    },
    getCategory:{
        url: "/index_category",
        method:"get",
        corsUrl:"/4000"
    },
    getShops:{
        url: "/shops",
        method:"get",
        corsUrl:"/4000"
    }
}

export default API