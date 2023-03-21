// splice hocche akta array ar moddhokhan theke onek gula element k delete kora delete kora jaygay notun element add kora 
const friendsAge = [22, 11, 21, 23, 12, 14, 15, 16, 17, 18, 19];
// splice korar jomoy jokhon ami index ar direction dibo tokon first direction hobe index number then koto ta elemnet k ami remove korbo se direciton hobe then pore coma , diye new valu (element declare kora jabe )
const partial = friendsAge.splice(2, 4, 23, 32, 10);
console.log(partial);
console.log(friendsAge);