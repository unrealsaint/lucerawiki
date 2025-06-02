import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function DialoguesTranslationsGuide() {
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
            <h1>Dialogues and Translations Guide</h1>
            <p className="lead">
              Learn how to manage and customize dialogues, translations, and localization in your Lucera 2 server.
            </p>

            <h2>Localization Structure</h2>
            <p>The server uses a structured approach to handle different languages and translations:</p>

            <h3>1. HTML Dialogues</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>HTML dialogues are stored in language-specific directories:</p>
              <ul className="list-none space-y-2">
                <li><code>gameserver/data/html-en/</code> - English dialogues</li>
                <li><code>gameserver/data/html-ru/</code> - Russian dialogues</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                These directories contain all NPC dialogues, quest text, and other HTML-based content.
              </p>
            </div>

            <h3>2. String Properties</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>General localization strings are stored in properties files:</p>
              <ul className="list-none space-y-2">
                <li><code>gameserver/data/string/strings_en.properties</code> - English strings</li>
                <li><code>gameserver/data/string/strings_ru.properties</code> - Russian strings</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                These files contain translations for:
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Standard teleport points</li>
                <li>Custom system messages</li>
                <li>Custom services</li>
                <li>NPC dialogues</li>
              </ul>
            </div>

            <h3>3. Client-Side Elements</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>Essential game elements are located in the game client:</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>NPC names and basic information</li>
                <li>Skill names and descriptions</li>
                <li>Map names and locations</li>
                <li>Standard UI elements</li>
              </ul>
            </div>

            <h2>Finding Dialogue Locations</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p>As a GM character, you can easily find the location of any dialogue:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Interact with the NPC or object showing the dialogue</li>
                <li>The dialogue location will be displayed in the chat window</li>
                <li>Use this information to locate and edit the specific dialogue file</li>
              </ol>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always maintain parallel structure between language directories</li>
                <li>Keep HTML dialogues and string properties in sync</li>
                <li>Backup original files before making changes</li>
                <li>Test dialogues in-game after modifications</li>
                <li>Use consistent naming conventions for dialogue files</li>
                <li>Document any custom dialogues or translations</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: When adding new dialogues or translations, ensure you maintain the same structure
                across all language directories to prevent missing content.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 