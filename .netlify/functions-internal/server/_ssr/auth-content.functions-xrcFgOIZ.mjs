import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-content.functions-xrcFgOIZ.js
var fallbackContent = {
	warningBannerText: "Área restrita",
	attentionTitle: "Entre com a conta autorizada para acompanhar os pedidos."
};
var getAuthenticationContent_createServerFn_handler = createServerRpc({
	id: "c6803c375dd83935b4b6fde8c958d3733030f537b51595860a1d856b2fc1756e",
	name: "getAuthenticationContent",
	filename: "src/lib/auth-content.functions.ts"
}, (opts) => getAuthenticationContent.__executeServer(opts));
var getAuthenticationContent = createServerFn({ method: "GET" }).handler(getAuthenticationContent_createServerFn_handler, async () => {
	try {
		const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
		const { data, error } = await supabaseAdmin.from("admin_settings").select("warning_banner_text,attention_title").eq("id", true).maybeSingle();
		if (error || !data) return fallbackContent;
		return {
			warningBannerText: data.warning_banner_text?.trim() || fallbackContent.warningBannerText,
			attentionTitle: data.attention_title?.trim() || fallbackContent.attentionTitle
		};
	} catch {
		return fallbackContent;
	}
});
//#endregion
export { getAuthenticationContent_createServerFn_handler };
