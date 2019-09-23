/*
 1. 将请求接口 从组件中剥离出来
 2. 统一参数
 Http:
    {
        getContactList: async (data,config={})=>{}
        newContactJson: async (data,config={})=>{}
        newContactForm: async (data,config={})=>{}
        editContact: async (data,config={})=>{}
        delContact: async (data,config={})=>{}
    }
*/
export default  (apiObjs,axiosInsatnce) => {
    const Http ={}
    for (name in apiObjs) {
        let {url,method,isForm,corsUrl,needToken} = apiObjs[name]
        Http[name] = async (data,config={})=>{
            //请求携带数据的转换
            let transformData = {}
            if(data&&isForm){
                transformData = new FormData()
                for (let key in data){
                    transformData.append(key,data[key])
                }
            }else{
                transformData = data
            }

            //跨域 代理
            // url = corsUrl ? (corsUrl+url) : url;
            if (corsUrl){
                url = corsUrl+url
                corsUrl = ""
            }

            //发请求
            let res = null;
            if (method === "get" || method === "delete"){
                transformData = (typeof transformData) !== "object" ? {} : transformData;
                config.params = (typeof config.params) !== "object" ? {} : config.params;
                let params = Object.assign(transformData,config.params);
                try{
                    // 让config携带needToken信息去拦截器
                    config = Object.assign(config,{url, method, params,headers:{needToken}})
                    res = await axiosInsatnce(config)
                    res = Promise.resolve(res)
                }catch (e) {
                    res = Promise.reject(e)
                }
            }else if(method === "post" || method === "put"){
                try{
                    config = Object.assign(config,{url, method, data:transformData,headers:{needToken}})
                    res = await axiosInsatnce(config)
                    res = Promise.resolve(res)
                }catch (e) {
                    res = Promise.reject(e)
                }
            }

            return res;
        }
    }
    return Http;
}