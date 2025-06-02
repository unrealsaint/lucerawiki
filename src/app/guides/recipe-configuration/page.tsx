import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function RecipeConfigurationGuide() {
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
            <h1>Recipe Configuration Guide</h1>
            <p className="lead">
              Learn how to configure and customize recipes, including materials, products, and success rates in your server.
            </p>

            <h2>Configuration File</h2>
            <p>
              Recipes are configured in the following file:
            </p>
            <ul>
              <li><code>gameserver/data/recipe.xml</code> - Main configuration file for all recipes</li>
            </ul>

            <h2>Basic Recipe Structure</h2>
            <p>
              A basic recipe configuration includes:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<recipe id="1" name="Recipe: Wooden Arrow" level="1" mp_consume="30" success_rate="100" item_id="1666" is_common="false">
    <!--Description: For Dwarves only. The recipe for a Wooden Arrow. Requires Create Item Level 1. The success rate is 100%-->
    <materials>
        <item id="1864" name="Stem" count="4"/>
        <item id="1869" name="Iron Ore" count="2"/>
    </materials>
    <products>
        <item id="17" name="Wooden Arrow" count="500"/>
    </products>
    <npc_fee>
        <item id="1666" name="Recipe: Wooden Arrow" count="1"/>
        <item id="57" name="Adena" count="200"/>
    </npc_fee>
</recipe>`}
              </pre>
            </div>

            <h2>Recipe Parameters</h2>
            <p>
              Each recipe can be configured with the following parameters:
            </p>
            <ul>
              <li><code>id</code> - Unique recipe identifier</li>
              <li><code>name</code> - Recipe name</li>
              <li><code>level</code> - Required crafting level</li>
              <li><code>mp_consume</code> - MP cost to craft</li>
              <li><code>success_rate</code> - Base success chance (percentage)</li>
              <li><code>item_id</code> - Recipe item ID</li>
              <li><code>is_common</code> - Whether recipe is available to all classes (true) or Dwarves only (false)</li>
            </ul>

            <h2>Recipe Components</h2>
            
            <h3>1. Materials</h3>
            <p>
              Required materials for crafting:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<materials>
    <item id="1864" name="Stem" count="4"/>
    <item id="1869" name="Iron Ore" count="2"/>
</materials>`}
              </pre>
            </div>

            <h3>2. Products</h3>
            <p>
              Items produced by the recipe, with optional chance rates:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<products>
    <item id="17" name="Wooden Arrow" count="500" chance="80"/>
    <item id="4037" name="Coin of Luck" count="1" chance="20"/>
    <item id="57" name="Adena" count="1000"/>
</products>`}
              </pre>
            </div>

            <h3>3. NPC Fee</h3>
            <p>
              Optional items required by NPCs to craft:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc_fee>
    <item id="1666" name="Recipe: Wooden Arrow" count="1"/>
    <item id="57" name="Adena" count="200"/>
</npc_fee>`}
              </pre>
            </div>

            <h2>Advanced Features</h2>

            <h3>1. Chance-Based Products</h3>
            <p>
              Configure multiple possible products with different chances:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<products>
    <!-- 80% chance to get Wooden Arrow -->
    <item id="17" name="Wooden Arrow" count="500" chance="80"/>
    <!-- 20% chance to get Coin of Luck -->
    <item id="4037" name="Coin of Luck" count="1" chance="20"/>
    <!-- Guaranteed Adena -->
    <item id="57" name="Adena" count="1000"/>
</products>`}
              </pre>
            </div>

            <h3>2. Class Restrictions</h3>
            <p>
              Control which classes can use the recipe:
            </p>
            <ul>
              <li><code>is_common="true"</code> - Available to all classes</li>
              <li><code>is_common="false"</code> - Dwarves only</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test recipes on a test server before deployment</li>
                <li>Balance material costs with product value</li>
                <li>Consider server economy when setting success rates</li>
                <li>Document custom recipe configurations</li>
                <li>Test chance-based products thoroughly</li>
                <li>Ensure proper item IDs in client files</li>
                <li>Check for color codes in item names that might cause client crashes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: When creating custom recipes, ensure that all item IDs exist in your client files.
                Color codes in item names can cause client crashes when viewing recipes in the Dwarven crafting window.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 