import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ChanceMultisellGuide() {
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
            <h1>Chance Multisell Guide</h1>
            <p className="lead">
              Learn how to configure and manage chance-based multisell trade lists for your server.
            </p>

            <h2>File Location</h2>
            <p>
              Chance multisell configurations are stored in:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`Path: data/multisell/`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<config 
  showall="true"     // Show all items in the list
  is_chanced="true"  // Enable chance-based rewards
  notax="true"       // Disable tax on trades
  keepenchanted="false" // Don't keep enchantments
/>`}
              </pre>
            </div>

            <h2>Example Configuration</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version='1.0' encoding='utf-8'?>
<list>
  <config showall="true" is_chanced="true" notax="true" keepenchanted="false" />
  <item id="1">
    <ingredient id="1459" count="1"/> <!-- Item to be consumed -->
    <production id="71" count="1" chance="0"/> <!-- First item (display only) -->
    <production id="71" count="1" chance="50"/> <!-- 50% chance to get item 71 -->
    <production id="72" count="1" chance="50"/> <!-- 50% chance to get item 72 -->
  </item>
</list>`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>The first production item must have a chance of 0 to display correctly in the client</li>
                <li>The sum of all chances should not exceed 100%</li>
                <li>Only one item will be given based on the chance roll</li>
                <li>Items are consumed regardless of the chance outcome</li>
                <li>Enchantments are not preserved by default</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always include a display item with 0% chance</li>
                <li>Balance chances to total 100%</li>
                <li>Test all chance combinations thoroughly</li>
                <li>Backup configurations before making changes</li>
                <li>Document all custom multisell lists</li>
                <li>Use clear item IDs and descriptions</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Chance Multisell system is designed for Classic servers and provides
                a flexible way to implement chance-based item exchanges. Make sure to test all features
                thoroughly before deployment.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 