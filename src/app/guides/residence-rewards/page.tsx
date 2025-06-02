import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ResidenceRewardsGuide() {
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
            <h1>Residence Rewards Guide</h1>
            <p className="lead">
              Learn how to configure rewards for holding or capturing residences in your server.
            </p>

            <h2>Configuration Location</h2>
            <p>
              To configure residence rewards, you need to modify the castle configuration files located in:
            </p>
            <ul>
              <li><code>gameserver/data/events/siege/</code></li>
            </ul>

            <h2>Reward Parameters</h2>
            <p>
              There are two main parameters for configuring rewards:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Reward for capturing the castle -->
<parameter name="on_siege_end_attacker_owned_leader_reward" value="4037:1" />

<!-- Reward for holding the castle -->
<parameter name="on_siege_end_defender_owned_leader_reward" value="4037:1" />`}
              </pre>
            </div>

            <h2>Multiple Rewards</h2>
            <p>
              You can configure multiple rewards by separating them with semicolons:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Multiple rewards for capturing the castle -->
<parameter name="on_siege_end_attacker_owned_leader_reward" value="4037:1;57:100000" />

<!-- Multiple rewards for holding the castle -->
<parameter name="on_siege_end_defender_owned_leader_reward" value="4037:2;57:200000" />`}
              </pre>
            </div>

            <h2>Reward Format</h2>
            <p>
              The reward format is:
            </p>
            <ul>
              <li><code>item_id:quantity</code> for single items</li>
              <li><code>item_id1:quantity1;item_id2:quantity2</code> for multiple items</li>
            </ul>

            <h2>Owner Reset</h2>
            <p>
              You can configure the castle to reset ownership after each siege:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Reset castle ownership after siege -->
<parameter name="next_siege_date_drop_owner" value="true"/>`}
              </pre>
            </div>

            <h2>Example Configuration</h2>
            <p>
              A complete example configuration for a castle:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Castle configuration -->
<parameter name="on_siege_end_attacker_owned_leader_reward" value="4037:1;57:100000" />
<parameter name="on_siege_end_defender_owned_leader_reward" value="4037:2;57:200000" />
<parameter name="next_siege_date_drop_owner" value="true"/>`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance rewards between capturing and holding</li>
                <li>Consider server economy when setting reward values</li>
                <li>Test reward distribution on a test server</li>
                <li>Document all reward configurations</li>
                <li>Monitor reward impact on server economy</li>
                <li>Backup configuration files before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The residence reward system allows for flexible configuration of rewards for both capturing and holding castles.
                Consider your server's economy and player base when setting up rewards.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 