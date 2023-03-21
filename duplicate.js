// akta array te jodi duplicate element thake tahole segula ke remve korar way

const names = ['abul', 'babul', 'cabul', 'kabul', 'abul', 'cabul', 'dabul', 'babul', 'abul', 'ebul', 'gabul', 'dabul',];
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);