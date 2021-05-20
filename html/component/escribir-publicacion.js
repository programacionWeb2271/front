class escribirPublicacion extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML= `
    <div class="publicacion">
      <div class="form-group file-upload-wrapper" >
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          id="cargaImagen"
          onchange="cargarFoto()"
          accept="image/png, image/gif, image/jpeg">
        <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Sube una foto</label>
      </div>
      <div class="form-group btn-guardar">
        <button type="button" class="btn btn-outline-info">Guardar</button>
      </div>
    </div>
    `;
  }

}
customElements.define("escribir-publicacion", escribirPublicacion);