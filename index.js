// const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const drivers2 = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];


const findMatching = function(arr, str) {
    return arr.filter(elem => elem.toLowerCase() === str.toLowerCase())
}

const fuzzyMatch =  function(arr, str) {
    return arr.filter(elem => elem.slice(0, str.length).toLowerCase() === str.toLowerCase())
}

const matchName = function(arr, str) {
    return arr.filter(elem => elem.name.toLowerCase() === str.toLowerCase())
}