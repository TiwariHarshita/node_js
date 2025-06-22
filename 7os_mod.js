const os= require('os');//operating system

//infor about current user

const user=os.userInfo();
// console.log(user);

//method returns  the system uptime in sec

console.log(`the system uptime is ${os.uptime()}secs`);


const currentOS={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);
