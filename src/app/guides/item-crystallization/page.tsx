import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ItemCrystallizationGuide() {
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
            <h1>Item Crystallization Guide</h1>
            <p className="lead">
              Learn how to specify custom items for crystallization when breaking equipment.
            </p>

            <h2>Configuration Location</h2>
            <p>
              Item crystallization settings are configured in the item definition files:
            </p>
            <ul>
              <li><code>gameserver/data/items/</code> - Directory containing all item definitions</li>
            </ul>

            <h2>Basic Configuration</h2>
            <p>
              Here's an example of a weapon with standard crystallization settings:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<weapon id="7575" name="Draconic Bow">
    <set name="crystal_count" value="2440"/>
    <set name="crystal_type" value="S"/>
    <set name="crystallizable" value="true"/>
    <!-- Other item properties -->
</weapon>`}
              </pre>
            </div>

            <h2>Custom Crystallization Item</h2>
            <p>
              To specify a custom item for crystallization (e.g., Adena instead of crystals), add the crystal_item_id parameter:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<weapon id="7575" name="Draconic Bow">
    <set name="crystal_item_id" value="57"/>
    <set name="crystal_count" value="2440"/>
    <set name="crystal_type" value="S"/>
    <set name="crystallizable" value="true"/>
    <!-- Other item properties -->
</weapon>`}
              </pre>
            </div>

            <h3>Configuration Parameters</h3>
            <ul>
              <li><strong>crystal_item_id</strong> - Item ID of the item received when breaking (e.g., 57 for Adena)</li>
              <li><strong>crystal_count</strong> - Amount of items received when breaking</li>
              <li><strong>crystal_type</strong> - Grade of the item (e.g., "S", "A", "B")</li>
              <li><strong>crystallizable</strong> - Whether the item can be crystallized</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use appropriate item IDs for crystallization rewards</li>
                <li>Set reasonable crystal_count values based on item value</li>
                <li>Ensure crystal_type matches the item's grade</li>
                <li>Test crystallization on a test server first</li>
                <li>Back up your item configuration files</li>
                <li>Document custom crystallization settings</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The crystal_count value follows the official formula for crystal amounts.
                You can also disable crystallization by setting crystallizable to false.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 