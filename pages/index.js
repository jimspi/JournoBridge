export default function Home() { return (<><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JournoBridge</title>
  <link rel="icon" href="/favicon.ico" />
  <link href="https://cdn.tailwindcss.com" rel="stylesheet">
</head>
<body class="bg-blue-900 text-white min-h-screen">
  <header class="px-6 py-4 bg-blue-800 shadow">
    <h1 class="text-3xl font-bold">JournoBridge</h1>
  </header>

  <main>
    <section class="text-center py-20 px-6">
      <h2 class="text-4xl font-extrabold mb-4">Bridge Journalism to the Boardroom</h2>
      <p class="text-lg max-w-xl mx-auto">Use AI-powered tools to translate your newsroom experience into powerful corporate assets.</p>
      <div class="mt-6">
        <a href="#features" class="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">Start Free</a>
      </div>
    </section>

    <section id="features" class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-blue-800">
      <div class="bg-white text-blue-900 rounded-lg p-6 shadow">
        <h3 class="text-xl font-semibold mb-2">Skill Translator</h3>
        <p>Convert your journalism work into resumes and LinkedIn-ready bullet points.</p>
      </div>
      <div class="bg-white text-blue-900 rounded-lg p-6 shadow">
        <h3 class="text-xl font-semibold mb-2">Job Decoder</h3>
        <p>Paste a job description and get a match score and tailored talking points.</p>
      </div>
      <div class="bg-white text-blue-900 rounded-lg p-6 shadow">
        <h3 class="text-xl font-semibold mb-2">Career Profile Builder</h3>
        <p>Build a modern, marketable profile designed for your pivot—not your past.</p>
      </div>
    </section>
  </main>

  <footer class="text-center py-4 text-sm bg-blue-800 text-white">
    © 2025 JournoBridge. Built for your next chapter.
  </footer>
</body>
</html>
</>); }