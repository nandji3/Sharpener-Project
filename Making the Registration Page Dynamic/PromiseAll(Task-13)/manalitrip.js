function buyCar() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Buy a car");

    }, 5000);
  })
}

function planatrip() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("lets go to manali");

    }, 4000);
  })
}

function reachmanali() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Reach manali");
    }, 3000);
  })
}

function goingtiResturnet() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("Error : reject plan due to some accident");
    }, 3000);
  })
}

//by using promise
buyCar().then((msg) => {
  console.log(msg);
  planatrip().then((msg) => {
    console.log(msg);
    reachmanali().then((msg) => {
      console.log(msg);
      goingtiResturnet().catch((err) => {
        console.log(err);
      })
    })
  })
})


//or by using async-await
const result = async () => {
  try {
    let msg1 = await buyCar();
    console.log(msg1);
    let msg2 = await planatrip();
    console.log(msg2);
    let msg3 = await reachmanali();
    console.log(msg3);
    let msg4 = await goingtiResturnet();
  }
  catch (error) { console.log(error) }
}
result();
/*
Buy a car
lets go to manali
Reach manali
Error : reject plan due to some accident
*/
