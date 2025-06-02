import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ChatFilterGuide() {
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
            <h1>Chat Filter Configuration Guide</h1>
            <p className="lead">
              Learn how to configure chat filters, level limits, and offensive language restrictions in your Lucera 2 server.
            </p>

            <h2>Configuration File</h2>
            <p>
              The chat filter configuration is managed through the following file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/config/chatfilters.xml`}
              </pre>
            </div>

            <h2>Reloading Chat Filters</h2>
            <p>
              You can reload chat filter rules without restarting the server using the following GM command:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`//admin > Server > Components - Reload Chat Filter`}
              </pre>
            </div>

            <h2>Basic Filter Configuration</h2>
            <p>
              Here's an example of a basic chat filter configuration:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<ChatFilter>
  <Channels>SHOUT,TRADE,L2FRIEND</Channels>
  <Level>20</Level>
  <Action>WarnMsg</Action>
  <WarnMsg>common.ChattingProhibitedForNiewbies</WarnMsg>
</ChatFilter>`}
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
                    <td className="p-2">Channels</td>
                    <td className="p-2">Comma-separated list of chat channels to apply the filter to</td>
                  </tr>
                  <tr>
                    <td className="p-2">Level</td>
                    <td className="p-2">Minimum level required to use the specified channels</td>
                  </tr>
                  <tr>
                    <td className="p-2">Action</td>
                    <td className="p-2">Action to take when filter is triggered (e.g., WarnMsg)</td>
                  </tr>
                  <tr>
                    <td className="p-2">WarnMsg</td>
                    <td className="p-2">Message key to display when filter is triggered</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Warning Messages</h2>
            <p>
              Warning messages are defined in the strings properties file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`data/strings/strings_en.properties`}
              </pre>
            </div>

            <h2>Common Chat Channels</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside text-gray-400">
                <li>SHOUT - Global shout channel</li>
                <li>TRADE - Trading channel</li>
                <li>L2FRIEND - Friend chat</li>
                <li>ALLIANCE - Alliance chat</li>
                <li>CLAN - Clan chat</li>
                <li>PARTY - Party chat</li>
                <li>WHISPER - Private messages</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Set appropriate level limits for different chat channels</li>
                <li>Use clear and informative warning messages</li>
                <li>Test filter configurations before applying to production</li>
                <li>Keep backup copies of your configuration</li>
                <li>Monitor chat activity after implementing filters</li>
                <li>Consider server population when setting restrictions</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Chat filters are important for maintaining a positive server environment.
                Make sure to implement them in a way that balances freedom of communication
                with the need for moderation.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 