'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Fuse from 'fuse.js'
import Link from 'next/link'

// Define the type for our search items
type SearchItem = {
  title: string
  description: string
  url: string
  tags: string[]
  content: string
}

// Sample search data - in a real app, this would come from your content management system
const searchData: SearchItem[] = [
  {
    title: 'Server Setup Guide',
    description: 'Complete step-by-step guide for setting up your Lucera 2 server from scratch',
    url: '/guides/server-setup',
    tags: ['server', 'setup', 'installation', 'configuration', 'beginner'],
    content: 'Learn how to set up your Lucera 2 server from scratch. This guide covers installation, configuration, and initial setup steps.'
  },
  {
    title: 'Command Line Login Guide',
    description: 'Learn how to configure and use the Command Line Login feature for automatic client authentication',
    url: '/guides/command-line-login',
    tags: ['login', 'authentication', 'command-line', 'security', 'intermediate'],
    content: 'Configure automatic client authentication using command line parameters. This guide explains how to set up secure login methods.'
  },
  {
    title: 'Configuration Guide',
    description: 'Detailed configuration options for your Lucera 2 server',
    url: '/guides/configuration',
    tags: ['configuration', 'server', 'settings', 'intermediate'],
    content: 'Explore all configuration options available for your Lucera 2 server. Learn about server settings, rates, and customization options.'
  },
  {
    title: 'DAT Editor Guide',
    description: 'Comprehensive guide for editing DAT, INI, and HTM files for all versions',
    url: '/guides/dat-editor',
    tags: ['dat', 'editor', 'files', 'advanced', 'tools'],
    content: 'Master the DAT Editor tool for modifying game files. Learn how to edit DAT, INI, and HTM files safely and effectively.'
  },
  {
    title: 'Admin Rights Guide',
    description: 'Learn how to assign different levels of administrative access to characters',
    url: '/guides/admin-rights',
    tags: ['admin', 'rights', 'permissions', 'security', 'intermediate'],
    content: 'Configure administrative access levels for your server. Learn about different permission levels and how to assign them.'
  },
  {
    title: 'HTML Reload Guide',
    description: 'Learn how to reload HTML files without restarting the server',
    url: '/guides/html-reload',
    tags: ['html', 'reload', 'files', 'beginner'],
    content: 'Update HTML content without server restarts. This guide shows you how to reload HTML files on the fly.'
  },
  {
    title: 'Welcome HTML Guide',
    description: 'Learn how to configure and customize the Welcome HTML system that displays when players enter the game',
    url: '/guides/welcome-html',
    tags: ['html', 'welcome', 'interface', 'beginner'],
    content: 'Customize the welcome screen that players see when they enter your server. Learn about HTML customization and player greetings.'
  },
  {
    title: 'GM Commands Guide',
    description: 'Comprehensive list of GM commands for server administration and management',
    url: '/guides/gm-commands',
    tags: ['gm', 'commands', 'admin', 'intermediate'],
    content: 'Master all GM commands available in your server. Learn how to use administrative commands effectively.'
  },
  {
    title: 'Starting Items Guide',
    description: 'Learn how to configure starting items, spawn coordinates, and basic characteristics for new characters',
    url: '/guides/starting-items',
    tags: ['items', 'starting', 'characters', 'beginner'],
    content: 'Configure what new players receive when they start. Set up starting items, spawn locations, and initial character stats.'
  },
  {
    title: 'Dialogues and Translations Guide',
    description: 'Learn how to manage and customize dialogues, translations, and localization in your server',
    url: '/guides/dialogues-translations',
    tags: ['dialogues', 'translations', 'localization', 'intermediate'],
    content: 'Manage server localization and translations. Learn how to customize NPC dialogues and game text.'
  },
  {
    title: 'Multisells Guide',
    description: 'Learn how to create and manage multisell lists for item exchanges in your server',
    url: '/guides/multisells',
    tags: ['items', 'multisells', 'exchanges', 'intermediate'],
    content: 'Manage item exchanges and create multisell lists. Learn how to create and manage multisell lists for item exchanges.'
  },
  {
    title: 'Chance Multisell Guide',
    description: 'Learn how to configure chance-based multisell trade lists with probability-based rewards',
    url: '/guides/chance-multisell',
    tags: ['items', 'multisells', 'probability', 'intermediate'],
    content: 'Configure chance-based multisell trade lists with probability-based rewards. Learn how to configure chance-based multisell trade lists.'
  },
  {
    title: 'Teleports Guide',
    description: 'Learn how to edit existing teleports and add custom teleports to your server',
    url: '/guides/teleports',
    tags: ['teleports', 'locations', 'intermediate'],
    content: 'Manage teleports and add custom teleports to your server. Learn how to edit existing teleports and add custom teleports.'
  },
  {
    title: 'Unstuck and Coordinates Guide',
    description: 'Learn how to configure the unstuck command and set custom coordinates for player teleportation',
    url: '/guides/unstuck-coordinates',
    tags: ['teleports', 'coordinates', 'beginner'],
    content: 'Configure the unstuck command and set custom coordinates for player teleportation. Learn how to configure the unstuck command and set custom coordinates.'
  },
  {
    title: 'Community Board Guide',
    description: 'Learn how to work with both standard and custom Community Boards in your server',
    url: '/guides/community-board',
    tags: ['community', 'boards', 'intermediate'],
    content: 'Work with both standard and custom Community Boards in your server. Learn how to work with both standard and custom Community Boards.'
  },
  {
    title: 'Newbie Buffer Guide',
    description: 'Learn how to configure and customize the newbie buffer system for beginners',
    url: '/guides/newbie-buffer',
    tags: ['buffer', 'beginner'],
    content: 'Configure and customize the newbie buffer system for beginners. Learn how to configure and customize the newbie buffer system.'
  },
  {
    title: 'Buffer System Guide',
    description: 'Learn how to configure and customize the buffer system, including premium buffs',
    url: '/guides/buffer-system',
    tags: ['buffer', 'intermediate'],
    content: 'Configure and customize the buffer system, including premium buffs. Learn how to configure and customize the buffer system.'
  },
  {
    title: 'Give Items Guide',
    description: 'Learn how to give items to players both online and offline',
    url: '/guides/give-items',
    tags: ['items', 'players', 'beginner'],
    content: 'Give items to players both online and offline. Learn how to give items to players both online and offline.'
  },
  {
    title: 'Chat Filter Guide',
    description: 'Learn how to configure chat filters, level limits, and offensive language restrictions',
    url: '/guides/chat-filter',
    tags: ['chat', 'filters', 'beginner'],
    content: 'Configure chat filters, level limits, and offensive language restrictions. Learn how to configure chat filters, level limits, and offensive language restrictions.'
  },
  {
    title: 'Quick Drop Guide',
    description: 'Learn how to quickly add drops to monsters without editing XML files',
    url: '/guides/quick-drop',
    tags: ['drops', 'monsters', 'beginner'],
    content: 'Quickly add drops to monsters without editing XML files. Learn how to quickly add drops to monsters without editing XML files.'
  },
  {
    title: 'Dynamic Rates Guide',
    description: 'Learn how to configure dynamic experience and skill point rates based on character levels',
    url: '/guides/dynamic-rates',
    tags: ['rates', 'experience', 'skill points', 'beginner'],
    content: 'Configure dynamic experience and skill point rates based on character levels. Learn how to configure dynamic experience and skill point rates.'
  },
  {
    title: 'Moderator Management Guide',
    description: 'Learn how to manage moderators and configure chat ban functionality in your server',
    url: '/guides/moderator-management',
    tags: ['moderators', 'chat', 'ban', 'intermediate'],
    content: 'Manage moderators and configure chat ban functionality in your server. Learn how to manage moderators and configure chat ban functionality.'
  },
  {
    title: 'HAProxy Setup Guide',
    description: 'Learn how to install and configure HAProxy v2 for traffic optimization and DDoS protection',
    url: '/guides/haproxy-setup',
    tags: ['haproxy', 'traffic', 'ddos', 'intermediate'],
    content: 'Install and configure HAProxy v2 for traffic optimization and DDoS protection. Learn how to install and configure HAProxy v2.'
  },
  {
    title: 'Zone and Territory Guide',
    description: 'Learn how to create and configure new zones and territories in your server, including PvP zones, fun zones, and custom territories',
    url: '/guides/zone-territory',
    tags: ['zones', 'territories', 'pvp', 'fun', 'intermediate'],
    content: 'Create and configure new zones and territories in your server, including PvP zones, fun zones, and custom territories. Learn how to create and configure new zones and territories.'
  },
  {
    title: 'Premium Account Guide',
    description: 'Learn how to configure and manage Premium Account features and bonuses',
    url: '/guides/premium-account',
    tags: ['premium', 'account', 'features', 'bonuses', 'intermediate'],
    content: 'Configure and manage Premium Account features and bonuses. Learn how to configure and manage Premium Account features and bonuses.'
  },
  {
    title: 'Prime Shop Guide',
    description: 'Learn how to configure and manage the Prime Shop system, including product management, VIP system, and custom categories',
    url: '/guides/prime-shop',
    tags: ['prime', 'shop', 'system', 'product', 'intermediate'],
    content: 'Configure and manage the Prime Shop system, including product management, VIP system, and custom categories. Learn how to configure and manage the Prime Shop system.'
  },
  {
    title: 'Attendance Event Guide',
    description: 'Learn how to configure and manage the daily login reward system with consecutive rewards',
    url: '/guides/attendance-event',
    tags: ['attendance', 'event', 'rewards', 'beginner'],
    content: 'Configure and manage the daily login reward system with consecutive rewards. Learn how to configure and manage the daily login reward system.'
  },
  {
    title: 'Promo Code Guide',
    description: 'Learn how to configure and manage the Promo Code service for distributing rewards to players',
    url: '/guides/promo-code',
    tags: ['promo', 'code', 'service', 'rewards', 'intermediate'],
    content: 'Configure and manage the Promo Code service for distributing rewards to players. Learn how to configure and manage the Promo Code service.'
  },
  {
    title: 'Spawn NPC Guide',
    description: 'Learn how to create and manage NPC and mob spawns in your server',
    url: '/guides/spawn-npc',
    tags: ['npcs', 'mobs', 'spawns', 'intermediate'],
    content: 'Create and manage NPC and mob spawns in your server. Learn how to create and manage NPC and mob spawns.'
  },
  {
    title: 'Cron Spawn Guide',
    description: 'Learn how to configure non-fixed spawns with time-based references using Cron Tab format',
    url: '/guides/cron-spawn',
    tags: ['spawns', 'time', 'cron', 'format', 'beginner'],
    content: 'Configure non-fixed spawns with time-based references using Cron Tab format. Learn how to configure non-fixed spawns with time-based references.'
  },
  {
    title: 'Fixed Cron Spawn Guide',
    description: 'Learn how to configure fixed spawns with time-based references using Cron Tab format',
    url: '/guides/fixed-cron-spawn',
    tags: ['spawns', 'time', 'cron', 'format', 'beginner'],
    content: 'Configure fixed spawns with time-based references using Cron Tab format. Learn how to configure fixed spawns with time-based references.'
  },
  {
    title: 'Skills and Effects Guide',
    description: 'Learn how to configure and customize skills and their effects in your server',
    url: '/guides/skills-effects',
    tags: ['skills', 'effects', 'intermediate'],
    content: 'Configure and customize skills and their effects in your server. Learn how to configure and customize skills and their effects.'
  },
  {
    title: 'Multiprof Guide',
    description: 'Learn how to configure and use the Multiprof system, allowing players to learn skills from other classes',
    url: '/guides/multiprof',
    tags: ['multiprof', 'system', 'skills', 'beginner'],
    content: 'Configure and use the Multiprof system, allowing players to learn skills from other classes. Learn how to configure and use the Multiprof system.'
  },
  {
    title: 'Clan Skills Guide',
    description: 'Learn how to configure clan skills and manage clan ranks in your server',
    url: '/guides/clan-skills',
    tags: ['clan', 'skills', 'ranks', 'intermediate'],
    content: 'Configure clan skills and manage clan ranks in your server. Learn how to configure clan skills and manage clan ranks.'
  },
  {
    title: 'Custom Skill Learning Guide',
    description: 'Learn how to implement and configure a custom skill learning system in your server',
    url: '/guides/custom-skill-learning',
    tags: ['custom', 'skill', 'learning', 'system', 'intermediate'],
    content: 'Implement and configure a custom skill learning system in your server. Learn how to implement and configure a custom skill learning system.'
  },
  {
    title: 'Custom Stats Guide',
    description: 'Learn how to modify character stats without changing their skills or base characteristics',
    url: '/guides/custom-stats',
    tags: ['stats', 'characters', 'skills', 'beginner'],
    content: 'Modify character stats without changing their skills or base characteristics. Learn how to modify character stats without changing their skills or base characteristics.'
  },
  {
    title: 'Skill Enchantment Guide',
    description: 'Learn how to configure and tune the chance of skill enchantment in your server',
    url: '/guides/skill-enchantment',
    tags: ['skills', 'enchantment', 'chance', 'intermediate'],
    content: 'Configure and tune the chance of skill enchantment in your server. Learn how to configure and tune the chance of skill enchantment.'
  },
  {
    title: 'Skill Tree Guide',
    description: 'Learn how to configure and customize all types of skills in your server, including player skills, clan skills, and fishing skills',
    url: '/guides/skill-tree',
    tags: ['skills', 'tree', 'player', 'clan', 'fishing', 'intermediate'],
    content: 'Configure and customize all types of skills in your server, including player skills, clan skills, and fishing skills. Learn how to configure and customize all types of skills.'
  },
  {
    title: 'Buff Return Guide',
    description: 'Learn how to configure the system that returns buffs after they are cancelled by the Cancellation skill',
    url: '/guides/buff-return',
    tags: ['buffs', 'cancellation', 'system', 'beginner'],
    content: 'Configure the system that returns buffs after they are cancelled by the Cancellation skill. Learn how to configure the system that returns buffs after they are cancelled.'
  },
  {
    title: 'Buff Book Guide',
    description: 'Learn how to create and configure Buff Books that allow players to receive buffs by consuming items',
    url: '/guides/buff-book',
    tags: ['buffs', 'books', 'consumable', 'beginner'],
    content: 'Create and configure Buff Books that allow players to receive buffs by consuming items. Learn how to create and configure Buff Books.'
  },
  {
    title: 'Non-Cancellable Debuffs Guide',
    description: 'Learn how to configure debuffs that cannot be removed by Cleans or Cancellation skills',
    url: '/guides/non-cancellable-debuffs',
    tags: ['debuffs', 'cancellation', 'cleans', 'beginner'],
    content: 'Configure debuffs that cannot be removed by Cleans or Cancellation skills. Learn how to configure debuffs that cannot be removed by Cleans or Cancellation skills.'
  },
  {
    title: 'Fixed Resurrection Time Guide',
    description: 'Learn how to configure a fixed time limit for resurrection windows in your server',
    url: '/guides/resurrection-time',
    tags: ['resurrection', 'time', 'limit', 'beginner'],
    content: 'Configure a fixed time limit for resurrection windows in your server. Learn how to configure a fixed time limit for resurrection windows.'
  },
  {
    title: 'NPC and Drop Configuration Guide',
    description: 'Learn how to create new NPCs, configure their drops, and set up soul absorption mechanics',
    url: '/guides/npc-drop-configuration',
    tags: ['npcs', 'drops', 'soul', 'absorption', 'intermediate'],
    content: 'Create new NPCs, configure their drops, and set up soul absorption mechanics. Learn how to create new NPCs, configure their drops, and set up soul absorption mechanics.'
  },
  {
    title: 'Pet Configuration Guide',
    description: 'Learn how to configure and customize pets in your server, including their stats, skills, and behavior',
    url: '/guides/pet-configuration',
    tags: ['pets', 'stats', 'skills', 'behavior', 'beginner'],
    content: 'Configure and customize pets in your server, including their stats, skills, and behavior. Learn how to configure and customize pets.'
  },
  {
    title: 'Phantom Configuration Guide',
    description: 'Learn how to configure and customize phantoms in your server, including their spawning behavior, AI actions, and equipment',
    url: '/guides/phantom-configuration',
    tags: ['phantoms', 'spawning', 'ai', 'actions', 'equipment', 'intermediate'],
    content: 'Configure and customize phantoms in your server, including their spawning behavior, AI actions, and equipment. Learn how to configure and customize phantoms.'
  },
  {
    title: 'Player Action Phantoms Guide',
    description: 'Learn how to configure and use the new phantom system that records and repeats player actions in peaceful zones',
    url: '/guides/player-action-phantoms',
    tags: ['phantoms', 'player', 'actions', 'peaceful', 'zones', 'beginner'],
    content: 'Configure and use the new phantom system that records and repeats player actions in peaceful zones. Learn how to configure and use the new phantom system.'
  },
  {
    title: 'Service Mob and Raid Configuration Guide',
    description: 'Learn how to create and configure custom service mobs and raids with special rewards and behaviors',
    url: '/guides/service-mob-raid',
    tags: ['service', 'mobs', 'raids', 'rewards', 'behaviors', 'intermediate'],
    content: 'Create and configure custom service mobs and raids with special rewards and behaviors. Learn how to create and configure custom service mobs and raids.'
  },
  {
    title: 'Remove NPC Drops Guide',
    description: 'Learn how to remove specific items from NPC drops using the NoDropItems configuration',
    url: '/guides/remove-npc-drops',
    tags: ['npcs', 'drops', 'nodropitems', 'configuration', 'beginner'],
    content: 'Remove specific items from NPC drops using the NoDropItems configuration. Learn how to remove specific items from NPC drops.'
  },
  {
    title: 'Clan Crest Display Guide',
    description: 'Learn how to configure the display of clan crests on NPCs in your server',
    url: '/guides/clan-crest-display',
    tags: ['clans', 'crests', 'npcs', 'beginner'],
    content: 'Configure the display of clan crests on NPCs in your server. Learn how to configure the display of clan crests.'
  },
  {
    title: 'Raid Boss Points Guide',
    description: 'Learn how to configure and manage Raid Boss Points (RP) in your server',
    url: '/guides/raid-boss-points',
    tags: ['raids', 'bosses', 'rp', 'intermediate'],
    content: 'Configure and manage Raid Boss Points (RP) in your server. Learn how to configure and manage Raid Boss Points.'
  },
  {
    title: 'Epic and Raid Boss Dead Status Guide',
    description: 'Learn how to set Epic and Raid Bosses as dead for server start',
    url: '/guides/epic-raid-dead',
    tags: ['raids', 'bosses', 'epic', 'dead', 'beginner'],
    content: 'Set Epic and Raid Bosses as dead for server start. Learn how to set Epic and Raid Bosses as dead for server start.'
  },
  {
    title: 'Noble Raid Boss Guide',
    description: 'Learn how to configure Raid Bosses that grant Noble status without requiring the quest',
    url: '/guides/noble-raid-boss',
    tags: ['raids', 'bosses', 'noble', 'quest', 'beginner'],
    content: 'Configure Raid Bosses that grant Noble status without requiring the quest. Learn how to configure Raid Bosses that grant Noble status.'
  },
  {
    title: 'Hero and Noble Raid Boss Guide',
    description: 'Learn how to configure Raid Bosses that grant both Hero and Noble status',
    url: '/guides/hero-noble-raid-boss',
    tags: ['raids', 'bosses', 'hero', 'noble', 'intermediate'],
    content: 'Configure Raid Bosses that grant both Hero and Noble status. Learn how to configure Raid Bosses that grant both Hero and Noble status.'
  },
  {
    title: 'Boss Statistics Guide',
    description: 'Learn how to configure and customize the Boss Statistics display system with status and respawn times',
    url: '/guides/boss-statistics',
    tags: ['bosses', 'statistics', 'display', 'system', 'beginner'],
    content: 'Configure and customize the Boss Statistics display system with status and respawn times. Learn how to configure and customize the Boss Statistics display system.'
  },
  {
    title: 'Queen Ant PvP Server Tuning Guide',
    description: 'Learn how to tune Queen Ant and her minions for PvP servers and high-level character farming',
    url: '/guides/queen-ant-pvp',
    tags: ['queen', 'ant', 'pvp', 'servers', 'high-level', 'character', 'farming', 'intermediate'],
    content: 'Tune Queen Ant and her minions for PvP servers and high-level character farming. Learn how to tune Queen Ant and her minions.'
  },
  {
    title: 'Quick Drop Configuration Guide',
    description: 'Learn how to quickly add drops to monsters without editing XML files',
    url: '/guides/quick-drop',
    tags: ['drops', 'monsters', 'xml', 'beginner'],
    content: 'Quickly add drops to monsters without editing XML files. Learn how to quickly add drops to monsters without editing XML files.'
  },
  {
    title: 'Items Configuration Guide',
    description: 'Learn how to configure and customize items in your server, including weapons, armor, and miscellaneous items',
    url: '/guides/items-configuration',
    tags: ['items', 'weapons', 'armor', 'miscellaneous', 'beginner'],
    content: 'Configure and customize items in your server, including weapons, armor, and miscellaneous items. Learn how to configure and customize items.'
  },
  {
    title: 'Special Craft Store Guide',
    description: 'Learn how to configure and manage the Special Craft Store system for custom item crafting with various requirements and limits',
    url: '/guides/special-craft-store',
    tags: ['special', 'craft', 'store', 'system', 'custom', 'item', 'crafting', 'intermediate'],
    content: 'Configure and manage the Special Craft Store system for custom item crafting with various requirements and limits. Learn how to configure and manage the Special Craft Store system.'
  },
  {
    title: 'Crystal Grades Guide',
    description: 'Learn how to create custom crystal grades, edit crystal properties, and modify enchant bonuses for items',
    url: '/guides/crystal-grades',
    tags: ['crystal', 'grades', 'edit', 'properties', 'enchant', 'bonuses', 'beginner'],
    content: 'Create custom crystal grades, edit crystal properties, and modify enchant bonuses for items. Learn how to create custom crystal grades, edit crystal properties, and modify enchant bonuses.'
  },
  {
    title: 'Item Crystallization Guide',
    description: 'Learn how to specify custom items for crystallization when breaking equipment',
    url: '/guides/item-crystallization',
    tags: ['items', 'crystallization', 'equipment', 'beginner'],
    content: 'Specify custom items for crystallization when breaking equipment. Learn how to specify custom items for crystallization.'
  },
  {
    title: 'Henna Tuning Guide',
    description: 'Learn how to configure and customize henna tattoos for character stat modifications',
    url: '/guides/henna-tuning',
    tags: ['henna', 'tattoos', 'character', 'stat', 'modifications', 'beginner'],
    content: 'Configure and customize henna tattoos for character stat modifications. Learn how to configure and customize henna tattoos.'
  },
  {
    title: 'Item Augmentation Guide',
    description: 'Learn how to configure and customize item augmentation, including Life Stones, stat modifications, and skill effects',
    url: '/guides/item-augmentation',
    tags: ['items', 'augmentation', 'lifestones', 'stat', 'modifications', 'skill', 'effects', 'intermediate'],
    content: 'Configure and customize item augmentation, including Life Stones, stat modifications, and skill effects. Learn how to configure and customize item augmentation.'
  },
  {
    title: 'Services Manager Augmentation Guide',
    description: 'Learn how to add augmentation options to the Services Manager, allowing players to purchase various augmentation effects',
    url: '/guides/services-augmentation',
    tags: ['services', 'manager', 'augmentation', 'players', 'purchase', 'effects', 'intermediate'],
    content: 'Add augmentation options to the Services Manager, allowing players to purchase various augmentation effects. Learn how to add augmentation options to the Services Manager.'
  },
  {
    title: 'Extractable Items Guide',
    description: 'Learn how to configure and customize extractable items (capsule items), including drop chances, required items, and enchantment ranges',
    url: '/guides/extractable-items',
    tags: ['extractable', 'items', 'capsule', 'drop', 'chances', 'required', 'enchantment', 'ranges', 'beginner'],
    content: 'Configure and customize extractable items (capsule items), including drop chances, required items, and enchantment ranges. Learn how to configure and customize extractable items.'
  },
  {
    title: 'Rune Configuration Guide',
    description: 'Learn how to configure and customize runes that modify SP, EXP, Drop rates, and other multipliers in your server',
    url: '/guides/rune-configuration',
    tags: ['runes', 'sp', 'exp', 'drop', 'rates', 'multipliers', 'server', 'beginner'],
    content: 'Configure and customize runes that modify SP, EXP, Drop rates, and other multipliers in your server. Learn how to configure and customize runes.'
  },
  {
    title: 'Costume System Guide',
    description: 'Learn how to configure and customize the costume system, including costumes, skills, and items for character transformations',
    url: '/guides/costume-system',
    tags: ['costumes', 'skills', 'items', 'character', 'transformations', 'beginner'],
    content: 'Configure and customize the costume system, including costumes, skills, and items for character transformations. Learn how to configure and customize the costume system.'
  },
  {
    title: 'Armor Appearance Guide',
    description: 'Learn how to configure and customize the armor appearance system, allowing players to change the visual appearance of their equipped armor',
    url: '/guides/armor-appearance',
    tags: ['armor', 'appearance', 'players', 'visual', 'beginner'],
    content: 'Configure and customize the armor appearance system, allowing players to change the visual appearance of their equipped armor. Learn how to configure and customize the armor appearance system.'
  },
  {
    title: 'Character Appearance Guide',
    description: 'Learn how to configure and customize character appearances using skills and effects in your server',
    url: '/guides/character-appearance',
    tags: ['characters', 'appearances', 'skills', 'effects', 'beginner'],
    content: 'Configure and customize character appearances using skills and effects in your server. Learn how to configure and customize character appearances.'
  },
  {
    title: 'Equipment Enchantment Guide',
    description: 'Learn how to configure and customize equipment enchantment chances and scroll settings in your server',
    url: '/guides/equipment-enchantment',
    tags: ['equipment', 'enchantment', 'chances', 'scrolls', 'server', 'beginner'],
    content: 'Configure and customize equipment enchantment chances and scroll settings in your server. Learn how to configure and customize equipment enchantment chances.'
  },
  {
    title: 'Recipe Configuration Guide',
    description: 'Learn how to configure and customize recipes, including materials, products, and success rates in your server',
    url: '/guides/recipe-configuration',
    tags: ['recipes', 'materials', 'products', 'success', 'rates', 'server', 'beginner'],
    content: 'Configure and customize recipes, including materials, products, and success rates in your server. Learn how to configure and customize recipes.'
  },
  {
    title: 'Fitting Room Guide',
    description: 'Learn how to configure and customize the fitting room system, allowing players to try on equipment before purchasing',
    url: '/guides/fitting-room',
    tags: ['fitting', 'room', 'system', 'players', 'equipment', 'beginner'],
    content: 'Configure and customize the fitting room system, allowing players to try on equipment before purchasing. Learn how to configure and customize the fitting room system.'
  },
  {
    title: 'Stackable Enchant Scrolls Guide',
    description: 'Learn how to make enchant scrolls stackable in a single inventory slot, both on the server and client side',
    url: '/guides/stackable-enchant-scrolls',
    tags: ['enchant', 'scrolls', 'stackable', 'inventory', 'slot', 'server', 'client', 'beginner'],
    content: 'Make enchant scrolls stackable in a single inventory slot, both on the server and client side. Learn how to make enchant scrolls stackable.'
  },
  {
    title: 'Siege Schedule Guide',
    description: 'Learn how to configure siege launch times and subsequent siege start cycles for your server',
    url: '/guides/siege-schedule',
    tags: ['siege', 'launch', 'cycles', 'server', 'beginner'],
    content: 'Configure siege launch times and subsequent siege start cycles for your server. Learn how to configure siege launch times.'
  },
  {
    title: 'Residence Rewards Guide',
    description: 'Learn how to configure rewards for holding or capturing residences in your server',
    url: '/guides/residence-rewards',
    tags: ['rewards', 'residences', 'server', 'beginner'],
    content: 'Configure rewards for holding or capturing residences in your server. Learn how to configure rewards for holding or capturing residences.'
  },
  {
    title: 'Castle Skills Guide',
    description: 'Learn how to configure skills that are granted to clan members while they own a castle',
    url: '/guides/castle-skills',
    tags: ['skills', 'clan', 'members', 'castle', 'beginner'],
    content: 'Configure skills that are granted to clan members while they own a castle. Learn how to configure skills that are granted to clan members.'
  },
  {
    title: 'Restricted Siege Zone Guide',
    description: 'Learn how to configure siege zones that only allow registered clans to enter',
    url: '/guides/restricted-siege-zone',
    tags: ['siege', 'zones', 'clans', 'enter', 'beginner'],
    content: 'Configure siege zones that only allow registered clans to enter. Learn how to configure siege zones.'
  },
  {
    title: 'Olympiad Cycles Guide',
    description: 'Learn how to configure weekly Olympiad cycles, including season timing, competitions, and rewards',
    url: '/guides/olympiad-cycles',
    tags: ['olympiad', 'cycles', 'season', 'competitions', 'rewards', 'beginner'],
    content: 'Configure weekly Olympiad cycles, including season timing, competitions, and rewards. Learn how to configure weekly Olympiad cycles.'
  },
  {
    title: 'Type-Based Olympiad Competition Guide',
    description: 'Learn how to enable and configure type-based Olympiad competitions for Mages vs Mages and Warriors vs Warriors matches',
    url: '/guides/olympiad-type-competition',
    tags: ['olympiad', 'competitions', 'mages', 'warriors', 'type', 'beginner'],
    content: 'Enable and configure type-based Olympiad competitions for Mages vs Mages and Warriors vs Warriors matches. Learn how to enable and configure type-based Olympiad competitions.'
  },
  {
    title: 'New Olympiad Arenas Guide (Classic)',
    description: 'Learn how to enable and configure new Olympiad arenas for Classic servers',
    url: '/guides/olympiad-arenas-classic',
    tags: ['olympiad', 'arenas', 'classic', 'servers', 'beginner'],
    content: 'Enable and configure new Olympiad arenas for Classic servers. Learn how to enable and configure new Olympiad arenas.'
  },
  {
    title: '3v3 Olympiad Games Guide',
    description: 'Learn how to enable and configure 3v3 Olympiad games with team-based competitions',
    url: '/guides/olympiad-3v3',
    tags: ['olympiad', 'games', 'team', 'based', 'competitions', 'beginner'],
    content: 'Enable and configure 3v3 Olympiad games with team-based competitions. Learn how to enable and configure 3v3 Olympiad games.'
  },
  {
    title: 'PvP Events Guide',
    description: 'Learn how to configure and manage PvP events including Team vs Team (TvT), Capture the Flag (CtF), and Deathmatch (DM) competitions',
    url: '/guides/pvp-events',
    tags: ['pvp', 'events', 'team', 'capture', 'flag', 'deathmatch', 'competitions', 'intermediate'],
    content: 'Configure and manage PvP events including Team vs Team (TvT), Capture the Flag (CtF), and Deathmatch (DM) competitions. Learn how to configure and manage PvP events.'
  },
  {
    title: 'PvP Events Locations Guide',
    description: 'Learn how to add custom locations for PvP events by creating instances and zones for TvT, CtF, and DM competitions',
    url: '/guides/pvp-events-locations',
    tags: ['pvp', 'events', 'locations', 'instances', 'zones', 'competitions', 'beginner'],
    content: 'Add custom locations for PvP events by creating instances and zones for TvT, CtF, and DM competitions. Learn how to add custom locations for PvP events.'
  },
  {
    title: 'Instances Guide',
    description: 'Learn how to create and configure instances like Kamaloka and other custom instances with their own rules, mobs, and mechanics',
    url: '/guides/instances',
    tags: ['instances', 'kamaloka', 'custom', 'rules', 'mobs', 'mechanics', 'beginner'],
    content: 'Create and configure instances like Kamaloka and other custom instances with their own rules, mobs, and mechanics. Learn how to create and configure instances.'
  },
  {
    title: 'Kamaloka Item Reuse Guide',
    description: 'Learn how to configure items that can reset Kamaloka instance reuse timers using custom item handlers and instance groups',
    url: '/guides/kamaloka-item-reuse',
    tags: ['items', 'kamaloka', 'instance', 'reuse', 'timers', 'custom', 'item', 'handlers', 'groups', 'beginner'],
    content: 'Configure items that can reset Kamaloka instance reuse timers using custom item handlers and instance groups. Learn how to configure items that can reset Kamaloka instance reuse timers.'
  }
]

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Configure Fuse.js with improved search options
  const fuse = new Fuse(searchData, {
    keys: [
      { name: 'title', weight: 2 },
      { name: 'description', weight: 1.5 },
      { name: 'tags', weight: 1.5 },
      { name: 'content', weight: 1 }
    ],
    threshold: 0.3,
    distance: 100,
    includeScore: true,
    minMatchCharLength: 2,
    shouldSort: true,
    findAllMatches: true,
    location: 0,
    useExtendedSearch: true
  })

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    // Split query into words and search for each word
    const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0)
    
    // Search for each term and combine results
    const searchResults = searchTerms.map(term => {
      const results = fuse.search(term)
      return results.map(result => result.item)
    })

    // Combine and deduplicate results
    const combinedResults = searchResults.flat()
    const uniqueResults = Array.from(new Map(combinedResults.map(item => [item.url, item])).values())

    // Filter by selected tags if any
    const filteredResults = selectedTags.length > 0
      ? uniqueResults.filter(item => 
          selectedTags.every(tag => item.tags.includes(tag))
        )
      : uniqueResults

    setResults(filteredResults)
  }, [query, selectedTags])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleResultClick = (url: string) => {
    router.push(url)
    setIsOpen(false)
    setQuery('')
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(current => 
      current.includes(tag)
        ? current.filter(t => t !== tag)
        : [...current, tag]
    )
  }

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search guides..."
          className="w-full rounded-lg border-0 bg-gray-700/50 px-3 py-1.5 pl-8 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-96 overflow-y-auto rounded-lg border border-gray-700 bg-gray-800 shadow-lg">
          {/* Tags Filter */}
          <div className="sticky top-0 border-b border-gray-700 bg-gray-800 p-2">
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(searchData.flatMap(item => item.tags))).map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          <div className="p-2">
            {results.map((item) => (
              <button
                key={item.url}
                onClick={() => handleResultClick(item.url)}
                className="w-full rounded-lg p-2 text-left hover:bg-gray-700/50"
              >
                <div className="font-medium text-white">{item.title}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-700/50 px-2 py-0.5 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 