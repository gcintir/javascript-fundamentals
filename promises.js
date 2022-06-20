/*
function getUsers() {
    let users = [];
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 1000);
    return users;
  }
  
  function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
  }
  
  console.log(findUser('john'));

*/

//////////////////////////////////

/*

function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
}
  
function findUser(username, callback) {
    getUsers((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
}
  
findUser('john', console.log);

*/

//////////////////////////////////

/*

let success = true;

function getUsers () {

  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' }
        ]);
      } else {
        reject('Failed to the user list');
      }
    },1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise = getUsers();
promise.then(onFulfilled, onRejected);

promise.then(
  (users) => console.log,
  (error) => console.log
);

promise.catch(onRejected);

promise
.then(onFulfilled)
.catch(onRejected)
.finally(() => console.log("finished"));
*/