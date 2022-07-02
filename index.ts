// import "./router";
// import "./pages/home/index";
// import "./pages/about-us/index";
// import "./pages/intranet/index";
import { initRouter } from "./router";

function main() {
	const containerEl = document.querySelector(".root");
	initRouter(containerEl);
}

main();
