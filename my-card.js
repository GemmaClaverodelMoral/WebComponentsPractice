class myCard extends HTMLElement {
  static get observedAttributes() {
    return [
      "brand", 
      "titulo",
      "sub-titulo", 
      "desc", 
      "img",
      "price"
    ]
  }
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "brand")      {this.brand     = newVal}
    if (attr === "titulo")     {this.titulo    = newVal}
    if (attr === "sub-titulo") {this.subTitulo = newVal}
    if (attr === "desc")       {this.desc      = newVal}
    if (attr === "img")        {this.img       = newVal}
    if (attr === "price")      {this.price     = newVal}
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section class="card">
          <div class="left-up-card">
              <p class='brand'>${this.brand}</p>
              <img class='image' src=${this.img} alt="caca">
          </div>
          <div class="rigth-down-card">
              <p class="titulo-card">${this.titulo} <span>${this.subTitulo}</span></p>
              <p class="desc-card">${this.desc}</p>
              <div class="footer-card">
                <p class="price-card">${this.price}</p>
                <button>BUY NOW</button>
              </div>

          </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
          :host {
            --primary-background: #5a6cb2;
              width: 80%;
              max-width: 900px;
              min-width: 280px;
              margin: 0 auto;
          }
          .card {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              width: 900px;
              height: 600px;
              margin: 20px;
              background-color: #fff;
              position: relative;
          }
          .left-up-card {
              display: flex;
              position: relative;
              justify-content: center;
              width: 50%;
              height: 100%;
              background-color: var(--primary-background)
          }
          .brand {
              position: absolute;
              margin: 0px;
              padding: 0px;
              top: 20px;
              left: 20px;
              font-size: 6vw;
              font-weight: 800;
              color: #000;
              opacity: 0.1;
          }
          .image {
              position: relative;
              top: 100px;
              left: -50px;
              width: 720px;
              height: 480px;
              transform: rotate(-30deg);
          }
          .rigth-down-card {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 40px;
              width: 50%;
              height: 100%;
              box-sizing: border-box;
          }
          .titulo-card {
              margin-bottom: 25px;
              font-size: 2.5em;
              line-height: 0.8em;
              color: #444;
          }
          .titulo-card span {
              font-size: 0.4em;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #999;
              font-weight: 800;
          }
          .desc-card {
              max-width: 85%;
              margin-left: 15%;
              margin-bottom: 35px;
              color: #333;
              font-size: 15px;
          }
          .footer-card {
            display:flex;
            align-items: center;
            justify-content: space-between;
          }
          .price-card {
              font-size: 2.5em;
              color: #a2a2a2;
              font-weight: 800;
          }
          button {
              background-color: #5a6cb2;
              color: #fff;
              border-radius: 40px;
              font-size: 16px;
              font-family: Montserrat;
              font-weight: 600;
              letter-spacing: 1px;
              padding: 15px 20px;
              text-transform: uppercase;
              cursor: pointer;
          }
    
      @media (max-width: 1080px) {
          .card {
              height: auto;
              width: auto;
          }
          .left-up-card {
              padding: 40px;
              width: 100%;
              box-sizing: border-box;
              height: auto;
              text-align: center;
          }
          .brand {
              font-size: 12vw
          }
          .image {
              left: initial;
              width: 100%;
              height: auto;
              transform: rotate(0deg);
          }

          .rigth-down-card {
              width: 100%;
              height: auto;
              padding: 20px;
          }

          .desc-card {
              max-width: 100%;
              margin-left: 0;
          }
      }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("my-card", myCard);