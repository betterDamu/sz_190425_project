import Mock from "mockjs"
import data from "./data"
Mock.mock("/seller",{errno:0,data:data.info})
Mock.mock("/goods",{errno:0,data:data.goods})
Mock.mock("/ratings",{errno:0,data:data.ratings})