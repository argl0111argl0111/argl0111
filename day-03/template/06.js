var http = require("http") //引用模块
var ejs = require("ejs")
var fs = require("fs")
// console.log(ejs)
http.createServer((req, res) => {
    var list = ["vue", "react", "node"]
    // render 渲染   第一个参数 代表的是模板  第二个参数代表的是数据
    // compile  编译         模板 str    数据
    // template  模板
    //标签  

    /*
        <%%>  流程控制标签
        <%=%>  输出
        <%#%>  注释
        <%_ %>  去除前面的空格
        <% _%>  去除后面的空格
        <%-%>  语句解析  转译结构到模板

        <include />   包含
        php  jsp 
    */
    fs.readFile("./view/index.ejs", (err, data) => {

        var template =data.toString()
        var list = ["vue","react","node"]
        var result =ejs.render(template,{list:list})
        //response  响应前端请求
        res.end(result)
    })
}).listen(3000)