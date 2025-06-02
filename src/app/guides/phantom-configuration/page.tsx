import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PhantomConfigurationGuide() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back to Knowledge Base
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Phantom Configuration Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to configure and customize phantoms in your server, including their spawning behavior, AI actions, and equipment.
        </p>

        <h2>Configuration File</h2>
        <p>
          The main configuration file for phantoms is located at:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
          gameserver/config/fake.properties
        </pre>

        <h2>Spawning Algorithm</h2>
        <p>
          The phantom spawning system works as follows:
        </p>
        <ul>
          <li>A wave of spawns triggers every 'waveRespawn' minutes</li>
          <li>The system enumerates each spawn element from spawn.xml</li>
          <li>Creates a task for spawning random phantoms that meet the criteria</li>
          <li>The spawn delay is specified by 'phantomSpawnDelayMinMax'</li>
          <li>After spawning, a task is created to remove the phantom after 'phantomDespawnDelayMinMax'</li>
        </ul>

        <h2>AI Behavior</h2>
        <p>
          The phantom AI system operates as follows:
        </p>
        <ul>
          <li>AI triggers every 'townAiTick' interval</li>
          <li>During each tick, randomizes the execution of each action</li>
          <li>Performs the first action that passes its chance check</li>
          <li>If no action passes the chance check, no action is performed</li>
          <li>Note: Changing 'townAiTick' affects action frequency and chance values</li>
        </ul>

        <h2>Enchant Algorithm</h2>
        <p>
          The enchant system works as follows:
        </p>
        <ul>
          <li>Starts with 'minEnchant' value</li>
          <li>Increases by +1 with chance from 'enchantChance'</li>
          <li>Continues until chance fails or reaches 'maxEnchant'</li>
        </ul>

        <h2>File Structure</h2>
        <p>
          The phantom system uses the following files in the GAMESERVER\DATA\PHANTOMS directory:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`GAMESERVER\\DATA\\PHANTOMS
| phantoms.dtd
| phantoms.xml      -- Phantom definitions (names, grade, class id, etc.)
| phrases.dtd
| phrases_ru.xml    -- Russian phrases for private/shout chat
| phrases_en.xml    -- English phrases for private/shout chat
| spawn.dtd
| spawn.xml         -- Spawn locations and grade ranges
|
\\---equipment      -- Equipment configurations
    armor.dtd
    armor.xml       -- Armor sets
    class_equip.dtd
    class_equip.xml -- Class equipment and weapons`}
        </pre>

        <h2>Important Notes</h2>
        <ul>
          <li>Minimum of 3 points required to form a spawn territory</li>
          <li>Grade ranges can be configured per location (e.g., D-C for starting areas, A-S for high-level towns)</li>
          <li>AI tick frequency affects action probability calculations</li>
          <li>Equipment can be customized per class and grade</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use appropriate grade ranges for different areas</li>
          <li>Balance spawn rates and despawn times</li>
          <li>Configure AI actions to match the area's theme</li>
          <li>Use appropriate equipment for each class and grade</li>
          <li>Test spawn points to ensure proper territory formation</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For more detailed information about NPC configuration, refer to the <Link href="/guides/npc-drop-configuration" className="text-blue-300 hover:text-blue-200">NPC and Drop Configuration Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 