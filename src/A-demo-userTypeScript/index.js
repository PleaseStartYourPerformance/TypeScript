function greeter(person) {
    return "Hello, " + person;
}
var user = "LaoTie";
document.body.innerHTML = greeter(user);
//我们使用了.ts扩展名，但是这段代码仅仅是JavaScript而已。 你可以直接从现有的JavaScript应用里复制/粘贴这段代码。
//在命令行中运行tsc greeter.ts   （可以使用vs-code）也可以使用webStrom中的Terminal
