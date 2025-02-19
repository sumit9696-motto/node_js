const fs=require("fs");
const os= require("os");
console.log(os.cpus().length);

//asyns way
// fs.writeFile("./asfiletxt","helloo hhi ", (err)=>{console.log(err)});

//sync way
// fs.writeFileSync("./asfiletxt","helloo synsy hhi ");

//sync way
// const result = fs.readFileSync("./asfiletxt","utf-8");
// console.log(result);

//asyns way
// fs.readFile("./asfiletxt","utf-8",(err,result)=>
//     {
//         if(err){ console.log("error",err)
//     }
//     else{
//         console.log("result : ",result);
//     }
// });

// fs.appendFileSync("./asfiletxt","helloo hhi new wala hai ", (err)=>{console.log(err)});
// fs.appendFileSync("./asfiletxt",new Date().getDate().toString()`\n`);
// fs.appendFileSync("./asfiletxt",`hi \n`);
