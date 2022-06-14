// Membalik kalimat

const reverseWord = (param) => {
    let reverseWord = param.split(" ").reverse().join(" ")
    console.log(reverseWord)
}
reverseWord("Saya belajar Javascript")