// utils/constants.js
export const BACKEND_URL = 'http://192.168.1.4:5000/api';  // ✅ Use your server IP

// Order Routes
export const ORDER_API = `${BACKEND_URL}/orders`;
export const STATS_API = `${BACKEND_URL}/stats`;
export const DELETED_ORDERS_API = `${ORDER_API}/deleted`;
export const ARCHIVED_ORDERS_API = `${ORDER_API}/archived`;
export const EXPORT_ORDERS_API = `${ORDER_API}/export`;

// Payment Routes (QR methods)
export const ESEWA_API = `${BACKEND_URL}/payment/esewa`;
export const KHALTI_API = `${BACKEND_URL}/payment/khalti`;
export const BANK_API = `${BACKEND_URL}/payment/bank`;

// Auth Routes (optional)
export const LOGIN_API = `${BACKEND_URL}/auth/login`;
export const REGISTER_API = `${BACKEND_URL}/auth/register`;
