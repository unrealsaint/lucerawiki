import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function BufferSystemGuide() {
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
            <h1>Buffer System Guide</h1>
            <p className="lead">
              Learn how to configure and customize the buffer system, including premium buffs, in your Lucera 2 server.
            </p>

            <h2>File Locations</h2>
            <p>
              The buffer system uses the following files:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside text-gray-400">
                <li>Default NPC ID: 40010</li>
                <li>Dialogues: <code>gameserver/data/html-en/mods/buffer</code></li>
                <li>Buffer Templates: <code>gameserver/data/buff_templates.xml</code></li>
              </ul>
            </div>

            <h2>Buffer Templates Configuration</h2>
            <p>
              The buffer templates are configured in XML format. Here's a basic example:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<template menuId="200" target="BUFF_PLAYER">
    <consume>
        <item id="57" amount="200000" />
    </consume>
    <produce>
        <skill id="1068" level="3" />
        <skill id="1040" level="3" />
        <skill id="1086" level="2" />
        <skill id="1204" level="2" />
        <skill id="1077" level="3" />
        <skill id="1242" level="2" />
        <skill id="1268" level="4" />
    </produce>
</template>`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2">Parameter</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">menuId</td>
                    <td className="p-2">Unique identifier for the buff template</td>
                  </tr>
                  <tr>
                    <td className="p-2">target</td>
                    <td className="p-2">Target type (BUFF_PLAYER or BUFF_PET)</td>
                  </tr>
                  <tr>
                    <td className="p-2">minLevel</td>
                    <td className="p-2">Minimum level required for the buff</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Premium Buff Configuration</h2>
            <p>
              To configure premium buffs, you can use the following options:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Premium Buff with Item Check -->
<template menuId="124" target="BUFF_PLAYER">
    <consume>
        <item id="57" amount="600000" is_premium_required="true"/>
    </consume>
    <produce>
        <skill id="1068" level="3" />
        <skill id="1040" level="3" />
        <skill id="1086" level="2" />
        <skill id="1204" level="2" />
        <skill id="1077" level="3" />
        <skill id="1242" level="2" />
        <skill id="1268" level="4" />
    </produce>
</template>

<!-- Free Buffs for Low Levels -->
<template menuId="125" target="BUFF_PLAYER">
    <consume>
        <item id="57" amount="200000" from_level="20"/>
    </consume>
    <produce>
        <skill id="1068" level="3" />
        <skill id="1040" level="3" />
    </produce>
</template>`}
              </pre>
            </div>

            <h2>HTML Integration</h2>
            <p>
              To integrate buffs into your HTML dialogues, use the following bypass format:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<a action="bypass -h scripts_services.Buffer:act ask=200&reply=1">Fighter 1 lvl</a>`}
              </pre>
            </div>
            <p>
              Where:
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li><code>ask=200</code> corresponds to the menuId in your XML template</li>
              <li><code>reply=1</code> specifies the return page after buffing</li>
            </ul>

            <h2>Special Features</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <h3 className="text-lg font-semibold mb-2">Multiple Item Options</h3>
              <pre className="text-sm">
{`<consume anyFirst="true">
    <item id="6673" amount="0" />
    <item id="4037" amount="0" />
</consume>`}
              </pre>
              <p className="mt-2 text-sm text-gray-400">
                This allows the system to use the first available item from the list.
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Organize buff templates by class or purpose</li>
                <li>Use appropriate pricing for different buff sets</li>
                <li>Implement level restrictions where necessary</li>
                <li>Test all buff combinations thoroughly</li>
                <li>Keep backup copies of your configurations</li>
                <li>Consider server balance when setting prices</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The buffer system is a crucial part of player experience. Make sure to
                implement it in a way that provides value while maintaining server balance.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 