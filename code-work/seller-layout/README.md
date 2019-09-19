# vue-cli3.0
    npm run serve
# 静态资源服务器
    会实现http协议
# web服务器
    会实现http协议
    集成后台语言的环境!!!   java(tomcat)
# fis3
    npm i fis3 -g
    fis3 server open  :  打开fis3本地的静态资源服务器
    fis3 release      :  发布资源 ; 一定要在资源的根目录下执行命令
    fis3 server start :  启动服务器
    fis3 server stop  :  关闭服务器
# 字体图标
    1. 制作矢量图 
    2. 将矢量图 跟 一个字符做绑定 最终生成一套字体   
    3. 对字体做兼容性处理 并且 定义成自定义字体 
    
    
# mock数据
    1. 通过webpack-dev-server
    2. mock.js
        
# css预处理器
    模块化
        less  :   @import  url
        sass  :   @import  url
        stylus:   @import  url
        
    变量
        less  :   @name
        sass  :   $name
        stylus:   $name
        
    嵌套(&)
        less  :   {}
        sass  :   缩进
        stylus:   缩进
        
    混合(将一个规则集 复制 到另外一个规则集中)
        less  :   
            定义 :  .混合名(形参)   使用 .混合名(实参)
        sass  :   {}
            定义 :  @mixin 混合名(形参)   使用 @include 混合名(实参)
        stylus:   
            定义 :  混合名(形参)   使用 混合名(实参)
            
    继承(继承一个类 选择器的组合)
        less  :   
            &:extend(类名 all)
        sass  :   {}
            @extend(类名)
        stylus:   
            @extend(类名)

         
# 移动端设计稿
    位图像素  物理像素  css像素     
        当一物理像素所占据的实际尺寸 等于 一位图像素所占据的实际尺寸时 图片才能完美清晰的展示
    页面要不要适配
            