import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SkillEnchantmentGuide() {
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
            <h1>Skill Enchantment Guide</h1>
            <p className="lead">
              Learn how to configure and tune the chance of skill enchantment in your server.
            </p>

            <h2>Configuration File</h2>
            <p>
              The skill enchantment system is configured in:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/data/skill_tree/skill_enchant_data.xml`}
              </pre>
            </div>

            <h2>Basic Structure</h2>
            <p>
              The configuration file uses XML format with the following structure:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE list SYSTEM "skill_enchant_data.dtd">
<list>
    <skill id="1234"> <!-- Skill ID -->
        <route id="1"> <!-- Route ID -->
            <level>1</level> <!-- Enchant Level -->
            <chance>100</chance> <!-- Success Chance -->
            <adena>1000</adena> <!-- Adena Cost -->
            <sp>100</sp> <!-- SP Cost -->
        </route>
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
                    <td className="px-4 py-2">route</td>
                    <td className="px-4 py-2">Enchantment route ID</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">level</td>
                    <td className="px-4 py-2">Enchantment level</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">chance</td>
                    <td className="px-4 py-2">Success chance percentage</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">adena</td>
                    <td className="px-4 py-2">Adena cost for enchantment</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">sp</td>
                    <td className="px-4 py-2">Skill points cost</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Example Configurations</h2>

            <h3>1. Basic Skill Enchantment</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="1234">
    <route id="1">
        <level>1</level>
        <chance>100</chance>
        <adena>1000</adena>
        <sp>100</sp>
    </route>
    <route id="1">
        <level>2</level>
        <chance>80</chance>
        <adena>2000</adena>
        <sp>200</sp>
    </route>
</skill>`}
              </pre>
            </div>

            <h3>2. Multiple Routes</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="1234">
    <!-- Route 1 -->
    <route id="1">
        <level>1</level>
        <chance>100</chance>
        <adena>1000</adena>
        <sp>100</sp>
    </route>
    <!-- Route 2 -->
    <route id="2">
        <level>1</level>
        <chance>90</chance>
        <adena>1500</adena>
        <sp>150</sp>
    </route>
</skill>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance enchantment chances based on skill power</li>
                <li>Consider server economy when setting adena costs</li>
                <li>Test enchantment rates thoroughly before implementation</li>
                <li>Keep backup copies of your skill_enchant_data.xml file</li>
                <li>Document custom enchantment configurations</li>
                <li>Monitor player feedback and adjust rates if needed</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Skill enchantment configuration can significantly impact game balance and player progression.
                Make sure to carefully plan your enchantment rates and costs to maintain server economy and player engagement.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 