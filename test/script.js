

// const plus = () => {
//     const a = 0;
//     console.log(a + 1)
// };

//
// function foo() {
//     const a = 0;
//     console.log(a + 1)
// }

function incrementValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decrementValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}



