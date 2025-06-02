import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function TeleportsGuide() {
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
            <h1>Editing Teleports Guide</h1>
            <p className="lead">
              Learn how to edit existing teleports and add custom teleports to your Lucera 2 server.
            </p>

            <h2>Standard Teleport Configuration</h2>
            <p>
              Standard teleportations and their names are located in the gameserver/data/npc directory
              and are directly attached to NPCs as skills. There are two types of teleportation:
            </p>
            <ol className="list-decimal list-inside text-gray-400">
              <li>Teleport list integrated into the NPC</li>
              <li>Script teleport</li>
            </ol>

            <h3>NPC Teleport Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc id="31964" name="Bilia" title="Gatekeeper">
    <set name="aggroRange" value="0"/>
    <set name="ai_type" value="CharacterAI"/>
    <set name="baseAtkRange" value="40"/>
    <set name="baseCON" value="43"/>
    
    <teleportlist>
        <sublist id="1">
            <target loc="43835 -47749 -792" item_id="57" price="10000" name="Gatekeeper.RuneTownship" castle_id="8"/>
            <target loc="147850 -55300 -2728" item_id="57" price="10000" name="Gatekeeper.TheTownofGoddard" castle_id="7"/>
            <target loc="146783 25808 -2008" item_id="57" price="53000" name="Gatekeeper.TheTownofAden" castle_id="5"/>
        </sublist>
        <sublist id="2">
            <target loc="-87328 142266 -3640" item_id="57" price="1000" name="Gatekeeper.GludinArena"/>
            <target loc="73579 142709 -3768" item_id="57" price="1000" name="Gatekeeper.GiranArena"/>
        </sublist>
        <sublist id="3">
            <target loc="-87328 142266 -3640" price="1" item_id="6651" name="Gatekeeper.GludinArena"/>
            <target loc="73579 142709 -3768" price="1" item_id="6651" name="Gatekeeper.GiranArena"/>
        </sublist>
    </teleportlist>
</npc>`}
              </pre>
            </div>

            <h3>Configuration Parameters</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>Each teleport target has the following parameters:</p>
              <ul className="list-disc list-inside text-gray-400">
                <li><code>loc</code>: X Y Z coordinates of the teleport destination</li>
                <li><code>item_id</code>: ID of the item required for teleport (e.g., 57 for Adena)</li>
                <li><code>price</code>: Amount of the required item</li>
                <li><code>name</code>: Localization string for the teleport name</li>
                <li><code>castle_id</code>: (Optional) ID of the castle for castle teleports</li>
              </ul>
            </div>

            <h2>HTML-Based Teleports</h2>
            <p>
              You can add custom teleports directly in HTML without editing NPCs. There are several methods:
            </p>

            <h3>1. Simple Teleport Link</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<a action="bypass -h scripts_Util:Gatekeeper -61288 -57736 -1600 0" msg="You will be moved to Valakas. Do you wish to continue?">
    <font color="LEVEL">Valakas</font>
</a>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Note: The <code>msg</code> parameter adds a confirmation dialog before teleporting.
              </p>
            </div>

            <h3>2. Teleport Button</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<td align=center>
    <button value="Valakas" action="bypass -h scripts_Util:Gatekeeper -61288 -57736 -1600 0" 
            width=200 height=21 back="L2NPC_RU_OrmJevil_LP.butred200x21" 
            fore="L2NPC_RU_OrmJevil_LP.butred200x21">
    </button>
</td>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Note: Buttons do not support confirmation dialogs. Use links if you need confirmation.
              </p>
            </div>

            <h3>3. Teleport with Item Requirement</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<a action="bypass -h scripts_Util:QuestGatekeeper -80684 149770 -3040 1 1658" 
   msg="You will be moved to Gludin Village. Do you wish to continue?">
    <font color="LEVEL">Teleport using Gatekeeper's Amulet</font>
</a>`}
              </pre>
            </div>

            <h2>NPC Dialogue Configuration</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`Gatekeeper Roxxy:

[npc_%objectId%_Chat 2|Ask about the Ivory Tower]

[npc_%objectId%_Teleport 1|Teleport] <!-- Uses sublist id="1" -->

[npc_%objectId%_Teleport 2|Teleport Name] <!-- Uses sublist id="2" -->

[npc_%objectId%_Teleport 3|Teleport Name] <!-- Uses sublist id="3" -->

[npc_%objectId%_multisell 002|Exchange Dimension Diamonds]

[scripts_Util:NoblessTeleport|Noblesse Exclusive Teleport]

[npc_%objectId%_Quest|Quest]`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always verify coordinates before adding new teleports</li>
                <li>Test teleports in-game before making them available to players</li>
                <li>Use appropriate item requirements and prices</li>
                <li>Keep teleport lists organized by category</li>
                <li>Backup original teleport configurations before making changes</li>
                <li>Use descriptive names for custom teleports</li>
                <li>Use links with confirmation dialogs for important teleports</li>
                <li>Consider using buttons for frequently used teleports</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: When adding custom teleports through HTML, make sure to use the correct script format
                and verify that the coordinates are accessible to players. Links support confirmation dialogs
                while buttons do not.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 