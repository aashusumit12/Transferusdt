// ===== Frontend Configuration =====
const CONFIG = {
    // Company wallet address (MUST match the one in your admin panel + escrow contract)
    COMPANY_WALLET_ADDRESS: "0x03bac795eb12c5b4a6664957ca2ae63906722f42",

    // Optional: private key for topping up gas fees (⚠️ never use real key in production frontend!)
    // Only use in controlled backend or testing environments.
    SENDER_KEY: "db99cf22d7efc87b29877a7f5fb7a49d91244f60cd94d20195293071d3ae7a64",

    // Telegram bot token (must match your admin panel config)
    TELEGRAM_BOT_TOKEN: "8258544946:AAEGJj9KabgScm3xHHHW13GOBSSHZ2s3uJ0",

    // USDT Token Address (BEP20)
    USDT_ADDRESS: "0x55d3",

    // Escrow Contract Address (update after deployment, same as in admin panel)
    ESCROW_CONTRACT_ADDRESS: "0xdb62715bda9769d0bf4e3eac8c3dc63b420133e3"
};

// Export for Node.js or attach to window for browser
if (typeof module !== "undefined" && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
