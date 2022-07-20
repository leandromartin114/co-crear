const homeURL = require("url:../../img/house.png");
const corazonURL = require("url:../../img/corazon.png");
const certificadoURL = require("url:../../img/certificado.png");
export function initCapaSkills(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");
	div.innerHTML = `
        <header class="header">
            <div class="home-container">
                <img src="${homeURL}" alt="home" class="home"/>
            </div>
        </header>
        <div class="content">
            <div class="capa-container">
                <h2 class="title">CAPACITACIÓN Y DESARROLLO</h2>
                <div class="capa-content">
                    <div class="talleres-container">
                        <div class="talleres">
                            <div class="taller">TALLER 1 - COMUNICACIÓN EFECTIVA</div>
                            <div class="taller">TALLER 2 - TRABAJO EN EQUIPO</div>
                            <div class="taller">TALLER 3 - LIDERAZGO ÁGIL</div>
                        </div>
                        <div class="informes">
                            <div class="status">Status</div>
                            <div class="informe">Informe de Avance</div>
                            <div class="informe">Informe de Avance</div>
                            <div class="informe">Informe de Avance</div>
                        </div>
                    </div>
                    <div class="informe-final">INFORME FINAL</div>
                </div>
            </div>
            <div class="skills-container">
                <h2 class="title">SKILL BANK</h2>
                <h3 class="sub-title">MIS HABILIDADES</h3>
                <div class="text">Seleccionar</div>
                <ol>
                    <li>Vista por área de conocimiento</li>
                    <li>Vista por tipo de perfiles</li>
                    <li>Buscador</li>
                </ol>
                <div class="text">Califica según tu interés:</div>
                <div class="especial">
                    <img src="${corazonURL}" alt="corazon" class="img"/>
                    <div>Me interesa desarrollar la habilidad</div>
                </div>
                <div class="especial">
                    <img src="${certificadoURL}" alt="certificado" class="img"/>
                    <div>Tengo una certificación</div>
                </div>
            </div>
        </div>
                `;
	div.classList.add("root");
	style.innerHTML = `
                    .root{
                        padding: 10px;
                        height: 100vh;
                        background-color: white;
                        font-family: "Poppins", sans-serif;
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
                    .capa-container{
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border-right: 2px solid rgb(20, 199, 199); 
                    }
                    .capa-content{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .talleres-container{
                        display: flex;
                        align-items: flex-end;
                        margin-bottom: 10px;
                    }
                    .talleres{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .taller{
                        width: 220px;
                        list-style: none;
                        margin: 0 10px 5px 0;
                        padding: 0;
                        border: 1px solid rgb(20, 199, 199);
                        font-size: 12px;
                        color: rgb(18, 136, 145);
                        cursor: pointer;
                    }
                    .informes{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: center;
                    }
                    .informe{
                        list-style: none;
                        margin: 0 0 5px 0;
                        padding: 0;
                        border: 1px solid rgb(20, 199, 199);
                        font-size: 12px;
                        color: rgb(18, 136, 145);
                        cursor: pointer;
                    }
                    .status{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        font-size: 13px;
                        color: black;
                    }
                    .informe-final{
                        font-size: 18px;
                        border: 1px solid rgb(20, 199, 199);
                        display: flex;
                        justify-content: center;
                        width: 180px;
                        cursor: pointer;
                    }
                    .skills-container{
                        padding-left: 10px;
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .title{
                        margin-bottom: 15px;
                        font-size: 30px;
                    }
                    .sub-title{
                        margin-bottom: 10px;
                        font-size: 22px;
                        border: 2px solid rgb(20, 199, 199);
                        display: flex;
                        justify-content: center;
                        width: 200px;
                    }
                    .text{
                        align-self: flex-start;
                        margin-bottom: 15px;
                    }
                    ol{
                        padding: 0;
                        margin-top: 0;
                    }
                    li{
                        list-style: number;
                        color: rgb(18, 136, 145);
                        cursor: pointer;
                        margin-bottom: 5px;
                    }
                    li:hover{
                        font-weight: 700;
                    }
                    .especial{
                        display: flex;
                        align-self: flex-start;
                    }
                    .img{
                        box-sizing: border-box;
                        width: 24px;
                        height: 24px;
                        margin-right: 5px;
                    }
                `;
	div.appendChild(style);
	const homeEl = div.querySelector(".home");
	homeEl?.addEventListener("click", () => {
		params.goTo("/home");
	});
	return div;
}
