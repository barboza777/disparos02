import { r as __toESM } from "../_runtime.mjs";
import { K as redirect, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-D_XPX4td.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as stringType, i as objectType, r as numberType, t as enumType } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$14 } from "./autenticacao-Co2IFtvc.mjs";
import { t as Route$15 } from "./auth-BqTACgt_.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { createHmac, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C5TxR9w6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C3nf6hBW.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const reportableError = error instanceof Error ? error : new Error(String(error));
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(reportableError, { boundary: "tanstack_root_error_component" });
	}, [reportableError]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Jadlog" },
			{
				name: "description",
				content: "Acompanhamento de entrega Jadlog."
			},
			{
				name: "author",
				content: "Jadlog"
			},
			{
				property: "og:title",
				content: "Jadlog"
			},
			{
				property: "og:description",
				content: "Acompanhamento de entrega Jadlog."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			type: "image/png",
			href: "/favicon.png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => data.subscription.unsubscribe();
	}, [queryClient, router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "top-right"
		})]
	});
}
var site_default = "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Jadlog – Acompanhe seu Pedido</title>\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\"/>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n\n  <div class=\"card\">\n\n    <div class=\"logo-wrap\">\n      <img class=\"stage-logo\" src=\"{{HEADER_LOGO_URL}}\" alt=\"Logo\"/>\n    </div>\n\n    <h1 class=\"card-title\">ACOMPANHE SEU PEDIDO</h1>\n    <p class=\"card-subtitle\">\n      Para acompanhar seu pedido, preencha o campo abaixo com os dados fornecidos durante a compra.\n    </p>\n\n    <input\n      type=\"text\"\n      id=\"cpfInput\"\n      class=\"cpf-input\"\n      placeholder=\"CPF\"\n      maxlength=\"14\"\n      inputmode=\"numeric\"\n    />\n\n    <p class=\"error-msg\" id=\"errorMsg\">Por favor, informe seu CPF para continuar.</p>\n\n    <button class=\"btn-primary\" id=\"btnRastrear\" onclick=\"rastrear()\">Acompanhar Pedido</button>\n\n  </div>\n\n  <!-- OVERLAY DE LOADING -->\n  <div id=\"loadingOverlay\">\n    <div class=\"loading-box\">\n      <div class=\"loading-logo\">\n        <img class=\"stage-logo\" src=\"{{HEADER_LOGO_URL}}\" alt=\"Logo\"/>\n      </div>\n      <div class=\"loading-spinner\">\n        <div class=\"spinner-ring\"></div>\n      </div>\n      <p class=\"loading-title\">Consultando pedido...</p>\n      <p class=\"loading-sub\">Aguarde enquanto buscamos as informações</p>\n      <div class=\"loading-steps\">\n        <div class=\"lstep\" id=\"lstep1\">\n          <span class=\"lstep-dot\"></span> Verificando CPF\n        </div>\n        <div class=\"lstep\" id=\"lstep2\">\n          <span class=\"lstep-dot\"></span> Localizando pedido\n        </div>\n        <div class=\"lstep\" id=\"lstep3\">\n          <span class=\"lstep-dot\"></span> Carregando status\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <style>\n    .stage-logo {\n      display: block;\n      width: 100px;\n      height: 38px;\n      object-fit: contain;\n      object-position: center;\n    }\n\n    #loadingOverlay {\n      display: none;\n      position: fixed;\n      inset: 0;\n      background: rgba(0,0,0,0.7);\n      backdrop-filter: blur(4px);\n      z-index: 999;\n      align-items: center;\n      justify-content: center;\n    }\n\n    #loadingOverlay.active {\n      display: flex;\n    }\n\n    .loading-box {\n      background: #fff;\n      border-radius: 16px;\n      padding: 36px 32px;\n      text-align: center;\n      width: 88%;\n      max-width: 340px;\n      box-shadow: 0 20px 60px rgba(0,0,0,0.3);\n      animation: popIn 0.3s ease;\n    }\n\n    @keyframes popIn {\n      from { transform: scale(0.88); opacity: 0; }\n      to   { transform: scale(1);    opacity: 1; }\n    }\n\n    .loading-logo { margin-bottom: 20px; }\n\n    .loading-spinner {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 18px;\n    }\n\n    .spinner-ring {\n      width: 48px;\n      height: 48px;\n      border: 4px solid #e5e7eb;\n      border-top-color: #1a56db;\n      border-radius: 50%;\n      animation: spin 0.8s linear infinite;\n    }\n\n    @keyframes spin { to { transform: rotate(360deg); } }\n\n    .loading-title {\n      font-size: 16px;\n      font-weight: 700;\n      color: #111;\n      margin-bottom: 4px;\n    }\n\n    .loading-sub {\n      font-size: 13px;\n      color: #888;\n      margin-bottom: 20px;\n    }\n\n    .loading-steps {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      text-align: left;\n    }\n\n    .lstep {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      font-size: 13px;\n      color: #aaa;\n      font-weight: 500;\n      transition: color 0.3s;\n    }\n\n    .lstep.done { color: #22a045; }\n    .lstep.active-step { color: #1a56db; }\n\n    .lstep-dot {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background: #e5e7eb;\n      display: inline-block;\n      flex-shrink: 0;\n      transition: background 0.3s;\n    }\n\n    .lstep.done .lstep-dot { background: #22a045; }\n    .lstep.active-step .lstep-dot {\n      background: #1a56db;\n      animation: pulse 0.8s infinite;\n    }\n\n    @keyframes pulse {\n      0%, 100% { opacity: 1; }\n      50%       { opacity: 0.4; }\n    }\n  </style>\n\n  <script>\n    const cpfInput = document.getElementById('cpfInput');\n    const errorMsg = document.getElementById('errorMsg');\n\n    cpfInput.addEventListener('input', function () {\n      let v = this.value.replace(/\\D/g, '');\n      if (v.length > 11) v = v.slice(0, 11);\n      if (v.length > 9)      v = v.slice(0,3)+'.'+v.slice(3,6)+'.'+v.slice(6,9)+'-'+v.slice(9);\n      else if (v.length > 6) v = v.slice(0,3)+'.'+v.slice(3,6)+'.'+v.slice(6);\n      else if (v.length > 3) v = v.slice(0,3)+'.'+v.slice(3);\n      this.value = v;\n      errorMsg.classList.remove('show');\n    });\n\n    cpfInput.addEventListener('keydown', e => { if (e.key === 'Enter') rastrear(); });\n\n    function setStep(idx, status) {\n      const steps = ['lstep1','lstep2','lstep3'];\n      const el = document.getElementById(steps[idx]);\n      el.classList.remove('active-step','done');\n      if (status === 'active') el.classList.add('active-step');\n      if (status === 'done')   el.classList.add('done');\n    }\n\n    async function rastrear() {\n      const cpf = cpfInput.value.trim();\n      if (!cpf) {\n        errorMsg.classList.add('show');\n        cpfInput.focus();\n        return;\n      }\n\n      const cpfNumeros = cpf.replace(/\\D/g, '');\n      if (cpfNumeros.length !== 11) {\n        errorMsg.textContent = 'Informe um CPF válido com 11 dígitos.';\n        errorMsg.classList.add('show');\n        cpfInput.focus();\n        return;\n      }\n      sessionStorage.setItem('fl_cpf', cpfNumeros);\n      sessionStorage.removeItem('fl_nome');\n      sessionStorage.removeItem('fl_nome_cpf');\n\n      // mostra overlay\n      document.getElementById('loadingOverlay').classList.add('active');\n\n      // step 1 — verificando CPF\n      setStep(0, 'active');\n      await sleep(700);\n      setStep(0, 'done');\n\n      // step 2 — consultando API\n      setStep(1, 'active');\n      let nome = '';\n      try {\n        const res  = await fetch('/api/public/cpf?cpf=' + cpfNumeros);\n        const data = await res.json();\n        if (!res.ok) throw new Error(data.error || 'CPF não localizado');\n        nome = extrairNome(data) || '';\n        if (!nome) throw new Error('CPF não localizado');\n        sessionStorage.setItem('fl_nome', toTitleCase(nome));\n        sessionStorage.setItem('fl_nome_cpf', cpfNumeros);\n      } catch(e) {\n        document.getElementById('loadingOverlay').classList.remove('active');\n        errorMsg.textContent = e instanceof Error ? e.message : 'Não foi possível consultar este CPF.';\n        errorMsg.classList.add('show');\n        return;\n      }\n      setStep(1, 'done');\n\n      // step 3 — carregando status\n      setStep(2, 'active');\n      await sleep(600);\n      setStep(2, 'done');\n\n      await sleep(300);\n      const nomeParam = nome ? '&nome=' + encodeURIComponent(toTitleCase(nome)) : '';\n      window.location.href = '/status?cpf=' + cpfNumeros + nomeParam;\n    }\n\n    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }\n\n    function extrairNome(data) {\n      if (data.nome) return data.nome;\n      if (data.dadosPessoais && data.dadosPessoais.nome) return data.dadosPessoais.nome;\n      return null;\n    }\n\n    function toTitleCase(str) {\n      const minors = ['de','da','do','das','dos','e','a','o'];\n      return str.toLowerCase().split(' ').map((w, i) =>\n        i === 0 || !minors.includes(w) ? w.charAt(0).toUpperCase() + w.slice(1) : w\n      ).join(' ');\n    }\n  <\/script>\n</body>\n</html>\n";
var fallbackLogoUrl = "/assets/cabecalho-logo.jpg";
async function getHeaderLogoUrl() {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data } = await supabaseAdmin.from("admin_settings").select("header_logo_path").eq("id", true).maybeSingle();
	if (!data?.header_logo_path) return fallbackLogoUrl;
	const { data: signed } = await supabaseAdmin.storage.from("site-branding").createSignedUrl(data.header_logo_path, 3600);
	return signed?.signedUrl ?? fallbackLogoUrl;
}
async function getBrandingAssetUrls() {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data } = await supabaseAdmin.from("admin_settings").select("header_logo_path,banner_primary_path,banner_secondary_path").eq("id", true).maybeSingle();
	const sign = async (path, fallback = "") => {
		if (!path) return fallback;
		const { data: signed } = await supabaseAdmin.storage.from("site-branding").createSignedUrl(path, 3600);
		return signed?.signedUrl ?? fallback;
	};
	return {
		headerLogoUrl: await sign(data?.header_logo_path, fallbackLogoUrl),
		primaryBannerUrl: await sign(data?.banner_primary_path),
		secondaryBannerUrl: await sign(data?.banner_secondary_path)
	};
}
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Jadlog | Regularização de Entrega" },
		{
			name: "description",
			content: "Consulte e regularize a entrega da sua encomenda Jadlog."
		},
		{
			property: "og:title",
			content: "Jadlog | Regularização de Entrega"
		},
		{
			property: "og:description",
			content: "Consulte e regularize a entrega da sua encomenda Jadlog."
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
	server: { handlers: { GET: async () => new Response(site_default.replaceAll("{{HEADER_LOGO_URL}}", await getHeaderLogoUrl()), { headers: { "Content-Type": "text/html; charset=utf-8" } }) } }
});
var $$splitComponentImporter$2 = () => import("./route-Di7iQBCH.mjs");
var Route$11 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var checkout_default = "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  <title>Detalhes do pedido</title>\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600&display=swap\" rel=\"stylesheet\"/>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    [hidden] { display: none !important; }\n\n    body {\n      font-family: 'Inter', Arial, sans-serif;\n      background: #f5f5f5;\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n    }\n\n    /* ── HEADER MP ── */\n    .mp-header {\n      background: #fff;\n      padding: 14px 24px;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      border-bottom: 1px solid #e8e8e8;\n      box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n    }\n\n    .mp-logo {\n      display: flex;\n      align-items: center;\n    }\n\n    .mp-logo img { height: 36px; object-fit: contain; display: block; }\n\n    .mp-secure {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n      color: #888;\n      font-size: 12px;\n      font-weight: 500;\n    }\n\n    /* ── BODY ── */\n    .mp-body {\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      padding: 28px 16px 40px;\n      gap: 20px;\n      align-items: flex-start;\n    }\n\n    /* ── RESUMO (lado direito) ── */\n    .mp-summary {\n      background: #fff;\n      border-radius: 10px;\n      padding: 22px 20px;\n      width: 100%;\n      max-width: 300px;\n      box-shadow: 0 1px 6px rgba(0,0,0,0.08);\n      flex-shrink: 0;\n    }\n\n    .mp-summary h3 {\n      font-size: 13px;\n      font-weight: 600;\n      color: #666;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n      margin-bottom: 14px;\n    }\n\n    .summary-seller {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      margin-bottom: 16px;\n      padding-bottom: 16px;\n      border-bottom: 1px solid #f0f0f0;\n    }\n\n    .seller-avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      overflow: hidden;\n      border: 1px solid #eeeeee;\n    }\n\n    .seller-avatar img { width: 100%; height: 100%; object-fit: contain; display: block; }\n\n    .seller-name {\n      font-size: 14px;\n      font-weight: 600;\n      color: #222;\n    }\n\n    .seller-sub {\n      font-size: 12px;\n      color: #888;\n      margin-top: 1px;\n    }\n\n    .summary-item {\n      display: flex;\n      justify-content: space-between;\n      font-size: 13.5px;\n      color: #444;\n      margin-bottom: 8px;\n    }\n\n    .summary-item.total {\n      margin-top: 14px;\n      padding-top: 14px;\n      border-top: 1px solid #f0f0f0;\n      font-size: 15px;\n      font-weight: 700;\n      color: #111;\n    }\n\n    .summary-item.total span:last-child { color: #009ee3; }\n\n    .mp-secure-badge {\n      margin-top: 18px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 5px;\n      font-size: 11.5px;\n      color: #aaa;\n    }\n\n    /* ── FORM ── */\n    .mp-form-wrap {\n      background: #fff;\n      border-radius: 10px;\n      padding: 24px 22px;\n      width: 100%;\n      max-width: 480px;\n      box-shadow: 0 1px 6px rgba(0,0,0,0.08);\n    }\n\n    .mp-form-wrap h2 {\n      font-size: 17px;\n      font-weight: 700;\n      color: #111;\n      margin-bottom: 6px;\n    }\n\n    .mp-form-wrap .form-sub {\n      font-size: 13px;\n      color: #888;\n      margin-bottom: 22px;\n    }\n\n    /* tabs */\n    .pay-tabs {\n      display: flex;\n      border: 1.5px solid #e0e0e0;\n      border-radius: 8px;\n      overflow: hidden;\n      margin-bottom: 24px;\n    }\n\n    .pay-tab {\n      flex: 1;\n      padding: 11px 6px;\n      text-align: center;\n      font-size: 12.5px;\n      font-weight: 500;\n      color: #666;\n      cursor: pointer;\n      background: #fff;\n      border: none;\n      border-right: 1.5px solid #e0e0e0;\n      transition: background 0.15s, color 0.15s;\n      font-family: 'Inter', Arial, sans-serif;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 4px;\n    }\n\n    .pay-tab:last-child { border-right: none; }\n\n    .pay-tab.active {\n      background: #e8f6fd;\n      color: #009ee3;\n      font-weight: 600;\n    }\n\n    .pay-tab svg { width: 20px; height: 20px; }\n\n    /* seção pix */\n    .pix-section { display: none; }\n    .pix-section.active { display: block; }\n\n    .card-section { display: none; }\n    .card-section.active { display: block; }\n\n    .boleto-section { display: none; }\n    .boleto-section.active { display: block; }\n\n    /* ── FIELDS ── */\n    .field-group { margin-bottom: 16px; }\n\n    .field-group label {\n      display: block;\n      font-size: 12.5px;\n      font-weight: 600;\n      color: #444;\n      margin-bottom: 5px;\n    }\n\n    .field-group input, .field-group select {\n      width: 100%;\n      padding: 11px 13px;\n      border: 1.5px solid #ddd;\n      border-radius: 7px;\n      font-size: 14px;\n      color: #222;\n      outline: none;\n      font-family: 'Inter', Arial, sans-serif;\n      background: #fafafa;\n      transition: border-color 0.2s, box-shadow 0.2s;\n      appearance: none;\n    }\n\n    .field-group input:focus, .field-group select:focus {\n      border-color: #009ee3;\n      box-shadow: 0 0 0 3px rgba(0,158,227,0.12);\n      background: #fff;\n    }\n\n    .field-row {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 12px;\n    }\n\n    .field-row-3 {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      gap: 12px;\n    }\n\n    /* card icons */\n    .card-icons {\n      display: flex;\n      gap: 6px;\n      margin-bottom: 16px;\n    }\n\n    .card-icon {\n      width: 40px;\n      height: 26px;\n      border: 1px solid #e0e0e0;\n      border-radius: 4px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 9px;\n      font-weight: 700;\n      color: #fff;\n    }\n\n    .card-icon.visa   { background: #1a1f71; }\n    .card-icon.master { background: linear-gradient(90deg,#eb001b,#f79e1b); }\n    .card-icon.elo    { background: #000; }\n    .card-icon.hiper  { background: #e5a000; color: #fff; }\n\n    /* pix box */\n    .pix-box {\n      background: #f0fbff;\n      border: 1.5px solid #b3e5fc;\n      border-radius: 10px;\n      padding: 22px 18px;\n      text-align: center;\n      margin-bottom: 16px;\n    }\n\n    .pix-icon {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0 auto 12px;\n    }\n\n    .pix-icon img { width: 64px; height: 64px; object-fit: contain; }\n\n    .pix-box h4 {\n      font-size: 15px;\n      font-weight: 700;\n      color: #111;\n      margin-bottom: 6px;\n    }\n\n    .pix-box p {\n      font-size: 13px;\n      color: #555;\n      line-height: 1.6;\n    }\n\n    .pix-steps {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      margin-bottom: 20px;\n    }\n\n    .pix-step {\n      display: flex;\n      align-items: flex-start;\n      gap: 10px;\n      font-size: 13px;\n      color: #444;\n    }\n\n    .step-num {\n      width: 22px;\n      height: 22px;\n      background: #009ee3;\n      color: #fff;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 11px;\n      font-weight: 700;\n      flex-shrink: 0;\n      margin-top: 1px;\n    }\n\n    /* boleto */\n    .boleto-box {\n      background: #fffbf0;\n      border: 1.5px solid #ffe082;\n      border-radius: 10px;\n      padding: 20px 18px;\n      text-align: center;\n      margin-bottom: 16px;\n    }\n\n    .boleto-box h4 {\n      font-size: 15px;\n      font-weight: 700;\n      color: #111;\n      margin-bottom: 6px;\n    }\n\n    .boleto-box p {\n      font-size: 13px;\n      color: #555;\n      line-height: 1.6;\n    }\n\n    /* ── BOTÃO PAGAR ── */\n    .btn-pagar {\n      width: 100%;\n      padding: 14px;\n      background: #009ee3;\n      color: #fff;\n      border: none;\n      border-radius: 8px;\n      font-size: 15px;\n      font-weight: 700;\n      cursor: pointer;\n      font-family: 'Inter', Arial, sans-serif;\n      transition: background 0.18s, transform 0.15s;\n      box-shadow: 0 3px 10px rgba(0,158,227,0.3);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      margin-top: 6px;\n    }\n\n    .btn-pagar .pix-button-icon { width: 20px; height: 20px; object-fit: contain; }\n\n    .btn-pagar:hover  { background: #0089c8; transform: translateY(-1px); }\n    .btn-pagar:active { background: #0075aa; transform: translateY(0); }\n\n    .form-notice {\n      text-align: center;\n      font-size: 11.5px;\n      color: #aaa;\n      margin-top: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 4px;\n    }\n\n    /* ── QR CODE ── */\n    .qr-wrap {\n      background: #f8fffe;\n      border: 1.5px solid #d0f0e8;\n      border-radius: 12px;\n      padding: 22px 18px;\n      text-align: center;\n    }\n\n    .qr-header {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      margin-bottom: 10px;\n      font-size: 15px;\n      font-weight: 600;\n      color: #32bcad;\n    }\n\n    .qr-valor {\n      font-size: 26px;\n      font-weight: 800;\n      color: #111;\n      margin-bottom: 4px;\n    }\n\n    .qr-expira {\n      font-size: 12px;\n      color: #e53935;\n      margin-bottom: 16px;\n      font-weight: 500;\n    }\n\n    .qr-img-wrap {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 14px;\n    }\n\n    .qr-img-wrap canvas {\n      border: 6px solid #fff;\n      border-radius: 8px;\n      box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n    }\n\n    .qr-ou {\n      font-size: 12px;\n      color: #999;\n      margin-bottom: 10px;\n    }\n\n    .qr-copy-wrap {\n      display: flex;\n      gap: 8px;\n      margin-bottom: 6px;\n    }\n\n    .qr-copy-wrap input {\n      flex: 1;\n      padding: 10px 12px;\n      border: 1.5px solid #ddd;\n      border-radius: 7px;\n      font-size: 11px;\n      color: #444;\n      background: #fff;\n      font-family: monospace;\n      outline: none;\n    }\n\n    .btn-copiar {\n      padding: 10px 16px;\n      background: #32bcad;\n      color: #fff;\n      border: none;\n      border-radius: 7px;\n      font-size: 13px;\n      font-weight: 600;\n      cursor: pointer;\n      font-family: 'Inter', Arial, sans-serif;\n      white-space: nowrap;\n      transition: background 0.15s;\n    }\n\n    .btn-copiar:hover { background: #28a99b; }\n\n    .qr-copiado {\n      font-size: 12px;\n      color: #22a045;\n      font-weight: 600;\n      height: 18px;\n      margin-bottom: 4px;\n      display: none;\n    }\n\n    .qr-aguardando {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      font-size: 12.5px;\n      color: #888;\n      margin-top: 14px;\n    }\n\n    .spinner {\n      width: 14px;\n      height: 14px;\n      border: 2px solid #ddd;\n      border-top-color: #32bcad;\n      border-radius: 50%;\n      animation: spin 0.8s linear infinite;\n      display: inline-block;\n    }\n\n    @keyframes spin { to { transform: rotate(360deg); } }\n\n    /* btn loading */\n    .btn-pagar.loading {\n      opacity: 0.75;\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n\n    /* ── FOOTER ── */\n    .mp-footer {\n      text-align: center;\n      padding: 16px;\n      font-size: 11.5px;\n      color: #bbb;\n    }\n\n    /* ── RESPONSIVO ── */\n    @media (max-width: 720px) {\n      body { background: #fff; }\n\n      .mp-header { padding: 12px 16px; }\n      .mp-header img { height: 28px; }\n      .mp-secure { font-size: 11px; }\n\n      .mp-body {\n        flex-direction: column;\n        align-items: stretch;\n        padding: 0;\n        gap: 0;\n      }\n\n      .mp-form-wrap {\n        order: 1;\n        border-radius: 0;\n        box-shadow: none;\n        padding: 20px 16px;\n        border-bottom: 1px solid #eee;\n      }\n\n      .mp-summary {\n        order: 2;\n        max-width: 100%;\n        border-radius: 0;\n        box-shadow: none;\n        padding: 16px;\n        border-top: 1px solid #eee;\n      }\n\n      .pix-box { padding: 16px 14px; }\n      .pix-box h4 { font-size: 14px; }\n      .pix-box p { font-size: 12.5px; }\n      .pix-steps { gap: 8px; }\n      .pix-step { font-size: 12.5px; }\n\n      .qr-img-wrap canvas,\n      .qr-img-wrap img { width: 180px !important; height: 180px !important; }\n\n      .qr-copy-wrap input { font-size: 10px; }\n      .btn-copiar { font-size: 12px; padding: 10px 12px; }\n\n      .btn-pagar { font-size: 14px; padding: 13px; }\n\n      .mp-footer { font-size: 11px; padding: 12px; }\n    }\n\n    /* ── DETALHES DO PEDIDO ── */\n    .details-page {\n      min-height: 100vh;\n      display: flex;\n      flex-direction: column;\n      background: #fafafa;\n      color: #303239;\n      font-family: 'Manrope', Arial, sans-serif;\n    }\n\n    .details-topbar {\n      height: 62px;\n      display: flex;\n      align-items: center;\n      border-bottom: 2px solid #E71B35;\n      background: #fff;\n    }\n\n    .details-topbar-inner {\n      width: min(calc(100% - 32px), 620px);\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    .details-brand { display: flex; align-items: center; }\n    .details-brand img { display: block; width: 100px; height: 38px; object-fit: contain; object-position: left center; }\n\n    .details-secure {\n      display: flex;\n      align-items: center;\n      gap: 5px;\n      color: #6f7279;\n      font-size: 9px;\n      font-weight: 700;\n    }\n\n    .details-secure svg { width: 15px; height: 15px; color: #138a4b; }\n\n    .details-content {\n      width: min(calc(100% - 28px), 620px);\n      margin: 14px auto 0;\n    }\n\n    .details-card {\n      overflow: hidden;\n      border: 1px solid #eceef1;\n      border-radius: 14px;\n      background: #fff;\n      box-shadow: 0 5px 18px rgba(25, 30, 40, .035);\n    }\n\n    .holder-block { padding: 17px 16px 15px; }\n    .holder-label { margin: 0 0 5px; color: #70737a; font-size: 10px; font-weight: 700; text-transform: uppercase; }\n    .holder-name { margin: 0; font-family: 'Sora', sans-serif; font-size: 15px; line-height: 1.35; font-weight: 600; overflow-wrap: anywhere; }\n\n    .warning-banner { min-height: 46px; padding: 12px 16px; display: flex; align-items: center; justify-content: center; gap: 9px; background: #E71B35; color: #fff; text-align: center; overflow-wrap: anywhere; }\n    .warning-banner svg { width: 19px; height: 19px; flex: 0 0 auto; }\n    .warning-banner-text, .attention-title { font-family: 'Sora', sans-serif; font-size: 12px; line-height: 1.45; font-weight: 600; letter-spacing: 0; }\n\n    .details-highlight {\n      padding: 14px 16px;\n      border-bottom: 1px solid #f5c8d0;\n      background: #fff2f4;\n    }\n\n    .attention-title { margin: 0 0 10px; color: #E71B35; text-align: center; }\n    .holder-box { padding: 12px; border: 1px solid #f1c3cb; border-radius: 9px; background: #fff; text-align: center; }\n    .holder-box p { font-size: 11px; line-height: 1.8; }\n    .holder-box strong { color: #E71B35; font-weight: 700; }\n\n    .fees { padding: 17px 16px 4px; }\n    .fees h2 { margin: 0 0 10px; font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 600; }\n    .fee-row { min-height: 58px; display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid #eceef1; font-size: 14px; }\n    .fee-row:last-child { border-bottom: 0; }\n    .fee-row strong { font-family: 'Sora', sans-serif; font-size: 15px; white-space: nowrap; }\n\n    .details-status { padding: 15px 16px; border-top: 1px solid #eceef1; background: #f7f8f9; text-align: center; color: #555860; font-size: 11px; font-weight: 700; }\n    .details-status strong { color: #E71B35; }\n    .regularize-action { padding: 14px 16px 16px; border-top: 1px solid #eceef1; background: #fff; }\n    .regularize-action a { width: 100%; min-height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 7px; background: #E71B35; color: #fff; font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 600; text-decoration: none; }\n    @media (min-width: 721px) {\n      .details-topbar { height: 74px; }\n      .details-content { margin-top: 24px; }\n      .holder-block, .details-highlight, .fees { padding-left: 24px; padding-right: 24px; }\n      .holder-name { font-size: 18px; }\n    }\n\n  </style>\n</head>\n<body>\n\n<!-- DETALHES DO PEDIDO -->\n<div class=\"details-page\" id=\"detailsPage\">\n  <header class=\"details-topbar\">\n    <div class=\"details-topbar-inner\">\n      <span class=\"details-brand\">\n        <img src=\"{{HEADER_LOGO_URL}}\" alt=\"Logo\" />\n      </span>\n      <span class=\"details-secure\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z\"/><path d=\"m9 12 2 2 4-4\"/></svg>\n        CONSULTA SEGURA\n      </span>\n    </div>\n  </header>\n\n  <main class=\"details-content\">\n    <section class=\"details-card\">\n      <div class=\"holder-block\">\n        <p class=\"holder-label\">Titular</p>\n        <h1 class=\"holder-name\" id=\"detailsName\">Cliente</h1>\n      </div>\n\n      <div class=\"warning-banner\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg>\n        <span class=\"warning-banner-text\">{{WARNING_BANNER_TEXT}}</span>\n      </div>\n\n      <div class=\"details-highlight\">\n        <p class=\"attention-title\">{{ATTENTION_TITLE}}</p>\n        <div class=\"holder-box\">\n          <p>Titular: <strong id=\"detailsBoxName\">Cliente</strong><br/>CPF: <strong id=\"detailsCpf\">***.***.***-**</strong></p>\n        </div>\n      </div>\n\n      <div class=\"fees\">\n        <h2>Tarifas pendentes</h2>\n        <div class=\"fee-row\"><span>Processamento Eletrônico</span><strong>R$ 17,50</strong></div>\n        <div class=\"fee-row\"><span>ICMS</span><strong>R$ 19,25</strong></div>\n        <div class=\"fee-row\"><span>Contribuição Federal</span><strong>R$ 21,60</strong></div>\n      </div>\n\n      <div class=\"details-status\">Status atual: <strong>Aguardando regularização</strong></div>\n      <div class=\"regularize-action\"><a id=\"regularizeButton\" href=\"/pagamento\">Regularizar</a></div>\n    </section>\n\n  </main>\n\n</div>\n\n<script>\n  const params = new URLSearchParams(window.location.search);\n  const cpf = params.get('cpf') || sessionStorage.getItem('fl_cpf') || '';\n  const nome = params.get('nome') ? decodeURIComponent(params.get('nome')) : (sessionStorage.getItem('fl_nome') || 'Cliente');\n  function formatarNome(value) { return String(value || 'Cliente').trim().toLowerCase().split(/\\s+/).filter(Boolean).map((word, index) => { const minor = ['de','da','do','das','dos','e'].includes(word); return index > 0 && minor ? word : word.charAt(0).toUpperCase() + word.slice(1); }).join(' '); }\n  function mascararCpf(value) { const digits = String(value || '').replace(/\\D/g, ''); return digits.length === 11 ? `***.***.***-${digits.slice(-2)}` : '***.***.***-**'; }\n  const nomeFormatado = formatarNome(nome);\n  document.getElementById('detailsName').textContent = nomeFormatado;\n  document.getElementById('detailsBoxName').textContent = nomeFormatado;\n  document.getElementById('detailsCpf').textContent = mascararCpf(cpf);\n  const paymentParams = new URLSearchParams(window.location.search);\n  document.getElementById('regularizeButton').href = '/pagamento?' + paymentParams.toString();\n<\/script>\n</body>\n</html>";
var formatMoney$2 = (cents) => new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL"
}).format(cents / 100);
var escapeHtml$1 = (value) => value.replace(/[&<>'"]/g, (character) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	"\"": "&quot;"
})[character] ?? "");
async function checkoutHtml() {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const assets = await getBrandingAssetUrls();
	const { data } = await supabaseAdmin.from("admin_settings").select("checkout_description,warning_banner_text,attention_title,processing_fee_cents,icms_fee_cents,federal_fee_cents").eq("id", true).maybeSingle();
	if (!data) return checkout_default.replaceAll("{{HEADER_LOGO_URL}}", assets.headerLogoUrl);
	const total = data.processing_fee_cents + data.icms_fee_cents + data.federal_fee_cents;
	return checkout_default.replaceAll("{{HEADER_LOGO_URL}}", assets.headerLogoUrl).replaceAll("R$ 17,50", formatMoney$2(data.processing_fee_cents)).replaceAll("R$ 19,25", formatMoney$2(data.icms_fee_cents)).replaceAll("R$ 21,60", formatMoney$2(data.federal_fee_cents)).replaceAll("R$ 58,35", formatMoney$2(total)).replaceAll("Regularização ICMS", escapeHtml$1(data.checkout_description)).replace("{{WARNING_BANNER_TEXT}}", escapeHtml$1(data.warning_banner_text)).replace("{{ATTENTION_TITLE}}", escapeHtml$1(data.attention_title)).replaceAll(/{{[A-Z0-9_]+}}/g, "");
}
var Route$10 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Detalhes do pedido" },
		{
			name: "description",
			content: "Confira os detalhes e valores do seu pedido."
		},
		{
			property: "og:title",
			content: "Detalhes do pedido"
		},
		{
			property: "og:description",
			content: "Confira os detalhes e valores do seu pedido."
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
	server: { handlers: { GET: async () => new Response(await checkoutHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } }) } }
});
var payment_default = "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  <title>Pagamento Pix</title>\n  <link href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600&display=swap\" rel=\"stylesheet\"/>\n  <style>\n    :root { --brand: #E71B35; --brand-dark: #c91d2f; --ink: #17191f; --muted: #666c78; --line: #dfe2e7; --surface: #ffffff; --soft: #f5f6f8; --success: #209554; }\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    [hidden] { display: none !important; }\n    body { min-height: 100vh; display: flex; flex-direction: column; background: #f1f2f4; color: var(--ink); font-family: 'Manrope', Arial, sans-serif; padding: 28px 14px 0; }\n    .page { width: min(100%, 470px); margin: 0 auto; }\n    .payment-banner { width: 100%; margin-bottom: 14px; overflow: hidden; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }\n    .payment-banner img { display: block; width: 100%; height: auto; max-height: 230px; object-fit: contain; }\n    .payment-card { overflow: hidden; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); box-shadow: 0 16px 34px rgba(23,25,31,.08); }\n    .payment-head { min-height: 145px; padding: 29px 31px 54px; display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; background: var(--brand); color: var(--surface); }\n    .payment-title small { display: block; margin-bottom: 7px; font-size: 14px; line-height: 1.3; font-weight: 500; opacity: .9; }\n    .payment-title h1 { font-family: 'Sora', Arial, sans-serif; font-size: 26px; line-height: 1.2; font-weight: 600; letter-spacing: 0; }\n    .qr-mark { width: 48px; height: 48px; display: grid; place-items: center; flex: 0 0 auto; border-radius: 9px; background: rgba(255,255,255,.16); }\n    .qr-mark svg { width: 24px; height: 24px; }\n    .payment-body { padding: 0 26px 30px; }\n    .total-box { min-height: 72px; margin-top: -36px; padding: 17px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; position: relative; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); box-shadow: 0 8px 20px rgba(23,25,31,.07); }\n    .total-box span { color: var(--muted); font-size: 14px; font-weight: 500; }\n    .total-box strong { color: var(--brand); font-family: 'Sora', Arial, sans-serif; font-size: 23px; line-height: 1; font-weight: 600; white-space: nowrap; }\n    .charge-box { margin: 20px 0; padding: 17px 18px; border: 1px solid var(--line); border-radius: 7px; background: var(--soft); }\n    .charge-box > span { display: block; margin-bottom: 9px; color: var(--muted); font-size: 12px; font-weight: 500; }\n    .charge-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }\n    .charge-row strong { font-size: 15px; line-height: 1.35; font-weight: 600; }\n    .charge-row small { color: var(--muted); font-size: 11px; font-weight: 500; white-space: nowrap; }\n    .btn-pagar { width: 100%; min-height: 52px; border: 0; border-radius: 7px; background: var(--brand); color: var(--surface); box-shadow: 0 8px 18px rgba(231,27,53,.18); font: 600 15px/1 'Sora', Arial, sans-serif; cursor: pointer; transition: background .18s, transform .18s, box-shadow .18s; }\n    .btn-pagar:hover { background: var(--brand-dark); transform: translateY(-1px); }\n    .btn-pagar:active { transform: translateY(0); }\n    .btn-pagar.loading { opacity: .72; pointer-events: none; }\n    .protected { margin-top: 17px; display: flex; align-items: center; justify-content: center; gap: 7px; color: var(--muted); font-size: 11px; font-weight: 500; }\n    .protected svg { width: 15px; height: 15px; color: var(--success); }\n    .qr-total { min-height: 72px; margin-top: -36px; padding: 17px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; position: relative; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); box-shadow: 0 8px 20px rgba(23,25,31,.07); }\n    .qr-total span { color: var(--muted); font-size: 14px; font-weight: 500; }\n    .qr-total strong { color: var(--brand); font-family: 'Sora', Arial, sans-serif; font-size: 23px; font-weight: 600; }\n    .qr-wrap { margin-top: 24px; padding: 27px 20px 23px; border: 1px solid var(--line); border-radius: 8px; background: var(--soft); text-align: center; }\n    .qr-img-wrap { display: flex; justify-content: center; margin-bottom: 20px; }\n    .qr-img-wrap canvas, .qr-img-wrap img { width: 190px !important; height: 190px !important; padding: 12px; border-radius: 7px; background: var(--surface); }\n    .qr-instruction { font-family: 'Sora', Arial, sans-serif; font-size: 14px; line-height: 1.5; font-weight: 600; }\n    .qr-aguardando { margin-top: 5px; color: var(--muted); font-size: 12px; }\n    .qr-expira { margin-top: 7px; color: var(--brand); font-size: 11px; font-weight: 600; }\n    .qr-copy-wrap { margin-top: 22px; }\n    .qr-copy-wrap input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }\n    .btn-copiar { width: 100%; min-height: 52px; display: flex; align-items: center; justify-content: center; gap: 9px; border: 0; border-radius: 7px; background: var(--brand); color: var(--surface); box-shadow: 0 8px 18px rgba(231,27,53,.18); font: 600 14px/1 'Sora', Arial, sans-serif; cursor: pointer; }\n    .btn-copiar svg { width: 19px; height: 19px; flex: 0 0 auto; }\n    .qr-copiado { display: none; height: 18px; margin-top: 8px; color: var(--success); font-size: 12px; font-weight: 700; }\n    .back-link { width: 100%; margin-top: 19px; border: 0; background: transparent; color: var(--ink); font: 600 13px/1 'Manrope', Arial, sans-serif; cursor: pointer; }\n    .spinner { width: 13px; height: 13px; display: inline-block; margin-right: 6px; border: 2px solid var(--line); border-top-color: var(--success); border-radius: 50%; animation: spin .8s linear infinite; }\n    .loading-overlay { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 24px; background: rgba(255,255,255,.94); opacity: 0; visibility: hidden; transition: opacity .2s ease, visibility .2s ease; }\n    .loading-overlay.active { opacity: 1; visibility: visible; }\n    .loading-content { display: flex; flex-direction: column; align-items: center; text-align: center; }\n    .loading-icon { width: 54px; height: 54px; border: 4px solid #f5c3ca; border-top-color: var(--brand); border-radius: 50%; animation: spin .72s linear infinite; }\n    .loading-content strong { margin-top: 18px; color: var(--ink); font-family: 'Sora', Arial, sans-serif; font-size: 15px; font-weight: 600; }\n    .loading-content span { margin-top: 6px; color: var(--muted); font-size: 12px; }\n    @keyframes spin { to { transform: rotate(360deg); } }\n    @media (max-width: 600px) {\n      body { padding: 20px 13px 0; }\n      .payment-head { min-height: 132px; padding: 26px 24px 49px; }\n      .payment-title small { font-size: 13px; }\n      .payment-title h1 { font-size: 23px; }\n      .qr-mark { width: 44px; height: 44px; }\n      .qr-mark svg { width: 22px; height: 22px; }\n      .payment-body { padding: 0 19px 25px; }\n      .total-box, .qr-total { min-height: 66px; margin-top: -33px; padding: 15px 17px; }\n      .total-box span, .qr-total span { font-size: 13px; }\n      .total-box strong, .qr-total strong { font-size: 21px; }\n      .charge-box { margin: 17px 0; padding: 15px; }\n      .charge-box > span { font-size: 11px; }\n      .charge-row { align-items: flex-end; }\n      .charge-row strong { font-size: 14px; }\n      .charge-row small { font-size: 10px; }\n      .btn-pagar { min-height: 49px; font-size: 14px; }\n      .protected { margin-top: 15px; font-size: 10px; }\n      .qr-wrap { margin-top: 20px; padding: 24px 17px 20px; }\n      .qr-img-wrap canvas, .qr-img-wrap img { width: 178px !important; height: 178px !important; }\n    }\n  </style>\n</head>\n<body>\n  <main class=\"page\">\n    <figure class=\"payment-banner\" data-payment-banner hidden>\n      <img src=\"{{PAYMENT_BANNER_URL}}\" alt=\"Banner informativo\"/>\n    </figure>\n    <section class=\"payment-card\" aria-labelledby=\"payment-title\">\n      <header class=\"payment-head\">\n        <div class=\"payment-title\"><small>Pagamento seguro</small><h1 id=\"payment-title\">Pagamento Pix</h1></div>\n        <div class=\"qr-mark\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><path d=\"M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM16 15h2v2h-2zM20 15h1v4h-3v2h-3v-4h2M11 3v3M11 9v2h3M3 11h4M9 13h3v3M12 18v3\"/></svg></div>\n      </header>\n      <div class=\"payment-body\">\n        <div id=\"pix-inicial\">\n          <div class=\"total-box\"><span>Total a pagar</span><strong>R$ 58,35</strong></div>\n          <div class=\"charge-box\"><span>Descrição da cobrança</span><div class=\"charge-row\"><strong>{{CHECKOUT_DESCRIPTION}}</strong><small>Pagamento único</small></div></div>\n          <button class=\"btn-pagar\" id=\"btnGerar\" onclick=\"gerarPix()\">Gerar Pix <span aria-hidden=\"true\">→</span></button>\n        </div>\n        <div id=\"pix-qrcode\" style=\"display:none;\">\n          <div class=\"qr-total\"><span>Total a pagar</span><strong>R$ 58,35</strong></div>\n          <div class=\"qr-wrap\">\n            <div class=\"qr-img-wrap\"><div id=\"qrCanvas\"></div></div>\n            <p class=\"qr-instruction\">Escaneie com o aplicativo do seu banco</p>\n            <div class=\"qr-aguardando\">Cobrança aguardando pagamento</div>\n            <div class=\"qr-expira\" id=\"qrExpira\"></div>\n            <div class=\"qr-copy-wrap\"><input type=\"text\" id=\"pixCodigo\" readonly/><button class=\"btn-copiar\" onclick=\"copiarPix()\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"></rect><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"></path></svg><span>Copiar código Pix</span></button></div>\n            <div class=\"qr-copiado\" id=\"qrCopiado\">Código copiado!</div>\n          </div>\n          <button class=\"back-link\" type=\"button\" onclick=\"voltarPagamento()\">← &nbsp;Voltar</button>\n        </div>\n        <div id=\"pix-aprovado\" style=\"display:none;\"><div class=\"qr-wrap\"><h2>Pagamento aprovado!</h2><p>Recebemos a confirmação do seu pagamento de <strong>R$ 58,35</strong>.</p></div></div>\n        <p class=\"protected\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"10\" width=\"16\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/></svg>Seus dados estão protegidos</p>\n      </div>\n    </section>\n  </main>\n  <div class=\"loading-overlay\" id=\"pixLoading\" role=\"status\" aria-live=\"polite\" aria-hidden=\"true\">\n    <div class=\"loading-content\">\n      <div class=\"loading-icon\" aria-hidden=\"true\"></div>\n      <strong>Gerando seu Pix</strong>\n      <span>Aguarde um instante...</span>\n    </div>\n  </div>\n<script src=\"/qrcode.min.js\"><\/script>\n<script>\n  // Nenhum provedor de pagamento conectado nesta distribuição.\n  const paymentBanner = document.querySelector('[data-payment-banner]');\n  const paymentBannerImage = paymentBanner?.querySelector('img');\n  if (paymentBanner && paymentBannerImage && paymentBannerImage.getAttribute('src')?.trim()) {\n    paymentBanner.hidden = false;\n    paymentBannerImage.addEventListener('error', () => { paymentBanner.hidden = true; });\n  }\n  document.querySelectorAll('[data-hide-empty]').forEach((element) => {\n    if (!element.getAttribute('data-hide-empty')?.trim()) element.hidden = true;\n  });\n  const _p   = new URLSearchParams(window.location.search);\n  const cpf  = _p.get('cpf') || sessionStorage.getItem('fl_cpf') || '';\n  const nome = _p.get('nome') ? decodeURIComponent(_p.get('nome')) : (sessionStorage.getItem('fl_nome') || 'Cliente');\n  const trackingParameters = Object.fromEntries(\n    ['src', 'sck', 'utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term']\n      .map(key => [key, _p.get(key)])\n  );\n\n  function formatarNome(value) {\n    return String(value || 'Cliente').trim().toLowerCase().split(/\\s+/).filter(Boolean).map((word, index) => {\n      const minor = ['de', 'da', 'do', 'das', 'dos', 'e'].includes(word);\n      return index > 0 && minor ? word : word.charAt(0).toUpperCase() + word.slice(1);\n    }).join(' ');\n  }\n\n  function mascararCpf(value) {\n    const digits = String(value || '').replace(/\\D/g, '');\n    if (digits.length !== 11) return '***.***.***-**';\n    return `***.***.***-${digits.slice(-2)}`;\n  }\n\n  function alternarCarregamento(ativo) {\n    const overlay = document.getElementById('pixLoading');\n    overlay.classList.toggle('active', ativo);\n    overlay.setAttribute('aria-hidden', ativo ? 'false' : 'true');\n    document.body.style.overflow = ativo ? 'hidden' : '';\n  }\n\n  async function gerarPix() {\n    const btn = document.getElementById('btnGerar');\n    btn.classList.add('loading');\n    btn.textContent = 'Abrindo Pix...';\n    alternarCarregamento(true);\n\n    const body = {\n      amount: 58.35,\n      description: '{{CHECKOUT_DESCRIPTION}}',\n      customer: {\n        name: nome,\n        document: cpf.replace(/\\D/g, '')\n      },\n      trackingParameters\n    };\n\n    sessionStorage.removeItem('pix_pendente');\n    sessionStorage.setItem('pix_request', JSON.stringify(body));\n    window.location.href = '/pix-pendente' + window.location.search;\n  }\n\n  function mostrarQR(qrCode, expiraISO) {\n    document.getElementById('pix-inicial').style.display = 'none';\n    document.getElementById('pix-qrcode').style.display  = 'block';\n\n    // preenche código copia e cola\n    document.getElementById('pixCodigo').value = qrCode;\n\n    // limpa e gera QR Code\n    const qrDiv = document.getElementById('qrCanvas');\n    qrDiv.innerHTML = '';\n    new QRCode(qrDiv, {\n      text:         qrCode,\n      width:        200,\n      height:       200,\n      correctLevel: QRCode.CorrectLevel.M\n    });\n\n    // conta 30 minutos a partir de agora (evita problema de parse de data no Safari)\n    let segundos = 30 * 60;\n    const expiraEl = document.getElementById('qrExpira');\n\n    function pad(n) { return String(n).padStart(2, '0'); }\n\n    const intervalo = setInterval(() => {\n      if (segundos <= 0) {\n        expiraEl.textContent = 'Pix expirado';\n        clearInterval(intervalo);\n        return;\n      }\n      segundos--;\n      const m = Math.floor(segundos / 60);\n      const s = segundos % 60;\n      expiraEl.textContent = `Expira em ${m}:${pad(s)}`;\n    }, 1000);\n\n    // dispara imediatamente para não esperar 1s\n    expiraEl.textContent = `Expira em 30:00`;\n  }\n\n  function copiarPix() {\n    const input = document.getElementById('pixCodigo');\n    input.select();\n    navigator.clipboard.writeText(input.value).catch(() => {\n      document.execCommand('copy');\n    });\n    const msg = document.getElementById('qrCopiado');\n    msg.style.display = 'block';\n    setTimeout(() => msg.style.display = 'none', 2500);\n  }\n\n  function voltarPagamento() {\n    document.getElementById('pix-qrcode').style.display = 'none';\n    document.getElementById('pix-inicial').style.display = 'block';\n    const button = document.getElementById('btnGerar');\n    button.classList.remove('loading');\n    button.innerHTML = `Gerar Pix <span aria-hidden=\"true\">→</span>`;\n  }\n\n  // Consulta o estado de pagamento quando um provedor for conectado.\n  let _pollTimer = null;\n\n  function iniciarMonitoramento(txid, orderToken) {\n    if (_pollTimer) clearInterval(_pollTimer);\n\n    _pollTimer = setInterval(async () => {\n      try {\n        const query = new URLSearchParams({ txid });\n        if (orderToken) query.set('orderToken', orderToken);\n        const res  = await fetch('/api/public/pix-status?' + query.toString());\n        const data = await res.json();\n\n        const dep    = data.data?.deposit || data.deposit || data.data || {};\n        let providerStatus = '';\n        try {\n          const providerResponse = typeof dep.provider_response === 'string'\n            ? JSON.parse(dep.provider_response)\n            : dep.provider_response;\n          providerStatus = providerResponse?.data?.status || providerResponse?.status || '';\n        } catch (e) {\n          providerStatus = '';\n        }\n        const status = String(data.normalizedStatus || providerStatus || dep.status || data.status || '').trim().toLowerCase();\n\n        if (status === 'paid') {\n          clearInterval(_pollTimer);\n          mostrarAprovado();\n        }\n      } catch (e) {\n        // mantém tentando silenciosamente\n      }\n    }, 5000);\n  }\n\n  function mostrarAprovado() {\n    document.getElementById('pix-qrcode').style.display = 'none';\n    document.getElementById('pix-aprovado').style.display = 'block';\n  }\n\n<\/script>\n</body>\n</html>\n";
var formatMoney$1 = (cents) => new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL"
}).format(cents / 100);
var escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	"\"": "&quot;"
})[character] ?? "");
async function paymentHtml() {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const [assets, { data }] = await Promise.all([getBrandingAssetUrls(), supabaseAdmin.from("admin_settings").select("checkout_description,processing_fee_cents,icms_fee_cents,federal_fee_cents").eq("id", true).maybeSingle()]);
	if (!data) return payment_default.replaceAll("{{HEADER_LOGO_URL}}", assets.headerLogoUrl).replaceAll("{{PAYMENT_BANNER_URL}}", assets.secondaryBannerUrl).replaceAll(/{{[A-Z0-9_]+}}/g, "");
	const total = data.processing_fee_cents + data.icms_fee_cents + data.federal_fee_cents;
	return payment_default.replaceAll("{{HEADER_LOGO_URL}}", assets.headerLogoUrl).replaceAll("{{PAYMENT_BANNER_URL}}", assets.secondaryBannerUrl).replaceAll("{{CHECKOUT_DESCRIPTION}}", escapeHtml(data.checkout_description)).replaceAll("R$ 17,50", formatMoney$1(data.processing_fee_cents)).replaceAll("R$ 19,25", formatMoney$1(data.icms_fee_cents)).replaceAll("R$ 21,60", formatMoney$1(data.federal_fee_cents)).replaceAll("R$ 58,35", formatMoney$1(total)).replaceAll("58.35", (total / 100).toFixed(2));
}
var Route$9 = createFileRoute("/pagamento")({
	head: () => ({ meta: [
		{ title: "Pagamento Pix | Área segura" },
		{
			name: "description",
			content: "Finalize o pagamento do pedido por Pix."
		},
		{
			property: "og:title",
			content: "Pagamento Pix | Área segura"
		},
		{
			property: "og:description",
			content: "Finalize o pagamento do pedido por Pix."
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
	server: { handlers: { GET: async () => new Response(await paymentHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } }) } }
});
var pix_pendente_default = "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  <title>Pix pendente</title>\n  <link href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600&display=swap\" rel=\"stylesheet\"/>\n  <style>\n    :root { --brand: #E71B35; --brand-dark: #c91d2f; --ink: #17191f; --muted: #666c78; --line: #dfe2e7; --surface: #ffffff; --soft: #f5f6f8; --success: #209554; }\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    [hidden] { display: none !important; }\n    body { min-height: 100vh; display: flex; flex-direction: column; background: #f1f2f4; color: var(--ink); font-family: 'Manrope', Arial, sans-serif; padding: 28px 14px 0; }\n    .page { width: min(100%, 470px); margin: 0 auto; }\n    .payment-banner { width: 100%; margin-bottom: 14px; overflow: hidden; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }\n    .payment-banner img { display: block; width: 100%; height: auto; max-height: 230px; object-fit: contain; }\n    .payment-card { overflow: hidden; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); box-shadow: 0 16px 34px rgba(23,25,31,.08); }\n    .payment-head { min-height: 145px; padding: 29px 31px 54px; display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; background: var(--brand); color: var(--surface); }\n    .payment-title small { display: block; margin-bottom: 7px; font-size: 14px; line-height: 1.3; font-weight: 500; opacity: .9; }\n    .payment-title h1 { font-family: 'Sora', Arial, sans-serif; font-size: 26px; line-height: 1.2; font-weight: 600; letter-spacing: 0; }\n    .qr-mark { width: 48px; height: 48px; display: grid; place-items: center; flex: 0 0 auto; border-radius: 9px; background: rgba(255,255,255,.16); }\n    .qr-mark svg { width: 24px; height: 24px; }\n    .payment-body { padding: 0 26px 30px; }\n    .total-box { min-height: 72px; margin-top: -36px; padding: 17px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; position: relative; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); box-shadow: 0 8px 20px rgba(23,25,31,.07); }\n    .total-box span { color: var(--muted); font-size: 14px; font-weight: 500; }\n    .total-box strong { color: var(--brand); font-family: 'Sora', Arial, sans-serif; font-size: 23px; line-height: 1; font-weight: 600; white-space: nowrap; }\n    .charge-box { margin: 20px 0; padding: 17px 18px; border: 1px solid var(--line); border-radius: 7px; background: var(--soft); }\n    .charge-box > span { display: block; margin-bottom: 9px; color: var(--muted); font-size: 12px; font-weight: 500; }\n    .charge-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }\n    .charge-row strong { font-size: 15px; line-height: 1.35; font-weight: 600; }\n    .charge-row small { color: var(--muted); font-size: 11px; font-weight: 500; white-space: nowrap; }\n    .merchant { margin: 18px 0 0; padding-bottom: 17px; border-bottom: 1px solid var(--line); color: var(--muted); font-size: 11px; line-height: 1.55; }\n    .merchant strong { display: block; color: var(--ink); font-size: 13px; font-weight: 600; }\n    .btn-pagar { width: 100%; min-height: 52px; border: 0; border-radius: 7px; background: var(--brand); color: var(--surface); box-shadow: 0 8px 18px rgba(231,27,53,.18); font: 600 15px/1 'Sora', Arial, sans-serif; cursor: pointer; transition: background .18s, transform .18s, box-shadow .18s; }\n    .btn-pagar:hover { background: var(--brand-dark); transform: translateY(-1px); }\n    .btn-pagar:active { transform: translateY(0); }\n    .btn-pagar.loading { opacity: .72; pointer-events: none; }\n    .protected { margin-top: 17px; display: flex; align-items: center; justify-content: center; gap: 7px; color: var(--muted); font-size: 11px; font-weight: 500; }\n    .protected svg { width: 15px; height: 15px; color: var(--success); }\n    .qr-total { min-height: 72px; margin-top: -36px; padding: 17px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; position: relative; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); box-shadow: 0 8px 20px rgba(23,25,31,.07); }\n    .qr-total span { color: var(--muted); font-size: 14px; font-weight: 500; }\n    .qr-total strong { color: var(--brand); font-family: 'Sora', Arial, sans-serif; font-size: 23px; font-weight: 600; }\n    .qr-wrap { margin-top: 24px; padding: 27px 20px 23px; border: 1px solid var(--line); border-radius: 8px; background: var(--soft); text-align: center; }\n    .qr-img-wrap { display: flex; justify-content: center; margin-bottom: 20px; }\n    .qr-img-wrap canvas, .qr-img-wrap img { width: 190px !important; height: 190px !important; padding: 12px; border-radius: 7px; background: var(--surface); }\n    .qr-instruction { font-family: 'Sora', Arial, sans-serif; font-size: 14px; line-height: 1.5; font-weight: 600; }\n    .qr-aguardando { margin-top: 5px; color: var(--muted); font-size: 12px; }\n    .qr-expira { margin-top: 7px; color: var(--brand); font-size: 11px; font-weight: 600; }\n    .qr-copy-wrap { margin-top: 22px; }\n    .qr-copy-wrap input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }\n    .btn-copiar { width: 100%; min-height: 52px; display: flex; align-items: center; justify-content: center; gap: 9px; border: 0; border-radius: 7px; background: var(--brand); color: var(--surface); box-shadow: 0 8px 18px rgba(231,27,53,.18); font: 600 14px/1 'Sora', Arial, sans-serif; cursor: pointer; }\n    .btn-copiar svg { width: 19px; height: 19px; flex: 0 0 auto; }\n    .qr-copiado { display: none; height: 18px; margin-top: 8px; color: var(--success); font-size: 12px; font-weight: 700; }\n    .pix-tutorial { margin-top: 22px; padding-top: 20px; border-top: 1px solid var(--line); text-align: left; }\n    .pix-tutorial h2 { font-family: 'Sora', Arial, sans-serif; font-size: 14px; line-height: 1.4; font-weight: 600; }\n    .pix-steps { margin-top: 15px; display: grid; gap: 14px; list-style: none; }\n    .pix-step { display: grid; grid-template-columns: 36px 1fr; align-items: center; gap: 12px; }\n    .pix-step-icon { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 7px; background: var(--surface); color: var(--brand); border: 1px solid var(--line); }\n    .pix-step-icon svg { width: 18px; height: 18px; }\n    .pix-step strong { display: block; font-size: 12px; line-height: 1.35; font-weight: 700; }\n    .pix-step p { margin-top: 2px; color: var(--muted); font-size: 11px; line-height: 1.45; }\n    .back-link { width: 100%; margin-top: 19px; border: 0; background: transparent; color: var(--ink); font: 600 13px/1 'Manrope', Arial, sans-serif; cursor: pointer; }\n    .spinner { width: 13px; height: 13px; display: inline-block; margin-right: 6px; border: 2px solid var(--line); border-top-color: var(--success); border-radius: 50%; animation: spin .8s linear infinite; }\n    .loading-overlay { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 24px; background: rgba(255,255,255,.94); opacity: 0; visibility: hidden; transition: opacity .2s ease, visibility .2s ease; }\n    .loading-overlay.active { opacity: 1; visibility: visible; }\n    .loading-content { display: flex; flex-direction: column; align-items: center; text-align: center; }\n    .loading-icon { width: 54px; height: 54px; border: 4px solid #f5c3ca; border-top-color: var(--brand); border-radius: 50%; animation: spin .72s linear infinite; }\n    .loading-content strong { margin-top: 18px; color: var(--ink); font-family: 'Sora', Arial, sans-serif; font-size: 15px; font-weight: 600; }\n    .loading-content span { margin-top: 6px; color: var(--muted); font-size: 12px; }\n    .generation-error { margin-top: 24px; padding: 22px 18px; border: 1px solid var(--line); border-radius: 8px; background: var(--soft); text-align: center; }\n    .generation-error strong { display: block; font-family: 'Sora', Arial, sans-serif; font-size: 14px; }\n    .generation-error p { margin: 7px 0 18px; color: var(--muted); font-size: 12px; line-height: 1.5; }\n    @keyframes spin { to { transform: rotate(360deg); } }\n    @media (max-width: 600px) {\n      body { padding: 20px 13px 0; }\n      .payment-head { min-height: 132px; padding: 26px 24px 49px; }\n      .payment-title small { font-size: 13px; }\n      .payment-title h1 { font-size: 23px; }\n      .qr-mark { width: 44px; height: 44px; }\n      .qr-mark svg { width: 22px; height: 22px; }\n      .payment-body { padding: 0 19px 25px; }\n      .total-box, .qr-total { min-height: 66px; margin-top: -33px; padding: 15px 17px; }\n      .total-box span, .qr-total span { font-size: 13px; }\n      .total-box strong, .qr-total strong { font-size: 21px; }\n      .charge-box { margin: 17px 0; padding: 15px; }\n      .charge-box > span { font-size: 11px; }\n      .charge-row { align-items: flex-end; }\n      .charge-row strong { font-size: 14px; }\n      .charge-row small { font-size: 10px; }\n      .btn-pagar { min-height: 49px; font-size: 14px; }\n      .protected { margin-top: 15px; font-size: 10px; }\n      .qr-wrap { margin-top: 20px; padding: 24px 17px 20px; }\n      .qr-img-wrap canvas, .qr-img-wrap img { width: 178px !important; height: 178px !important; }\n    }\n  </style>\n</head>\n<body>\n  <main class=\"page\">\n    <figure class=\"payment-banner\" data-payment-banner hidden><img src=\"{{PRIMARY_BANNER_URL}}\" alt=\"Banner informativo\"/></figure>\n    <section class=\"payment-card\" aria-labelledby=\"payment-title\">\n      <header class=\"payment-head\">\n        <div class=\"payment-title\"><small>Pagamento seguro</small><h1 id=\"payment-title\">Pagamento Pix</h1></div>\n        <div class=\"qr-mark\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><path d=\"M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM16 15h2v2h-2zM20 15h1v4h-3v2h-3v-4h2M11 3v3M11 9v2h3M3 11h4M9 13h3v3M12 18v3\"/></svg></div>\n      </header>\n      <div class=\"payment-body\">\n        <div id=\"pix-qrcode\" style=\"display:none;\">\n          <div class=\"qr-total\"><span>Total a pagar</span><strong>R$ 58,35</strong></div>\n          <div class=\"qr-wrap\">\n            <div class=\"qr-img-wrap\"><div id=\"qrCanvas\"></div></div>\n            <p class=\"qr-instruction\">Escaneie com o aplicativo do seu banco</p>\n            <div class=\"qr-aguardando\">Cobrança aguardando pagamento</div>\n            <div class=\"qr-expira\" id=\"qrExpira\">Expira em 30:00</div>\n            <div class=\"qr-copy-wrap\"><input type=\"text\" id=\"pixCodigo\" readonly/><button class=\"btn-copiar\" onclick=\"copiarPix()\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"></rect><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"></path></svg><span>Copiar código Pix</span></button></div>\n            <div class=\"qr-copiado\" id=\"qrCopiado\">Código copiado!</div>\n            <div class=\"pix-tutorial\" aria-labelledby=\"pix-tutorial-title\">\n              <h2 id=\"pix-tutorial-title\">Como pagar com Pix</h2>\n              <ol class=\"pix-steps\">\n                <li class=\"pix-step\"><span class=\"pix-step-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 9h10M7 13h6\"/></svg></span><div><strong>Copie o código Pix</strong><p>Toque no botão acima para copiar o código.</p></div></li>\n                <li class=\"pix-step\"><span class=\"pix-step-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2\"/><path d=\"M10 18h4\"/></svg></span><div><strong>Abra o aplicativo do seu banco</strong><p>Acesse a área Pix e escolha Pix Copia e Cola.</p></div></li>\n                <li class=\"pix-step\"><span class=\"pix-step-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 6 9 17l-5-5\"/></svg></span><div><strong>Cole e confirme</strong><p>Confira os dados e finalize o pagamento no banco.</p></div></li>\n              </ol>\n            </div>\n          </div>\n          <button class=\"back-link\" type=\"button\" onclick=\"voltarPagamento()\">← &nbsp;Voltar</button>\n        </div>\n        <div class=\"generation-error\" id=\"pix-erro\" style=\"display:none;\"><strong>Não foi possível gerar o Pix</strong><p id=\"pixErroTexto\">Confira os dados e tente novamente.</p><button class=\"btn-pagar\" type=\"button\" onclick=\"tentarNovamente()\">Tentar novamente</button><button class=\"back-link\" type=\"button\" onclick=\"voltarPagamento()\">← &nbsp;Voltar</button></div>\n        <div id=\"pix-aprovado\" style=\"display:none;\"><div class=\"qr-wrap\"><h2>Pagamento aprovado!</h2><p>Recebemos a confirmação do seu pagamento de <strong>R$ 58,35</strong>.</p></div></div>\n        <p class=\"protected\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"10\" width=\"16\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/></svg>Seus dados estão protegidos</p>\n      </div>\n    </section>\n  </main>\n  <div class=\"loading-overlay active\" id=\"pixLoading\" role=\"status\" aria-live=\"polite\" aria-hidden=\"false\"><div class=\"loading-content\"><div class=\"loading-icon\" aria-hidden=\"true\"></div><strong>Gerando seu Pix</strong><span>Aguarde um instante...</span></div></div>\n  <script src=\"/qrcode.min.js\"><\/script>\n  <script>\n    let payment = lerSessao('pix_pendente');\n    let paymentRequest = lerSessao('pix_request');\n\n    function lerSessao(key) {\n      try { const value = sessionStorage.getItem(key); return value ? JSON.parse(value) : null; } catch (_) { return null; }\n    }\n\n    function alternarCarregamento(ativo) {\n      const overlay = document.getElementById('pixLoading');\n      overlay.classList.toggle('active', ativo);\n      overlay.setAttribute('aria-hidden', ativo ? 'false' : 'true');\n      document.body.style.overflow = ativo ? 'hidden' : '';\n    }\n\n    const banner = document.querySelector('[data-payment-banner]');\n    const bannerImage = banner?.querySelector('img');\n    if (banner && bannerImage && bannerImage.getAttribute('src')?.trim()) {\n      banner.hidden = false;\n      bannerImage.addEventListener('error', () => { banner.hidden = true; });\n    }\n    if (payment?.qrCode && payment?.txid) {\n      alternarCarregamento(false);\n      exibirPagamento(payment);\n    } else if (paymentRequest) {\n      gerarPixPendente(paymentRequest);\n    } else {\n      window.location.replace('/pagamento' + window.location.search);\n    }\n\n    function exibirPagamento(currentPayment) {\n      document.getElementById('pix-qrcode').style.display = 'block';\n      document.getElementById('pix-erro').style.display = 'none';\n      document.getElementById('pixCodigo').value = currentPayment.qrCode;\n      const qrCanvas = document.getElementById('qrCanvas');\n      qrCanvas.innerHTML = '';\n      new QRCode(qrCanvas, { text: currentPayment.qrCode, width: 200, height: 200, correctLevel: QRCode.CorrectLevel.M });\n      iniciarContagem(currentPayment.createdAt);\n      iniciarMonitoramento(currentPayment.txid, currentPayment.orderToken);\n    }\n\n    async function gerarPixPendente(requestBody) {\n      alternarCarregamento(true);\n      document.getElementById('pix-erro').style.display = 'none';\n      try {\n        const [response] = await Promise.all([\n          fetch('/api/public/pix', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) }),\n          new Promise((resolve) => setTimeout(resolve, 650))\n        ]);\n        const data = await response.json();\n        if (!response.ok) throw new Error(data.error || data.message || 'Não foi possível gerar o Pix');\n        const deposit = data.data?.deposit || data.deposit || data.data || {};\n        const qrCode = deposit.pix_code || deposit.qr_code || deposit.copy_paste || deposit.emv;\n        const txid = deposit.txid || deposit.id || data.data?.txid || data.txid;\n        if (!qrCode || !txid) throw new Error('O pagamento foi criado sem o código Pix');\n        payment = { qrCode, txid: String(txid), orderToken: data.orderToken || '', createdAt: Date.now() };\n        sessionStorage.setItem('pix_pendente', JSON.stringify(payment));\n        sessionStorage.removeItem('pix_request');\n        alternarCarregamento(false);\n        exibirPagamento(payment);\n      } catch (error) {\n        alternarCarregamento(false);\n        document.getElementById('pix-qrcode').style.display = 'none';\n        document.getElementById('pixErroTexto').textContent = error instanceof Error ? error.message : 'Confira os dados e tente novamente.';\n        document.getElementById('pix-erro').style.display = 'block';\n      }\n    }\n\n    function tentarNovamente() {\n      paymentRequest = lerSessao('pix_request');\n      if (!paymentRequest) { voltarPagamento(); return; }\n      gerarPixPendente(paymentRequest);\n    }\n\n    function iniciarContagem(createdAt) {\n      const elapsed = Math.floor((Date.now() - Number(createdAt || Date.now())) / 1000);\n      let segundos = Math.max(0, (30 * 60) - elapsed);\n      const el = document.getElementById('qrExpira');\n      const atualizar = () => {\n        if (segundos <= 0) { el.textContent = 'Pix expirado'; return false; }\n        const m = Math.floor(segundos / 60);\n        const s = String(segundos % 60).padStart(2, '0');\n        el.textContent = `Expira em ${m}:${s}`;\n        segundos -= 1;\n        return true;\n      };\n      atualizar();\n      const timer = setInterval(() => { if (!atualizar()) clearInterval(timer); }, 1000);\n    }\n\n    function copiarPix() {\n      const input = document.getElementById('pixCodigo');\n      input.select();\n      navigator.clipboard.writeText(input.value).catch(() => document.execCommand('copy'));\n      const msg = document.getElementById('qrCopiado');\n      msg.style.display = 'block';\n      setTimeout(() => { msg.style.display = 'none'; }, 2500);\n    }\n\n    function voltarPagamento() {\n      sessionStorage.removeItem('pix_pendente');\n      sessionStorage.removeItem('pix_request');\n      window.location.href = '/pagamento' + window.location.search;\n    }\n\n    function iniciarMonitoramento(txid, orderToken) {\n      const timer = setInterval(async () => {\n        try {\n          const query = new URLSearchParams({ txid });\n          if (orderToken) query.set('orderToken', orderToken);\n          const res = await fetch('/api/public/pix-status?' + query.toString());\n          const data = await res.json();\n          const dep = data.data?.deposit || data.deposit || data.data || {};\n          let providerStatus = '';\n          try {\n            const response = typeof dep.provider_response === 'string' ? JSON.parse(dep.provider_response) : dep.provider_response;\n            providerStatus = response?.data?.status || response?.status || '';\n          } catch (_) {}\n          const status = String(data.normalizedStatus || providerStatus || dep.status || data.status || '').trim().toLowerCase();\n          if (status === 'paid') {\n            clearInterval(timer);\n            sessionStorage.removeItem('pix_pendente');\n            document.getElementById('pix-qrcode').style.display = 'none';\n            document.getElementById('pix-aprovado').style.display = 'block';\n          }\n        } catch (_) {}\n      }, 5000);\n    }\n  <\/script>\n</body>\n</html>\n";
var formatMoney = (cents) => new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL"
}).format(cents / 100);
async function pendingPixHtml() {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const [assets, { data }] = await Promise.all([getBrandingAssetUrls(), supabaseAdmin.from("admin_settings").select("processing_fee_cents,icms_fee_cents,federal_fee_cents").eq("id", true).maybeSingle()]);
	const total = data ? data.processing_fee_cents + data.icms_fee_cents + data.federal_fee_cents : 5835;
	return pix_pendente_default.replaceAll("{{PRIMARY_BANNER_URL}}", assets.primaryBannerUrl).replaceAll("R$ 58,35", formatMoney(total));
}
var Route$8 = createFileRoute("/pix-pendente")({
	head: () => ({ meta: [
		{ title: "Pix pendente | Área segura" },
		{
			name: "description",
			content: "Acompanhe e conclua seu pagamento Pix."
		},
		{
			property: "og:title",
			content: "Pix pendente | Área segura"
		},
		{
			property: "og:description",
			content: "Acompanhe e conclua seu pagamento Pix."
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
	server: { handlers: { GET: async () => new Response(await pendingPixHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } }) } }
});
var $$splitComponentImporter$1 = () => import("./reset-password-Drx6hOYh.mjs");
var Route$7 = createFileRoute("/reset-password")({
	head: () => ({ meta: [
		{ title: "Redefinir senha | Central de pedidos" },
		{
			name: "description",
			content: "Crie uma nova senha para sua conta administrativa."
		},
		{
			property: "og:title",
			content: "Redefinir senha | Central de pedidos"
		},
		{
			property: "og:description",
			content: "Crie uma nova senha para sua conta administrativa."
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
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var status_default = "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Acompanhe seu pedido | Jadlog</title>\n  <link href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@400;500;600&display=swap\" rel=\"stylesheet\" />\n  <style>\n    :root {\n      --red: #E71B35;\n      --red-soft: #fce8ec;\n      --green: #138a4b;\n      --green-soft: #eaf7ef;\n      --ink: #3a3d45;\n      --muted: #6f7279;\n      --line: #eceef1;\n      --soft-line: #f3f4f6;\n      --page: #fafafa;\n      --surface: #ffffff;\n    }\n    * { box-sizing: border-box; }\n    html, body { margin: 0; min-height: 100%; }\n    body {\n      background: var(--page);\n      color: var(--ink);\n      font-family: 'Manrope', Arial, sans-serif;\n      letter-spacing: 0;\n    }\n    .page { width: 100%; min-height: 100vh; padding-bottom: 90px; }\n    .topbar {\n      height: 82px;\n      background: var(--surface);\n      border-bottom: 1px solid var(--line);\n      display: flex;\n      align-items: center;\n    }\n    .topbar-inner {\n      width: min(100% - 40px, 960px);\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 24px;\n    }\n    .brand { display: flex; align-items: center; min-width: 0; }\n    .brand-mark { width: 100px; height: 38px; object-fit: contain; object-position: left center; }\n    .secure { display: flex; align-items: center; gap: 7px; color: var(--muted); font-size: 12px; font-weight: 700; white-space: nowrap; }\n    .secure svg { width: 19px; height: 19px; color: var(--green); }\n    main { width: min(100% - 40px, 960px); margin: 24px auto 0; }\n    .summary {\n      background: var(--surface);\n      border: 1px solid var(--line);\n      border-radius: 16px;\n      padding: 24px;\n      box-shadow: 0 5px 18px rgba(25, 30, 40, .035);\n    }\n    .summary-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; }\n    .eyebrow { margin: 0 0 5px; color: var(--muted); font-size: 11px; font-weight: 700; text-transform: uppercase; }\n    .recipient { margin: 0; font-family: 'Sora', sans-serif; font-size: 23px; line-height: 1.25; font-weight: 600; text-transform: uppercase; }\n    .cpf { margin: 6px 0 0; color: var(--muted); font-size: 14px; }\n    .found { border: 1px solid #c8e8d4; background: var(--green-soft); color: var(--green); border-radius: 999px; padding: 6px 10px; font-size: 10px; font-weight: 700; }\n    .progress { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); margin: 25px 2px 0; }\n    .progress::before, .progress::after { content: ''; position: absolute; top: 7px; left: 8%; right: 8%; height: 2px; border-radius: 8px; }\n    .progress::before { background: #edf0f4; }\n    .progress::after { right: 50%; background: var(--red); }\n    .step { position: relative; z-index: 1; text-align: center; font-size: 10px; font-weight: 600; color: var(--muted); }\n    .dot { width: 14px; height: 14px; margin: 0 auto 8px; border-radius: 50%; background: var(--line); border: 3px solid var(--line); display: grid; place-items: center; }\n    .step.done .dot { width: 16px; height: 16px; margin-top: -1px; margin-bottom: 7px; color: var(--surface); background: var(--red); border-color: var(--red-soft); }\n    .dot svg { width: 8px; height: 8px; }\n    .status-grid { border-top: 1px solid var(--line); margin-top: 18px; padding-top: 16px; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 24px; }\n    .status-label { color: var(--muted); font-size: 11px; margin-bottom: 4px; }\n    .status-value { font-family: 'Sora', sans-serif; font-size: 14px; line-height: 1.4; font-weight: 600; text-transform: uppercase; }\n    .status-unit { text-align: right; }\n    .history-title { margin: 24px 3px 13px; font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 600; }\n    .timeline { position: relative; padding-left: 34px; }\n    .timeline::before { content: ''; position: absolute; top: 14px; bottom: 17px; left: 7px; width: 1px; background: var(--line); }\n    .event { position: relative; background: transparent; border: 0; border-bottom: 1px solid var(--line); border-radius: 0; padding: 15px 0 17px; margin: 0; box-shadow: none; }\n    .event.current { border-color: var(--line); }\n    .timeline-dot { position: absolute; left: -33px; top: 19px; width: 14px; height: 14px; border-radius: 50%; background: var(--surface); border: 3px solid var(--red); box-shadow: 0 0 0 3px var(--red-soft); }\n    .event-row { display: grid; grid-template-columns: 24px minmax(0, 1fr); gap: 12px; align-items: start; }\n    .event-icon { width: 22px; height: 22px; display: grid; place-items: center; color: var(--red); background: var(--red-soft); border-radius: 50%; }\n    .event-icon svg { width: 13px; height: 13px; }\n    .event h3 { margin: 0 0 4px; font-family: 'Sora', sans-serif; font-size: 13px; line-height: 1.4; font-weight: 600; }\n    .event p { margin: 0; color: var(--muted); font-size: 11px; line-height: 1.5; }\n    .order-photo { margin-top: 24px; }\n    .order-photo h2 { margin: 0 0 13px; font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 600; }\n    .order-photo-frame { position: relative; width: min(100%, 420px); margin: 0 auto; overflow: hidden; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); box-shadow: 0 5px 18px rgba(25, 30, 40, .035); }\n    .order-photo-frame img { display: block; width: 100%; height: auto; object-fit: contain; }\n    .order-recipient { position: absolute; left: 47%; bottom: 36%; width: calc(100% - 86px); transform: translateX(-50%); color: #17191f; text-align: center; }\n    .order-recipient-name { margin: 0; color: inherit; font-family: 'Sora', sans-serif; font-size: 14px; line-height: 1.4; font-weight: 600; text-transform: uppercase; overflow-wrap: anywhere; }\n    .bottom-action { position: fixed; z-index: 20; left: 0; right: 0; bottom: 0; background: color-mix(in srgb, var(--surface) 94%, transparent); border-top: 1px solid var(--line); padding: 12px max(20px, calc((100vw - 960px) / 2)); backdrop-filter: blur(12px); }\n    .details-button { width: 100%; min-height: 48px; border: 0; border-radius: 10px; color: var(--surface); background: var(--red); font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; transition: filter .18s ease, transform .18s ease; }\n    .details-button:hover { filter: brightness(.94); }\n    .details-button:active { transform: translateY(1px); }\n    @media (max-width: 640px) {\n      .page { padding-bottom: 72px; }\n      .topbar { height: 62px; }\n      .topbar-inner, main { width: calc(100% - 28px); }\n      .topbar-inner { gap: 12px; }\n      .brand-mark { width: 100px; height: 38px; }\n      .secure { gap: 5px; font-size: 9px; }\n      .secure svg { width: 15px; height: 15px; }\n      main { margin-top: 13px; }\n      .summary { border-radius: 14px; padding: 16px; }\n      .summary-head { align-items: flex-start; gap: 10px; }\n      .summary-head > div { min-width: 0; }\n      .recipient { font-size: 15px; line-height: 1.35; overflow-wrap: anywhere; }\n      .cpf { font-size: 12px; }\n      .found { flex: 0 0 auto; margin-top: 16px; padding: 5px 8px; font-size: 9px; }\n      .status-grid { margin-top: 14px; padding-top: 13px; gap: 12px; }\n      .status-label { font-size: 10px; }\n      .status-value { font-size: 12px; }\n      .progress { margin: 20px -4px 0; }\n      .step { font-size: 9px; }\n      .history-title { margin-top: 18px; font-size: 15px; }\n      .timeline { padding-left: 32px; }\n      .timeline::before { left: 7px; top: 14px; bottom: 16px; }\n      .event { padding: 14px 0 16px; }\n      .timeline-dot { left: -31px; top: 18px; }\n      .event-row { gap: 11px; }\n      .event h3 { font-size: 12px; overflow-wrap: anywhere; }\n      .event p { font-size: 10px; }\n      .order-photo { margin-top: 18px; }\n      .order-photo h2 { margin-bottom: 10px; font-size: 15px; }\n      .order-photo-frame { width: min(100%, 260px); border-radius: 14px; }\n      .order-recipient { left: 47%; bottom: 36%; width: calc(100% - 52px); }\n      .order-recipient-name { font-size: 12px; }\n      .bottom-action { padding: 10px 14px; }\n      .details-button { min-height: 44px; font-size: 13px; }\n    }\n    @media (prefers-reduced-motion: reduce) { .details-button { transition: none; } }\n  </style>\n</head>\n<body>\n  <div class=\"page\">\n    <header class=\"topbar\">\n      <div class=\"topbar-inner\">\n        <div class=\"brand\"><img class=\"brand-mark\" src=\"{{HEADER_LOGO_URL}}\" alt=\"Logo\" /></div>\n        <div class=\"secure\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z\"/><path d=\"m9 12 2 2 4-4\"/></svg>\n          <span>CONSULTA SEGURA</span>\n        </div>\n      </div>\n    </header>\n\n    <main>\n      <section class=\"summary\">\n        <div class=\"summary-head\">\n          <div>\n            <p class=\"eyebrow\">Destinatário</p>\n            <h1 class=\"recipient\" id=\"nomeDisplay\">CLIENTE JADLOG</h1>\n            <p class=\"cpf\" id=\"cpfDisplay\">***.***.***-**</p>\n          </div>\n          <span class=\"found\">LOCALIZADO</span>\n        </div>\n\n        <div class=\"progress\" aria-label=\"Andamento da entrega\">\n          <div class=\"step done\"><div class=\"dot\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"m5 12 4 4L19 6\"/></svg></div><span>Identificado</span></div>\n          <div class=\"step done\"><div class=\"dot\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><path d=\"m5 12 4 4L19 6\"/></svg></div><span>Na base</span></div>\n          <div class=\"step\"><div class=\"dot\"></div><span>Em rota</span></div>\n          <div class=\"step\"><div class=\"dot\"></div><span>Entregue</span></div>\n        </div>\n\n        <div class=\"status-grid\">\n          <div><div class=\"status-label\">Status atual</div><div class=\"status-value\">Retido a mais de 7 dias</div></div>\n          <div class=\"status-unit\"><div class=\"status-label\">Unidade</div><div class=\"status-value\">São Paulo, SP</div></div>\n        </div>\n      </section>\n\n      <h2 class=\"history-title\">Histórico do pedido</h2>\n      <section class=\"timeline\">\n        <article class=\"event\">\n          <span class=\"timeline-dot\"></span>\n          <div class=\"event-row\"><span class=\"event-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m21 8-9 5-9-5\"/><path d=\"m3 8 9-5 9 5v8l-9 5-9-5Z\"/><path d=\"M12 13v8\"/><path d=\"m7.5 5.5 9 5\"/></svg></span><div><h3>Pedido enviado pelo remetente</h3><p>O pedido foi enviado pelo remetente para a transportadora.</p></div></div>\n        </article>\n        <article class=\"event\">\n          <span class=\"timeline-dot\"></span>\n          <div class=\"event-row\"><span class=\"event-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/></svg></span><div><h3>Pedido recebido na base de São Paulo</h3><p>O pedido foi recebido e registrado na unidade logística.</p></div></div>\n        </article>\n        <article class=\"event current\">\n          <span class=\"timeline-dot\"></span>\n          <div class=\"event-row\"><span class=\"event-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m21 8-9 5-9-5\"/><path d=\"m3 8 9-5 9 5v8l-9 5-9-5Z\"/><path d=\"M12 13v8\"/><path d=\"m7.5 5.5 9 5\"/></svg></span><div><h3>Pedido Retido Aguardando Regularização</h3><p>O pedido está retido há mais de 7 dias na unidade logística.</p></div></div>\n        </article>\n      </section>\n\n      <section class=\"order-photo\" aria-labelledby=\"orderPhotoTitle\">\n        <h2 id=\"orderPhotoTitle\">Foto do pedido retido</h2>\n        <div class=\"order-photo-frame\">\n          <img src=\"/assets/pedido-retido-final.png\" alt=\"Pedido retido com etiqueta de transporte\" />\n          <div class=\"order-recipient\" aria-label=\"Destinatário consultado\">\n            <p class=\"order-recipient-name\" id=\"orderRecipientName\">CLIENTE JADLOG</p>\n          </div>\n        </div>\n      </section>\n    </main>\n\n    <div class=\"bottom-action\"><button class=\"details-button\" type=\"button\" onclick=\"verDetalhes()\">Ver detalhes</button></div>\n  </div>\n\n  <script>\n    const params = new URLSearchParams(window.location.search);\n    const rawCpf = (params.get('cpf') || sessionStorage.getItem('fl_cpf') || '').replace(/\\D/g, '').slice(0, 11);\n    const storedCpf = sessionStorage.getItem('fl_nome_cpf') || '';\n    const storedName = storedCpf === rawCpf ? (sessionStorage.getItem('fl_nome') || '') : '';\n    const nomeParam = params.get('nome') || storedName;\n    const nomeEl = document.getElementById('nomeDisplay');\n    const orderRecipientNameEl = document.getElementById('orderRecipientName');\n    const cpfEl = document.getElementById('cpfDisplay');\n\n    function titleCase(value) {\n      const minors = ['de', 'da', 'do', 'das', 'dos', 'e', 'a', 'o'];\n      return value.toLowerCase().split(/\\s+/).filter(Boolean).map((word, index) =>\n        index === 0 || !minors.includes(word) ? word.charAt(0).toUpperCase() + word.slice(1) : word\n      ).join(' ');\n    }\n\n    function maskedCpf(value) {\n      if (value.length !== 11) return '***.***.***-**';\n      return `***.***.***-${value.slice(-2)}`;\n    }\n\n    function setName(value) {\n      if (!value) return;\n      const formatted = titleCase(value);\n      nomeEl.textContent = formatted;\n      orderRecipientNameEl.textContent = formatted.toUpperCase();\n      sessionStorage.setItem('fl_nome', formatted);\n      sessionStorage.setItem('fl_nome_cpf', rawCpf);\n    }\n\n    cpfEl.textContent = maskedCpf(rawCpf);\n    if (rawCpf.length === 11) sessionStorage.setItem('fl_cpf', rawCpf);\n    setName(nomeParam);\n\n    async function loadCustomer() {\n      if (nomeParam || !rawCpf) return;\n      try {\n        const response = await fetch(`/api/public/cpf?cpf=${encodeURIComponent(rawCpf)}`);\n        const data = await response.json();\n        if (!response.ok) throw new Error(data?.error || 'CPF não localizado');\n        const foundName = data?.nome || data?.dadosPessoais?.nome;\n        if (!foundName) throw new Error('CPF não localizado');\n        setName(foundName);\n      } catch (_) {\n        nomeEl.textContent = 'CPF não localizado';\n        orderRecipientNameEl.textContent = 'CPF NÃO LOCALIZADO';\n      }\n    }\n\n    function verDetalhes() {\n      const currentName = nomeEl.textContent || '';\n      window.location.href = `/checkout?cpf=${encodeURIComponent(rawCpf)}&nome=${encodeURIComponent(currentName)}`;\n    }\n\n    loadCustomer();\n  <\/script>\n</body>\n</html>\n";
var Route$6 = createFileRoute("/status")({
	head: () => ({ meta: [
		{ title: "Status da Entrega | Jadlog" },
		{
			name: "description",
			content: "Acompanhe o status e as pendências da sua entrega Jadlog."
		},
		{
			property: "og:title",
			content: "Status da Entrega | Jadlog"
		},
		{
			property: "og:description",
			content: "Acompanhe o status e as pendências da sua entrega Jadlog."
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
	server: { handlers: { GET: async () => new Response(status_default.replaceAll("{{HEADER_LOGO_URL}}", await getHeaderLogoUrl()), { headers: { "Content-Type": "text/html; charset=utf-8" } }) } }
});
var $$splitComponentImporter = () => import("./admin-5tGzmQ3X.mjs");
var Route$5 = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [
		{ title: "Painel administrativo | Central de pedidos" },
		{
			name: "description",
			content: "Gestão de pedidos, conversão, integrações e configurações."
		},
		{
			property: "og:title",
			content: "Painel administrativo | Central de pedidos"
		},
		{
			property: "og:description",
			content: "Gestão de pedidos, conversão, integrações e configurações."
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
function findName(value) {
	if (!value || typeof value !== "object") return null;
	const record = value;
	for (const key of [
		"nome",
		"name",
		"nomeCompleto",
		"nome_completo"
	]) {
		const candidate = record[key];
		if (typeof candidate === "string" && candidate.trim().length > 1) return candidate.trim();
	}
	for (const child of Object.values(record)) {
		const found = findName(child);
		if (found) return found;
	}
	return null;
}
var cors = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
	"Content-Type": "application/json; charset=utf-8"
};
var Route$4 = createFileRoute("/api/public/cpf")({ server: { handlers: {
	OPTIONS: () => new Response(null, {
		status: 200,
		headers: cors
	}),
	GET: async ({ request }) => {
		const cpf = (new URL(request.url).searchParams.get("cpf") ?? "").replace(/\D/g, "");
		if (cpf.length !== 11) return new Response(JSON.stringify({ error: "CPF inválido" }), {
			status: 400,
			headers: cors
		});
		try {
			const token = process.env.SEARCHAPI_CPF_TOKEN;
			if (!token) return new Response(JSON.stringify({ error: "Configuração inválida" }), {
				status: 500,
				headers: cors
			});
			const response = await fetch(`https://searchapi.it.com/consulta?token_api=${token}&cpf=${encodeURIComponent(cpf)}`);
			const raw = await response.text();
			let data;
			try {
				data = JSON.parse(raw);
			} catch {
				data = null;
			}
			if (!response.ok) return new Response(JSON.stringify({ error: "Não foi possível consultar este CPF" }), {
				status: response.status,
				headers: cors
			});
			const nome = findName(data);
			if (!nome) return new Response(JSON.stringify({ error: "CPF não localizado" }), {
				status: 404,
				headers: cors
			});
			return new Response(JSON.stringify({ nome }), {
				status: 200,
				headers: cors
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: e.message }), {
				status: 500,
				headers: cors
			});
		}
	}
} } });
var HUBPAGUE_API_URL = "https://api.hubpague.io/v1";
async function getHubpagueToken() {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data, error } = await supabaseAdmin.from("admin_settings").select("hubpague_api_token").eq("id", true).single();
	if (error || !data?.hubpague_api_token) {
		const fallback = process.env.HUBPAGUE_API_TOKEN;
		if (!fallback) throw new Error("Token Hubpague não configurado. Configure nas Configurações do painel admin.");
		return fallback;
	}
	return data.hubpague_api_token;
}
async function createHubpaguePayment(config) {
	const token = await getHubpagueToken();
	const response = await fetch(`${HUBPAGUE_API_URL}/payments`, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			amount: config.amount,
			customer: {
				email: config.customer_email,
				name: config.customer_name,
				document: config.customer_document
			},
			description: config.description || "Pedido de compra",
			reference_id: config.reference_id,
			webhook_url: config.webhook_url
		})
	});
	if (!response.ok) throw new Error(`Erro ao criar pagamento no Hubpague: ${response.statusText}`);
	return response.json();
}
async function getHubpaguePaymentStatus(paymentId) {
	const token = await getHubpagueToken();
	const response = await fetch(`${HUBPAGUE_API_URL}/payments/${paymentId}`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${token}`,
			"Content-Type": "application/json"
		}
	});
	if (!response.ok) throw new Error(`Erro ao buscar status de pagamento: ${response.statusText}`);
	return response.json();
}
var UTMIFY_ENDPOINT = "https://api.utmify.com.br/api-credentials/orders";
var PRODUCT_ID = "jadlog-regularizacao-tarifa";
var PRODUCT_NAME = "Regularização de Tarifa - Jadlog";
function utcDate(date = /* @__PURE__ */ new Date()) {
	return date.toISOString().slice(0, 19).replace("T", " ");
}
async function sendUtmifyOrder(order, status) {
	const apiToken = process.env["UTMIFY_API_TOKEN"] ?? "";
	if (!apiToken) {
		console.error("UTMify: UTMIFY_API_TOKEN não configurado");
		return false;
	}
	const response = await fetch(UTMIFY_ENDPOINT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-token": apiToken
		},
		body: JSON.stringify({
			orderId: order.orderId,
			platform: "Jadlog",
			paymentMethod: "pix",
			status,
			createdAt: order.createdAt,
			approvedDate: status === "paid" ? utcDate() : null,
			refundedAt: null,
			customer: {
				name: order.customer.name,
				email: order.customer.email,
				phone: null,
				document: order.customer.document,
				country: "BR",
				...order.customer.ip ? { ip: order.customer.ip } : {}
			},
			products: [{
				id: PRODUCT_ID,
				name: PRODUCT_NAME,
				planId: null,
				planName: null,
				quantity: 1,
				priceInCents: order.amountInCents
			}],
			trackingParameters: order.trackingParameters,
			commission: {
				totalPriceInCents: order.amountInCents,
				gatewayFeeInCents: 0,
				userCommissionInCents: order.amountInCents,
				currency: "BRL"
			},
			isTest: false
		})
	});
	if (!response.ok) {
		const detail = (await response.text()).slice(0, 1e3);
		console.error(`UTMify: falha ao enviar ${status} (${response.status}): ${detail}`);
		return false;
	}
	return true;
}
function currentUtcDate() {
	return utcDate();
}
var approvedStatuses = /* @__PURE__ */ new Set([
	"paid",
	"approved",
	"completed",
	"confirmed",
	"success",
	"succeeded",
	"pago",
	"aprovado"
]);
var trackingKeys = [
	"src",
	"sck",
	"utm_source",
	"utm_campaign",
	"utm_medium",
	"utm_content",
	"utm_term"
];
function parseProviderResponse(deposit) {
	const raw = deposit["provider_response"];
	if (!raw) return null;
	try {
		const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
		if (!parsed || typeof parsed !== "object") return null;
		const root = parsed;
		return root["data"] && typeof root["data"] === "object" ? root["data"] : root;
	} catch {
		return null;
	}
}
function extractDeposit(data) {
	if (!data || typeof data !== "object") return null;
	const root = data;
	const nested = root["data"] && typeof root["data"] === "object" ? root["data"] : void 0;
	const deposit = nested?.["deposit"] ?? root["deposit"] ?? nested ?? root;
	return deposit && typeof deposit === "object" ? deposit : null;
}
function extractGatewayStatus(data) {
	const deposit = extractDeposit(data);
	if (!deposit) return "";
	const provider = parseProviderResponse(deposit);
	const rawStatus = provider?.["status"] ?? provider?.["transaction_status"] ?? deposit["status"] ?? deposit["transaction_status"] ?? "";
	return String(rawStatus).trim().toLowerCase();
}
function isApprovedStatus(status) {
	return approvedStatuses.has(status.trim().toLowerCase());
}
function normalizeTracking(value) {
	const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
	return Object.fromEntries(trackingKeys.map((key) => [key, typeof source[key] === "string" ? source[key] : null]));
}
function orderFromRow(row) {
	return {
		orderId: row.txid,
		createdAt: row.created_at ? new Date(row.created_at).toISOString().slice(0, 19).replace("T", " ") : currentUtcDate(),
		amountInCents: row.amount_in_cents,
		customer: {
			name: row.customer_name,
			email: row.customer_email,
			document: row.customer_document,
			...row.customer_ip ? { ip: row.customer_ip } : {}
		},
		trackingParameters: normalizeTracking(row.tracking_parameters)
	};
}
async function savePaymentOrder(order) {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.from("payment_orders").upsert({
		txid: order.orderId,
		amount_in_cents: order.amountInCents,
		customer_name: order.customer.name,
		customer_email: order.customer.email,
		customer_document: order.customer.document,
		customer_ip: order.customer.ip ?? null,
		tracking_parameters: order.trackingParameters
	}, { onConflict: "txid" });
	if (error) throw error;
}
async function markPendingResult(txid, sent, errorMessage) {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	await supabaseAdmin.from("payment_orders").update({
		...sent ? {
			utmify_pending_sent_at: (/* @__PURE__ */ new Date()).toISOString(),
			last_error: null
		} : {},
		...!sent ? { last_error: errorMessage ?? "Falha ao enviar venda pendente à UTMify" } : {}
	}).eq("txid", txid);
}
async function reconcilePayment(txid, gatewayResult) {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	let gateway = gatewayResult;
	if (!gateway) {
		const { data: existing, error } = await supabaseAdmin.from("payment_orders").select("gateway_status").eq("txid", txid).maybeSingle();
		if (error) throw error;
		if (!existing) throw new Error("Pedido não encontrado");
		gateway = {
			response: new Response(null, { status: 200 }),
			text: "",
			data: null,
			normalizedStatus: existing.gateway_status
		};
	}
	const checkedAt = (/* @__PURE__ */ new Date()).toISOString();
	await supabaseAdmin.from("payment_orders").update({
		gateway_status: gateway.normalizedStatus || "unknown",
		last_checked_at: checkedAt
	}).eq("txid", txid);
	if (!isApprovedStatus(gateway.normalizedStatus)) return {
		...gateway,
		utmifyPaidSent: false
	};
	const { data: claimed, error: claimError } = await supabaseAdmin.rpc("claim_payment_order_for_utmify", { _txid: txid }).maybeSingle();
	if (claimError) throw claimError;
	if (!claimed) {
		const { data: existing } = await supabaseAdmin.from("payment_orders").select("utmify_paid_sent_at").eq("txid", txid).maybeSingle();
		return {
			...gateway,
			utmifyPaidSent: Boolean(existing?.utmify_paid_sent_at)
		};
	}
	const order = orderFromRow(claimed);
	try {
		if (!claimed.utmify_pending_sent_at) {
			if (await sendUtmifyOrder(order, "waiting_payment")) await supabaseAdmin.from("payment_orders").update({ utmify_pending_sent_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("txid", txid);
		}
		const paidSent = await sendUtmifyOrder(order, "paid");
		await supabaseAdmin.from("payment_orders").update(paidSent ? {
			utmify_paid_sent_at: (/* @__PURE__ */ new Date()).toISOString(),
			utmify_paid_claimed_at: null,
			last_error: null
		} : {
			utmify_paid_claimed_at: null,
			last_error: "UTMify recusou a atualização da venda paga"
		}).eq("txid", txid);
		return {
			...gateway,
			utmifyPaidSent: paidSent
		};
	} catch (error) {
		const message = error instanceof Error ? error.message.slice(0, 1e3) : "Erro desconhecido";
		await supabaseAdmin.from("payment_orders").update({
			utmify_paid_claimed_at: null,
			last_error: message
		}).eq("txid", txid);
		throw error;
	}
}
async function reconcileOutstandingPayments(limit = 100) {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const retryBefore = (/* @__PURE__ */ new Date(Date.now() - 6e4)).toISOString();
	const { data: orders, error } = await supabaseAdmin.from("payment_orders").select("txid").is("utmify_paid_sent_at", null).in("gateway_status", Array.from(approvedStatuses)).or(`last_checked_at.is.null,last_checked_at.lt.${retryBefore}`).order("last_checked_at", {
		ascending: true,
		nullsFirst: true
	}).order("created_at", { ascending: true }).limit(limit);
	if (error) throw error;
	const results = await Promise.allSettled((orders ?? []).map(({ txid }) => reconcilePayment(txid)));
	return {
		checked: results.length,
		paidSent: results.filter((result) => result.status === "fulfilled" && result.value.utmifyPaidSent).length,
		failed: results.filter((result) => result.status === "rejected").length
	};
}
var Route$3 = createFileRoute("/api/public/pix")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await request.json();
		if (!body.customer?.name) return Response.json({ error: "Nome do cliente obrigatório" }, { status: 400 });
		const amount = Math.round((body.amount || 0) * 100);
		if (amount <= 0) return Response.json({ error: "Valor do pagamento inválido" }, { status: 400 });
		const paymentResponse = await createHubpaguePayment({
			amount,
			customer_name: body.customer.name,
			customer_email: body.customer.email || "nao-informado@email.com",
			customer_document: body.customer.document,
			description: body.description || "Pedido de compra",
			reference_id: `order_${Date.now()}`
		});
		await savePaymentOrder({
			orderId: paymentResponse.id,
			createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " "),
			amountInCents: amount,
			customer: {
				name: body.customer.name,
				email: body.customer.email || "nao-informado@email.com",
				document: body.customer.document
			},
			trackingParameters: body.trackingParameters || {}
		});
		return Response.json({
			data: { deposit: {
				txid: paymentResponse.id,
				pix_code: paymentResponse.qr_code || "",
				qr_code: paymentResponse.qr_code || "",
				copy_paste: paymentResponse.qr_code || "",
				status: "pending",
				provider_response: JSON.stringify(paymentResponse)
			} },
			orderToken: paymentResponse.id
		});
	} catch (error) {
		console.error("Erro ao gerar PIX:", error);
		return Response.json({ error: error instanceof Error ? error.message : "Erro ao gerar PIX" }, { status: 500 });
	}
} } } });
var Route$2 = createFileRoute("/api/public/pix-status")({ server: { handlers: { GET: async ({ request }) => {
	try {
		const txid = new URL(request.url).searchParams.get("txid");
		if (!txid) return Response.json({ error: "txid obrigatório" }, { status: 400 });
		const paymentData = await getHubpaguePaymentStatus(txid);
		const normalizedStatus = extractGatewayStatus(paymentData);
		await reconcilePayment(txid, {
			response: new Response(null, { status: 200 }),
			text: JSON.stringify(paymentData),
			data: paymentData,
			normalizedStatus
		});
		return Response.json({
			data: { deposit: {
				txid,
				status: normalizedStatus,
				provider_response: JSON.stringify(paymentData)
			} },
			normalizedStatus,
			status: normalizedStatus
		});
	} catch (error) {
		console.error("Erro ao buscar status do PIX:", error);
		return Response.json({ error: error instanceof Error ? error.message : "Erro ao buscar status" }, { status: 500 });
	}
} } } });
var Route$1 = createFileRoute("/api/public/reconcile-payments")({ server: { handlers: { POST: async ({ request }) => {
	const expected = process.env["RECONCILIATION_TOKEN"];
	const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
	if (!expected || !supplied) return new Response("Unauthorized", { status: 401 });
	const digest = (value) => createHmac("sha256", expected).update(value).digest();
	if (!timingSafeEqual(digest(expected), digest(supplied))) return new Response("Unauthorized", { status: 401 });
	try {
		return Response.json({
			success: true,
			...await reconcileOutstandingPayments()
		});
	} catch {
		return Response.json({ success: false }, { status: 500 });
	}
} } } });
var tracking = objectType({
	src: stringType().nullable(),
	sck: stringType().nullable(),
	utm_source: stringType().nullable(),
	utm_campaign: stringType().nullable(),
	utm_medium: stringType().nullable(),
	utm_content: stringType().nullable(),
	utm_term: stringType().nullable()
});
var schema = objectType({
	status: enumType(["waiting_payment", "paid"]),
	order: objectType({
		orderId: stringType().min(1).max(200),
		createdAt: stringType().datetime().optional(),
		amountInCents: numberType().int().positive().max(1e8),
		customer: objectType({
			name: stringType().min(1).max(200),
			email: stringType().email(),
			document: stringType().max(30).nullable(),
			ip: stringType().max(64).optional()
		}),
		trackingParameters: tracking
	})
});
var Route = createFileRoute("/api/public/utmify-webhook")({ server: { handlers: { POST: async ({ request }) => {
	const secret = process.env["ORDER_WEBHOOK_SECRET"];
	const timestamp = request.headers.get("x-order-timestamp") ?? "";
	const received = request.headers.get("x-order-signature") ?? "";
	if (!secret || !timestamp || !Number.isFinite(Number(timestamp)) || Math.abs(Date.now() / 1e3 - Number(timestamp)) > 300) return new Response("Unauthorized", { status: 401 });
	const raw = await request.text();
	if (raw.length > 65536) return new Response("Payload too large", { status: 413 });
	const expected = `sha256=${createHmac("sha256", secret).update(`${timestamp}.${raw}`).digest("hex")}`;
	const a = Buffer.from(expected), b = Buffer.from(received);
	if (a.length !== b.length || !timingSafeEqual(a, b)) return new Response("Unauthorized", { status: 401 });
	let json;
	try {
		json = JSON.parse(raw);
	} catch {
		return new Response("Invalid JSON", { status: 400 });
	}
	const parsed = schema.safeParse(json);
	if (!parsed.success) return new Response("Invalid payload", { status: 400 });
	const { order: input, status } = parsed.data;
	const order = {
		...input,
		createdAt: input.createdAt ? new Date(input.createdAt).toISOString().slice(0, 19).replace("T", " ") : currentUtcDate(),
		customer: {
			name: input.customer.name,
			email: input.customer.email,
			document: input.customer.document,
			...input.customer.ip ? { ip: input.customer.ip } : {}
		}
	};
	try {
		const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
		const { data: existing, error } = await supabaseAdmin.from("payment_orders").select("amount_in_cents,customer_document,gateway_status,utmify_pending_sent_at").eq("txid", order.orderId).maybeSingle();
		if (error) throw error;
		if (existing && (existing.amount_in_cents !== order.amountInCents || existing.customer_document !== order.customer.document)) return new Response("Order conflict", { status: 409 });
		if (!existing) await savePaymentOrder(order);
		if (status === "paid") {
			const result = await reconcilePayment(order.orderId, {
				response: new Response(null, { status: 200 }),
				text: "",
				data: null,
				normalizedStatus: "paid"
			});
			return Response.json({ success: result.utmifyPaidSent }, { status: result.utmifyPaidSent ? 200 : 503 });
		}
		if (existing?.gateway_status === "paid" || existing?.utmify_pending_sent_at) return Response.json({ success: true });
		const sent = await sendUtmifyOrder(order, "waiting_payment");
		await markPendingResult(order.orderId, sent);
		return Response.json({ success: sent }, { status: sent ? 200 : 503 });
	} catch {
		return Response.json({ success: false }, { status: 500 });
	}
} } } });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AuthenticatedRouteRoute = Route$11.update({
	id: "/_authenticated",
	getParentRoute: () => Route$13
});
var AutenticacaoRoute = Route$14.update({
	id: "/autenticacao",
	path: "/autenticacao",
	getParentRoute: () => Route$13
});
var AuthRoute = Route$15.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$13
});
var CheckoutRoute = Route$10.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$13
});
var PagamentoRoute = Route$9.update({
	id: "/pagamento",
	path: "/pagamento",
	getParentRoute: () => Route$13
});
var PixPendenteRoute = Route$8.update({
	id: "/pix-pendente",
	path: "/pix-pendente",
	getParentRoute: () => Route$13
});
var ResetPasswordRoute = Route$7.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$13
});
var StatusRoute = Route$6.update({
	id: "/status",
	path: "/status",
	getParentRoute: () => Route$13
});
var AuthenticatedAdminRoute = Route$5.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var ApiPublicCpfRoute = Route$4.update({
	id: "/api/public/cpf",
	path: "/api/public/cpf",
	getParentRoute: () => Route$13
});
var ApiPublicPixRoute = Route$3.update({
	id: "/api/public/pix",
	path: "/api/public/pix",
	getParentRoute: () => Route$13
});
var ApiPublicPixStatusRoute = Route$2.update({
	id: "/api/public/pix-status",
	path: "/api/public/pix-status",
	getParentRoute: () => Route$13
});
var ApiPublicReconcilePaymentsRoute = Route$1.update({
	id: "/api/public/reconcile-payments",
	path: "/api/public/reconcile-payments",
	getParentRoute: () => Route$13
});
var ApiPublicUtmifyWebhookRoute = Route.update({
	id: "/api/public/utmify-webhook",
	path: "/api/public/utmify-webhook",
	getParentRoute: () => Route$13
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AutenticacaoRoute,
	AuthRoute,
	CheckoutRoute,
	PagamentoRoute,
	PixPendenteRoute,
	ResetPasswordRoute,
	StatusRoute,
	ApiPublicCpfRoute,
	ApiPublicPixRoute,
	ApiPublicPixStatusRoute,
	ApiPublicReconcilePaymentsRoute,
	ApiPublicUtmifyWebhookRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
