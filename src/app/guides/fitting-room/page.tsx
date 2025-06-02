import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function FittingRoomGuide() {
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
            <h1>Fitting Room Guide</h1>
            <p className="lead">
              Learn how to configure and customize the fitting room system, allowing players to try on equipment before purchasing.
            </p>

            <h2>Configuration Files</h2>
            <p>
              The fitting room system uses the following configuration file:
            </p>
            <ul>
              <li><code>data/merchant_buylists.xml</code> - Contains the trade lists for fitting room NPCs</li>
            </ul>

            <h2>Basic Setup</h2>
            <p>
              To set up a fitting room, you need to:
            </p>
            <ol>
              <li>Create an NPC with fitting room functionality</li>
              <li>Configure trade lists for different equipment categories</li>
              <li>Set up the appropriate bypass commands</li>
            </ol>

            <h2>NPC Configuration</h2>
            <p>
              For a standard fitting room NPC (ID: 30060), you need to configure the following bypass commands:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`[npc_%objectId%_Wear 9|Wear Fighters' Equipment]
[npc_%objectId%_Wear 10|Wear Mystics' Equipment]`}
              </pre>
            </div>

            <h2>Trade List Configuration</h2>
            <p>
              Configure the trade lists in <code>merchant_buylists.xml</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Fighter Equipment (shop="9") -->
<tradelist npc="30060" shop="9" markup="20">
    <item id="2" name="Long Sword" />
    <item id="218" name="Throwing Knife" />
    <item id="272" name="Forest Bow" />
    <!-- Add more fighter equipment items -->
</tradelist>

<!-- Mystic Equipment (shop="10") -->
<tradelist npc="30060" shop="10" markup="20">
    <item id="176" name="Journeyman's Staff" />
    <item id="310" name="Relic of The Saints" />
    <item id="177" name="Mage Staff" />
    <!-- Add more mystic equipment items -->
</tradelist>`}
              </pre>
            </div>

            <h2>Trade List Parameters</h2>
            <p>
              Each trade list can be configured with the following parameters:
            </p>
            <ul>
              <li><code>npc</code> - The NPC ID that uses this trade list</li>
              <li><code>shop</code> - Unique shop identifier (matches the bypass command number)</li>
              <li><code>markup</code> - Price markup percentage for items</li>
            </ul>

            <h2>Item Configuration</h2>
            <p>
              For each item in the trade list, you can specify:
            </p>
            <ul>
              <li><code>id</code> - The item ID</li>
              <li><code>name</code> - The item name (for reference)</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Organize equipment by class types (Fighter, Mystic, etc.)</li>
                <li>Include a variety of equipment levels for different character levels</li>
                <li>Test the fitting room with different character classes</li>
                <li>Ensure all item IDs exist in your client files</li>
                <li>Consider adding multiple fitting room NPCs in different locations</li>
                <li>Document custom trade lists for future reference</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The fitting room system allows players to try on equipment without purchasing it.
                This is particularly useful for testing different armor sets and weapon combinations.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 