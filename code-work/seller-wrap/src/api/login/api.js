const API={
    sendCode:{
        url: "/sendcode",
        method:"get",
        corsUrl:"/4000"
    },
    loginPwd:{
        url: "/login_pwd",
        method:"post",
        corsUrl:"/4000"
    },
    loginSms:{
        url: "/login_sms",
        method:"post",
        corsUrl:"/4000"
    }
}

export default API