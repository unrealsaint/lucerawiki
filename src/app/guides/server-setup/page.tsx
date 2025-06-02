import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ServerSetupGuide() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm text-gray-400 hover:text-white"
          >
            <ChevronLeftIcon className="mr-1 h-4 w-4" />
            Back to Knowledge Base
          </Link>

          <article className="prose prose-invert max-w-none">
            <h1>Lucera 2 Server Setup Guide</h1>
            <p className="lead">
              This guide contains basic information on how to run the server on Windows.
              Follow these 10 simple steps to download and set up Lucera2 from scratch.
            </p>

            <h2>Step 1: Create Server Directory</h2>
            <p>Create a folder for your server, for example:</p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>D:\lucera2</code>
            </pre>

            <h2>Step 2: Download Required Software</h2>
            <ol>
              <li>
                <strong>Java Development Kit 17</strong>
                <p>Download from Oracle's website:</p>
                <a
                  href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
                </a>
              </li>
              <li>
                <strong>MySQL Community Server</strong>
                <p>Download from MySQL website:</p>
                <a
                  href="https://dev.mysql.com/downloads/mysql/"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://dev.mysql.com/downloads/mysql/
                </a>
              </li>
              <li>
                <strong>SQL Manager</strong>
                <p>Choose either:</p>
                <ul>
                  <li>
                    <a
                      href="https://www.navicat.com/"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Navicat
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.heidisql.com/"
                      className="text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HeidiSQL
                    </a>
                  </li>
                </ul>
              </li>
            </ol>

            <h2>Step 3: Installation</h2>
            <h3>Java Installation</h3>
            <p>Follow the installation wizard for Java Development Kit 17.</p>

            <h3>MySQL Installation</h3>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <p className="text-yellow-200 font-semibold">Important!</p>
              <p className="text-yellow-100">Select the second option - Use Legacy Auth during MySQL installation.</p>
            </div>

            <h2>Step 4: Server Installation</h2>
            <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 my-4">
              <p className="text-red-200 font-semibold">Important!</p>
              <ul className="list-disc list-inside text-red-100">
                <li>For authserver: Copy from authserver/config/default_english to authserver/config/</li>
                <li>For gameserver: Copy from gameserver/config/default_english to gameserver/config/</li>
              </ul>
            </div>

            <h2>Step 5: Database Setup</h2>
            <p>Create the necessary databases using either MySQL Workbench or your preferred SQL manager.</p>

            <h2>Step 6: Network Configuration</h2>
            <h3>Login Server Configuration</h3>
            <p>Edit authserver/config/authserver.properties:</p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>LoginserverHostname = your_ip_interface</code>
            </pre>

            <h3>Game Server Configuration</h3>
            <p>Edit gameserver/config/server.properties:</p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>ExternalHostname = your_ip_interface</code>
            </pre>

            <h2>Step 7: Starting the Server</h2>
            <p>Start the servers in the following order:</p>
            <ol>
              <li>Auth Server: Run authserver/StartAuthServer.bat</li>
              <li>Game Server: Run gameserver/StartGameServer.bat</li>
            </ol>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Note</p>
              <p className="text-blue-100">
                The server will automatically install the database if you've specified the correct login, password, and database name in the server.properties file.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
} 