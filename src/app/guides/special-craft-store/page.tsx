import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SpecialCraftStoreGuide() {
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
            <h1>Special Craft Store Guide</h1>
            <p className="lead">
              Learn how to configure and manage the Special Craft Store system, including product management, crafting mechanics, and daily limits.
            </p>

            <h2>Server Configuration</h2>
            <p>
              The Special Craft Store is configured using XML files:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`Location:
gameserver/data/purchase_limit_craft.xml - content
gameserver/data/purchase_limit_craft.dtd - syntactic rules`}
              </pre>
            </div>

            <h2>Product Configuration Examples</h2>

            <h3>Single Item Craft</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item shop_index="4" product_id="10048" product_name="Antharas' Earring Lv. 3" product_item="91139" product_item_amount="1" product_item_chance="100.0">
    <ingredient id="57" count="10000"/>
</item>`}
              </pre>
            </div>

            <h3>Multiple Items Craft</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item shop_index="4" product_id="10008" product_name="Feudal Duty" product_item="99287" product_item_amount="1" product_item_chance="10.0" buy_item_1="90907" buy_item_amount_1="10" buy_item_chance_1="90.0">
    <ingredient id="57" count="10000"/>
</item>`}
              </pre>
            </div>

            <h3>Multiple Items with Daily Limit</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item shop_index="4" product_id="10008" product_name="Feudal Duty" product_item="99287" product_item_amount="1" product_item_chance="10.0" buy_item_1="90907" buy_item_amount_1="10" buy_item_chance_1="90.0" limit_daily="4">
    <ingredient id="57" count="10000"/>
</item>`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside">
                <li><code>shop_index</code> - Store type ID (4 for Special Craft)</li>
                <li><code>product_id</code> - Unique product identifier</li>
                <li><code>product_name</code> - Display name of the item</li>
                <li><code>product_item</code> - ID of the main crafted item</li>
                <li><code>product_item_amount</code> - Quantity of main item given</li>
                <li><code>product_item_chance</code> - Success rate for main item</li>
                <li><code>buy_item_1</code> to <code>buy_item_4</code> - Secondary items</li>
                <li><code>buy_item_amount_1</code> to <code>buy_item_amount_4</code> - Secondary item quantities</li>
                <li><code>buy_item_chance_1</code> to <code>buy_item_chance_4</code> - Secondary item chances</li>
                <li><code>limit_daily</code> - Daily crafting limit</li>
              </ul>
            </div>

            <h2>Client Configuration</h2>
            <p>
              Edit the client-side configuration in <code>Client/system/PurchaseLimitCraft_Classic-en.dat</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`product_begin    shop_index=4    product_id=10007    category=0    category_sub=1804152    unk={0;5}    product_name=[Feudal Islet]    product_item=99286    buy_item={{99286;1;10.0;3};{90907;10;90.0;0}}    limit_lv={1;999}    buy_type={0;0;0;0}    product_end`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Maximum of 5 ingredients per craft</li>
                <li>Client-side changes must be made before server-side adjustments</li>
                <li>Product IDs must match between client and server</li>
                <li>Daily limits reset at server restart</li>
                <li>Chance values are in percentage (0.0 to 100.0)</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use clear and descriptive product names</li>
                <li>Balance success rates with ingredient costs</li>
                <li>Set appropriate daily limits for rare items</li>
                <li>Test all crafting combinations thoroughly</li>
                <li>Backup configurations before making changes</li>
                <li>Document all custom recipes and their requirements</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Special Craft Store system is designed for Legacy servers and provides
                a flexible way to implement custom crafting mechanics. Make sure to test all features
                thoroughly before deployment.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 