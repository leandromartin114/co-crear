function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequireeaac;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){i[n]=e},e.parcelRequireeaac=o),o.register("27Lyk",(function(e,t){var i,o;n(e.exports,"register",(()=>i),(n=>i=n)),n(e.exports,"resolve",(()=>o),(n=>o=n));var r={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},o=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.0f0e7cc2.js","4Xxmo":"house.2f5bf319.png","8E0k5":"como-nos-comunicamos.beaa7e4d.jpeg","7mYKM":"como-nos-relacionamos.cf7805b6.jpeg","jdYKr":"con-quienes-contamos.f6c7b6c9.jpeg","5gHiG":"elegi-tu-experiencia.32d3fd91.jpeg","k6OKt":"que-ofrecemos.06333c29.jpeg","dprKe":"logo.c3f5fae4.jpeg","d7xag":"corazon.a38fbe73.png","dPVRJ":"certificado.30ea7980.png"}'));var r;r=new URL(o("27Lyk").resolve("4Xxmo"),import.meta.url).toString();var a;a=new URL(o("27Lyk").resolve("8E0k5"),import.meta.url).toString();var l;l=new URL(o("27Lyk").resolve("7mYKM"),import.meta.url).toString();var s;s=new URL(o("27Lyk").resolve("jdYKr"),import.meta.url).toString();var c;c=new URL(o("27Lyk").resolve("5gHiG"),import.meta.url).toString();var d;function p(n){const e=document.createElement("div"),t=document.createElement("style");e.innerHTML=`\n        <header class="header">\n            <div class="home-container">\n                <img src="${r}" alt="home" class="home"/>\n            </div>\n            <div class="intra">\n                <h3 class="link">ACCESO A TU INTRANET</h3>\n            </div>\n        </header>\n        <div class="content">\n            <div class="img-container a">\n                <h2>¿Con quiénes contamos?</h2>\n                <img src="${s}" alt="logo" class="img" />\n            </div>\n            <div class="img-container b">\n                <h2>¿Qué ofrecemos?</h2>\n                <img src="${d}" alt="logo" class="img" />\n            </div>\n            <div class="text-container c">\n                <h2 class="title">Nuestra propuesta de valor</h2>\n                <p class="text">Concebimos nuestro servicio como una herramienta clave para ayudar a nuestros clientes a alcanzar sus metas, es por eso que trabajamos en forma conjunta y personalizada para definir soluciones alineadas con la estrategia de su negocio.</p>\n                <p class="text">Nuestros clientes cuentan con su propia intranet para seguir los procesos de punta a punta.</p>\n            </div>\n            <div class="img-container d">\n                <h2>¿Cómo nos relacionamos?</h2>\n                <img src="${l}" alt="logo" class="img" />\n            </div>\n            <div class="img-container e">\n                <h2>¿Cómo nos comunicamos?</h2>\n                <img src="${a}" alt="logo" class="img" />\n            </div>\n            <div class="img-container f">\n                <h2>Elegí tu experiencia</h2>\n                <img src="${c}" alt="logo" class="img" />\n            </div>\n        </div>\n                `,e.classList.add("root"),t.innerHTML='\n                    .root{\n                        padding: 10px;\n                        height: 100vh;\n                        background-color: white;\n                    }\n                    h3, h2, p{\n                        margin:0;\n                        text-align: center;\n                        color: rgb(20, 199, 199);\n                        cursor: pointer;\n                    }\n                    .header{\n                        width: 100%;\n                        height: 50px;\n                        display: flex;\n                        justify-content: space-between;\n                    }\n                    .home-container{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .home{\n                        box-sizing: border-box;\n                        width: 30px;\n                        height: 30px;\n                        cursor: pointer;\n                    }\n                    .intra{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        font-family: "Montserrat", sans-serif;\n                    }\n                    .link:hover{\n                        color:rgb(223, 226, 248);\n                        cursor: pointer;\n                    }\n                    .content{\n                        height: calc(100vh - 120px);\n                        width: 100%;\n                        display: grid;\n                        grid-template-columns: 1fr 1fr 1fr;\n                        grid-template-rows: 1fr 1fr 1fr 1fr;\n                        justify-content: center;\n                        margin-top: 20px;\n                    }\n                    .img-container{\n                        width: 130px;\n                        height: 80px;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .a{\n                        grid-column-start: 1;\n                        grid-column-end: 1;\n                        grid-row-start: 1;\n                        grid-row-end: 1;\n                        justify-self: center;\n                        align-self: center;\n                    }\n                    .b{\n                        grid-column-start: 3;\n                        grid-column-end: 3;\n                        grid-row-start: 1;\n                        grid-row-end: 1;\n                        justify-self: center;\n                        align-self: center;\n                    }\n                    .c{\n                        grid-column-start: 2;\n                        grid-column-end: 2;\n                        grid-row-start: 2;\n                        grid-row-end: 2;\n                        justify-self: center;\n                        align-self: center;\n                    }\n                    .d{\n                        grid-column-start: 1;\n                        grid-column-end: 1;\n                        grid-row-start: 3;\n                        grid-row-end: 3;\n                        justify-self: center;\n                        align-self: center;\n                    }\n                    .e{\n                        grid-column-start: 3;\n                        grid-column-end: 3;\n                        grid-row-start: 3;\n                        grid-row-end: 3;\n                        justify-self: center;\n                        align-self: center;\n                    }\n                    .f{\n                        grid-column-start: 2;\n                        grid-column-end: 2;\n                        grid-row-start: 4;\n                        grid-row-end: 4;\n                        justify-self: center;\n                        align-self: center;\n                    }\n                    .img{\n                        width: 130px;\n                        height: 90px;\n                    }\n                    .text-container{\n                        width: 300px;\n                        height: 200px;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .title{\n                        margin-bottom: 20px;\n                        font-weight: 700;\n                    }\n                    h2:hover{\n                        color:rgb(223, 226, 248);\n                        cursor: pointer;\n                    }\n                    h2{\n                        font-weight: 400;\n                        font-size: 18px;\n                    }\n                    p{\n                        font-size: 14px;\n                    }\n                ',e.appendChild(t);e.querySelector(".home").addEventListener("click",(()=>{n.goTo("/home")}));return e.querySelector(".intra").addEventListener("click",(()=>{n.goTo("/tu-intra")})),e}d=new URL(o("27Lyk").resolve("k6OKt"),import.meta.url).toString();var g;function m(n){const e=document.createElement("div"),t=document.createElement("style");e.innerHTML=`\n        <header class="header">\n            <div class="home-container">\n                <img src="${r}" alt="home" class="home"/>\n            </div>\n            <div class="about-us">\n                <h3 class="link">CONOCENOS</h3>\n            </div>\n        </header>\n        <div class="content">\n            <div class="logo-container">\n                <img src="${g}" alt="logo" class="logo" />\n                <h2>Creamos en conjunto</h2>\n            </div>\n            <div class="text">\n                <h3>Queremos darte la oportunidad de CO-Construir la experiencia que desees y se adapte a tu contexto</h3>\n            </div>\n        </div>\n                `,e.classList.add("root"),t.innerHTML='\n                    .root{\n                        padding: 10px;\n                        height: 100vh;\n                        background-color: rgb(20, 199, 199);\n                    }\n                    h3, h2{\n                        margin:0;\n                        text-align: center;\n                        color: white;\n                    }\n                    .header{\n                        width: 100%;\n                        height: 50px;\n                        display: flex;\n                        justify-content: space-between;\n                    }\n                    .home-container{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .home{\n                        box-sizing: border-box;\n                        width: 30px;\n                        height: 30px;\n                        cursor: pointer;\n                    }\n                    .about-us{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        font-family: "Montserrat", sans-serif;\n                    }\n                    .link:hover{\n                        color:rgb(223, 226, 248);\n                        cursor: pointer;\n                    }\n                    .content{\n                        height: calc(100vh - 60px);\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .logo-container{\n                        padding-bottom: 40px;\n                        width: 100%;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                        border-bottom: 2px solid white;\n                    }\n                    .logo{\n                        width: 220px;\n                        height: 220px;\n                        margin-bottom: 20px;\n                    }\n                    .text{\n                        padding-top: 30px;\n                        width: 600px;\n                        height: 100px;\n                        display: flex;\n                        align-items: center;\n                        font-size: 18px;\n                    }\n                    h2{\n                        font-weight: 400;\n                    }\n                ',e.appendChild(t);e.querySelector(".home").addEventListener("click",(()=>{n.goTo("/home")}));return e.querySelector(".about-us").addEventListener("click",(()=>{n.goTo("/about-us")})),e}function h(n){const e=document.createElement("div"),t=document.createElement("style");e.innerHTML=`\n        <header class="header">\n            <div class="home-container">\n                <img src="${r}" alt="home" class="home"/>\n            </div>\n        </header>\n        <div class="content">\n            <div class="intra-container">\n                <h2 class="title">TU INTRANET</h2>\n                <h3 class="cliente">Cliente modelo</h3>\n                <div class="cliente-container">\n                    <div>\n                        <label class="label">\n                            <h3>usuario: </h3>\n                            <input type="text">\n                        </label>\n                    </div>\n                    <div>\n                        <label class="label">\n                            <h3>contraseña: </h3>\n                            <input type="text">\n                        </label>\n                    </div>\n                </div>\n                <button class="button">Iniciar</button>\n                <a>olvidé mi contraseña</a>\n            </div>\n            <div class="accesos-container">\n            <h2 class="title">Accesos</h2>\n                <ul>\n                    <li>Arma tu CV</li>\n                    <li>Capacitaciones</li>\n                    <li>Reclutamiento y Selección</li>\n                    <li>Políticas de Compensaciones</li>\n                    <li>Liquidaciones de Sueldos</li>\n                    <li>Control de Ausentismo</li>\n                    <li>Auditorías</li>\n                    <li>Bienestar Organizacional</li>\n                    <li>Tendencias</li>\n                </ul>\n            </div>\n        </div>\n                `,e.classList.add("root"),t.innerHTML="\n                    .root{\n                        padding: 10px;\n                        height: 100vh;\n                        background-color: white;\n                    }\n                    h3, h2, p{\n                        margin:0;\n                        text-align: center;\n                        color: rgb(20, 199, 199);\n                        cursor: pointer;\n                    }\n                    a{\n                        color: rgb(18, 136, 145);\n                        cursor: pointer;\n                    }\n                    .header{\n                        width: 100%;\n                        height: 50px;\n                        display: flex;\n                        justify-content: space-between;\n                    }\n                    .home-container{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .home{\n                        box-sizing: border-box;\n                        width: 30px;\n                        height: 30px;\n                        cursor: pointer;\n                    }\n                    \n                    .content{\n                        height: calc(100vh - 120px);\n                        width: 100%;\n                        display: flex;\n                        justify-content: center;\n                        margin-top: 20px;\n                    }\n                    .intra-container{\n                        width: 50%;\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                        border-right: 2px solid rgb(20, 199, 199); \n                    }\n                    .title{\n                        margin-bottom: 15px;\n                        font-size: 30px;\n                    }\n                    .label{\n                        display: flex;\n                        justify-content: flex-end;\n                        align-items: center;\n                        width: 300px;\n                        padding: 0;\n                    }\n                    .cliente-container{\n                        margin-bottom: 30px;\n                        border: 2px solid rgb(20, 199, 199);\n                        padding: 3px;\n                        display: flex;\n                        flex-direction: column;\n                    }\n                    .cliente{\n                        margin-bottom: 15px;\n                    }\n                    .button{\n                        width: 200px;\n                        padding: 10px 0;\n                        border: 2px solid rgb(20, 199, 199);\n                        font-size: 16px;\n                        color: rgb(20, 199, 199);\n                        font-weight: 700;\n                        margin-bottom: 10px;\n                        cursor: pointer;\n                    }\n                    .accesos-container{\n                        width: 50%;\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                    }\n                    li{\n                        list-style: none;\n                        color: rgb(18, 136, 145);\n                        cursor: pointer;\n                        margin-bottom: 5px;\n                    }\n                    li:hover{\n                        font-weight: 700;\n                    }\n                ",e.appendChild(t);e.querySelector(".home")?.addEventListener("click",(()=>{n.goTo("/home")}));return e.querySelector(".button")?.addEventListener("click",(()=>{n.goTo("/capa-skills")})),e}g=new URL(o("27Lyk").resolve("dprKe"),import.meta.url).toString();var u;u=new URL(o("27Lyk").resolve("d7xag"),import.meta.url).toString();var f;function x(n){const e=document.createElement("div"),t=document.createElement("style");e.innerHTML=`\n        <header class="header">\n            <div class="home-container">\n                <img src="${r}" alt="home" class="home"/>\n            </div>\n        </header>\n        <div class="content">\n            <div class="capa-container">\n                <h2 class="title">CAPACITACIÓN Y DESARROLLO</h2>\n                <div class="capa-content">\n                    <div class="talleres-container">\n                        <div class="talleres">\n                            <div class="taller">TALLER 1 - COMUNICACIÓN EFECTIVA</div>\n                            <div class="taller">TALLER 2 - TRABAJO EN EQUIPO</div>\n                            <div class="taller">TALLER 3 - LIDERAZGO ÁGIL</div>\n                        </div>\n                        <div class="informes">\n                            <div class="status">Status</div>\n                            <div class="informe">Informe de Avance</div>\n                            <div class="informe">Informe de Avance</div>\n                            <div class="informe">Informe de Avance</div>\n                        </div>\n                    </div>\n                    <div class="informe-final">INFORME FINAL</div>\n                </div>\n            </div>\n            <div class="skills-container">\n                <h2 class="title">SKILL BANK</h2>\n                <h3 class="sub-title">MIS HABILIDADES</h3>\n                <div class="text">Seleccionar</div>\n                <ol>\n                    <li>Vista por área de conocimiento</li>\n                    <li>Vista por tipo de perfiles</li>\n                    <li>Buscador</li>\n                </ol>\n                <div class="text">Califica según tu interés:</div>\n                <div class="especial">\n                    <img src="${u}" alt="corazon" class="img"/>\n                    <div>Me interesa desarrollar la habilidad</div>\n                </div>\n                <div class="especial">\n                    <img src="${f}" alt="certificado" class="img"/>\n                    <div>Tengo una certificación</div>\n                </div>\n            </div>\n        </div>\n                `,e.classList.add("root"),t.innerHTML='\n                    .root{\n                        padding: 10px;\n                        height: 100vh;\n                        background-color: white;\n                        font-family: "Poppins", sans-serif;\n                    }\n                    h3, h2, p{\n                        margin:0;\n                        text-align: center;\n                        color: rgb(20, 199, 199);\n                        cursor: pointer;\n                    }\n                    a{\n                        color: rgb(18, 136, 145);\n                        cursor: pointer;\n                    }\n                    .header{\n                        width: 100%;\n                        height: 50px;\n                        display: flex;\n                        justify-content: space-between;\n                    }\n                    .home-container{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .home{\n                        box-sizing: border-box;\n                        width: 30px;\n                        height: 30px;\n                        cursor: pointer;\n                    }\n                    .content{\n                        height: calc(100vh - 120px);\n                        width: 100%;\n                        display: flex;\n                        justify-content: center;\n                        margin-top: 20px;\n                    }\n                    .capa-container{\n                        width: 50%;\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                        border-right: 2px solid rgb(20, 199, 199); \n                    }\n                    .capa-content{\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                    }\n                    .talleres-container{\n                        display: flex;\n                        align-items: flex-end;\n                        margin-bottom: 10px;\n                    }\n                    .talleres{\n                        display: flex;\n                        flex-direction: column;\n                        align-items: flex-start;\n                    }\n                    .taller{\n                        width: 220px;\n                        list-style: none;\n                        margin: 0 10px 5px 0;\n                        padding: 0;\n                        border: 1px solid rgb(20, 199, 199);\n                        font-size: 12px;\n                        color: rgb(18, 136, 145);\n                        cursor: pointer;\n                    }\n                    .informes{\n                        display: flex;\n                        flex-direction: column;\n                        align-items: flex-end;\n                        justify-content: center;\n                    }\n                    .informe{\n                        list-style: none;\n                        margin: 0 0 5px 0;\n                        padding: 0;\n                        border: 1px solid rgb(20, 199, 199);\n                        font-size: 12px;\n                        color: rgb(18, 136, 145);\n                        cursor: pointer;\n                    }\n                    .status{\n                        list-style: none;\n                        margin: 0;\n                        padding: 0;\n                        font-size: 13px;\n                        color: black;\n                    }\n                    .informe-final{\n                        font-size: 18px;\n                        border: 1px solid rgb(20, 199, 199);\n                        display: flex;\n                        justify-content: center;\n                        width: 180px;\n                        cursor: pointer;\n                    }\n                    .skills-container{\n                        padding-left: 10px;\n                        width: 50%;\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                    }\n                    .title{\n                        margin-bottom: 15px;\n                        font-size: 30px;\n                    }\n                    .sub-title{\n                        margin-bottom: 10px;\n                        font-size: 22px;\n                        border: 2px solid rgb(20, 199, 199);\n                        display: flex;\n                        justify-content: center;\n                        width: 200px;\n                    }\n                    .text{\n                        align-self: flex-start;\n                        margin-bottom: 15px;\n                    }\n                    ol{\n                        padding: 0;\n                        margin-top: 0;\n                    }\n                    li{\n                        list-style: number;\n                        color: rgb(18, 136, 145);\n                        cursor: pointer;\n                        margin-bottom: 5px;\n                    }\n                    li:hover{\n                        font-weight: 700;\n                    }\n                    .especial{\n                        display: flex;\n                        align-self: flex-start;\n                    }\n                    .img{\n                        box-sizing: border-box;\n                        width: 24px;\n                        height: 24px;\n                        margin-right: 5px;\n                    }\n                ',e.appendChild(t);return e.querySelector(".home")?.addEventListener("click",(()=>{n.goTo("/home")})),e}f=new URL(o("27Lyk").resolve("dPVRJ"),import.meta.url).toString();function v(){return location.host.includes("github.io")}!function(n){const e=[{path:/\/home/,component:m},{path:/\/about-us/,component:p},{path:/\/tu-intra/,component:h},{path:/\/capa-skills/,component:x}];function t(n){const e=v()?"/co-crear"+n:n;history.pushState({},"",e),i(e)}function i(i){const o=v()?i.replace("/co-crear",""):i;for(const i of e)if(i.path.test(o)){const e=i.component({goTo:t});n.firstChild?.remove(),n.appendChild(e)}}"/"==location.pathname||"/co-crear/"==location.pathname?t("/home"):i(location.pathname),window.onpopstate=()=>{i(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.0f0e7cc2.js.map