import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PlayerActionPhantomsGuide() {
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
        <h1 className="mt-4 text-3xl font-bold">Player Action Phantoms Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to configure and use the new phantom system that records and repeats player actions in peaceful zones to better emulate online activity.
        </p>

        <h2>Configuration File</h2>
        <p>
          The main configuration file is located at:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
          gameserver/config/altrecbots.properties
        </pre>

        <h2>Basic Configuration</h2>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Enable/disable the system
BotsEnabled = False

# Use dedicated executor
UseDedicatedExecutor = True
DedicatedExecutorThreads = 1
DedicatedScheduledThreads = 2`}
        </pre>

        <h2>Player Action Recording</h2>
        <p>
          The system automatically records player actions in peaceful zones:
        </p>
        <ul>
          <li>Recording starts when player enters a peaceful zone in normal state</li>
          <li>Recording stops when player leaves zone or enters unrecordable state (e.g., private store)</li>
          <li>Records basic actions: movement, item equip/unequip, skill use, class change</li>
        </ul>

        <h3>Recording Settings</h3>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Enable auto recording
AutoRecordPlayerActions = True

# Player level range for recording
AutoRecordMinLvl = 10
AutoRecordMaxLvl = 78

# Ignore specific player types
AutoRecordIgnoreNoble = False
AutoRecordIgnoreHero = True
AutoRecordIgnoreGM = False

# Ignore specific zones
AutoRecordIgnoreZones = [gludin_port1];[glludin_port2];[giran_port1];[giran_port2]

# Ignore teleports between peaceful zones
AutoRecordIgnorePeaceTeleport = True`}
        </pre>

        <h2>Action Sequence Settings</h2>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Minimum/maximum actions to record
PlayerRecordMinSequenceLength = 10
PlayerRecordMaxSequenceLength = 500

# Minimum/maximum recording duration (milliseconds)
PlayerRecordMinSequenceDuration = 10000
PlayerRecordMaxSequenceDuration = 600000

# Start new sequence after completion
AutoRecordNewSequence = True`}
        </pre>

        <h2>Bot Behavior Settings</h2>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Loop actions playback
LoopPlayback = False

# Bot lifetime (milliseconds)
PlaybackBotTTL = 600000

# Spawn/despawn intervals
BotsUnspawnIntervalMin = 5000
BotsUnspawnIntervalMax = 15000
BotsFirstActionMin = 5000
BotsFirstActionMax = 15000

# Request acceptance chances
BotAcceptRequestChances = PARTY:10;CLAN:15;TRADE:40
BotDenyRequestChances = PARTY:10;CLAN:15;TRADE:40`}
        </pre>

        <h2>Bot Customization</h2>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Bot title settings
InitialBotsTitle =
IndividualBotTitleChance = 30

# Item enchant limit
BotItemEnchantAnimateLimit = 10

# Spawn position randomization
PlaybackSpawnPosRandomRadius = 128

# Starting items (SS/BSS)
BotAdditionalInventoryItems = 5789:100,1835:100,1463:100,1464:100,1465:100,1466:100,1467:100,5790:100,2509:100,2510:100,2511:100,2512:100,2513:100,2514:100

# Class spawn probability modifiers
PlaybackClassIdProbabilityMod =

# Chat settings
BotTalkChance = 0
BotTalkChanceShout = 0
PhraseReuseTime = 1000

# Bot account name
BotAccountName = bot_account`}
        </pre>

        <h2>Spawn Strategy</h2>
        <p>
          Configure how many bots to spawn:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Spawn strategy options:
# Constant(50) - Spawn 50 bots
# OnlinePercent(10) - Spawn 10% of online players
BotSpawnStrategy = Constant(50)`}
        </pre>

        <h2>Admin Commands</h2>
        <ul>
          <li><code>//delete_bot_record &lt;botId&gt;</code> - Delete bot record (or shift-click bot)</li>
          <li><code>//kick_bot</code> - Kick bot from game (or shift-click bot)</li>
          <li><code>//bots_strategy</code> - Change spawn strategy (e.g., <code>//bots_strategy OnlinePercent 10</code>)</li>
          <li><code>//bots_disable</code> - Turn off bots</li>
        </ul>

        <h2>Database Tables</h2>
        <p>
          The system uses the following tables (created automatically on server restart):
        </p>
        <ul>
          <li><code>altrec_actions</code> - Bot action list (move/skill/etc)</li>
          <li><code>altrec_bots</code> - Bot ID, classes, noble status</li>
          <li><code>altrec_items</code> - Bot items</li>
          <li><code>altrec_names</code> - Bot names</li>
          <li><code>altrec_phrases</code> - Bot phrases</li>
          <li><code>altrec_skills</code> - Bot skills</li>
          <li><code>altrec_subclasses</code> - Bot subclasses list</li>
          <li><code>altrec_title</code> - Bot titles</li>
        </ul>

        <h2>Important Notes</h2>
        <ul>
          <li>System only works in peaceful zones</li>
          <li>Bots duplicate recorded player actions</li>
          <li>Database tables are created automatically on server restart</li>
          <li>GM recording can be enabled for testing</li>
          <li>Bots can be configured to accept/deny party/clan/trade requests</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For information about the traditional phantom system, refer to the <Link href="/guides/phantom-configuration" className="text-blue-300 hover:text-blue-200">Phantom Configuration Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 