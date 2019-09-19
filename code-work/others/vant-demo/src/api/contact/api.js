const API={
    getContactList:{
        url: "/contactList",
        method:"get",
        isForm:false
    },
    newContactJson:{
        url: "/contact/new/json",
        method:"post",
        isForm:false
    },
    newContactForm:{
        url: "/contact/new/form",
        method:"post",
        isForm:true
    },
    editContact:{
        url: "/contact/edit",
        method:"put",
        isForm:false
    },
    delContact:{
        url: "/contact",
        method:"delete",
        isForm:false
    }
}

export default API