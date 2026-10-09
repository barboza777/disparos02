import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-Dcy-eaQM.mjs";
import { a as stringType, i as objectType, n as literalType, r as numberType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-B1DNFkWE.js
var paidStatuses = [
	"paid",
	"approved",
	"completed",
	"confirmed",
	"success",
	"succeeded",
	"pago",
	"aprovado"
];
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
async function requireAdmin(context) {
	const { data, error } = await context.supabase.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
	if (error || !data) throw new Error("Acesso administrativo não autorizado");
}
var getAdminDashboard_createServerFn_handler = createServerRpc({
	id: "bd91712aa12a864ae43341e860d6d1c64b91b59ae5ce60ea0dbdc10eee9819c1",
	name: "getAdminDashboard",
	filename: "src/lib/admin.functions.ts"
}, (opts) => getAdminDashboard.__executeServer(opts));
var getAdminDashboard = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getAdminDashboard_createServerFn_handler, async ({ context }) => {
	await requireAdmin(context);
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data, error } = await supabaseAdmin.from("payment_orders").select("id,txid,amount_in_cents,customer_name,customer_email,customer_document,gateway_status,utmify_pending_sent_at,utmify_paid_sent_at,last_error,created_at,updated_at").order("created_at", { ascending: false });
	if (error) throw error;
	const orders = data ?? [];
	const paid = orders.filter((order) => paidStatuses.includes(order.gateway_status.toLowerCase()));
	const pending = orders.filter((order) => !paidStatuses.includes(order.gateway_status.toLowerCase()));
	const dailyMap = /* @__PURE__ */ new Map();
	for (let offset = 6; offset >= 0; offset -= 1) {
		const date = /* @__PURE__ */ new Date();
		date.setUTCDate(date.getUTCDate() - offset);
		const key = date.toISOString().slice(0, 10);
		dailyMap.set(key, {
			date: key,
			orders: 0,
			paid: 0,
			revenue: 0
		});
	}
	for (const order of orders) {
		const key = order.created_at.slice(0, 10);
		const day = dailyMap.get(key);
		if (!day) continue;
		day.orders += 1;
		if (paidStatuses.includes(order.gateway_status.toLowerCase())) {
			day.paid += 1;
			day.revenue += order.amount_in_cents;
		}
	}
	return {
		metrics: {
			totalOrders: orders.length,
			paidOrders: paid.length,
			conversion: orders.length ? paid.length / orders.length * 100 : 0,
			approvedRevenueCents: paid.reduce((sum, order) => sum + order.amount_in_cents, 0),
			pendingAmountCents: pending.reduce((sum, order) => sum + order.amount_in_cents, 0)
		},
		daily: Array.from(dailyMap.values()),
		orders,
		integration: {
			utmify: orders.some((order) => order.last_error) ? "warning" : "online",
			pendingSent: orders.filter((order) => order.utmify_pending_sent_at).length,
			paidSent: orders.filter((order) => order.utmify_paid_sent_at).length,
			errors: orders.filter((order) => order.last_error).length,
			lastSyncAt: orders.find((order) => order.updated_at)?.updated_at ?? null
		}
	};
});
var getAdminSettings_createServerFn_handler = createServerRpc({
	id: "0b8c54d305a7448366e680721291cd8163ae2012fe94e3a21bb350b012171fa0",
	name: "getAdminSettings",
	filename: "src/lib/admin.functions.ts"
}, (opts) => getAdminSettings.__executeServer(opts));
var getAdminSettings = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getAdminSettings_createServerFn_handler, async ({ context }) => {
	await requireAdmin(context);
	const { data, error } = await context.supabase.from("admin_settings").select("*").eq("id", true).single();
	if (error) throw error;
	const sign = async (path) => {
		if (!path) return "";
		const { data: signed } = await context.supabase.storage.from("site-branding").createSignedUrl(path, 3600);
		return signed?.signedUrl ?? "";
	};
	return {
		...data,
		header_logo_url: await sign(data.header_logo_path),
		banner_primary_url: await sign(data.banner_primary_path),
		banner_secondary_url: await sign(data.banner_secondary_path)
	};
});
var saveAdminSettings_createServerFn_handler = createServerRpc({
	id: "6819ef62a115a9fed5da9cfb07cf9da76d39c84579b91eccca9a635402a4e228",
	name: "saveAdminSettings",
	filename: "src/lib/admin.functions.ts"
}, (opts) => saveAdminSettings.__executeServer(opts));
var saveAdminSettings = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => settingsSchema.parse(input)).handler(saveAdminSettings_createServerFn_handler, async ({ data, context }) => {
	await requireAdmin(context);
	const { error } = await context.supabase.from("admin_settings").update({
		company_name: data.companyName,
		company_document: data.companyDocument,
		support_phone: data.supportPhone,
		checkout_description: data.checkoutDescription,
		warning_banner_text: data.warningBannerText,
		attention_title: data.attentionTitle,
		header_logo_path: data.headerLogoPath,
		banner_primary_path: data.bannerPrimaryPath,
		banner_secondary_path: data.bannerSecondaryPath,
		footer_policy_one_label: data.footerPolicyOneLabel,
		footer_policy_one_url: data.footerPolicyOneUrl,
		footer_policy_two_label: data.footerPolicyTwoLabel,
		footer_policy_two_url: data.footerPolicyTwoUrl,
		processing_fee_cents: data.processingFeeCents,
		icms_fee_cents: data.icmsFeeCents,
		federal_fee_cents: data.federalFeeCents,
		hubpague_api_token: data.hubpagueApiToken,
		searchapi_cpf_token: data.searchapiCpfToken
	}).eq("id", true);
	if (error) throw error;
	return { ok: true };
});
//#endregion
export { getAdminDashboard_createServerFn_handler, getAdminSettings_createServerFn_handler, saveAdminSettings_createServerFn_handler };
