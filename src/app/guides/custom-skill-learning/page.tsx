import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CustomSkillLearningGuide() {
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
            <h1>Custom Skill Learning System Guide</h1>
            <p className="lead">
              Learn how to implement and configure a custom skill learning system in your server.
            </p>

            <h2>Configuration</h2>
            <p>
              The custom skill learning system is configured through two main components:
            </p>
            <ul>
              <li>Configuration file: <code>altsettings.properties</code></li>
              <li>Skill configuration file: <code>gameserver/data/skill_tree/custom_skill_tree.xml</code></li>
            </ul>

            <h3>Enabling the System</h3>
            <p>
              In <code>altsettings.properties</code>, set the following parameter:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Enable custom skill learning system (default: False)
AltAllowCustomSkillLearnSystem = True`}
              </pre>
            </div>

            <h2>Skill Configuration</h2>
            <p>
              The custom skill learning system works based on player race and can be applied to any NPC.
              Use the following bypass to add the skill learning option to an NPC:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`[npc_%objectId%_CustomSkillList|Learn Custom Skills]`}
              </pre>
            </div>

            <h3>XML Configuration Example</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE list SYSTEM "tree.dtd">
<list>
     <custom_skill_tree>
         <race id="0"> <!-- Human -->
           <skill id="1313" level="1" cost="0" name="Pumping" min_level="10" item_id="57" item_count="10" clicked="false" />
         </race>
         <race id="1"> <!-- Elf -->
            <skill id="1313" level="1" cost="0" name="Pumping" min_level="10" item_id="57" item_count="10" clicked="false" />
         </race>
         <race id="2"> <!-- Dark Elf -->
             <skill id="1313" level="1" cost="0" name="Pumping" min_level="10" item_id="57" item_count="10" clicked="false" />
         </race>
         <race id="3"> <!-- Ork -->
             <skill id="1313" level="1" cost="0" name="Pumping" min_level="10" item_id="57" item_count="10" clicked="false" />
         </race>
         <race id="4"> <!-- Dwarves -->
             <skill id="1313" level="1" cost="0" name="Pumping" min_level="10" item_id="57" item_count="10" clicked="false" />
         </race>
     </custom_skill_tree>
</list>`}
              </pre>
            </div>

            <h2>Skill Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Parameter</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">id</td>
                    <td className="px-4 py-2">Skill ID number</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">level</td>
                    <td className="px-4 py-2">Skill level to learn</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">cost</td>
                    <td className="px-4 py-2">Cost in adena (0 for free)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">name</td>
                    <td className="px-4 py-2">Skill name</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">min_level</td>
                    <td className="px-4 py-2">Minimum player level required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">item_id</td>
                    <td className="px-4 py-2">Required item ID (0 for none)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">item_count</td>
                    <td className="px-4 py-2">Number of items required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">clicked</td>
                    <td className="px-4 py-2">Whether skill requires clicking (true/false)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test the system thoroughly before implementing on live server</li>
                <li>Keep backup copies of your custom skill configurations</li>
                <li>Balance skill requirements across different races</li>
                <li>Consider server economy when setting item requirements</li>
                <li>Document custom skill modifications for future reference</li>
                <li>Monitor skill usage and player feedback</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The custom skill learning system is a powerful feature that allows for flexible
                skill distribution. Make sure to carefully plan your skill requirements and costs to
                maintain server balance and player engagement.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 