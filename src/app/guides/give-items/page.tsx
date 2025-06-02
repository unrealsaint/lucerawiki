import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function GiveItemsGuide() {
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
            <h1>Giving Items to Players Guide</h1>
            <p className="lead">
              Learn how to give items to players both online and offline in your Lucera 2 server.
            </p>

            <h2>Offline Item Delivery</h2>
            <p>
              To deliver items to offline players, use the following SQL query:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`INSERT INTO \`items_delayed\` (\`owner_id\`, \`item_id\`, \`count\`) 
VALUES (char_obj_id, item_id, item_count);`}
              </pre>
            </div>

            <h3>Example</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`INSERT INTO \`items_delayed\` (\`owner_id\`, \`item_id\`, \`count\`) 
VALUES (12345678, 57, 1000);`}
              </pre>
              <p className="mt-2 text-sm text-gray-400">
                This will give 1000 adena to player with character ID 12345678.
              </p>
            </div>

            <h3>Augmented and Enchanted Items</h3>
            <p>
              For augmented and/or enchanted items, use the extended query format:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`INSERT INTO items_delayed (
    owner_id, 
    item_id, 
    count, 
    enchant_level,
    variationId1,
    variationId2
) VALUES (
    268476982,  -- Character ObjId
    7575,       -- Item Id
    1,          -- Item amount
    5,          -- Enchant level
    14561,      -- Augment id1
    700         -- Augment id2
);`}
              </pre>
            </div>

            <h2>Online Item Delivery</h2>
            <p>
              To give items to online players, use the following GM commands:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2">Command</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2"><code>//give_item &lt;target|target_name&gt; &lt;item_id&gt; &lt;item_count&gt;</code></td>
                    <td className="p-2">Give item to a specific player</td>
                  </tr>
                  <tr>
                    <td className="p-2"><code>//give_all &lt;item_id&gt; &lt;amount&gt;</code></td>
                    <td className="p-2">Give item to all players in the world</td>
                  </tr>
                  <tr>
                    <td className="p-2"><code>//give_all_by_ip &lt;item_id&gt; &lt;amount&gt;</code></td>
                    <td className="p-2">Give item to all players with unique IP</td>
                  </tr>
                  <tr>
                    <td className="p-2"><code>//give_all_by_hwid &lt;item_id&gt; &lt;amount&gt;</code></td>
                    <td className="p-2">Give item to all players with unique HWID</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Examples</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`//give_item (Target) 57 1000    -- Give 1000 adena to targeted player
//give_item Troy 57 1000         -- Give 1000 adena to player named Troy
//give_all 57 1000              -- Give 1000 adena to all players
//give_all_by_ip 57 1000        -- Give 1000 adena to all players with unique IP
//give_all_by_hwid 57 1000      -- Give 1000 adena to all players with unique HWID`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always verify character IDs before using offline delivery</li>
                <li>Use appropriate item amounts to maintain server balance</li>
                <li>Keep logs of item distribution for security purposes</li>
                <li>Test commands in a controlled environment first</li>
                <li>Be careful with mass distribution commands</li>
                <li>Consider server economy when giving valuable items</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Item distribution should be handled carefully to maintain server balance
                and economy. Always verify player information and item details before distribution.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 