class publicacionGeneral extends HTMLElement {

  constructor() {
    super();
    this.foto = '';
    this.autor = '';
    this.texto = '';
    this.imagen = '';
    this.fecha = '';
    this.idAutor = '';
  }

  static get observedAttributes() {
    return ['foto', 'texto', 'imagen', 'fecha', 'autor', 'idautor'];
  }

  attributeChangedCallback(nameAttr, oldVal, newVal) {
    console.log(nameAttr, newVal);
    switch(nameAttr){
      case 'foto':
        this.foto = newVal;
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
      case 'autor':
        this.autor = newVal;
      case 'idautor':
        this.idAutor = newVal;
      default:
        break;
    }
  }

  connectedCallback(){
    this.innerHTML= `
      <div class="publicacion">
        <div class="autor" onclick="autorClick(${this.idAutor})">
          <img class="imgRedondaFeed" src="${this.foto}">
          <div class="autorData name">
            ${this.autor}
          </div>
          <div class="autorData">
            ${this.fecha}
          </div>
        </div>
        <div class="imgPost">
          <img src="${this.imagen}">
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