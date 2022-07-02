const homeURL = require("url:../../img/house.png");
const comoNosComunicamosURL = require("url:../../img/como-nos-comunicamos.jpeg");
const comoNosRelacionamosURL = require("url:../../img/como-nos-relacionamos.jpeg");
const conQuienesContamosURL = require("url:../../img/con-quienes-contamos.jpeg");
const elegiTuExperienciaURL = require("url:../../img/elegi-tu-experiencia.jpeg");
const queOfrecemosURL = require("url:../../img/que-ofrecemos.jpeg");
import { Router } from "@vaadin/router";
class AboutUs extends HTMLElement {
	constructor() {
		super();
	}
	shadow = this.attachShadow({ mode: "open" });
	connectedCallback() {
		this.render();
	}
	addListeners() {
		const homeEl = this.shadow.querySelector(".home");
		homeEl.addEventListener("click", () => {
			Router.go("/home");
		});
		const aboutUsEl = this.shadow.querySelector(".intra");
		aboutUsEl.addEventListener("click", () => {
			Router.go("/tu-intra");
		});
	}
	render() {
		const div = document.createElement("div");
		const style = document.createElement("style");
		div.innerHTML = `
        <header class="header">
            <div class="home-container">
                <img src="${homeURL}" alt="home" class="home"/>
            </div>
            <div class="intra">
                <h3 class="link">ACCESO A TU INTRANET</h3>
            </div>
        </header>
        <div class="content">
            <div class="img-container a">
                <h2>¿Con quiénes contamos?</h2>
                <img src="${conQuienesContamosURL}" alt="logo" class="img" />
            </div>
            <div class="img-container b">
                <h2>¿Qué ofrecemos?</h2>
                <img src="${queOfrecemosURL}" alt="logo" class="img" />
            </div>
            <div class="text-container c">
                <h2 class="title">Nuestra propuesta de valor</h2>
                <p class="text">Concebimos nuestro servicio como una herramienta clave para ayudar a nuestros clientes a alcanzar sus metas, es por eso que trabajamos en forma conjunta y personalizada para definir soluciones alineadas con la estrategia de su negocio.</p>
            </div>
            <div class="img-container d">
                <h2>¿Cómo nos relacionamos?</h2>
                <img src="${comoNosRelacionamosURL}" alt="logo" class="img" />
            </div>
            <div class="img-container e">
                <h2>¿Cómo nos comunicamos?</h2>
                <img src="${comoNosComunicamosURL}" alt="logo" class="img" />
            </div>
            <div class="img-container f">
                <h2>Elegí tu experiencia</h2>
                <img src="${elegiTuExperienciaURL}" alt="logo" class="img" />
            </div>
        </div>
                `;
		div.classList.add("root");
		style.innerHTML = `
                    .root{
                        padding: 10px;
                        height: 100vh;
                        background-color: white;
                    }
                    h3, h2, p{
                        margin:0;
                        text-align: center;
                        color: rgb(20, 199, 199);
                        cursor: pointer;
                    }
                    .header{
                        width: 100%;
                        height: 50px;
                        display: flex;
                        justify-content: space-between;
                    }
                    .home-container{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .home{
                        box-sizing: border-box;
                        width: 30px;
                        height: 30px;
                        cursor: pointer;
                    }
                    .intra{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: "Montserrat", sans-serif;
                    }
                    .link:hover{
                        color:rgb(223, 226, 248);
                        cursor: pointer;
                    }
                    .content{
                        height: calc(100vh - 120px);
                        width: 100%;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-template-rows: 1fr 1fr 1fr 1fr;
                        justify-content: center;
                        margin-top: 20px;
                    }
                    .img-container{
                        width: 130px;
                        height: 80px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .a{
                        grid-column-start: 1;
                        grid-column-end: 1;
                        grid-row-start: 1;
                        grid-row-end: 1;
                        justify-self: center;
                        align-self: center;
                    }
                    .b{
                        grid-column-start: 3;
                        grid-column-end: 3;
                        grid-row-start: 1;
                        grid-row-end: 1;
                        justify-self: center;
                        align-self: center;
                    }
                    .c{
                        grid-column-start: 2;
                        grid-column-end: 2;
                        grid-row-start: 2;
                        grid-row-end: 2;
                        justify-self: center;
                        align-self: center;
                    }
                    .d{
                        grid-column-start: 1;
                        grid-column-end: 1;
                        grid-row-start: 3;
                        grid-row-end: 3;
                        justify-self: center;
                        align-self: center;
                    }
                    .e{
                        grid-column-start: 3;
                        grid-column-end: 3;
                        grid-row-start: 3;
                        grid-row-end: 3;
                        justify-self: center;
                        align-self: center;
                    }
                    .f{
                        grid-column-start: 2;
                        grid-column-end: 2;
                        grid-row-start: 4;
                        grid-row-end: 4;
                        justify-self: center;
                        align-self: center;
                    }
                    .img{
                        width: 130px;
                        height: 90px;
                    }
                    .text-container{
                        width: 300px;
                        height: 200px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .title{
                        margin-bottom: 20px;
                        font-weight: 700;
                    }
                    h2:hover{
                        color:rgb(223, 226, 248);
                        cursor: pointer;
                    }
                    h2{
                        font-weight: 400;
                        font-size: 18px;
                    }
                    p{
                        font-size: 14px;
                    }
                `;
		this.shadow.appendChild(div);
		this.shadow.appendChild(style);
		this.addListeners();
	}
}
customElements.define("about-us", AboutUs);
