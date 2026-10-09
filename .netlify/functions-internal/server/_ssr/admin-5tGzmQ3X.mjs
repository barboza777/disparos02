import { r as __toESM } from "../_runtime.mjs";
import { W as isRedirect, b as useNavigate, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-Dcy-eaQM.mjs";
import { t as supabase } from "./client-D_XPX4td.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BvrfYSdR.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn, n as Input, r as Label, t as Button } from "./label-CbcRcarg.mjs";
import { a as stringType, i as objectType, n as literalType, r as numberType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as ChevronRight, a as Search, b as ChartColumn, f as ImageUp, g as ChevronUp, h as CircleCheck, i as Settings, l as LogOut, m as CircleDollarSign, n as TriangleAlert, o as Save, p as ClipboardList, r as TrendingUp, s as Menu, t as X, v as ChevronDown, y as Check } from "../_libs/lucide-react.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-5tGzmQ3X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var settingsSchema = objectType({
	companyName: stringType().trim().min(2).max(160),
	companyDocument: stringType().trim().min(11).max(30),
	supportPhone: stringType().trim().min(10).max(30),
	checkoutDescription: stringType().trim().min(3).max(120),
	warningBannerText: stringType().trim().max(180),
	attentionTitle: stringType().trim().min(1).max(500),
	headerLogoPath: stringType().trim().max(255),
	bannerPrimaryPath: stringType().trim().max(255),
	bannerSecondaryPath: stringType().trim().max(255),
	footerPolicyOneLabel: stringType().trim().max(80),
	footerPolicyOneUrl: stringType().trim().url().or(literalType("")),
	footerPolicyTwoLabel: stringType().trim().max(80),
	footerPolicyTwoUrl: stringType().trim().url().or(literalType("")),
	processingFeeCents: numberType().int().min(0).max(1e6),
	icmsFeeCents: numberType().int().min(0).max(1e6),
	federalFeeCents: numberType().int().min(0).max(1e6),
	hubpagueApiToken: stringType().trim().min(10).max(500),
	searchapiCpfToken: stringType().trim().min(1).max(500)
});
var getAdminDashboard = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("bd91712aa12a864ae43341e860d6d1c64b91b59ae5ce60ea0dbdc10eee9819c1"));
var getAdminSettings = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("0b8c54d305a7448366e680721291cd8163ae2012fe94e3a21bb350b012171fa0"));
var saveAdminSettings = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => settingsSchema.parse(input)).handler(createSsrRpc("6819ef62a115a9fed5da9cfb07cf9da76d39c84579b91eccca9a635402a4e228"));
var money = (cents) => new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL"
}).format(cents / 100);
var dateTime = (value) => value ? new Intl.DateTimeFormat("pt-BR", {
	dateStyle: "short",
	timeStyle: "short"
}).format(new Date(value)) : "—";
var paidStatuses = [
	"paid",
	"approved",
	"completed",
	"confirmed",
	"success",
	"pago",
	"aprovado"
];
var maskEmail = (email) => {
	const [name = "", domain = ""] = email.split("@");
	return `${name.slice(0, 2)}***@${domain}`;
};
var maskDocument = (value) => value ? `${value.slice(0, 3)}.***.***-${value.slice(-2)}` : "—";
function AdminPage() {
	const navigate = useNavigate();
	const fetchDashboard = useServerFn(getAdminDashboard);
	const fetchSettings = useServerFn(getAdminSettings);
	const saveSettings = useServerFn(saveAdminSettings);
	const [view, setView] = (0, import_react.useState)("overview");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [dashboard, setDashboard] = (0, import_react.useState)(null);
	const [settings, setSettings] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		Promise.all([fetchDashboard(), fetchSettings()]).then(([dashboardData, settingsData]) => {
			setDashboard(dashboardData);
			setSettings(settingsData);
		}).catch((reason) => setError(reason instanceof Error ? reason.message : "Não foi possível carregar o painel.")).finally(() => setLoading(false));
	}, [fetchDashboard, fetchSettings]);
	async function signOut() {
		await supabase.auth.signOut();
		await navigate({
			to: "/auth",
			replace: true
		});
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-muted/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-7 w-7 animate-spin rounded-full border-2 border-destructive border-t-transparent",
			"aria-label": "Carregando"
		})
	});
	if (error || !dashboard || !settings) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-muted/40 p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "pt-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mx-auto mb-3 text-destructive" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: "Acesso indisponível"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: error || "Não foi possível carregar seus dados."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-5",
						variant: "outline",
						onClick: signOut,
						children: "Voltar ao acesso"
					})
				]
			})
		})
	});
	const navigation = [
		{
			id: "overview",
			label: "Visão geral",
			icon: ChartColumn
		},
		{
			id: "orders",
			label: "Pedidos",
			icon: ClipboardList
		},
		{
			id: "settings",
			label: "Configurações",
			icon: Settings
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-muted/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `fixed inset-y-0 left-0 z-40 w-64 border-r bg-card transition-transform lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-16 items-center justify-between border-b px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase text-destructive",
							children: "Central"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Administração"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setMenuOpen(false),
							"aria-label": "Fechar menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "space-y-1 p-3",
						children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: view === item.id ? "secondary" : "ghost",
							className: "w-full justify-start",
							onClick: () => {
								setView(item.id);
								setMenuOpen(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {}), item.label]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-3 bottom-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "w-full justify-start text-muted-foreground",
							onClick: signOut,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), "Sair"]
						})
					})
				]
			}),
			menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-30 bg-foreground/20 lg:hidden",
				onClick: () => setMenuOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "lg:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setMenuOpen(true),
							"aria-label": "Abrir menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "truncate text-lg font-semibold",
								children: navigation.find((item) => item.id === view)?.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Pedidos e operação em tempo real"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-chart-2" }), "Operação ativa"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl p-4 lg:p-8",
					children: [
						view === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
							dashboard,
							onOrders: () => setView("orders")
						}),
						view === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orders, { dashboard }),
						view === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, {
							initial: settings,
							onSave: async (payload) => {
								await saveSettings({ data: payload });
								toast.success("Configurações salvas");
							}
						})
					]
				})]
			})
		]
	});
}
function Overview({ dashboard, onOrders }) {
	const cards = [
		{
			label: "Pedidos gerados",
			value: String(dashboard.metrics.totalOrders),
			note: `${dashboard.metrics.paidOrders} pagos`,
			icon: ClipboardList
		},
		{
			label: "Conversão",
			value: `${dashboard.metrics.conversion.toFixed(1)}%`,
			note: "pagos sobre gerados",
			icon: TrendingUp
		},
		{
			label: "Receita aprovada",
			value: money(dashboard.metrics.approvedRevenueCents),
			note: "pagamentos confirmados",
			icon: CircleDollarSign
		},
		{
			label: "Valor pendente",
			value: money(dashboard.metrics.pendingAmountCents),
			note: "aguardando pagamento",
			icon: TriangleAlert
		}
	];
	const max = Math.max(...dashboard.daily.map((day) => day.orders), 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
				children: cards.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "rounded-lg shadow-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-muted-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 text-destructive" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-semibold",
								children: item.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: item.note
							})
						]
					})
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 xl:grid-cols-[1.6fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-lg shadow-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: "Pedidos nos últimos 7 dias"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-56 items-end gap-3 border-b",
						children: dashboard.daily.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-1 flex-col justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto w-full max-w-12 rounded-t-sm bg-muted",
								style: { height: `${Math.max(day.orders / max * 75, 5)}%` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-0 rounded-t-sm bg-destructive",
									style: { height: `${day.orders ? day.paid / day.orders * 100 : 0}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pb-2 text-center text-[10px] text-muted-foreground",
								children: day.date.slice(8)
							})]
						}, day.date))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-2 w-2 rounded-full bg-muted-foreground" }), "Gerados"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-2 w-2 rounded-full bg-destructive" }), "Pagos"]
						})]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "rounded-lg shadow-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: "Integrações"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationRow, {
							name: "UTMify",
							status: dashboard.integration.utmify,
							detail: `${dashboard.integration.paidSent} aprovações enviadas`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t pt-4 text-xs text-muted-foreground",
							children: ["Última atualização: ", dateTime(dashboard.integration.lastSyncAt)]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-lg shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex-row items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: "Atividade recente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: onOrders,
						children: ["Ver todos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderTable, { orders: dashboard.orders.slice(0, 6) }) })]
			})
		]
	});
}
function IntegrationRow({ name, status, detail }) {
	const online = status === "online";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: detail
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
			variant: online ? "outline" : "destructive",
			className: "gap-1.5",
			children: [online ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {}), online ? "Operando" : "Atenção"]
		})]
	});
}
function Orders({ dashboard }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => dashboard.orders.filter((order) => {
		const paid = paidStatuses.includes(order.gateway_status.toLowerCase());
		const matchStatus = status === "all" || (status === "paid" ? paid : !paid);
		const needle = query.toLowerCase();
		return matchStatus && (!needle || order.customer_name.toLowerCase().includes(needle) || order.txid.toLowerCase().includes(needle));
	}), [
		dashboard.orders,
		query,
		status
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "rounded-lg shadow-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
			className: "text-base",
			children: "Todos os pedidos"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 pt-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "pl-9",
					placeholder: "Buscar por cliente ou código",
					value: query,
					onChange: (event) => setQuery(event.target.value)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: status,
				onValueChange: setStatus,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "sm:w-44",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: "Todos os status"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "paid",
						children: "Pagos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "pending",
						children: "Pendentes"
					})
				] })]
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderTable, { orders: filtered }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-12 text-center text-sm text-muted-foreground",
			children: "Nenhum pedido encontrado."
		}) })]
	});
}
function OrderTable({ orders }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Cliente" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Pedido" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Valor" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Data" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "UTMify" })
	] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: orders.map((order) => {
		const paid = paidStatuses.includes(order.gateway_status.toLowerCase());
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: order.customer_name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					maskEmail(order.customer_email),
					" · ",
					maskDocument(order.customer_document)
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "max-w-32 truncate font-mono text-xs",
				children: order.txid
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: paid ? "outline" : "secondary",
				children: paid ? "Pago" : "Pendente"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "font-medium",
				children: money(order.amount_in_cents)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "whitespace-nowrap text-xs text-muted-foreground",
				children: dateTime(order.created_at)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: order.last_error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "destructive",
				children: "Falha"
			}) : order.utmify_paid_sent_at || order.utmify_pending_sent_at ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				children: "Enviado"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: "Aguardando"
			}) })
		] }, order.id);
	}) })] });
}
function SettingsView({ initial, onSave }) {
	const [form, setForm] = (0, import_react.useState)(initial);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [logoFile, setLogoFile] = (0, import_react.useState)(null);
	const [logoPreview, setLogoPreview] = (0, import_react.useState)(initial.header_logo_url);
	const [primaryBannerFile, setPrimaryBannerFile] = (0, import_react.useState)(null);
	const [secondaryBannerFile, setSecondaryBannerFile] = (0, import_react.useState)(null);
	const [primaryBannerPreview, setPrimaryBannerPreview] = (0, import_react.useState)(initial.banner_primary_url);
	const [secondaryBannerPreview, setSecondaryBannerPreview] = (0, import_react.useState)(initial.banner_secondary_url);
	const field = (key) => ({
		value: String(form[key] ?? ""),
		onChange: (event) => setForm({
			...form,
			[key]: event.target.value
		})
	});
	function chooseLogo(event) {
		const file = event.target.files?.[0];
		if (!file) return;
		if (![
			"image/png",
			"image/jpeg",
			"image/webp"
		].includes(file.type) || file.size > 2097152) {
			toast.error("Escolha uma imagem PNG, JPG ou WebP de até 2 MB");
			event.target.value = "";
			return;
		}
		setLogoFile(file);
		setLogoPreview(URL.createObjectURL(file));
	}
	function chooseBanner(event, slot) {
		const file = event.target.files?.[0];
		if (!file) return;
		if (![
			"image/png",
			"image/jpeg",
			"image/webp"
		].includes(file.type) || file.size > 2097152) {
			toast.error("Escolha uma imagem PNG, JPG ou WebP de até 2 MB");
			event.target.value = "";
			return;
		}
		if (slot === "primary") {
			setPrimaryBannerFile(file);
			setPrimaryBannerPreview(URL.createObjectURL(file));
		} else {
			setSecondaryBannerFile(file);
			setSecondaryBannerPreview(URL.createObjectURL(file));
		}
	}
	async function uploadAsset(file, baseName, currentPath) {
		if (!file) return currentPath;
		const path = `${baseName}.${file.type.split("/")[1]?.replace("jpeg", "jpg") ?? "png"}`;
		const { error } = await supabase.storage.from("site-branding").upload(path, file, {
			upsert: true,
			contentType: file.type
		});
		if (error) throw error;
		return path;
	}
	async function submit(event) {
		event.preventDefault();
		setSaving(true);
		try {
			const [headerLogoPath, bannerPrimaryPath, bannerSecondaryPath] = await Promise.all([
				uploadAsset(logoFile, "header-logo", form.header_logo_path),
				uploadAsset(primaryBannerFile, "banner-primary", form.banner_primary_path),
				uploadAsset(secondaryBannerFile, "banner-secondary", form.banner_secondary_path)
			]);
			await onSave({
				companyName: form.company_name,
				companyDocument: form.company_document,
				supportPhone: form.support_phone,
				checkoutDescription: form.checkout_description,
				warningBannerText: form.warning_banner_text,
				attentionTitle: form.attention_title,
				headerLogoPath,
				bannerPrimaryPath,
				bannerSecondaryPath,
				footerPolicyOneLabel: form.footer_policy_one_label,
				footerPolicyOneUrl: form.footer_policy_one_url,
				footerPolicyTwoLabel: form.footer_policy_two_label,
				footerPolicyTwoUrl: form.footer_policy_two_url,
				processingFeeCents: form.processing_fee_cents,
				icmsFeeCents: form.icms_fee_cents,
				federalFeeCents: form.federal_fee_cents,
				hubpagueApiToken: form.hubpague_api_token,
				searchapiCpfToken: form.searchapi_cpf_token
			});
			setForm({
				...form,
				header_logo_path: headerLogoPath,
				banner_primary_path: bannerPrimaryPath,
				banner_secondary_path: bannerSecondaryPath
			});
			setLogoFile(null);
			setPrimaryBannerFile(null);
			setSecondaryBannerFile(null);
		} catch (reason) {
			toast.error(reason instanceof Error ? reason.message : "Não foi possível salvar");
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-lg shadow-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: "Gateway de Pagamentos"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Token Hubpague",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								placeholder: "Cole seu token da API Hubpague aqui",
								value: form.hubpague_api_token || "",
								onChange: (event) => setForm({
									...form,
									hubpague_api_token: event.target.value
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Token SearchAPI CPF",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								placeholder: "Token para validação de CPF",
								value: form.searchapi_cpf_token || "",
								onChange: (event) => setForm({
									...form,
									searchapi_cpf_token: event.target.value
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "border-t pt-4 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✅ Ao salvar, essas credenciais serão usadas automaticamente em todos os pagamentos." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: "🔐 Os tokens são armazenados com segurança e nunca serão expostos."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-lg shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Identidade visual"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center",
					children: [logoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 w-full items-center justify-center rounded-md border bg-muted/30 p-3 sm:w-48",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoPreview,
							alt: "Logo atual",
							className: "max-h-full max-w-full object-contain"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 w-full items-center justify-center rounded-md border bg-muted/30 text-muted-foreground sm:w-48",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Logo dos cabeçalhos",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "file",
								accept: "image/png,image/jpeg,image/webp",
								onChange: chooseLogo
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "PNG, JPG ou WebP, com até 2 MB. A mesma imagem será usada em todas as etapas."
						})]
					})]
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-lg shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Banners das páginas"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BannerUpload, {
						label: "Banner do checkout e Pix pendente",
						preview: primaryBannerPreview,
						onChange: (event) => chooseBanner(event, "primary")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BannerUpload, {
						label: "Banner acima do pagamento",
						preview: secondaryBannerPreview,
						onChange: (event) => chooseBanner(event, "secondary")
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-lg shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Textos da página de detalhes"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Texto da faixa vermelha",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Deixe vazio para manter a faixa sem texto",
							...field("warning_banner_text")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Título de atenção",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							maxLength: 500,
							...field("attention_title")
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-lg shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Políticas do rodapé"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nome da primeira política",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field("footer_policy_one_label") })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Link da primeira política",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "url",
								placeholder: "https://",
								...field("footer_policy_one_url")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nome da segunda política",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...field("footer_policy_two_label") })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Link da segunda política",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "url",
								placeholder: "https://",
								...field("footer_policy_two_url")
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "rounded-lg shadow-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Dados da cobrança"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Razão social",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								maxLength: 160,
								...field("company_name")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "CNPJ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								inputMode: "numeric",
								maxLength: 30,
								...field("company_document")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Telefone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								inputMode: "tel",
								maxLength: 30,
								...field("support_phone")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Descrição da cobrança",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								...field("checkout_description")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyField, {
							label: "Processamento eletrônico",
							value: form.processing_fee_cents,
							onChange: (value) => setForm({
								...form,
								processing_fee_cents: value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyField, {
							label: "ICMS",
							value: form.icms_fee_cents,
							onChange: (value) => setForm({
								...form,
								icms_fee_cents: value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyField, {
							label: "Contribuição federal",
							value: form.federal_fee_cents,
							onChange: (value) => setForm({
								...form,
								federal_fee_cents: value
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "destructive",
					disabled: saving,
					children: saving ? "Salvando…" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {}), "Salvar configurações"] })
				})
			})
		]
	});
}
function BannerUpload({ label, preview, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex aspect-[3/1] items-center justify-center overflow-hidden rounded-md border bg-muted/30",
				children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: preview,
					alt: `Prévia: ${label}`,
					className: "h-full w-full object-contain"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "h-6 w-6 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "file",
				accept: "image/png,image/jpeg,image/webp",
				onChange
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function MoneyField({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type: "number",
			min: "0",
			step: "0.01",
			value: (value / 100).toFixed(2),
			onChange: (event) => onChange(Math.round(Number(event.target.value) * 100))
		})
	});
}
//#endregion
export { AdminPage as component };
