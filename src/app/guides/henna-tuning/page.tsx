import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function HennaTuningGuide() {
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
            <h1>Henna Tattoo Tuning Guide</h1>
            <p className="lead">
              Learn how to configure and customize henna tattoos, including their costs, stat bonuses, and class restrictions.
            </p>

            <h2>Configuration Location</h2>
            <p>
              Henna tattoo settings are configured in the following file:
            </p>
            <ul>
              <li><code>gameserver/data/hennas.xml</code> - Contains all henna configurations</li>
            </ul>

            <h2>Basic Configuration</h2>
            <p>
              Each henna tattoo is defined with specific properties:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<henna id="1" symbol_id="1" dye_id="4445" dye_amount="10" price="50" stat_INT="1" stat_MEN="-1">
    <for>
        <class id="0"/>
        <class id="1"/>
        <class id="2"/>
    </for>
</henna>`}
              </pre>
            </div>

            <h3>Configuration Parameters</h3>
            <ul>
              <li><strong>id</strong> - Unique identifier for the henna</li>
              <li><strong>symbol_id</strong> - Visual symbol ID for the henna</li>
              <li><strong>dye_id</strong> - Item ID of the dye required</li>
              <li><strong>dye_amount</strong> - Amount of dye required</li>
              <li><strong>price</strong> - Cost in Adena</li>
              <li><strong>stat_*</strong> - Stat modifications (e.g., stat_INT, stat_MEN)</li>
            </ul>

            <h2>Class Restrictions</h2>
            <p>
              You can restrict henna tattoos to specific classes using the for block:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<for>
    <class id="0"/> <!-- Human Fighter -->
    <class id="1"/> <!-- Human Mystic -->
    <class id="2"/> <!-- Elf Fighter -->
</for>`}
              </pre>
            </div>

            <h2>Stat Modifications</h2>
            <p>
              Henna tattoos can modify various character stats:
            </p>
            <ul>
              <li><strong>STR</strong> - Strength</li>
              <li><strong>CON</strong> - Constitution</li>
              <li><strong>DEX</strong> - Dexterity</li>
              <li><strong>INT</strong> - Intelligence</li>
              <li><strong>MEN</strong> - Mental</li>
              <li><strong>WIT</strong> - Wit</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance stat modifications for each class</li>
                <li>Set appropriate dye requirements and costs</li>
                <li>Configure class restrictions carefully</li>
                <li>Test henna effects on a test server</li>
                <li>Back up your henna configuration</li>
                <li>Document custom henna changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Not all henna tattoos can be used by all classes. Make sure to check class restrictions
                before applying changes. For reference, you can check the official henna list at lineage.pmfun.com/list/tattoo.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 