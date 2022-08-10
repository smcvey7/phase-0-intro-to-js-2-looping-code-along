function writeCards(list, gift){
    let messages = []
    for (let i=0; i<list.length; i++){
        messages.push(`Thank you, ${list[i]}, for the wonderful ${gift} gift!`)
    }
    return messages
}

function countDown(num){
    for (let i = num; i > -1; i--){
        console.log(i)
    }
}