import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ItemsConfigurationGuide() {
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
            <h1>Complete Items Configuration Guide</h1>
            <p className="lead">
              Learn how to configure and customize items in your server, including weapons, armor, and miscellaneous items.
            </p>

            <h2>Item Categories</h2>
            <p>
              There are three main categories of items in the game:
            </p>
            <ul>
              <li><strong>Weapon</strong> - All types of weapons</li>
              <li><strong>Armor</strong> - Everything worn on the player's body</li>
              <li><strong>Etcitem</strong> - Miscellaneous items like pieces, recipes, quest items, etc.</li>
            </ul>

            <h2>Basic Item Properties</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<weapon id="6619" name="Infinity Bow">
    <set name="price" value="48800000"/>
    <set name="crystal_count" value="2850"/>
    <set name="enchantable" value="false"/>
    <set name="destroyable" value="false"/>
    <set name="dropable" value="false"/>
    <set name="sellable" value="false"/>
    <set name="tradeable" value="false"/>
    <set name="storeable" value="false"/>
</weapon>`}
              </pre>
            </div>

            <h3>Common Properties</h3>
            <ul>
              <li><strong>id</strong> - Unique item identifier</li>
              <li><strong>name</strong> - Item name (used for custom services and drop output)</li>
              <li><strong>price</strong> - Base price (divided by 2 when selling to store)</li>
              <li><strong>crystal_count</strong> - Number of crystals received when breaking the item</li>
              <li><strong>enchantable</strong> - Whether the item can be enchanted</li>
              <li><strong>destroyable</strong> - Whether the item can be destroyed</li>
              <li><strong>dropable</strong> - Whether the item can be dropped</li>
              <li><strong>sellable</strong> - Whether the item can be sold to stores</li>
              <li><strong>tradeable</strong> - Whether the item can be traded between players</li>
              <li><strong>storeable</strong> - Whether the item can be stored in warehouse</li>
            </ul>

            <h2>Item Types</h2>
            
            <h3>Armor Types</h3>
            <ul>
              <li>NONE - No type</li>
              <li>LIGHT - Light armor</li>
              <li>HEAVY - Heavy armor</li>
              <li>MAGIC - Magic armor</li>
              <li>PET - Pet armor</li>
              <li>SIGIL - Wrist Staff (Classic only)</li>
            </ul>

            <h3>Weapon Types</h3>
            <ul>
              <li>NONE - No type (e.g., fists)</li>
              <li>SWORD - Sword</li>
              <li>BLUNT - Blunt weapons</li>
              <li>DAGGER - Dagger</li>
              <li>BOW - Bow</li>
              <li>POLE - Lance</li>
              <li>ETC - Mostly for monsters</li>
              <li>FIST - Brass knuckles</li>
              <li>DUAL - Two swords</li>
              <li>DUALFIST - Two-handed knuckles</li>
              <li>BIGSWORD - Two-handed sword</li>
              <li>PET - Pet weapon</li>
              <li>ROD - Fishing rod</li>
              <li>BIGBLUNT - Two-handed club</li>
              <li>DUALDAGGER - Two-handed dagger (Classic only)</li>
            </ul>

            <h3>Etcitem Types</h3>
            <ul>
              <li>ARROW - Arrows for bow</li>
              <li>MATERIAL - Crafting materials</li>
              <li>PET_COLLAR - Pet call</li>
              <li>POTION - Potions and buffs</li>
              <li>RECIPE - Crafting recipes</li>
              <li>SCROLL - Scrolls (enchant, teleport, etc.)</li>
              <li>QUEST - Quest items</li>
              <li>MONEY - Adena and other currencies</li>
              <li>SPELLBOOK - Skill learning books</li>
              <li>SEED - Manor Seeds</li>
              <li>BAIT - Fishing bait</li>
              <li>SHOT - Spiritshot type</li>
              <li>BOLT - Bolt (Classic only)</li>
              <li>RUNE - Runes that provide skills</li>
              <li>HERB - Herbs</li>
              <li>MERCENARY_TICKET - Lottery tickets</li>
              <li>ARROW_QUIVER - Arrow Quiver (Classic only)</li>
            </ul>

            <h2>Equipment Slots</h2>
            <p>
              Items can be equipped in specific slots using the equip block:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<equip>
  <slot id="LEFT_RIGHT_HAND"/>
</equip>`}
              </pre>
            </div>

            <h2>Class Restrictions</h2>
            <p>
              You can restrict items to specific classes using conditions:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<cond msgId="2154" addName="1">
  <or>
    <player classId="10"/>
    <player classId="11"/>
    <player classId="12"/>
  </or>
</cond>`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always set appropriate item properties (tradeable, dropable, etc.)</li>
                <li>Use correct item types for each category</li>
                <li>Set proper equipment slots</li>
                <li>Configure class restrictions when needed</li>
                <li>Test items thoroughly after configuration</li>
                <li>Back up your item configurations</li>
                <li>Document custom item changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to test all item configurations on a test server before applying them to production.
                Pay special attention to item properties that affect gameplay balance.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 