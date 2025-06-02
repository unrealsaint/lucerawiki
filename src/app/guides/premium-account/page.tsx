import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PremiumAccountGuide() {
  return (
    <>
      {/* Header */}
      <header className="layout-header">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white"
            >
              <ChevronLeftIcon className="mr-1 h-4 w-4" />
              Back to Knowledge Base
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="layout-content">
        <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            <h1>Premium Account Guide</h1>
            <p className="lead">
              Learn how to configure and manage the Premium Account system with customizable bonuses and features.
            </p>

            <h2>Server Configuration</h2>
            <p>
              Enable the Premium Account system in <code>gameserver/config/services.properties</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Rate Bonus Service
# To configure bonuses/period/cost, edit the file /config/services_rate_bonus.xml
RateBonusEnabled = False
# Ability to use the .pa .premium command in-game chat
RateBonusVoiceCommandEnabled = False
# Display the PA expiration time in the chat upon entering the game
RateBonusReportExpireTime = False`}
              </pre>
            </div>

            <h2>Configuration File</h2>
            <p>
              Premium Account settings are configured in <code>gameserver/config/services_rate_bonus.xml</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<rate_bonus id="1" consume_item_id="4037" consume_item_amount="250">
    <exp value="1.2" />
    <sp value="1.2" />
    <exp_raid value="1.2" />
    <sp_raid value="1.2" />
    <quest_reward value="1.2" />
    <quest_adena_reward value="1.2" />
    <quest_drop value="1.2" />
    <drop_adena value="1.2" />
    <drop_items value="1.2" />
    <drop_seal_stones value="1"/>
    <drop_raid_item value="1.0" />
    <drop_spoil value="1.2" />
    <enchant_item_mul value="1.0" />
    <enchant_skill_mul value="1.0" />
    <bonus_days value="2" />
    <!-- additional reward -->
    <!-- <reward item_id="4037" item_count="1" />
    <reward item_id="57" item_count="100" />
    <name_color value="00FCA0" />
    <hwid_limits value="1" />
    -->
</rate_bonus>`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside">
                <li><code>id</code> - Unique identifier for the premium level</li>
                <li><code>consume_item_id</code> - Item ID used as currency for premium</li>
                <li><code>consume_item_amount</code> - Amount of currency required</li>
                <li><code>exp value</code> - Experience rate multiplier</li>
                <li><code>sp value</code> - Skill points rate multiplier</li>
                <li><code>exp_raid value</code> - Raid boss experience multiplier</li>
                <li><code>sp_raid value</code> - Raid boss skill points multiplier</li>
                <li><code>quest_reward value</code> - Quest reward multiplier</li>
                <li><code>quest_adena_reward value</code> - Quest adena reward multiplier</li>
                <li><code>quest_drop value</code> - Quest item drop rate multiplier</li>
                <li><code>drop_adena value</code> - Adena drop rate multiplier</li>
                <li><code>drop_items value</code> - Item drop rate multiplier</li>
                <li><code>drop_seal_stones value</code> - Seal stones drop rate multiplier</li>
                <li><code>drop_raid_item value</code> - Raid item drop rate multiplier</li>
                <li><code>drop_spoil value</code> - Spoil rate multiplier</li>
                <li><code>enchant_item_mul value</code> - Item enchant success rate multiplier</li>
                <li><code>enchant_skill_mul value</code> - Skill enchant success rate multiplier</li>
                <li><code>bonus_days value</code> - Duration of premium in days</li>
              </ul>
            </div>

            <h2>Additional Features</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside">
                <li><code>reward</code> - Items given upon premium activation</li>
                <li><code>name_color</code> - Custom color for character name (hex format)</li>
                <li><code>hwid_limits</code> - Number of allowed active windows</li>
              </ul>
            </div>

            <h2>Premium Skills</h2>
            <p>
              Configure premium-exclusive skills in <code>gameserver/data/skill_tree/premium_account_skill_tree.xml</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE list SYSTEM "tree.dtd">
<list>
    <premium_account_skill_tree>
        <skill id="395" min_level="0" level="1" cost="0" name="Heroic Miracle"/>
    </premium_account_skill_tree>
</list>`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Premium status applies to all characters on the account</li>
                <li>Rate multipliers are applied multiplicatively with server rates</li>
                <li>Premium skills are automatically granted to all characters</li>
                <li>Premium status can be activated via NPC or command (.pa)</li>
                <li>Expiration time is displayed in chat upon login if enabled</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance premium bonuses to maintain server economy</li>
                <li>Test all rate multipliers thoroughly</li>
                <li>Monitor premium usage through database</li>
                <li>Backup configurations before making changes</li>
                <li>Document all premium features and bonuses</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Premium Account system provides a flexible way to offer enhanced gameplay features.
                Make sure to test all features thoroughly before deployment and monitor usage to maintain server balance.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 