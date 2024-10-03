function spoonerize(words) {
    wordsArr = words.split(" ")
    return [wordsArr[1].charAt(0) + wordsArr[0].slice(1),
        wordsArr[0].charAt(0) + wordsArr[1].slice(1)]
            .join(" ")
}
////tests - nothing logged means all tests passed
function assertEq(w1, w2, fn) {
    if (fn(w1) === w2) return
    console.log(`test for ${w1} failed. You gave me ${fn(w1)} but I need ${w1}`)
}
assertEq('word word', 'word word', spoonerize)
assertEq('cx ax', 'ax cx', spoonerize)