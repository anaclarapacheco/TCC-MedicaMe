var fs = require("fs");

// var sourceFile = fs.readFileSync("../ej2-base/src/base.d.ts", "utf8");

// fs.writeFileSync("../ej2-base/src/base.d.ts", sourceFile.replace('subscribe?','subscribe'), "utf8");

var sourceFile1 = fs.readFileSync("./src/form-base.d.ts", "utf8");

fs.writeFileSync("./src/form-base.d.ts", sourceFile1.replace(`static readonly isFormBase = true;`,`static readonly isFormBase:any;`), "utf8");
