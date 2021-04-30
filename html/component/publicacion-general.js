class publicacionGeneral extends HTMLElement {

  constructor() {
    super();
    this.autorImage = '';
    this.autorNombre = '';
    this.texto = '';
    this.imagen = '../resources/publicaciones/p1.jpeg';
    this.fecha = '';
  }

  static get observedAttributes() {
    return ['data'];
  }

  attributeChangedCallback(nameAttr, oldVal, newVal) {
    switch(nameAttr){
      case 'foto':
        this.autorImag = newVal;
        break;
      case 'texto':
        this.texto = newVal;
        break;
      case 'imagen':
        this.imagen = newVal;
        break;
      case 'fecha':
        this.fecha = newVal;
        break;
      case 'nombre':
        this.autorNombre = newVal;
      default:
        break;
    }
  }

  connectedCallback(){
    this.innerHTML= `
      <div class="publicacion">
        <div class="autor">
          <img src="${this.autorImag}">
          ${this.autorNombre}
          ${this.fecha}
        </div>
        <div class="imgPost">
          <img src="${this.texto}">
        </div>
        <div class="textPost">
          <span>
          ${this.texto}
          </span>
        </div>
      </div>
    `;
  }
}
customElements.define("publicacion-general", publicacionGeneral);