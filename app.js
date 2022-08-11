const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');
function getData() {
  const promise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));

  });
  promise.then(
    (data) => {
      console.log('Promise Executed');
      console.log(data);
      var player = '<h2>Lists of Users</h2>';
      data.forEach(function (user) {
        player += `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`;
      });
      msg.innerHTML = player;
    },
  ).catch((error) => {
    console.log('Promise rejected');
    console.log(error.message);
  })
};