import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ItemAugmentationGuide() {
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
            <h1>Item Augmentation Guide</h1>
            <p className="lead">
              Learn how to configure and customize item augmentation, including Life Stones, stat modifications, and skill effects.
            </p>

            <h2>Configuration Files</h2>
            <p>
              Item augmentation settings are configured in the following files:
            </p>
            <ul>
              <li><code>gameserver/data/optiondata/</code> - Contains augmentation ID and stats</li>
              <li><code>gameserver/data/variation_data.xml</code> - Contains Life Stone success rates</li>
              <li><code>gameserver/data/variation_group.xml</code> - Contains item eligibility and variation prices</li>
            </ul>

            <h2>Option Data Configuration</h2>
            <p>
              Each augmentation option is defined with specific properties:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<Optiondata id="2600">
    <For>
        <Add order="0x40" stat="maxMp" value="20.72" />
        <Add order="0x40" stat="regCp" value="0.28" />
    </For>
</Optiondata>`}
              </pre>
            </div>

            <h3>Configuration Parameters</h3>
            <ul>
              <li><strong>id</strong> - Unique identifier for the augmentation option</li>
              <li><strong>order</strong> - Order of the effect (0x40 for passive effects)</li>
              <li><strong>stat</strong> - Stat to modify (e.g., maxMp, regCp)</li>
              <li><strong>value</strong> - Value of the modification</li>
            </ul>

            <h2>Life Stone Configuration</h2>
            <p>
              Life Stone settings are configured in variation_data.xml:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<Variation_data mineralId="8723">
    <Options type="WARRIOR">
        <Variation1>
            <Group chance="100.0">
                <Option id="1" chance="50.0" />
                <Option id="2" chance="50.0" />
            </Group>
        </Variation1>
        <Variation2>
            <Group chance="50.0">
                <Option id="7281" chance="50.0" />
                <Option id="7282" chance="50.0" />
            </Group>
        </Variation2>
    </Options>
</Variation_data>`}
              </pre>
            </div>

            <h3>Configuration Parameters</h3>
            <ul>
              <li><strong>mineralId</strong> - ID of the Life Stone</li>
              <li><strong>type</strong> - Weapon type (WARRIOR, MAGE)</li>
              <li><strong>chance</strong> - Success rate for the group or option</li>
              <li><strong>id</strong> - Option ID from optiondata</li>
            </ul>

            <h2>Stat Modifications</h2>
            <p>
              To add percentage-based stat modifications, use the mul tag:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<mul order="0x30" stat="pAtk" val="1.05"/>`}
              </pre>
            </div>

            <h3>Available Effects</h3>
            <ul>
              <li><strong>add</strong> - Adding a flat value</li>
              <li><strong>mul</strong> - Multiplying by a percentage</li>
              <li><strong>set</strong> - Setting a specific value</li>
              <li><strong>sub</strong> - Subtracting a value</li>
              <li><strong>div</strong> - Dividing by a value</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance stat modifications for each weapon type</li>
                <li>Set appropriate success rates for Life Stones</li>
                <li>Configure item eligibility carefully</li>
                <li>Test augmentation effects on a test server</li>
                <li>Back up your augmentation configuration</li>
                <li>Document custom augmentation changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Higher grade Life Stones may offer more powerful skills or higher success rates.
                Make sure to test different combinations of Life Stones and options to ensure balanced gameplay.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 