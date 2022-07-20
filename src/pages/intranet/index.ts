const homeURL = require("url:../../img/house.png");
export function initTuIntranet(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.innerHTML = `
        <header class="header">
            <div class="home-container">
                <img src="${homeURL}" alt="home" class="home"/>
            </div>
        </header>
        <div class="content">
            <div class="intra-container">
                <h2 class="title">TU INTRANET</h2>
                <h3 class="cliente">Cliente modelo</h3>
                <div class="cliente-container">
                    <div>
                        <label class="label">
                            <h3>usuario: </h3>
                            <input type="text">
                        </label>
                    </div>
                    <div>
                        <label class="label">
                            <h3>contraseña: </h3>
                            <input type="text">
                        </label>
                    </div>
                </div>
                <button class="button">Iniciar</button>
                <a>olvidé mi contraseña</a>
            </div>
            <div class="accesos-container">
            <h2 class="title">Accesos</h2>
                <ul>
                    <li>Arma tu CV</li>
                    <li>Capacitaciones</li>
                    <li>Reclutamiento y Selección</li>
                    <li>Políticas de Compensaciones</li>
                    <li>Liquidaciones de Sueldos</li>
                    <li>Control de Ausentismo</li>
                    <li>Auditorías</li>
                    <li>Bienestar Organizacional</li>
                    <li>Tendencias</li>
                </ul>
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
                    a{
                        color: rgb(18, 136, 145);
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
                    
                    .content{
                        height: calc(100vh - 120px);
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                    }
                    .intra-container{
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border-right: 2px solid rgb(20, 199, 199); 
                    }
                    .title{
                        margin-bottom: 15px;
                        font-size: 30px;
                    }
                    .label{
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        width: 300px;
                        padding: 0;
                    }
                    .cliente-container{
                        margin-bottom: 30px;
                        border: 2px solid rgb(20, 199, 199);
                        padding: 3px;
                        display: flex;
                        flex-direction: column;
                    }
                    .cliente{
                        margin-bottom: 15px;
                    }
                    .button{
                        width: 200px;
                        padding: 10px 0;
                        border: 2px solid rgb(20, 199, 199);
                        font-size: 16px;
                        color: rgb(20, 199, 199);
                        font-weight: 700;
                        margin-bottom: 10px;
                        cursor: pointer;
                    }
                    .accesos-container{
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    li{
                        list-style: none;
                        color: rgb(18, 136, 145);
                        cursor: pointer;
                        margin-bottom: 5px;
                    }
                    li:hover{
                        font-weight: 700;
                    }
                `;
	div.appendChild(style);
	const homeEl = div.querySelector(".home");
	homeEl?.addEventListener("click", () => {
		params.goTo("/home");
	});
	const button = div.querySelector(".button");
	button?.addEventListener("click", () => {
		params.goTo("/capa-skills");
	});
	return div;
}
////////////////////////////////////////////////////
// import { Router } from "@vaadin/router";
// class TuIntranet extends HTMLElement {
// 	constructor() {
// 		super();
// 	}
// 	shadow = this.attachShadow({ mode: "open" });
// 	connectedCallback() {
// 		this.render();
// 	}
// 	addListeners() {
// 		const homeEl = this.shadow.querySelector(".home");
// 		homeEl.addEventListener("click", () => {
// 			Router.go("/home");
// 		});
// 	}
// 	render() {
// 		const div = document.createElement("div");
// 		const style = document.createElement("style");
// 		div.innerHTML = `
//         <header class="header">
//             <div class="home-container">
//                 <img src="${homeURL}" alt="home" class="home"/>
//             </div>
//         </header>
//         <div class="content">
//             <div class="intra-container">
//                 <h2 class="title">TU INTRANET</h2>
//                 <h3 class="cliente">Cliente modelo</h3>
//                 <div class="cliente-container">
//                     <div>
//                         <label class="label">
//                             <h3>usuario: </h3>
//                             <input type="text">
//                         </label>
//                     </div>
//                     <div>
//                         <label class="label">
//                             <h3>contraseña: </h3>
//                             <input type="text">
//                         </label>
//                     </div>
//                 </div>
//                 <button class="button">Iniciar</button>
//                 <a>olvidé mi contraseña</a>
//             </div>
//             <div class="accesos-container">
//             <h2 class="title">Accesos</h2>
//                 <ul>
//                     <li>Arma tu CV</li>
//                     <li>Capacitaciones</li>
//                     <li>Reclutamiento y Selección</li>
//                     <li>Políticas de Compensaciones</li>
//                     <li>Liquidaciones de Sueldos</li>
//                     <li>Control de Ausentismo</li>
//                     <li>Auditorías</li>
//                 </ul>
//             </div>
//         </div>
//                 `;
// 		div.classList.add("root");
// 		style.innerHTML = `
//                     .root{
//                         padding: 10px;
//                         height: 100vh;
//                         background-color: white;
//                     }
//                     h3, h2, p{
//                         margin:0;
//                         text-align: center;
//                         color: rgb(20, 199, 199);
//                         cursor: pointer;
//                     }
//                     a{
//                         color: rgb(18, 136, 145);
//                         cursor: pointer;
//                     }
//                     .header{
//                         width: 100%;
//                         height: 50px;
//                         display: flex;
//                         justify-content: space-between;
//                     }
//                     .home-container{
//                         display: flex;
//                         justify-content: center;
//                         align-items: center;
//                     }
//                     .home{
//                         box-sizing: border-box;
//                         width: 30px;
//                         height: 30px;
//                         cursor: pointer;
//                     }

//                     .content{
//                         height: calc(100vh - 120px);
//                         width: 100%;
//                         display: flex;
//                         justify-content: center;
//                         margin-top: 20px;
//                     }
//                     .intra-container{
//                         width: 50%;
//                         display: flex;
//                         flex-direction: column;
//                         align-items: center;
//                         border-right: 2px solid rgb(20, 199, 199);
//                     }
//                     .title{
//                         margin-bottom: 15px;
//                         font-size: 30px;
//                     }
//                     .label{
//                         display: flex;
//                         justify-content: flex-end;
//                         align-items: center;
//                         width: 300px;
//                         padding: 0;
//                     }
//                     .cliente-container{
//                         margin-bottom: 30px;
//                         border: 2px solid rgb(20, 199, 199);
//                         padding: 3px;
//                         display: flex;
//                         flex-direction: column;
//                     }
//                     .cliente{
//                         margin-bottom: 15px;
//                     }
//                     .button{
//                         width: 200px;
//                         padding: 10px 0;
//                         border: 2px solid rgb(20, 199, 199);
//                         font-size: 16px;
//                         color: rgb(20, 199, 199);
//                         font-weight: 700;
//                         margin-bottom: 10px;
//                     }
//                     .accesos-container{
//                         width: 50%;
//                         display: flex;
//                         flex-direction: column;
//                         align-items: center;
//                     }
//                     li{
//                         list-style: none;
//                         color: rgb(18, 136, 145);
//                         cursor: pointer;
//                         margin-bottom: 5px;
//                     }
//                     li:hover{
//                         font-weight: 700;
//                     }
//                 `;
// 		this.shadow.appendChild(div);
// 		this.shadow.appendChild(style);
// 		this.addListeners();
// 	}
// }
// customElements.define("intra-page", TuIntranet);
