import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getAuthenticationContent } from "./auth-content.functions-Ba0gisIc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BqTACgt_.js
var $$splitComponentImporter = () => import("./auth-CVDHZy1Y.mjs");
var Route = createFileRoute("/auth")({
	loader: () => getAuthenticationContent(),
	head: () => ({ meta: [
		{ title: "Acesso administrativo | Central de pedidos" },
		{
			name: "description",
			content: "Acesso restrito ao painel administrativo de pedidos."
		},
		{
			property: "og:title",
			content: "Acesso administrativo | Central de pedidos"
		},
		{
			property: "og:description",
			content: "Acesso restrito ao painel administrativo de pedidos."
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
