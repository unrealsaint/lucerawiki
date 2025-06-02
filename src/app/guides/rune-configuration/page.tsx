import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function RuneConfigurationGuide() {
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
            <h1>Rune Configuration Guide</h1>
            <p className="lead">
              Learn how to configure and customize runes that modify SP, EXP, Drop rates, and other multipliers in your server.
            </p>

            <h2>Configuration Files</h2>
            <p>
              Runes are configured in two main files:
            </p>
            <ul>
              <li><code>data/stat/skills</code> - Contains skill definitions for rune effects</li>
              <li><code>data/items</code> - Contains item definitions for the runes themselves</li>
            </ul>

            <h2>Skill Configuration</h2>
            <p>
              First, define the skill that will provide the multiplier effect:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="90004" levels="1" name="Rune of SP 50%">
  <set name="icon" val="br_cashtex.skill.br_cash_rune_of_sp_buff_3" />
  <set name="magicLevel" val="1" />
  <set name="target" val="TARGET_SELF" />
  <set name="skillType" val="BUFF" />
  <set name="operateType" val="OP_PASSIVE" />
  <for>
    <mul order="0x30" stat="SpMultiplier" val="1.5" />
  </for>
</skill>`}
              </pre>
            </div>

            <h3>Available Multipliers</h3>
            <ul>
              <li><strong>SpMultiplier</strong> - SP gain multiplier</li>
              <li><strong>ExpMultiplier</strong> - Experience gain multiplier</li>
              <li><strong>DropMultiplier</strong> - General drop rate multiplier</li>
              <li><strong>ItemDropMultiplier</strong> - Item drop rate multiplier</li>
              <li><strong>AdenaDropMultiplier</strong> - Adena drop rate multiplier</li>
              <li><strong>SpoilDropMultiplier</strong> - Spoil drop rate multiplier</li>
              <li><strong>EnchantBonusMultiplier</strong> - Enchant success rate bonus</li>
              <li><strong>SealStonesMultiplier</strong> - Seal Stones drop rate multiplier</li>
              <li><strong>QuestDropMultiplier</strong> - Quest item drop rate multiplier</li>
            </ul>

            <h2>Item Configuration</h2>
            <p>
              Next, create the rune item that will apply the skill:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<etcitem id="9201" name="Rune of SP : 50%" add_name="5 hour limited time">
  <set name="class" value="OTHER"/>
  <set name="crystal_type" value="NONE"/>
  <set name="dropable" value="false"/>
  <set name="durability" value="300"/>
  <set name="icon" value="br_cashtex.item.br_cash_rune_of_exp_i00"/>
  <set name="temporal" value="true"/>
  <set name="tradeable" value="false"/>
  <set name="type" value="RUNE"/>
  <set name="weight" value="120"/>
  <skills>
    <skill id="90004" level="1"/>
  </skills>
</etcitem>`}
              </pre>
            </div>

            <h3>Item Parameters</h3>
            <ul>
              <li><strong>id</strong> - Unique item ID for the rune</li>
              <li><strong>name</strong> - Display name of the rune</li>
              <li><strong>add_name</strong> - Additional text shown in item description</li>
              <li><strong>durability</strong> - Duration in minutes (300 = 5 hours)</li>
              <li><strong>temporal</strong> - Set to true for time-limited items</li>
              <li><strong>type</strong> - Set to "RUNE" for rune items</li>
              <li><strong>skills</strong> - List of skills applied when using the rune</li>
            </ul>

            <h2>Client Configuration</h2>
            <p>
              To ensure proper display in the game client, you need to add the following files:
            </p>
            <ul>
              <li><code>system/etcitemgrp.dat</code> - Item group definitions</li>
              <li><code>system/ItemName-e.dat</code> - Item names</li>
              <li><code>system/skillgrp.dat</code> - Skill group definitions</li>
              <li><code>system/skillname-e.dat</code> - Skill names</li>
            </ul>

            <h2>Default Rune IDs</h2>
            <p>
              The default rune pack includes the following IDs:
            </p>
            <ul>
              <li>9210-9215 - Experience and SP runes</li>
              <li>9220-9221 - Spoil runes (30% and 50%)</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use appropriate multiplier values to maintain game balance</li>
                <li>Set reasonable durations for temporary runes</li>
                <li>Test rune effects on a test server before deployment</li>
                <li>Back up your configuration files before making changes</li>
                <li>Document custom rune configurations</li>
                <li>Ensure client files are properly updated</li>
                <li>Consider the impact on server economy</li>
                <li>Balance rune availability with game progression</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to update both server and client files when adding new runes.
                Missing client files will result in black squares or missing icons in the game.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 