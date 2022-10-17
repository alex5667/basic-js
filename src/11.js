function createDreamTeam(members) {
    if (members == null) return false
    return Array.from(members).reduce((acc, curr) => {
        if (typeof curr === 'string') {
            curr = curr.replace(/^ +| +$|( ) +/g, "$1")
            acc = acc + curr[0];
        }
        return acc
    }, '').toUpperCase().split('').sort().join('')
}
console.log(createDreamTeam(null))
