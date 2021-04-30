function activeButton(){
  let user = document.getElementById('user');
  let password = document.getElementById('password');
  let btnLogin = document.getElementById('btnLogin');
  if(user.value === '' || password.value === ''){
    btnLogin.setAttribute('disbled', true);
  }else{
    btnLogin.removeAttribute('disabled');
  }
}

function login(){
  let user = document.getElementById('user');
  let password = document.getElementById('password');
  let body = {
    "user": user,
    "password": password
  };
  fetch('https://httpbin.org/post', {
        method: 'POST',
        body: body
    })
    .then(function(response) {
      window.location.replace('./html/home.html');
        console.log('response =', response);
        return response.json();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
}