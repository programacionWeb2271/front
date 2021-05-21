class escribirPublicacion extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML= `
    <div class="publicacion">
      <div class="form-group file-upload-wrapper">
      <h4>Escribe una publicación </h4>
        <textarea class="form-control" id="textoPublicacion" rows="3"></textarea>
      </div>
      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          id="imagenPublicacion"
          accept="image/png, image/gif, image/jpeg">
        <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Sube una foto</label>
      </div>
      <div class="form-group btn-guardar">
        <button type="button" onclick="guardarPublicacion()" class="btn btn-outline-info">Guardar</button>
      </div>
    </div>
    `;
  }

}
customElements.define("escribir-publicacion", escribirPublicacion);