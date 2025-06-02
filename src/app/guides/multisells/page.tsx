import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function MultisellsGuide() {
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
            <h1>Working with Multisells Guide</h1>
            <p className="lead">
              Learn how to create and manage multisell lists for item exchanges in your Lucera 2 server.
            </p>

            <h2>Creating a Multisell</h2>
            <p>Follow these steps to create a new multisell list:</p>

            <h3>1. File Creation</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>Create an XML file in the multisell directory:</p>
              <ul className="list-none space-y-2">
                <li>Location: <code>data/multisell/</code></li>
                <li>Name the file using the multisell ID (e.g., <code>1.xml</code>)</li>
                <li>Ensure each multisell has a unique ID</li>
              </ul>
            </div>

            <h3>2. Basic Structure</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<list>
    <!-- Multisell container settings -->
    <config showall="true" notax="false" keepenchanted="false" nokey="false" is_chanced="false"/>
 
    <!-- Example item for exchange -->
    <item>
        <ingredient id="57" count="100000"/> <!-- Currency: Adena -->
        <production id="960" count="1"/> <!-- Result: item with ID 960 -->
    </item>
</list>`}
              </pre>
            </div>

            <h3>3. Configuration Parameters</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>The <code>&lt;config&gt;</code> block supports these parameters:</p>
              <ul className="list-disc list-inside text-gray-400">
                <li><code>showall</code>: Shows all items in the multisell (true/false)</li>
                <li><code>notax</code>: Cancels exchange tax (true/false)</li>
                <li><code>keepenchanted</code>: Keeps enchant level of items (true/false)</li>
                <li><code>nokey</code>: Determines need for a key (true/false)</li>
                <li><code>is_chanced</code>: Specifies if the list is random (true/false)</li>
              </ul>
            </div>

            <h2>Advanced Features</h2>

            <h3>1. Chance-Based Exchanges (Classic/Legacy)</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item>
    <ingredient id="57" count="100000"/>
    <production id="960" count="1" chance="50"/> <!-- 50% chance to get the item -->
</item>`}
              </pre>
            </div>

            <h3>2. Item Attributes</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item>
    <ingredient id="57" count="100000"/>
    <production id="960" count="1" enchant="5" fireAttr="10"/> <!-- item with +5 enchant and fire attribute 10 -->
</item>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Available attributes (Classic and Legacy only):
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li><code>enchant</code>: Enchant level (equipment only)</li>
                <li><code>fireAttr</code>: Fire attribute</li>
                <li><code>waterAttr</code>: Water attribute</li>
                <li><code>earthAttr</code>: Earth attribute</li>
                <li><code>windAttr</code>: Wind attribute</li>
                <li><code>holyAttr</code>: Holy attribute</li>
                <li><code>unholyAttr</code>: Unholy attribute</li>
              </ul>
            </div>

            <h2>Managing Multisells</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>To reload multisells after making changes:</p>
              <pre className="text-sm">
{`//reload multisell`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Verify all item IDs and quantities before saving</li>
                <li>Test new multisells in-game before making them available</li>
                <li>Balance prices and drop chances according to server economy</li>
                <li>Use descriptive file names for custom multisells</li>
                <li>Keep backup copies of original multisell files</li>
                <li>Document any custom multisell configurations</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: When creating chance-based multisells, ensure the total chance of all possible outcomes
                adds up to 100% to maintain game balance.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 