console.log(__dirname);
//gives current working directory 

const path=require('path')

console.log(path.extname("style.css"));
//gives extension of path

console.log(path.join(__dirname,"public"));
//navigate to directory __dirname/public

console.log(path.join(__dirname,"public","index.html"));
//navigate to directory __dirname/public/index.html
