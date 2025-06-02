import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function EquipmentEnchantmentGuide() {
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
            <h1>Equipment Enchantment Guide</h1>
            <p className="lead">
              Learn how to configure and customize equipment enchantment chances and scroll settings in your server.
            </p>

            <h2>Configuration Files</h2>
            <p>
              The enchantment system is configured in two main files:
            </p>
            <ul>
              <li><code>data/enchant_items.xml</code> - Main configuration file for scroll settings</li>
              <li><code>data/enchant_chances.xml</code> - Configuration file for enchantment chances</li>
            </ul>

            <h2>Enchantment Chances</h2>
            <p>
              Configure enchantment chances for different item types:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<chances type="ARMOR">
    <chance val="100"/> <!-- +1 -->
    <chance val="100"/> <!-- +2 -->
    <chance val="100"/> <!-- +3 -->
    <chance val="50"/>  <!-- +4 -->
    <chance val="50"/>  <!-- +5 -->
    <chance val="33"/>  <!-- +6 -->
    <chance val="25"/>  <!-- +7 -->
    <chance val="20"/>  <!-- +8 -->
    <chance val="14"/>  <!-- +9 -->
    <chance val="11"/>  <!-- +10 -->
    <chance val="8"/>   <!-- +11 -->
    <chance val="6"/>   <!-- +12 -->
    <chance val="5"/>   <!-- +13 -->
    <chance val="4"/>   <!-- +14 -->
    <chance val="3"/>   <!-- +15 -->
    <chance val="2"/>   <!-- +16 -->
    <chance val="2"/>   <!-- +17 -->
    <chance val="1"/>   <!-- +18 -->
    <chance val="1"/>   <!-- +19 -->
    <chance val="1"/>   <!-- +20 -->
</chances>`}
              </pre>
            </div>

            <h2>Scroll Configuration</h2>
            <p>
              Configure scroll settings with the following parameters:
            </p>
            <ul>
              <li><code>id</code> - Scroll item ID</li>
              <li><code>infallible</code> - Whether the scroll can fail (true/false)</li>
              <li><code>on_fail</code> - Action on failure (CRYSTALIZE/RESET/NONE)</li>
              <li><code>chance_bonus</code> - Additional success chance (e.g., 0.2 for +20%)</li>
              <li><code>grade</code> - Item grade (NONE, D, C, B, A, S)</li>
              <li><code>reset_lvl</code> - Level to reset to on failure</li>
              <li><code>increment</code> - Amount to increase enchant by on success</li>
            </ul>

            <h3>Example Configurations</h3>
            
            <h4>1. Reset to +3 on Failure</h4>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<scroll id="SCROLL_ID" infallible="false" reset_lvl="3" on_fail="RESET" chance_bonus="0" grade="S">
    <levels min="0" max="20" />
    <items_restrict type="WEAPON"/>
</scroll>`}
              </pre>
            </div>

            <h4>2. Increment by 3 on Success</h4>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<scroll id="SCROLL_ID" infallible="false" reset_lvl="0" increment="3" on_fail="RESET" chance_bonus="0" grade="S">
    <levels min="0" max="20" />
    <items_restrict type="WEAPON"/>
</scroll>`}
              </pre>
            </div>

            <h4>3. Keep Current Level on Failure</h4>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<scroll id="SCROLL_ID" infallible="false" reset_lvl="0" on_fail="NONE" chance_bonus="0" grade="S">
    <levels min="0" max="20" />
    <items_restrict type="WEAPON"/>
</scroll>`}
              </pre>
            </div>

            <h4>4. Add 20% Success Chance</h4>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<scroll id="SCROLL_ID" infallible="false" reset_lvl="0" on_fail="RESET" chance_bonus="0.2" grade="S">
    <levels min="0" max="20" />
    <items_restrict type="WEAPON"/>
</scroll>`}
              </pre>
            </div>

            <h4>5. Unique Scroll for Specific Item</h4>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<scroll id="13540" infallible="false" on_fail="CRYSTALIZE" chance_bonus="0" grade="NONE">
    <levels min="0" max="23" />
    <items_restrict type="WEAPON">
        <item id="13539" />
    </items_restrict>
</scroll>`}
              </pre>
            </div>

            <h2>Item Types</h2>
            <p>
              Configure different enchantment chances for various item types:
            </p>
            <ul>
              <li><strong>ARMOR</strong> - Regular armor pieces</li>
              <li><strong>FULL_ARMOR</strong> - Full body armor sets</li>
              <li><strong>JEWELRY</strong> - Accessories and jewelry items</li>
              <li><strong>WEAPON</strong> - Weapons and tools</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test enchantment rates on a test server before deployment</li>
                <li>Balance enchantment chances based on server economy</li>
                <li>Consider implementing different rates for different item grades</li>
                <li>Document custom scroll configurations</li>
                <li>Test failure scenarios thoroughly</li>
                <li>Monitor server economy impact of enchantment rates</li>
                <li>Consider implementing enchantment limits if needed</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The enchantment system is a critical part of the server economy.
                Make sure to test thoroughly and balance rates appropriately for your server's needs.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 