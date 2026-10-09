import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getAuthenticationContent } from "./auth-content.functions-Ba0gisIc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/autenticacao-Co2IFtvc.js
var $$splitComponentImporter = () => import("./autenticacao-DwsNNoJy.mjs");
var Route = createFileRoute("/autenticacao")({
	loader: () => getAuthenticationContent(),
	head: () => ({ meta: [
		{ title: "Autenticação | Painel administrativo" },
		{
			name: "description",
			content: "Acesso restrito ao painel administrativo."
		},
		{
			property: "og:title",
			content: "Autenticação | Painel administrativo"
		},
		{
			property: "og:description",
			content: "Acesso restrito ao painel administrativo."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
