import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ExtractableItemsGuide() {
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
            <h1>Extractable Items Guide</h1>
            <p className="lead">
              Learn how to configure and customize extractable items (capsule items), including drop chances, required items, and enchantment ranges.
            </p>

            <h2>Configuration Location</h2>
            <p>
              Extractable items are configured in the following file:
            </p>
            <ul>
              <li><code>gameserver/data/capsule_items.xml</code> - Contains all extractable item configurations</li>
            </ul>

            <h2>Basic Configuration</h2>
            <p>
              Each extractable item is defined with specific properties:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<capsule itemId="8534">
  <item id="853" min="1" max="1" chance="34." />
  <item id="916" min="1" max="1" chance="33." />
  <item id="884" min="1" max="1" chance="33." />
</capsule>`}
              </pre>
            </div>

            <h3>Configuration Parameters</h3>
            <ul>
              <li><strong>itemId</strong> - ID of the capsule item</li>
              <li><strong>id</strong> - ID of the item that can be extracted</li>
              <li><strong>min</strong> - Minimum amount of items to extract</li>
              <li><strong>max</strong> - Maximum amount of items to extract</li>
              <li><strong>chance</strong> - Chance to extract the item (in percentage)</li>
            </ul>

            <h2>Required Items</h2>
            <p>
              You can specify items required to open the capsule:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<capsule itemId="8534" requiredItemId="4037" requiredItemAmount="1">
  <item id="853" min="1" max="1" chance="34." />
  <item id="916" min="1" max="1" chance="33." />
  <item id="884" min="1" max="1" chance="33." />
</capsule>`}
              </pre>
            </div>

            <h3>Required Item Parameters</h3>
            <ul>
              <li><strong>requiredItemId</strong> - ID of the item needed to open the capsule</li>
              <li><strong>requiredItemAmount</strong> - Amount of the required item needed</li>
            </ul>

            <h2>Enchantment Ranges</h2>
            <p>
              You can specify enchantment ranges for extracted items:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<capsule itemId="9000">
  <item id="6656" min="1" max="1" chance="34." enchant_min="6" enchant_max="6"/>
  <item id="6657" min="1" max="1" chance="33." enchant_min="1" enchant_max="2"/>
  <item id="6658" min="1" max="1" chance="33." enchant_min="6" enchant_max="10"/>
</capsule>`}
              </pre>
            </div>

            <h3>Enchantment Parameters</h3>
            <ul>
              <li><strong>enchant_min</strong> - Minimum enchantment level</li>
              <li><strong>enchant_max</strong> - Maximum enchantment level</li>
            </ul>

            <h2>Level Requirements</h2>
            <p>
              You can add level requirements for opening capsules:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<cond msgId="1902">
  <player minLevel="52"/>
</cond>`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Total chance should not exceed 100%</li>
                <li>If total chance is below 100%, there's a chance nothing will drop</li>
                <li>Balance item rewards based on capsule rarity</li>
                <li>Set appropriate required items and amounts</li>
                <li>Configure enchantment ranges carefully</li>
                <li>Test capsule effects on a test server</li>
                <li>Back up your capsule configuration</li>
                <li>Document custom capsule changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Capsules cannot be opened automatically. If you need to spawn NPCs or perform other actions,
                you'll need to create a custom handler for that functionality.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 