import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function BuffBookGuide() {
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
        <h1 className="mt-4 text-3xl font-bold">Buff Book Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to create and configure Buff Books that allow players to receive buffs by consuming items.
        </p>

        <h2>Database Configuration</h2>
        <p>
          First, add the buff book item ID to the server variables:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`INSERT INTO \`server_variables\` (\`name\`, \`value\`) VALUES ('BuffItemIds', '3875');`}
        </pre>

        <h2>File Locations</h2>
        <ul>
          <li>HTML File: <code>gameserver/data/html-en/mods/buffer/item-3875.htm</code></li>
          <li>Buff Templates: <code>gameserver/data/buff_templates.xml</code></li>
        </ul>

        <h2>Buff Template Configuration</h2>
        <p>
          Configure your buff templates in <code>buff_templates.xml</code>:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<template menuId="99934" target="BUFF_PLAYER">
  <consume>
    <item id="9338" amount="1" />
  </consume>
  <product>
    <!-- Warrior Dances -->
    <skill id="274" level="1" /> <!-- Warrior -->
    <skill id="271" level="1" /> <!-- Fire -->
    <skill id="275" level="1" /> <!-- Fury -->
    <skill id="310" level="1" /> <!-- Vampire -->
    
    <!-- Songs -->
    <skill id="264" level="1" /> <!-- Earth -->
    <skill id="266" level="1" /> <!-- Water -->
    <skill id="267" level="1" /> <!-- Protection -->
    <skill id="268" level="1" /> <!-- Wind -->
    <skill id="269" level="1" /> <!-- Hunter -->
    <skill id="304" level="1" /> <!-- Vitality -->
  </product>
</template>`}
        </pre>

        <h2>Item Configuration</h2>
        <p>
          Configure the buff book item in your items XML file:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<etcitem id="9338" name="Warrior_Muse_Scroll">
  <set name="class" value="OTHER" />
  <set name="crystal_type" value="NONE" />
  <set name="icon" value="icon.etc_scroll_white_i00" />
  <set name="stackable" value="true" />
  <set name="destroyable" value="true" />
  <set name="tradeable" value="true" />
  <set name="type" value="OTHER" />
  <set name="weight" value="12" />
  <cond msgId="1508">
    <not>
      <player olympiad="true" />
    </not>
  </cond>
</etcitem>`}
        </pre>

        <h2>HTML Interface</h2>
        <p>
          Create the HTML interface for the buff book:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<center><img src="L2UI_CH3.herotower_deco" width=256 height=31></center>
<center><font color="LEVEL">Muse System</font></center>

<center>
  <table width=250 cellpadding="0" cellspacing="0">
    <tr><td>
      <table width=120 cellpadding="0" cellspacing="0">
        <tr>
          <td><button width=120 height=18 action="bypass -h scripts_services.Buffer:act ask=99934&reply=99999" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Warrior Player Dances/Songs"></td>
        </tr>
      </table>
    </td></tr>
  </table>
</center>`}
        </pre>

        <h2>Important Notes</h2>
        <ul>
          <li>The buff book item ID must be added to the server variables</li>
          <li>Each buff template needs a unique menuId</li>
          <li>You can specify multiple skills in a single template</li>
          <li>The HTML interface can be customized with different buttons and layouts</li>
          <li>Items can be configured to be stackable, tradeable, and destroyable</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Organize buffs by class or type for better usability</li>
          <li>Use clear and descriptive names for buff book items</li>
          <li>Test all buff combinations before deploying</li>
          <li>Consider adding restrictions (e.g., Olympiad, PvP zones)</li>
          <li>Keep the HTML interface clean and user-friendly</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For more detailed information about working with the buffer system and premium buffs, refer to the <Link href="/guides/buffer-system" className="text-blue-300 hover:text-blue-200">Buffer System Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 