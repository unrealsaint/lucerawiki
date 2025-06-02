import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ModeratorManagementGuide() {
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
        <h1 className="mt-4 text-3xl font-bold">Moderator Management Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to manage moderators and configure chat ban functionality in your server.
        </p>

        <h2>Admin Control Commands</h2>
        <p>
          The following commands are available for managing moderators:
        </p>
        <ul>
          <li><code>//moders</code> - Opens the Moderators control panel</li>
          <li><code>//moders_add</code> - Adds a new moderator</li>
          <li><code>//moders_del</code> - Removes a moderator</li>
          <li><code>//penalty</code> - Applies penalties for improper moderation</li>
        </ul>

        <h2>Moderator Rights Configuration</h2>
        <p>
          Moderator rights are configured in the following file:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# File: gameserver/config/GMAccess.d/moderator.xml

<?xml version='1.0' encoding='utf-8'?>
<list>
    <char>
        <PlayerID set="-1"/> - player's obj_id
        <CanBanChat set="true"/> - can ban chat
        <CanUnBanChat set="true"/> - can unban chat
        <BanChatDelay set="-1"/> - delay between bans
        <BanChatMaxValue set="-1"/> - maximum ban time a moderator can issue
        <BanChatCountPerDay set="-1"/> - how many times can ban in a day
        <BanChatBonusId set="-1"/> - reward id for ban
        <BanChatBonusCount set="-1"/> - reward count for ban
        <CanUseGMCommand set="true"/>
    </char>
</list>`}
        </pre>

        <h2>Server Configuration</h2>
        <p>
          Configure chat ban announcements in your server.properties file:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# File: server.properties

# Announce to the entire world or the current region (True = entire world)
BANCHAT_ANNOUNCE = True

# Show moderator's nickname in the announcement
BANCHAT_ANNOUNCE_FOR_ALL_WORLD = True

# Show moderator's nickname in the announcement
BANCHAT_ANNOUNCE_NICK = True`}
        </pre>

        <h2>Chat Ban Commands</h2>
        <p>
          Moderators can use the following commands to manage chat bans:
        </p>
        <ul>
          <li><code>//nochannel [name] [period in minutes] [reason]</code></li>
          <li><code>//nc [name] [period in minutes] [reason]</code></li>
        </ul>

        <h2>Configuration Parameters</h2>
        <ul>
          <li><strong>PlayerID</strong> - The object ID of the player to be granted moderator rights</li>
          <li><strong>CanBanChat</strong> - Whether the moderator can ban players from chat</li>
          <li><strong>CanUnBanChat</strong> - Whether the moderator can unban players from chat</li>
          <li><strong>BanChatDelay</strong> - Minimum time (in minutes) between chat bans</li>
          <li><strong>BanChatMaxValue</strong> - Maximum duration (in minutes) for a chat ban</li>
          <li><strong>BanChatCountPerDay</strong> - Maximum number of chat bans per day</li>
          <li><strong>BanChatBonusId</strong> - Item ID for moderator rewards</li>
          <li><strong>BanChatBonusCount</strong> - Number of reward items given per ban</li>
          <li><strong>CanUseGMCommand</strong> - Whether the moderator can use GM commands</li>
        </ul>

        <h2>Important Notes</h2>
        <ul>
          <li>Set PlayerID to -1 to use the configuration as a template</li>
          <li>Negative values for BanChatDelay, BanChatMaxValue, and BanChatCountPerDay disable these restrictions</li>
          <li>Negative values for BanChatBonusId and BanChatBonusCount disable rewards</li>
          <li>Chat ban announcements can be configured to show in specific regions or globally</li>
          <li>Moderator names can be hidden or shown in ban announcements</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Set reasonable limits for ban duration and frequency</li>
          <li>Implement a reward system to encourage proper moderation</li>
          <li>Use the penalty system for moderators who abuse their powers</li>
          <li>Keep track of moderation actions through announcements</li>
          <li>Regularly review moderator performance and rights</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For more detailed information about server administration, refer to the <Link href="/guides/admin-rights" className="text-blue-300 hover:text-blue-200">Admin Rights Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 