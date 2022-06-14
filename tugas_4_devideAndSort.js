// divide and sort
const divideAndSort = (param) =>{

    let temp_1 = param.toString().split(0)
    let temp_2 = temp_1.map(item=>{
        return item.split("").sort().join("")
    })

    console.log(parseInt(temp_2.join("")))
   
}

divideAndSort(5956560159466056)