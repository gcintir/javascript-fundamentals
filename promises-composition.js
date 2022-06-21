/*
const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('First promised resolved');
        resolve(1);
    }, 1000);
});

const p2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Second promised resolved');
        resolve(2);
    }, 2000);
});

const p3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Third promised resolved');
        //throw new Error('Third promised rejected');
        resolve(3);
    }, 3000);
});

Promise.all([p1, p2, p3])
.then((results) => {
    console.log(results);
})
.catch(console.error)
.finally(() => console.log('Finished'));
*/

///////////////////////////////////

/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has rejected');
        reject(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`))
    .finally(() => console.log('finished'));
*/

///////////////////////////////////

/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 rejected");
    reject(1);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 fulfilled");
    resolve(2);
  }, 4000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
  console.log("Returned Promise");
  console.log(value);
})
.catch((e) => {
    console.log(e, e.errors);
});
*/

///////////////////////////////////

/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(20);
  }, 4 * 1000);
});

Promise.allSettled([p1, p2])
.then((result) => {
  console.log(result);
});
*/
