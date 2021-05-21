class ConsultarApi {

  constructor () {}
  consultaGet(servicio) {
    return fetch( 'http://api.weavernetwork.online/' + servicio )
    .then(( response ) => {
        return response.json();
    })
  }

  consultaPostBody(servicio, body) {
    console.log(body);
    return fetch( 'http://api.weavernetwork.online/' + servicio, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(( response ) => {
        return response.json();
    })
  }

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

class Usuario {
  constructor (
    nombre = '',
    apellido = '',
    sexo = '',
    municipio = '',
    correo = ''
  )
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.municipio = municipio;
    this.correo = correo;
  }
}



window.onload = function() {
  cargarPublicacionesHome();
  verificarLogin();
};

function verificarLogin() {
  var id = localStorage.getItem('weaver');
  if(id === null) {
    window.location.replace('../index.html');
  }
}

function clickHome() {
  window.location.replace('./home.html');
  console.log('clickHome');
}

function clickNew() {
  console.log('clickNew');
  let consulta = new ConsultarApi();
  let promesa = consulta.consultaGet('consultarTodaPublicacion.php');
  promesa.then( respuesta => {
    console.log(respuesta);
  });
}

function clickShop() {
  window.location.replace('./shop.html');
  console.log('clickShop');
}

function  clickPerfil() {
  console.log('clickPerfil');
}

function cargarPublicacionesHome() {
  var consulta = new ConsultarApi();
  var promesa = consulta.consultaGet('consultarTodaPublicacion.php');

  promesa.then( respuesta => {
    respuesta.data.map(function(publicacion) {
      let data = {
        'id': publicacion.id_usuario
      }
      var datosUsuario = new Usuario();
      var consultaUsuarios = consulta.consultaPostParametros('consultarUsuario.php', data );
      consultaUsuarios.then( respuestaUsuario  => {
        datosUsuario.nombre = respuestaUsuario.nombre_usuario;
        datosUsuario.apellido = respuestaUsuario.apellido;
        datosUsuario.foto = respuestaUsuario.foto_perfil;
        let bodyHome = document.getElementById('bodyHome');
        let publicacionBody = document.createElement("publicacion-general");
        publicacionBody.setAttribute('autor', datosUsuario.nombre + ' ' + datosUsuario.apellido);
        publicacionBody.setAttribute('foto', datosUsuario.foto);
        publicacionBody.setAttribute('texto', publicacion.texto);
        publicacionBody.setAttribute('imagen', publicacion.imagen);
        publicacionBody.setAttribute('fecha', publicacion.fecha);
        publicacionBody.setAttribute('idautor', publicacion.id_usuario);
        bodyHome.appendChild(publicacionBody);
      })
    })
  });
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

function consultaComentarios(publicacion) {
  let body = {
    publicacionId: publicacion
  }
  let respuestaCrearPublicacion = this.consultarApi(body, 'post', 'crearPublicacion.php');
  console.log(respuestaCrearPublicacion);
}

function autorClick(id) {
  var consulta = new ConsultarApi();
  var datoUsuario = new Usuario();
  let data = {
    'id': id
  }
  var consultaUsuarios = consulta.consultaPostParametros( 'consultarUsuario.php', data );
  consultaUsuarios.then( respuestaUsuario  => {
    let municipio = {
      'id': respuestaUsuario.id_municipios
    };
    var datosUsuario = datoUsuario;
    var consultaMunucipios = consulta.consultaPostParametros( 'consultarMunicipios.php', municipio );
    consultaMunucipios.then( respuestaMunicipio => {
      datosUsuario.municipio = respuestaMunicipio.nombre_mun;
      datosUsuario.nombre = respuestaUsuario.nombre_usuario;
      datosUsuario.apellido = respuestaUsuario.apellido;
      datosUsuario.sexo = respuestaUsuario.sexo === 'F' ? 'Femenino' : respuestaUsuario.sexo === 'M' ? 'Masculino' : 'Otro';
      console.log(datosUsuario); //TODO: al terminar la vista enviarle estos Datos
    })
  });
}

function guardarPublicacion() {
  var textoPublicacion = document.getElementById('textoPublicacion').value;
  var imagenPublicacion = document.getElementById('imagenPublicacion').files[0];
  var leerImagen = new FileReader();
  var consulta = new ConsultarApi();
  if (imagenPublicacion) {
    leerImagen.readAsDataURL(imagenPublicacion);
  }

  leerImagen.addEventListener('load', function() {
    console.log( textoPublicacion, leerImagen.result, localStorage.getItem('weaver') );
    var data = {
      'usuario': localStorage.getItem('weaver'),
      'texto': textoPublicacion,
      'imagen': leerImagen.result,
      'tipo': 'V',
      'estado': 'A'
    };
    var creacionPublicacion = consulta.consultaPostBody( 'crearPublicacion.php', data );
    creacionPublicacion.then(respuesta => {
      if(respuesta.message === 'Se ha creado la publicacion.'){
        window.location.replace('./home.html');
      }else{
        console.log( 'error crear publicación' );
      }
    })
  }, false);
}
