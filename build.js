const execSync=require("child_process").execSync;
path=__dirname.replace("\\","/")
const result =  execSync("electron "+ path + "/.");