import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function AdminRightsGuide() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
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
      <div className="flex-1">
        <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            <h1>How to Give Admin/GM/GameMaster Rights</h1>
            <p className="lead">
              Learn how to assign different levels of administrative access to characters in your Lucera 2 server.
            </p>

            <h2>Administrator Rights</h2>
            <p>To grant Administrator rights to a character:</p>
            <ol>
              <li>Find the character's <code>obj_id</code> from the <code>characters.sql</code> table</li>
              <li>Open <code>gameserver/config/GMAccess.xml</code></li>
              <li>Add the character's <code>obj_id</code> in the following format:</li>
            </ol>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>{`<PlayerID set="here obj_id"></PlayerID>`}</code>
            </pre>

            <div className="my-8">
              <Image
                src="/images/gm-access-config.png"
                alt="GM Access Configuration Example"
                width={800}
                height={400}
                className="rounded-lg border border-gray-700"
              />
              <p className="text-sm text-gray-400 mt-2">Example of GM Access configuration file</p>
            </div>

            <h2>Other Access Levels</h2>
            <p>For other access levels (Moderator, Event GM, etc.), use the pre-configured templates in:</p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code>gameserver/config/GMAccess.d/</code>
            </div>

            <h3>Available Templates</h3>
            <ul>
              <li><code>event_manager.xml</code> - For event management rights</li>
              <li><code>full.xml</code> - For full administrative access</li>
              <li><code>marshal.xml</code> - For marshal rights</li>
              <li><code>moderator.xml</code> - For moderation rights</li>
              <li><code>sheriff.xml</code> - For sheriff rights</li>
            </ul>

            <div className="my-8">
              <Image
                src="/images/access-templates.png"
                alt="Access Level Templates"
                width={800}
                height={400}
                className="rounded-lg border border-gray-700"
              />
              <p className="text-sm text-gray-400 mt-2">Available access level templates</p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Important Note</h3>
              <p className="text-yellow-100">
                Each template uses the same format as the main GMAccess.xml file. Simply add the character's
                obj_id in the PlayerID tag.
              </p>
            </div>

            <h2>Example Configuration</h2>
            <p>Here's an example of how to set up different access levels:</p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>{`<!-- Administrator -->
<PlayerID set="12345"></PlayerID>

<!-- Event Manager -->
<PlayerID set="67890"></PlayerID>

<!-- Moderator -->
<PlayerID set="54321"></PlayerID>`}</code>
            </pre>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Security Tip</p>
              <p className="text-blue-100">
                Always verify the obj_id before granting administrative rights. Double-check the character
                name and account to ensure you're granting access to the correct player.
              </p>
            </div>

            <h2>Access Level Hierarchy</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <ol className="list-decimal list-inside">
                <li>Administrator (Full Access)</li>
                <li>Marshal</li>
                <li>Sheriff</li>
                <li>Event Manager</li>
                <li>Moderator</li>
              </ol>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Keep a record of all administrative access granted</li>
                <li>Regularly review and update access rights</li>
                <li>Remove access when no longer needed</li>
                <li>Use the minimum required access level for each role</li>
              </ul>
            </div>

            <h2>Downloads</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="/downloads/gm-access-templates.zip"
                className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-4 hover:bg-gray-700"
              >
                <div>
                  <h3 className="text-lg font-medium">GM Access Templates</h3>
                  <p className="text-sm text-gray-400">Complete set of access level templates</p>
                </div>
                <span className="text-blue-400">Download →</span>
              </a>
              <a
                href="/downloads/admin-tools.zip"
                className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-4 hover:bg-gray-700"
              >
                <div>
                  <h3 className="text-lg font-medium">Admin Tools</h3>
                  <p className="text-sm text-gray-400">Additional tools for server administration</p>
                </div>
                <span className="text-blue-400">Download →</span>
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 