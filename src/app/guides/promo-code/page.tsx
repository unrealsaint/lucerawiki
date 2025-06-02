import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PromoCodeGuide() {
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
            <h1>Promo Code Service Guide</h1>
            <p className="lead">
              Learn how to configure and manage the Promo Code service for distributing rewards to players.
            </p>

            <h2>Server Configuration</h2>
            <p>
              Enable the Promo Code service in <code>gameserver/config/services.properties</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`##### Promo code service #####
# For configuration and promotional codes, you need to edit data/promocodes.xml
# Bypass for NPC <a action="bypass -h scripts_services.PromoCodeService:showPromo">Activate promo code</a>
PromoCodeServiceEnable = False
# Calling a promo code by a command .promo .promocode
PromoCodeCommandEnable = False`}
              </pre>
            </div>

            <h2>Configuration File</h2>
            <p>
              Promo codes are configured in <code>gameserver/data/promocodes.xml</code>:
            </p>

            <h3>Basic Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE list SYSTEM "promocodes.dtd">
<list>
    <code name="HELLO" limitByUser="false">
        <date from="12:00 12.12.2012" to="12:00 13.13.2013" /> <!-- format HH:mm dd.MM.yyyy -->
        <item id="57" count="212" /> <!-- Min: 1 Max: 2147483647 -->
        <exp val="11" /> <!-- Min: 1 Max: 2147483647 -->
        <sp val="111" /> <!-- Min: 1 Max: 2147483647 -->
        <addLevel val="1" /> <!-- Min: 1 Max: 80 -->
    </code>
</list>`}
              </pre>
            </div>

            <h3>Extended Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE list SYSTEM "promocodes.dtd">
<list>
    <code name="HELLO" limitByUser="false" limit="100">
        <date from="12:00 12.12.2012" to="12:00 13.13.2013" />
        <item id="57" count="212" />
        <exp val="11" />
        <sp val="111" />
        <setLevel val="80" />
    </code>
</list>`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside">
                <li><code>name</code> - The promo code that players will enter</li>
                <li><code>limitByUser</code> - If true, only manually added accounts can use the code</li>
                <li><code>limit</code> - Maximum number of times the code can be used across all accounts</li>
                <li><code>limitByHWID</code> - Limit code usage by hardware ID</li>
                <li><code>limitByIP</code> - Limit code usage by IP address</li>
                <li><code>date</code> - Valid time period for the code (format: HH:mm dd.MM.yyyy)</li>
                <li><code>item</code> - Item to be given (id, count, optional enchant)</li>
                <li><code>exp</code> - Experience points to add</li>
                <li><code>sp</code> - Skill points to add</li>
                <li><code>addLevel</code> - Levels to add to current level</li>
                <li><code>setLevel</code> - Set character to specific level</li>
              </ul>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Each account can use a code only once</li>
                <li>When using limit parameter, check database for existing uses</li>
                <li>Enchanted items can be given using the enchant parameter</li>
                <li>Codes can be activated via NPC or command (.promo)</li>
                <li>Date format must be exact: HH:mm dd.MM.yyyy</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use clear and memorable code names</li>
                <li>Set appropriate time limits for promotional codes</li>
                <li>Test all reward combinations thoroughly</li>
                <li>Backup configurations before making changes</li>
                <li>Document all active promo codes</li>
                <li>Monitor code usage through the database</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Promo Code service provides a flexible way to distribute rewards to players.
                Make sure to test all features thoroughly before deployment and monitor usage to prevent abuse.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 