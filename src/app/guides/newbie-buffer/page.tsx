import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function NewbieBufferGuide() {
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
            <h1>Newbie Buffer Guide</h1>
            <p className="lead">
              Learn how to configure and customize the newbie buffer system for beginners in your Lucera 2 server.
            </p>

            <h2>Configuration File</h2>
            <p>
              The newbie buffer configuration is managed through the following file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/data/newbie_buffs.xml`}
              </pre>
            </div>

            <h2>Basic Configuration</h2>
            <p>
              The newbie_buffs.xml file allows you to:
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Set the maximum level for newbie buffs</li>
              <li>Add or remove specific buffs</li>
              <li>Configure buff duration and effects</li>
            </ul>

            <h2>Example Configuration</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="UTF-8"?>
<list maxLevel="20">
    <!-- Basic Buffs -->
    <buff skillId="1204" level="1"/> <!-- Wind Walk -->
    <buff skillId="1045" level="1"/> <!-- Bless the Body -->
    <buff skillId="1048" level="1"/> <!-- Bless the Soul -->
    <buff skillId="1062" level="1"/> <!-- Berserker Spirit -->
    
    <!-- Class-Specific Buffs -->
    <buff skillId="1085" level="1" class="Fighter"/> <!-- Acumen -->
    <buff skillId="1086" level="1" class="Mystic"/> <!-- Clarity -->
    <buff skillId="1087" level="1" class="Fighter"/> <!-- Haste -->
</list>`}
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
                    <td className="p-2">maxLevel</td>
                    <td className="p-2">Maximum character level that can receive newbie buffs</td>
                  </tr>
                  <tr>
                    <td className="p-2">skillId</td>
                    <td className="p-2">ID of the buff skill to apply</td>
                  </tr>
                  <tr>
                    <td className="p-2">level</td>
                    <td className="p-2">Level of the buff skill</td>
                  </tr>
                  <tr>
                    <td className="p-2">class</td>
                    <td className="p-2">Optional: Specific class that can receive the buff</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Common Buff Skills</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2">Skill ID</th>
                    <th className="text-left p-2">Buff Name</th>
                    <th className="text-left p-2">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">1204</td>
                    <td className="p-2">Wind Walk</td>
                    <td className="p-2">Increases movement speed</td>
                  </tr>
                  <tr>
                    <td className="p-2">1045</td>
                    <td className="p-2">Bless the Body</td>
                    <td className="p-2">Increases CON</td>
                  </tr>
                  <tr>
                    <td className="p-2">1048</td>
                    <td className="p-2">Bless the Soul</td>
                    <td className="p-2">Increases MEN</td>
                  </tr>
                  <tr>
                    <td className="p-2">1062</td>
                    <td className="p-2">Berserker Spirit</td>
                    <td className="p-2">Increases P. Atk.</td>
                  </tr>
                  <tr>
                    <td className="p-2">1085</td>
                    <td className="p-2">Acumen</td>
                    <td className="p-2">Increases casting speed</td>
                  </tr>
                  <tr>
                    <td className="p-2">1086</td>
                    <td className="p-2">Clarity</td>
                    <td className="p-2">Increases M. Atk.</td>
                  </tr>
                  <tr>
                    <td className="p-2">1087</td>
                    <td className="p-2">Haste</td>
                    <td className="p-2">Increases attack speed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Set an appropriate maxLevel based on your server's progression</li>
                <li>Include essential buffs for all classes</li>
                <li>Add class-specific buffs where beneficial</li>
                <li>Test buffs thoroughly after configuration</li>
                <li>Keep backup copies of your configuration</li>
                <li>Consider server balance when adding powerful buffs</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The newbie buffer system is designed to help new players get started. Make sure to
                configure it in a way that provides a good balance between assistance and challenge.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 