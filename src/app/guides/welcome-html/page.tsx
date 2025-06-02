import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function WelcomeHtmlGuide() {
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
        <h1 className="mt-4 text-3xl font-bold">Welcome HTML Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to configure and customize the Welcome HTML system that displays when players enter the game.
        </p>

        <h2>File Location</h2>
        <p>
          The Welcome HTML files are located in:
        </p>
        <ul>
          <li><code>gameserver/data/html-en/welcome.htm</code> - English version</li>
          <li><code>gameserver/data/html-ru/welcome.htm</code> - Russian version</li>
        </ul>

        <h2>Available Options</h2>
        <p>
          The Welcome HTML system supports several customization options:
        </p>

        <h3>Language Change</h3>
        <p>
          You can add language selection buttons to your welcome page:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<button value="EN" action="bypass -h scripts_services.Welcome:change_lang en" width=40 height=20 back="sek.cbui94" fore="sek.cbui94">
<button value="RU" action="bypass -h scripts_services.Welcome:change_lang ru" width=40 height=20 back="sek.cbui94" fore="sek.cbui94">`}
        </pre>

        <h3>Player Name Display</h3>
        <p>
          You can display the player's name in the welcome message using the following variable:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`%char_name%`}
        </pre>

        <h2>Server Configuration</h2>
        <p>
          The Welcome HTML system is controlled by the following configuration in <code>gameserver/config/services.properties</code>:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Show welcome HTML when player enters
ShowHtmlWelcome = true`}
        </pre>

        <h2>Implementation Details</h2>
        <p>
          The Welcome HTML system is implemented through the <code>Welcome</code> service class. Here's the key functionality:
        </p>
        <ul>
          <li>Language change handling through the <code>change_lang</code> method</li>
          <li>Automatic welcome message display when players enter the game</li>
          <li>Support for player name variable replacement</li>
          <li>Conditional display based on clan notice availability</li>
        </ul>

        <h2>Important Notes</h2>
        <ul>
          <li>The welcome message will only be shown if the player is not in a clan or if their clan has no notice</li>
          <li>Language changes are stored as player variables and persist across sessions</li>
          <li>You can customize the HTML layout and styling to match your server's theme</li>
          <li>The system supports both English and Russian languages by default</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Keep the welcome message concise and informative</li>
          <li>Include important server information and links to community resources</li>
          <li>Test the welcome message with different character names to ensure proper display</li>
          <li>Consider adding links to your server's website, forum, or Discord</li>
          <li>Use appropriate styling to match your server's visual theme</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> The Welcome HTML system is a flexible feature that can be used to provide important information to players when they enter the game. Make sure to test your welcome message thoroughly before deploying it to your live server.
          </p>
        </div>
      </div>
    </div>
  )
} 