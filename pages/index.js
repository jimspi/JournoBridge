import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>JournoBridge</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      </Head>

      <div className="bg-blue-900 text-white min-h-screen">
        <header className="px-6 py-4 bg-blue-800 shadow">
          <h1 className="text-3xl font-bold">JournoBridge</h1>
        </header>

        <main>
          <section className="text-center py-20 px-6">
            <h2 className="text-4xl font-extrabold mb-4">Bridge Journalism to the Boardroom</h2>
            <p className="text-lg max-w-xl mx-auto">
              Use AI-powered tools to translate your newsroom experience into powerful corporate assets.
            </p>
            <div className="mt-6">
              <a href="#features" className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">
                Start Free
              </a>
            </div>
          </section>

          <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-blue-800">
            <div className="bg-white text-blue-900 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">Skill Translator</h3>
              <p>Convert your journalism work into resumes and LinkedIn-ready bullet points.</p>
            </div>
            <div className="bg-white text-blue-900 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">Job Decoder</h3>
              <p>Paste a job description and get a match score and tailored talking points.</p>
            </div>
            <div className="bg-white text-blue-900 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">Career Profile Builder</h3>
              <p>Build a modern, marketable profile designed for your pivot—not your past.</p>
            </div>
          </section>
        </main>

        <footer className="text-center py-4 text-sm bg-blue-800 text-white">
          © 2025 JournoBridge. Built for your next chapter.
        </footer>
      </div>
    </>
  )
}
