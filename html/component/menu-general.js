class menuGeneral extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML= `
      <div class="menu">
      <header class="py-3 mb-3 border-bottom">
        <div class="group-menu">
          <div class="item-menu">
            <div onclick="clickHome()">
              <i
              id="btn-home"
              class="bi-house"
              style="font-size: 2rem; color: cornflowerblue;"></i>
              Inicio
            </div>
          </div>
          <div class="item-menu">
            <div onclick="clickShop()">
              <i
              id="btn-shop"
              class="bi-shop-window"
              style="font-size: 2rem; color: cornflowerblue;"
              ></i>
              Mercado
            </div>
          </div>
          <div class="item-menu">
            <div onclick="clickPerfil()">
              <img src="../resources/imagenesPerfil/8.jpeg" class="imgRedondaMenu">
              Perfil
            </div>
          </div>
        </div>
      </header>
    </div>
    `;
  }
}
customElements.define("menu-general", menuGeneral);