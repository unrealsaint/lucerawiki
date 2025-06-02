import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function StackableEnchantScrollsGuide() {
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
            <h1>Stackable Enchant Scrolls Guide</h1>
            <p className="lead">
              Learn how to make enchant scrolls stackable in a single inventory slot, both on the server and client side.
            </p>

            <h2>Server-Side Configuration</h2>
            <p>
              To make enchant scrolls stackable on the server side, you need to modify the item configuration in the XML files:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<etcitem id="6577" name="Blessed Scroll: Enchant Weapon (S)">
    <set name="class" value="MISC"/>
    <set name="crystal_type" value="NONE"/>
    <set name="icon" value="icon.etc_blessed_scrl_of_ench_wp_s_i05"/>
    <set name="price" value="30000000"/>
    <set name="stackable" value="true"/>
    <set name="type" value="SCROLL"/>
    <set name="weight" value="120"/>
    <cond msgId="1508">
        <not>
            <player olympiad="true"/>
        </not>
    </cond>
</etcitem>`}
              </pre>
            </div>

            <h2>Client-Side Configuration</h2>
            <p>
              To make the scrolls visually stackable in the client, you need to modify the <code>etcitemgrp.dat</code> file:
            </p>
            <ol>
              <li>Locate the file at <code>Interlude/system/etcitemgrp.dat</code></li>
              <li>Open it with the DAT Editor (use FORMAT 413, NOT 414)</li>
              <li>Find the scroll entry by its ID</li>
              <li>Change the stackable parameter from 0 to 1</li>
            </ol>

            <h2>File Structure</h2>
            <p>
              The structure of fields in <code>etcitemgrp.dat</code> includes:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`d drop_type drop_anim_type drop_radius drop_height UNK_0 drop_mesh drop_tex icon[0] icon[1] icon[2] icon[3] icon[4] icon[5] icon[6] icon[7] icon[8] durability weight material crystallizable type1 mesh_tex_pair_cntm mesh_tex_pair_m[0] mesh_tex_pair_cntt mesh_tex_pair_t[0] item_sound equip_sound stackable family grade`}
              </pre>
            </div>

            <h2>Example Configuration</h2>
            <p>
              Original line for Blessed Scroll: Enchant Weapon (S) (ID: 6577):
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`6577 0 3 6 3 0 dropitems.drop_scroll_m00 dropitemstex.drop_scroll_t00 icon.etc_blessed_scrl_of_ench_wp_s_i05 0 120 18 0 0 1 1 ItemSound.itemdrop_scroll 0 0 0`}
              </pre>
            </div>
            <p>
              Modified line with stackable enabled:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`6577 0 3 6 3 0 dropitems.drop_scroll_m00 dropitemstex.drop_scroll_t00 icon.etc_blessed_scrl_of_ench_wp_s_i05 0 120 18 0 0 1 1 ItemSound.itemdrop_scroll 1 0 0`}
              </pre>
            </div>

            <h2>Enchant Scroll IDs</h2>
            <p>
              Common enchant scroll IDs:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`729  - Scroll: Enchant Weapon (Grade A)
730  - Scroll: Enchant Armor (Grade A)
731  - Crystal Scroll: Enchant Weapon (Grade A)
732  - Crystal Scroll: Enchant Armor (Grade A)
947  - Scroll: Enchant Weapon (Grade B)
948  - Scroll: Enchant Armor (Grade B)
949  - Crystal Scroll: Enchant Weapon (Grade B)
950  - Crystal Scroll: Enchant Armor (Grade B)
951  - Scroll: Enchant Weapon (Grade C)
952  - Scroll: Enchant Armor (Grade C)
953  - Crystal Scroll: Enchant Weapon (Grade C)
954  - Crystal Scroll: Enchant Armor (Grade C)
955  - Scroll: Enchant Weapon (Grade D)
956  - Scroll: Enchant Armor (Grade D)
957  - Crystal Scroll: Enchant Weapon (Grade D)
958  - Crystal Scroll: Enchant Armor (Grade D)
959  - Scroll: Enchant Weapon (Grade S)
960  - Scroll: Enchant Armor (Grade S)
961  - Crystal Scroll: Enchant Weapon (Grade S)
962  - Crystal Scroll: Enchant Armor (Grade S)
6569 - Blessed Scroll: Enchant Weapon (Grade A)
6570 - Blessed Scroll: Enchant Armor (Grade A)
6571 - Blessed Scroll: Enchant Weapon (Grade B)
6572 - Blessed Scroll: Enchant Armor (Grade B)
6573 - Blessed Scroll: Enchant Weapon (Grade C)
6574 - Blessed Scroll: Enchant Armor (Grade C)
6575 - Blessed Scroll: Enchant Weapon (Grade D)
6576 - Blessed Scroll: Enchant Armor (Grade D)
6577 - Blessed Scroll: Enchant Weapon (Grade S)
6578 - Blessed Scroll: Enchant Armor (Grade S)`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always make a backup of your files before editing</li>
                <li>Use the correct DAT Editor format (413)</li>
                <li>Test the changes on a test server first</li>
                <li>Ensure both server and client configurations match</li>
                <li>Document which scrolls have been modified</li>
                <li>Consider the impact on server economy</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Making scrolls stackable can significantly impact inventory management and server economy.
                Consider carefully which scrolls should be stackable and implement appropriate restrictions if needed.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 