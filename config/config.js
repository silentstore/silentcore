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
  botDescription: "Elevate your Discord server with Silentcore, the ultimate premium multipurpose Discord bot powered by cutting-edge Component V2 architecture. Featuring 99 specialized cogs and 79 synchronized commands, Silentcore delivers unparalleled performance, security, and user experience.

Key Features:
Advanced Antinuke Protection: Shield your server from malicious actions including channel/role creation/deletion, kicks, bans, and more.
Powerful Automod System: Maintain a safe community with intelligent filters for caps, links, invites, spam, and mass mentions.
Comprehensive Moderation Tools: Access a full suite of commands for banning, kicking, warning, muting, and role management.
Utility & Entertainment: Enjoy feature-rich utilities like avatar displays, user info, member counts, plus engaging fun commands and games.
Seamless Auto-Setup: Automatic database generation and configuration for instant deployment.
Built with Python 3.11+ and Discord.py 2.0+, Silentcore offers modern, interactive UI components for a premium experience. Protect, moderate, and entertain your community with the most advanced Discord bot available.

Get started today and transform your Discord server into a secure, engaging hub!"
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
