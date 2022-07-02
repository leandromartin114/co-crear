const homeURL = require("url:../../img/house.png");
const logoURL = require("url:../../img/logo.jpeg");
import { Router } from "@vaadin/router";
class HomePage extends HTMLElement {
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
		const aboutUsEl = this.shadow.querySelector(".about-us");
		aboutUsEl.addEventListener("click", () => {
			Router.go("/about-us");
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
            <div class="about-us">
                <h3 class="link">CONOCENOS</h3>
            </div>
        </header>
        <div class="content">
            <div class="logo-container">
                <img src="${logoURL}" alt="logo" class="logo" />
                <h2>Creamos en conjunto</h2>
            </div>
            <div class="text">
                <h3>Queremos darte la oportunidad de CO-Construir la experiencia que desees y se adapte a tu contexto</h3>
            </div>
        </div>
                `;
		div.classList.add("root");
		style.innerHTML = `
                    .root{
                        padding: 10px;
                        height: 100vh;
                        background-color: rgb(20, 199, 199);
                    }
                    h3, h2{
                        margin:0;
                        text-align: center;
                        color: white;
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
                    .about-us{
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
                        height: calc(100vh - 60px);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .logo-container{
                        padding-bottom: 40px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 2px solid white;
                    }
                    .logo{
                        width: 220px;
                        height: 220px;
                        margin-bottom: 20px;
                    }
                    .text{
                        padding-top: 30px;
                        width: 600px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        font-size: 18px;
                    }
                    h2{
                        font-weight: 400;
                    }
                `;
		this.shadow.appendChild(div);
		this.shadow.appendChild(style);
		this.addListeners();
	}
}
customElements.define("home-page", HomePage);
