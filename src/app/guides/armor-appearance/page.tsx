import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ArmorAppearanceGuide() {
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
            <h1>Armor Appearance System Guide</h1>
            <p className="lead">
              Learn how to configure and customize the armor appearance system, allowing players to change the visual appearance of their equipped armor.
            </p>

            <h2>Configuration Files</h2>
            <p>
              The armor appearance system uses two main configuration files:
            </p>
            <ul>
              <li><code>data/item_fake_appearance.xml</code> - Main configuration file for armor appearances</li>
              <li><code>data/dtd/item_fake_appearance.dtd</code> - DTD file for XML validation</li>
            </ul>

            <h2>Basic Configuration</h2>
            <p>
              Enable the system in the XML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version='1.0' encoding='utf-8'?>
<list enabled="true">
  <!-- Your configurations here -->
</list>`}
              </pre>
            </div>

            <h2>Item Configuration</h2>
            <p>
              Configure items with their appearance settings:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item itemId="486">
  <display itemId="6379"/>
  <display itemId="6380"/>
  <display itemId="6381"/>
</item>`}
              </pre>
            </div>

            <h3>Item Parameters</h3>
            <ul>
              <li><strong>itemId</strong> - ID of the item that will have its appearance changed</li>
              <li><strong>display</strong> - ID of the item whose appearance will be shown</li>
              <li><strong>consumeItemId</strong> - (Optional) ID of item required for applying appearance</li>
              <li><strong>consumeItemAmount</strong> - (Optional) Amount of items required</li>
              <li><strong>tryOutItemId</strong> - (Optional) ID of item for temporary application</li>
              <li><strong>tryOutItemAmount</strong> - (Optional) Amount of items for temporary application</li>
              <li><strong>tryOutTime</strong> - (Optional) Duration of temporary application in seconds</li>
            </ul>

            <h2>Application Methods</h2>
            <h3>1. Automatic Application</h3>
            <p>
              When equipping an item, the appearance changes automatically:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item itemId="486">
  <display itemId="6379"/>
</item>`}
              </pre>
            </div>

            <h3>2. Service Application</h3>
            <p>
              Using items to apply or try out appearances:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<item itemId="485" 
      consumeItemId="57" 
      consumeItemAmount="1000" 
      tryOutItemId="57" 
      tryOutItemAmount="1" 
      tryOutTime="30">
  <display itemId="6408"/>
</item>`}
              </pre>
            </div>

            <h2>Bypass Commands</h2>
            <p>
              Available bypass commands for managing appearances:
            </p>
            <ul>
              <li><code>bypass -h scripts_services.ItemFakeAppearance:fitting &lt;itemId&gt;</code> - Try out appearance</li>
              <li><code>bypass -h scripts_services.ItemFakeAppearance:apply &lt;itemId&gt;</code> - Apply appearance permanently</li>
              <li><code>bypass -h scripts_services.ItemFakeAppearance:removeAppearance</code> - Remove appearance</li>
            </ul>

            <h2>Example HTML Buttons</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<button width=100 height=18 action="bypass -h scripts_services.ItemFakeAppearance:fitting 485" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Fitting">
<button width=100 height=18 action="bypass -h scripts_services.ItemFakeAppearance:apply 485" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Apply">
<button width=100 height=18 action="bypass -h scripts_services.ItemFakeAppearance:removeAppearance" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Remove">`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>In bypass commands, use the <code>itemId</code> from the <code>&lt;item&gt;</code> tag, not the <code>&lt;display&gt;</code> tag</li>
                <li>The service only changes appearance, it does not equip the item</li>
                <li>Verify item IDs before using them in the service</li>
                <li>Permanent appearances are saved in the <code>@ItemFakeApp_fapv</code> variable</li>
                <li>Do not combine item equipment and service systems - choose one for your server</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside">
                <li>Test configurations on a test server before deployment</li>
                <li>Back up your configuration files before making changes</li>
                <li>Document custom appearance configurations</li>
                <li>Set reasonable costs for appearance changes</li>
                <li>Consider server balance when implementing appearance changes</li>
                <li>Test appearance compatibility with different armor types</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 