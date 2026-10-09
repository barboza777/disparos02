import { r as __toESM } from "../_runtime.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-D_XPX4td.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Input, r as Label, t as Button } from "./label-CbcRcarg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-Drx6hOYh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPasswordPage() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [valid, setValid] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("Validando link…");
	(0, import_react.useEffect)(() => {
		const recovery = new URLSearchParams(window.location.hash.slice(1)).get("type") === "recovery";
		supabase.auth.getSession().then(({ data }) => {
			const ok = recovery || Boolean(data.session);
			setValid(ok);
			setMessage(ok ? "" : "Este link expirou ou não é válido.");
		});
	}, []);
	async function submit(event) {
		event.preventDefault();
		const { error } = await supabase.auth.updateUser({ password });
		if (error) return setMessage("Não foi possível alterar a senha.");
		await navigate({ to: "/admin" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-screen place-items-center bg-muted/40 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "w-full max-w-sm space-y-5 rounded-lg border bg-card p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "Nova senha"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Escolha uma senha segura para continuar."
				})] }),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: message
				}),
				valid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "new-password",
						children: "Nova senha"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "new-password",
						type: "password",
						minLength: 8,
						value: password,
						onChange: (event) => setPassword(event.target.value),
						required: true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					variant: "destructive",
					children: "Salvar nova senha"
				})] })
			]
		})
	});
}
//#endregion
export { ResetPasswordPage as component };
