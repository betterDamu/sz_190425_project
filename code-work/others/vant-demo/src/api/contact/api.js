const API={
    getContactList:{
        url: "/contactList",
        method:"get",
        isForm:false
    },
    newContactJson:{
        url: "/Msite/new/json",
        method:"post",
        isForm:false
    },
    newContactForm:{
        url: "/Msite/new/form",
        method:"post",
        isForm:true
    },
    editContact:{
        url: "/Msite/edit",
        method:"put",
        isForm:false
    },
    delContact:{
        url: "/Msite",
        method:"delete",
        isForm:false
    }
}

export default API