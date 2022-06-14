// palindrom

const palindrom = (params) => {

    let temp_1 = params.split("").reverse().join("").toLowerCase()
    console.log(params)
    if (temp_1 === params.toLowerCase()) {
        console.log("palindrom")
    } else {
        console.log("bukan palindrom")
    }
}
palindrom("Malam")