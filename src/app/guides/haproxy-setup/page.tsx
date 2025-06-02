import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function HAProxySetupGuide() {
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
        <h1 className="mt-4 text-3xl font-bold">HAProxy v2 Setup Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to install and configure HAProxy v2 for your server to optimize traffic routing and protect against DDoS attacks.
        </p>

        <h2>What is HAProxy v2?</h2>
        <p>
          HAProxy v2 is a protocol that allows your server to display players' real IP addresses while still benefiting from proxy protection. Without this protocol, all players would appear to connect from the proxy server's IP address.
        </p>

        <h2>Recommended Proxy Providers</h2>
        <p>
          The following providers offer HAProxy v2 support:
        </p>
        <ul>
          <li>Variti - <a href="https://www.variti.com/" className="text-blue-400 hover:text-blue-300">https://www.variti.com/</a></li>
          <li>Ddos-Guard - <a href="https://ddos-guard.net/" className="text-blue-400 hover:text-blue-300">https://ddos-guard.net/</a></li>
          <li>StormWall - <a href="https://stormwall.pro/" className="text-blue-400 hover:text-blue-300">https://stormwall.pro/</a></li>
          <li>L2Up - <a href="https://host.l2up.ru" className="text-blue-400 hover:text-blue-300">https://host.l2up.ru</a></li>
        </ul>

        <h2>Server Configuration</h2>
        <p>
          Configure your server to work with HAProxy v2:
        </p>

        <h3>Login Server Configuration</h3>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# File: authserver.properties

# Set to -1 to enable HAProxy
LoginserverPort = -1

# Your server's IP address for accepting HAProxy connections
HAProxyLoginserverHostname = your_server_ip

# Port for receiving connections from HAProxy
HAProxyLoginserverPort = 2121`}
        </pre>

        <h3>Game Server Configuration</h3>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# File: server.properties

# Port for receiving connections from HAProxy
HAProxyGameserverPort = 7778

# Leave empty when using HAProxy
GameserverPort =`}
        </pre>

        <h2>Proxy Server Configuration</h2>
        <p>
          Configure proxy servers in the following file:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# File: authserver/config/proxyservers.xml

<?xml version='1.0' encoding='utf-8'?>
<list>
    <!--
    Usage: <proxyServer origId="<original_server_id>" proxyId="<proxy_server_id>" proxyHost="<proxy_host>" proxyPort="<proxy_port>" />
    Where:
        <original_server_id>    - Original server id
        <proxy_server_id>       - Server ID used as a proxy server
        <proxy_host>            - Host address (IP) of the proxy server
        <proxy_port>            - Proxy servers port
    -->
    <proxyServer origId="1" proxyId="2" proxyHost="185.165.123.192" proxyPort="7777" />
    <proxyServer origId="1" proxyId="3" proxyHost="185.165.123.193" proxyPort="7777" />
    <proxyServer origId="1" proxyId="4" proxyHost="185.165.123.194" proxyPort="7777" />
</list>`}
        </pre>

        <h2>Important Notes</h2>
        <ul>
          <li>Close all incoming and outgoing traffic except for the proxy IP addresses</li>
          <li>Update your license binding with the new IP address</li>
          <li>Ensure the proxy provider allows connections from their addresses to your server</li>
          <li>Configure firewall rules to allow traffic only from proxy IPs</li>
          <li>Test the connection after configuration to ensure proper functionality</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use multiple proxy servers for better load balancing</li>
          <li>Regularly monitor proxy server performance</li>
          <li>Keep proxy server IPs updated in your configuration</li>
          <li>Implement proper firewall rules for security</li>
          <li>Maintain backup proxy servers for redundancy</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For more detailed information about server setup, refer to the <Link href="/guides/server-setup" className="text-blue-300 hover:text-blue-200">Server Setup Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 