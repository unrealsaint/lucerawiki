import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function StartingItemsGuide() {
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
            <h1>Starting Items and Character Configuration</h1>
            <p className="lead">
              Learn how to configure starting items, spawn coordinates, and basic characteristics for new characters.
            </p>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Important Note</p>
              <p className="text-blue-100">
                The char_templates table has been removed. All character configurations are now managed through XML files.
              </p>
            </div>

            <h2>Configuration Methods</h2>
            <p>There are two ways to configure starting items and buffs for new characters:</p>

            <h3>1. XML Configuration (Recommended)</h3>
            <p>All character configurations are located in:</p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <code>gameserver/data/stats/player/pcparams/</code>
            </div>

            <h3>2. Properties Configuration (Alternative)</h3>
            <p>You can also configure starting items and buffs in the <code>other.properties</code> file:</p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Started Bonus Items for new character
# FORMAT: item_id;count;item_id;count;item_id;count;
StartingMageItems = 57;200000;21;1
StartingFighterItems = 57;200000;21;1

# Start buff for new characters
# FORMAT: skill_id-level,skill_id-level
StartMageBuff = 1303-1,1304-1
StartWarriorBuff = 1303-1,1304-1`}
              </pre>
            </div>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Important Note</p>
              <p className="text-blue-100">
                The XML configuration method is recommended as it provides more control and better organization.
                The properties method is maintained for backward compatibility.
              </p>
            </div>

            <h2>Available Class Configurations</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><code>[0] human_fighter.xml</code> - Human Warrior</li>
                <li><code>[10] human_mage.xml</code> - Human Mage</li>
                <li><code>[18] elf_fighter.xml</code> - Elf Warrior</li>
                <li><code>[25] elven_mage.xml</code> - Elf Mage</li>
                <li><code>[31] dark_fighter.xml</code> - Dark Elf Warrior</li>
                <li><code>[38] dark_mage.xml</code> - Dark Elf Warrior</li>
                <li><code>[44] orc_fighter.xml</code> - Orc Warrior</li>
                <li><code>[49] orc_mage.xml</code> - Orc Shaman</li>
                <li><code>[53] dwarven_fighter.xml</code> - Dwarven Warrior</li>
              </ul>
            </div>

            <h2>Configuration Structure</h2>
            <p>Each class configuration file contains three main sections:</p>

            <h3>1. Starting Items</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<items>
    <item id="5588" amount="1"/>
    <item id="2369" amount="1" equipped="true" enchant="0"/>
    <item id="1147" amount="1" equipped="true" enchant="0"/>
    <item id="1146" amount="1" equipped="true" enchant="0"/>
    <item id="10" amount="1"/>
</items>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                To disable starting items, use: <code>&lt;items/&gt;</code>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Note: Items marked with <code>equipped="true"</code> will be automatically equipped when creating a character.
                This applies to armor, weapons, and jewelry. Any items not marked for equipping will go to the inventory.
              </p>
            </div>

            <h3>2. Spawn Coordinates</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn x="-71338" y="258271" z="-3104"/>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                These coordinates determine where new characters will spawn when created.
                Make sure to set these to safe locations within your server's world.
              </p>
            </div>

            <h3>3. Starting Buffs</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>Starting buffs can be configured in two ways:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>XML Method:</strong> Add buff entries to the class configuration file
                  <pre className="text-sm mt-2">
{`<buffs>
    <buff id="1303" level="1"/>
    <buff id="1304" level="1"/>
</buffs>`}
                  </pre>
                </li>
                <li>
                  <strong>Properties Method:</strong> Configure in other.properties
                  <pre className="text-sm mt-2">
{`StartMageBuff = 1303-1,1304-1
StartWarriorBuff = 1303-1,1304-1`}
                  </pre>
                </li>
              </ol>
            </div>

            <h3>4. Base Stats</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<stats>
    <set name="baseSTR" value="40"/>     <!-- Starting STR -->
    <set name="baseCON" value="43"/>     <!-- Starting CON -->
    <set name="baseDEX" value="30"/>     <!-- Starting DEX -->
    <set name="baseINT" value="21"/>     <!-- Starting INT -->
    <set name="baseWIT" value="11"/>     <!-- Starting WIT -->
    <set name="baseMEN" value="25"/>     <!-- Starting MEN -->
    <set name="baseHpMax" value="0"/>    <!-- Taken from GainHp -->
    <set name="baseCpMax" value="0"/>    <!-- Taken from GainСp -->
    <set name="baseMpMax" value="0"/>    <!-- Taken from GainMp -->
    <set name="baseHpReg" value="0.01"/> <!-- HP Regeneration -->
    <set name="baseCpReg" value="0.01"/> <!-- CP Regeneration -->
    <set name="baseMpReg" value="0.01"/> <!-- MP Regeneration -->
    <set name="basePAtk" value="4"/>     <!-- Basic Physical Attack -->
    <set name="basePDef" value="72"/>    <!-- Basic Physical Defense -->
    <set name="baseMAtk" value="3"/>     <!-- Basic Magic Attack -->
    <set name="baseMDef" value="47"/>    <!-- Basic Magic Defense -->
    <set name="basePAtkSpd" value="330"/> <!-- Base Attack Speed -->
    <set name="baseMAtkSpd" value="333"/> <!-- Base Cast Speed -->
    <set name="baseShldDef" value="0"/>  <!-- Shield Defense -->
    <set name="baseAtkRange" value="20"/> <!-- Attack Range -->
    <set name="baseShldRate" value="0"/>  <!-- Shield Block Rate -->
    <set name="baseCritRate" value="44"/> <!-- Critical Rate -->
    <set name="baseRunSpd" value="115"/>  <!-- Run Speed -->
    <set name="baseWalkSpd" value="80"/>  <!-- Walk Speed -->
    <set name="baseExp" value="0"/>      <!-- Class Category -->
    <set name="collision_radius" value="9.0"/>  <!-- Model Width -->
    <set name="collision_height" value="23.0"/> <!-- Model Height -->
</stats>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Backup original files before making changes</li>
                <li>Test changes on a development server first</li>
                <li>Keep starting items balanced and appropriate for the class</li>
                <li>Ensure spawn coordinates are in safe locations</li>
                <li>Maintain balanced base stats for each class</li>
                <li>Choose one configuration method (XML or Properties) and stick to it</li>
                <li>Document your starting buff configurations for easy reference</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: These configurations only affect starting characters. For class change rewards,
                consider using the Achievement system instead.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 