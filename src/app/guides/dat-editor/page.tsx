import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function DatEditorGuide() {
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
            <h1>Classic/Legacy/Interlude DAT Editor</h1>
            <p className="lead">
              A comprehensive editor for DAT, INI, and HTM files for all versions of the Lucera 2 project.
            </p>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Requirements</p>
              <p className="text-blue-100">Java Development Kit 17 (JDK 17)</p>
            </div>

            <h2>Features</h2>
            <ul>
              <li>Supports all versions (Classic, Legacy, Interlude)</li>
              <li>Edit DAT, INI, and HTM files</li>
              <li>Simple and intuitive interface</li>
              <li>Built-in formatter for clean code</li>
            </ul>

            <h2>Configuration Files</h2>
            <p>The editor includes specific configurations for different versions:</p>
            
            <h3>Interlude Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img 
                src="/images/interlude-config.webp" 
                alt="Interlude Configuration" 
                className="rounded-lg"
              />
            </div>

            <h3>Classic Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img 
                src="/images/classic-config.webp" 
                alt="Classic Configuration" 
                className="rounded-lg"
              />
            </div>

            <h3>Legacy Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img 
                src="/images/legacy-config.webp" 
                alt="Legacy Configuration" 
                className="rounded-lg"
              />
            </div>

            <h2>Common Issues and Solutions</h2>
            
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">File Loading Issues</h3>
              <p className="text-yellow-100">
                If you encounter issues loading specific DAT files, ensure you're using the correct configuration
                for your version. The editor supports different structures for each version.
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Formatting Issues</h3>
              <p className="text-yellow-100">
                If you experience formatting issues with escape sequences (like \n), you can disable the formatter
                in the editor settings.
              </p>
            </div>

            <h2>Download</h2>
            <p>You can download the DAT Editor from the following link:</p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <a
                href="/downloads/Lucera2DatEditor.zip"
                className="text-blue-400 hover:text-blue-300"
                download
              >
                Download Lucera2DatEditor.zip
              </a>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mt-4">
              <p className="text-sm text-gray-400">
                Source code is also available for developers who want to modify or enhance the editor.
              </p>
              <a
                href="/downloads/L2ClientDatSourceCode.zip"
                className="text-blue-400 hover:text-blue-300 text-sm"
                download
              >
                Download Source Code
              </a>
            </div>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Note</p>
              <p className="text-blue-100">
                Original code by Backe - GodWorld. Modified and maintained by the Lucera 2 team.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
} 