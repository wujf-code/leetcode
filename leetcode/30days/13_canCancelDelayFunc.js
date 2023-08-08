
 
const cancellable = function (fn,args,t) {
    let  timer = setTimeout(()=> {
        fn(...args)
    },t)
    return ()=> {
        clearTimeout(timer)
    }
  }
let cancel = cancellable((a)=>{console.log(a)},[1],1000)
