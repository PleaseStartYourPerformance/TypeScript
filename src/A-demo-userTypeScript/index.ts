function greeter(person:string) {
    return "Hello, " + person;
}

let user = "LaoTie";
// let user = [1,2,3]  //如过传的是数组类型会报错哦

document.body.innerHTML = greeter(user);
//我们使用了.ts扩展名，但是这段代码仅仅是JavaScript而已。 你可以直接从现有的JavaScript应用里复制/粘贴这段代码。
//在命令行中运行tsc index.ts   
