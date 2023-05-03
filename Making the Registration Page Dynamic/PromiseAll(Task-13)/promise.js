console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const promiseWifeBringingTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket');
  }, 2000)
});

const getPopcorn = promiseWifeBringingTicket.then((result) => {
  console.log('wife: I have the ticket');
  console.log('husband: we should go in');
  console.log('wife: no i am hungry');
  return new Promise((resolve, reject) => resolve(`${result} popcorn`));
});

const getButter = getPopcorn.then((result) => {
  console.log('husaband: I got some popcorn');
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');
  return new Promise((resolve, reject) => resolve(`${result} butter`));
});

const getColdDrink = getButter.then((result) => {
  console.log('husaband: I got some butter on popcorn');
  console.log('husband: we should go in');
  console.log('wife: I need cold drink');
  return new Promise((resolve, reject) => resolve(`${result} cold drink`));
});

getColdDrink.then((result) => console.log(result));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
