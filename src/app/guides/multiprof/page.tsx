import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function MultiprofGuide() {
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
        <h1 className="mt-4 text-3xl font-bold">Multiprof Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to configure and use the Multiprof system, allowing players to learn skills from other classes.
        </p>

        <h2>Server Configuration</h2>
        <p>
          Enable the Multiprof system in your server configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# File: altsettings.properties

# Set to True to enable the Multiprof system
AltWeakSkillLearn = True`}
        </pre>

        <h2>NPC Configuration</h2>
        <p>
          The system includes a default NPC with ID 40032 that provides access to all possible classes for learning. The NPC uses different HTML files based on the profession:
        </p>
        <ul>
          <li><code>data/html-en/multi_newbie_class.htm</code> - Basic starting classes</li>
          <li><code>data/html-en/multi_first_class.htm</code> - First profession</li>
          <li><code>data/html-en/multi_second_class.htm</code> - Second profession</li>
          <li><code>data/html-en/multi_third_class.htm</code> - Third profession</li>
        </ul>

        <h2>HTML Configuration</h2>
        <p>
          Configure the HTML interface for skill learning:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<!-- Example HTML configuration -->
<center>
  <table width=300>
    <tr>
      <td>
        <!-- Basic class skills -->
        <button action="bypass -h npc_%objectId%_AltSkillList 10|Human Mage" value="Human Mage Skills" width=200 height=32 back="L2UI_CT1.Button_DF_Down" fore="L2UI_CT1.Button_DF">
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <!-- Advanced class skills -->
        <button action="bypass -h npc_%objectId%_AltSkillList 88|Duelist" value="Duelist Skills" width=200 height=32 back="L2UI_CT1.Button_DF_Down" fore="L2UI_CT1.Button_DF">
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <!-- Current class skills -->
        <button action="bypass -h npc_%objectId%_SkillList" value="Learn Base Skills" width=200 height=32 back="L2UI_CT1.Button_DF_Down" fore="L2UI_CT1.Button_DF">
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <!-- Fishing skills -->
        <button action="bypass -h npc_%objectId%_FishingSkillList" value="Learn Fishing Skills" width=200 height=32 back="L2UI_CT1.Button_DF_Down" fore="L2UI_CT1.Button_DF">
        </button>
      </td>
    </tr>
  </table>
</center>`}
        </pre>

        <h2>Bypass Commands</h2>
        <ul>
          <li><code>npc_%objectId%_AltSkillList [classId]|[className]</code> - Learn skills from a specific class</li>
          <li><code>npc_%objectId%_SkillList</code> - Learn base skills for current profession</li>
          <li><code>npc_%objectId%_FishingSkillList</code> - Learn fishing skills (also used for custom skills)</li>
        </ul>

        <h2>Important Notes</h2>
        <ul>
          <li>The NPC ID 40032 is provided as an example - you can create your own NPC with custom design</li>
          <li>Class IDs must match the actual class IDs in your server</li>
          <li>The fishing skill list is often used to implement custom skills</li>
          <li>Players can learn skills from any class without finding the specific teacher</li>
          <li>The system works for all profession levels (newbie, first, second, third)</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Organize skills by class type for better usability</li>
          <li>Use clear and descriptive button labels</li>
          <li>Consider adding level requirements for advanced skills</li>
          <li>Test all skill combinations before deploying</li>
          <li>Keep the interface clean and user-friendly</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For more detailed information about skill configuration and customization, refer to the <Link href="/guides/skills-effects" className="text-blue-300 hover:text-blue-200">Skills and Effects Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 