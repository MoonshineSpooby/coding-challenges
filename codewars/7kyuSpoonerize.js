function spoonerize(words) {
    return words.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4')
}
////tests - nothing logged means all tests passed
function assertEq(w1, w2, fn) {
    if (fn(w1) === w2) return
    console.log(`test for ${w1} failed. You gave me ${fn(w1)} but I need ${w1}`)
}
assertEq('word word', 'word word', spoonerize)
assertEq('cx ax', 'ax cx', spoonerize)