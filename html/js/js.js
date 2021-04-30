function clickHome() {
  window.location.replace('./home.html');
  console.log('clickHome');
}

function clickNew() {
  console.log('clickNew');
}

function clickShop() {
  window.location.replace('./shop.html');
  console.log('clickShop');
}

function  clickPerfil() {
  console.log('clickPerfil');
}

function cargarPublicacionesHome() {
  let body = {
    tipo: 'P'
  }
  let consultaPublicaciones = this.consultarApi(body, 'post', 'publicaciones.php');
  console.log(consultaPublicaciones);
}

function cargarPublicacionesVentas() {
  let body = {
    tipo: 'V'
  }
  let consultaVentas = this.consultarApi(body, 'post', 'publicaciones.php');
  console.log(consultaVentas)
}

function consultarDatosUsuario(usuario) {
  let body = {
    idUsusario: usuario
  }
  let consultaDatosUsuarios = this.consultarApi(body, 'post', 'consultaUsuario.php');
  console.log(consultaDatosUsuarios);
}

function crearPublicacion(body) {
  let respuestaCrearPublicacion = this.consultarApi(body, 'post', 'crearPublicacion.php');
  console.log(respuestaCrearPublicacion);
}

function consultaComentarios(body) {
  let body = {
    publicacionId: publicacion
  }
  let respuestaCrearPublicacion = this.consultarApi(body, 'post', 'crearPublicacion.php');
  console.log(respuestaCrearPublicacion);
}


function consultarApi(body, method, api) {
  var url = 'https://httpbin.http://weavernetwork.mocklab.io/' + api;
  fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {return response.json()});
}