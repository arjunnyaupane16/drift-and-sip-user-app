export const BACKEND_URL = "https://drift-and-sip-backend-l3pr.onrender.com";

// ✅ FIXED THIS:
export const ORDER_API = `${BACKEND_URL}/api/orders`;
export const STATS_API = `${BACKEND_URL}/api/stats`;
export const DELETED_ORDERS_API = `${ORDER_API}/deleted`;
export const ARCHIVED_ORDERS_API = `${ORDER_API}/archived`;
export const EXPORT_ORDERS_API = `${ORDER_API}/export`;

// Payments
export const ESEWA_API = `${BACKEND_URL}/api/payment/esewa`;
export const KHALTI_API = `${BACKEND_URL}/api/payment/khalti`;
export const BANK_API = `${BACKEND_URL}/api/payment/bank`;

// Auth
export const LOGIN_API = `${BACKEND_URL}/api/auth/login`;
export const REGISTER_API = `${BACKEND_URL}/api/auth/register`;
