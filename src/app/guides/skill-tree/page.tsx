import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SkillTreeGuide() {
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
            <h1>Skill Tree Configuration Guide</h1>
            <p className="lead">
              Learn how to configure and customize all types of skills in your server, including player skills, clan skills, and fishing skills.
            </p>

            <h2>Configuration Files</h2>
            <p>
              All skill tree configurations are located in the following directory:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/data/skill_tree/`}
              </pre>
            </div>

            <h2>Available Configuration Files</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">File</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">normal_skill_tree.xml</td>
                    <td className="px-4 py-2">Player class skills, including skill books and SP costs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">pledge_skill_tree.xml</td>
                    <td className="px-4 py-2">Clan skills, including RP costs and RB egg requirements</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">fishing_skill_tree.xml</td>
                    <td className="px-4 py-2">Fishing skills and their requirements</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">skill_enchant_data.xml</td>
                    <td className="px-4 py-2">Skill enchantment configuration</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Player Skills Configuration</h2>
            <p>
              The normal_skill_tree.xml file controls all player class skills:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE list SYSTEM "skill_tree.dtd">
<list>
    <skill id="1234" level="1">
        <item id="12345" count="1"/> <!-- Required skill book -->
        <sp>100</sp> <!-- SP cost -->
        <min_level>10</min_level> <!-- Minimum level required -->
    </skill>
</list>`}
              </pre>
            </div>

            <h2>Clan Skills Configuration</h2>
            <p>
              The pledge_skill_tree.xml file controls clan skills:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE list SYSTEM "skill_tree.dtd">
<list>
    <skill id="1234" level="1">
        <item id="12345" count="1"/> <!-- Required RB egg -->
        <rp>1000</rp> <!-- Reputation points cost -->
        <min_pledge_level>3</min_pledge_level> <!-- Minimum clan level -->
    </skill>
</list>`}
              </pre>
            </div>

            <h2>Fishing Skills Configuration</h2>
            <p>
              The fishing_skill_tree.xml file controls fishing skills:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE list SYSTEM "skill_tree.dtd">
<list>
    <skill id="1234" level="1">
        <item id="12345" count="1"/> <!-- Required item -->
        <adena>1000</adena> <!-- Adena cost -->
        <min_level>10</min_level> <!-- Minimum level required -->
    </skill>
</list>`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
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
                    <td className="px-4 py-2">Skill level</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">item</td>
                    <td className="px-4 py-2">Required item (skill book, RB egg, etc.)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">sp</td>
                    <td className="px-4 py-2">Skill points cost (player skills)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">rp</td>
                    <td className="px-4 py-2">Reputation points cost (clan skills)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">adena</td>
                    <td className="px-4 py-2">Adena cost (fishing skills)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">min_level</td>
                    <td className="px-4 py-2">Minimum level required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">min_pledge_level</td>
                    <td className="px-4 py-2">Minimum clan level required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Keep backup copies of all skill tree configuration files</li>
                <li>Test skill requirements and costs thoroughly</li>
                <li>Balance skill costs across different types</li>
                <li>Consider server economy when setting costs</li>
                <li>Document custom skill configurations</li>
                <li>Monitor player feedback and adjust as needed</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Skill tree configuration is a powerful feature that allows for flexible customization of all skill types.
                Make sure to carefully plan your skill requirements and costs to maintain server balance and player progression.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 