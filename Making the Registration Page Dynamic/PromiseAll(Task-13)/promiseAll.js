console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket');
    }, 2000)
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  const getButter = new Promise((resolve, reject) => resolve(`butter`));

  const getColdDrink = new Promise((resolve, reject) => resolve(`cold drink`));

  let ticket = await promiseWifeBringingTicket;

  let [popcorn, butter, colddrink] = await Promise.all([getPopcorn, getButter, getColdDrink]);

  console.log(`${popcorn}, ${butter}, ${colddrink}`);
  return ticket;
}

preMovie().then((result) => console.log(`person 3: show ${result}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');






