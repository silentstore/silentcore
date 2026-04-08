/**
 * OpenSource 2026 Silentstore
 * Code by akshadowxff
 * SilentStore
 * 
 * SilentCore Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Bot invite link - users will be redirected here when clicking "Invite Kali Billi"
  botInviteUrl: "https://discord.com/oauth2/authorize?client_id=1491350189884047370&permissions=8&integration_type=0&scope=bot+applications.commands",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.gg/XZ8dC4U5N8",
  
  // Bot name (for display)
  botName: "SilentCore",
  
  // Bot description
  botDescription: "Your All In On Bot."
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
