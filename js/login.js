class ConsultarApi {
  constructor () {}
  consultaPostParametros(servicio, params) {
    let formData = new FormData();
    for (const prop in params){
      formData.append(prop.toString(), params[prop]);
    }
    return fetch( 'http://api.weavernetwork.online/' + servicio, {
      method: 'POST',

      body: formData
    })
    .then(( response ) => {
      return response.json();
    })
  }
}

function activeButton(){
  let user = document.getElementById('user');
  let password = document.getElementById('password');
  let btnLogin = document.getElementById('btnLogin');
  console.log(password.value);
  if(user.value === '' || password.value === ''){
    btnLogin.setAttribute('disabled', true);
  }else{
    btnLogin.removeAttribute('disabled');
  }
}


function login(){
  var user = document.getElementById('user');
  var password = document.getElementById('password');


  var consulta = new ConsultarApi();
  let data = {
    'correo': user.value,
    'pass': password.value
  }
  var consultaLogin = consulta.consultaPostParametros( 'consultarLogin.php', data );
  consultaLogin.then( respuestaLogin  => {
    if(respuestaLogin.message){
      console.log('error');
    }else{
      localStorage.setItem('weaver',respuestaLogin.id_usuario);
      window.location.replace('./html/home.html');
    }
    
  })
  .catch(error => console.error(error));
}


