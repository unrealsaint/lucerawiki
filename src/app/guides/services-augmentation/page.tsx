import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ServicesAugmentationGuide() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back to Knowledge Base
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Services Manager Augmentation Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to add augmentation options to the Services Manager, allowing players to purchase various augmentation effects.
        </p>

        <h2>Database Configuration</h2>
        <p>
          First, add the augmentation data to the Services Manager template:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`-- Add to gameserver\\sql\\install\\variation_sell_service_template.sql

-- Example entries for different augmentation options
INSERT INTO \`variation_sell_service_template\` 
(\`menuId\`, \`variationOption1\`, \`variationOption2\`, \`consumeList\`) VALUES
(1, 14561, 700, '9338,1'),  -- Big Head + CP/Crit
(2, 14562, 701, '9338,1'),  -- Eva Buff + Stats
(3, 14563, 702, '9338,1'),  -- Acrobatics + Stats
(4, 14564, 703, '9338,1'),  -- Iron Body + Stats
(5, 14565, 704, '9338,1'),  -- Firework + Stats
(6, 14566, 705, '9338,1');  -- Music + Stats`}
        </pre>

        <h2>Option Data Configuration</h2>
        <p>
          Configure the augmentation options in the optiondata file:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<!-- Active Skills -->
<Optiondata id="14561">
  <!-- Active: Temporarily increases the size of your head. -->
  <Skill id="3203" level="1" />
</Optiondata>

<!-- Passive Stats -->
<Optiondata id="700">
  <!-- 1) Max. CP +51,37 2) Crete. 10.37 -->
  <For>
    <Add order="0x40" stat="maxCp" value="51.37" />
    <Add order="0x40" stat="rCrit" value="10.37" />
  </For>
</Optiondata>`}
        </pre>

        <h2>NPC Dialogue Configuration</h2>
        <p>
          Add the augmentation options to the Services Manager NPC dialogue:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<!-- Add to gameserver\\data\\html-en\\mods\\services -->

Service Manager

<table width=130 cellpadding="0" cellspacing="0">
<tr>
<td><button width=100 height=18 action="bypass -h scripts_services.VariationSellService:buyVariation 1" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Big Head"></td>
<td><button width=100 height=18 action="bypass -h scripts_services.VariationSellService:buyVariation 2" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Eva Buff"></td>
<td><button width=100 height=18 action="bypass -h scripts_services.VariationSellService:buyVariation 3" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Acrobatics"></td>
</tr>
</table><br>
<table width=130 cellpadding="0" cellspacing="0">
<tr>
<td><button width=100 height=18 action="bypass -h scripts_services.VariationSellService:buyVariation 4" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Iron Body"></td>
<td><button width=100 height=18 action="bypass -h scripts_services.VariationSellService:buyVariation 5" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Firework"></td>
<td><button width=100 height=18 action="bypass -h scripts_services.VariationSellService:buyVariation 6" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Music"></td>
</tr>
</table><br>
<center>
<table width=130 cellpadding="0" cellspacing="0">
<tr>
<td></td>
<td><button width=100 height=18 action="bypass -h npc_%objectId%_Augment 2" back="L2UI_CH3.bigbutton2_down" fore="L2UI_CH3.bigbutton2" value="Remove LS"></td>
<td></td>
</tr>
</table>
</center>`}
        </pre>

        <h2>Configuration Parameters</h2>
        <ul>
          <li><strong>menuId</strong>: Unique ID for the dialogue option (must match the bypass action)</li>
          <li><strong>variationOption1</strong>: Active skill ID from optiondata</li>
          <li><strong>variationOption2</strong>: Passive stat ID from optiondata</li>
          <li><strong>consumeList</strong>: Items required to purchase the augmentation (format: itemId,amount)</li>
        </ul>

        <h2>Important Notes</h2>
        <ul>
          <li>Each augmentation option needs a unique menuId</li>
          <li>The menuId in the database must match the number in the bypass action</li>
          <li>Active skills are defined in optiondata with Skill tags</li>
          <li>Passive stats are defined in optiondata with Add tags</li>
          <li>The consumeList can specify multiple items separated by semicolons</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Organize augmentation options by type or effect</li>
          <li>Use clear and descriptive names for the buttons</li>
          <li>Balance the costs and effects of each augmentation</li>
          <li>Test all augmentation combinations before deploying</li>
          <li>Keep the interface clean and user-friendly</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For more detailed information about item augmentation and Life Stones, refer to the <Link href="/guides/item-augmentation" className="text-blue-300 hover:text-blue-200">Item Augmentation Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 