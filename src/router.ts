// import { Router } from "@vaadin/router";

// const router = new Router(document.querySelector(".root"));
// router.setRoutes([
// 	{ path: "/", component: "home-page" },
// 	{ path: "/home", component: "home-page" },
// 	{ path: "/about-us", component: "about-us" },
// 	{ path: "/tu-intra", component: "intra-page" },
// ]);
import { initAboutUs } from "./pages/about-us";
import { initHomePage } from "./pages/home";
import { initTuIntranet } from "./pages/intranet";
import { initCapaSkills } from "./pages/capa-skills";
const BASE_PATH = "/co-crear";

function isGithubPages() {
	return location.host.includes("github.io");
}
export function initRouter(container: Element) {
	const routes = [
		{ path: /\/home/, component: initHomePage },
		{ path: /\/about-us/, component: initAboutUs },
		{ path: /\/tu-intra/, component: initTuIntranet },
		{ path: /\/capa-skills/, component: initCapaSkills },
	];
	function goTo(path) {
		const completePath = isGithubPages() ? BASE_PATH + path : path;
		history.pushState({}, "", completePath);
		handleRoute(completePath);
	}
	function handleRoute(route) {
		const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
		for (const r of routes) {
			if (r.path.test(newRoute)) {
				const element = r.component({ goTo: goTo });
				container.firstChild?.remove();
				container.appendChild(element);
			}
		}
	}
	if (location.pathname == "/" || location.pathname == "/co-crear/") {
		goTo("/home");
	} else {
		handleRoute(location.pathname);
	}
	window.onpopstate = () => {
		handleRoute(location.pathname);
	};
}
