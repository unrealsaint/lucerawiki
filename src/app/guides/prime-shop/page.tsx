import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PrimeShopGuide() {
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
            <h1>Prime Shop Guide</h1>
            <p className="lead">
              Learn how to configure and manage the Prime Shop system, including product management, VIP system, and custom categories.
            </p>

            <h2>Enabling Prime Shop</h2>
            <p>
              To enable the Prime Shop system, you need to configure both server and client settings:
            </p>

            <h3>Server Configuration</h3>
            <p>
              Edit <code>gameserver/config/server.properties</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Enable Prime Shop
PrimeShopEnabled = True

# Set currency item ID (default: 29520 Vip Coin)
PrimeShopGamePointItemId = 29520

# VIP System Configuration
PrimeShopVipEnabled = True
PrimeShopVipMaxLevel = 7
PrimeShopPurchasingAddVipPoints = True
PrimeShopPurchasingAddVipPointsCoefficient = 1.0

# Category 15 Currency (for in-game items)
PrimeShopSilverCoinItemId = 29983
PrimeShopGoldCoinItemId = 29984`}
              </pre>
            </div>

            <h3>Client Configuration</h3>
            <p>
              Edit <code>Lucera2Client/system/l2.ini</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`[PrimeShop]
UseClassicPrimeShop=true
NewPrimeShop=false`}
              </pre>
            </div>

            <h2>Product Configuration</h2>
            <p>
              Products are configured in two places: client-side for display and server-side for functionality.
            </p>

            <h3>Client-Side Configuration</h3>
            <p>
              Edit <code>Lucera2Client/system/ProductName_Classic-en.dat</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`product_name_begin
id=100201
outer_name=[1st Class Transfer Effect Scroll]
description=[1st Class Transfer Effect Scroll\n1-day 10pcs]
icon=[BranchIcon.Icon.etc_g_bm_buff_scroll_i00]
icon_panel=[icon.pannel_cursed]
mainsubject=[]
product_name_end`}
              </pre>
            </div>

            <h3>Server-Side Configuration</h3>
            <p>
              Edit <code>gameserver/data/prime_shop.xml</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<product id="100201" name="1st Class Transfer Effect Scroll" category="11" price="1000" is_best="true" on_sale="true" sale_start_date="1980.01.01 08:00" sale_end_date="2037.06.01 08:00">
    <component item_id="29654" count="1" />
</product>`}
              </pre>
            </div>

            <h2>Category System</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside">
                <li><code>category="11"</code> - Supplies</li>
                <li><code>category="12"</code> - Equipment</li>
                <li><code>category="13"</code> - VIP</li>
                <li><code>category="14"</code> - Event</li>
                <li><code>category="15"</code> - In-game Currency (Gold/Silver Coins)</li>
              </ul>
            </div>

            <h2>VIP System Configuration</h2>
            <p>
              Configure VIP levels and bonuses in <code>gameserver/data/prime_shop.xml</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- VIP System -->
<vip vipLevel="0" points_to_level="0" points_lose="0">
    <bonus skill="0" skillLevel="0"/>
</vip>
<vip vipLevel="1" points_to_level="300" points_lose="300">
    <bonus skill="55161" skillLevel="1"/>
</vip>
<vip vipLevel="2" points_to_level="1000" points_lose="600">
    <bonus skill="55162" skillLevel="1"/>
</vip>`}
              </pre>
            </div>

            <h2>Category 15 (In-game Currency)</h2>
            <p>
              For items that use in-game currency instead of VIP Coins:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<product id="100201" name="1st Class Transfer Effect Scroll" category="15" price_gold_coins="1000" price_silver_coins="1000" is_best="true" on_sale="true" sale_start_date="1980.01.01 08:00" sale_end_date="2037.06.01 08:00">
    <component item_id="29654" count="1" />
</product>`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Product IDs must match between client and server configurations</li>
                <li>Category 15 allows using in-game currency (Gold/Silver Coins)</li>
                <li>VIP points are awarded based on purchase amount</li>
                <li>Sale dates control product availability</li>
                <li>Icons must exist in the client's icon system</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use clear and descriptive product names</li>
                <li>Include detailed descriptions with item counts</li>
                <li>Set appropriate prices based on server economy</li>
                <li>Configure VIP bonuses that scale with levels</li>
                <li>Test all products before making them available</li>
                <li>Backup configurations before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Prime Shop system is highly customizable. Make sure to test all features
                thoroughly and maintain proper documentation of your configurations.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 