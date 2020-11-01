const log1 = (req, res,next)=>{
    console.log('hello');
    next()
}
const log2 = (req, res,next)=>{
    console.log('hello222222222222');
    next()
}

export {log1,log2}