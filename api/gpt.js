export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid prompt' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful AI assistant for job seekers.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 1200,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: `OpenAI error: ${data.error?.message || 'Unknown error'}`,
      });
    }

    const output = data.choices?.[0]?.message?.content;
    if (!output) {
      return res.status(502).json({ error: 'No content in OpenAI response', raw: data });
    }

    return res.status(200).json({ output });
  } catch (err) {
    console.error('GPT API error:', err);
    return res.status(500).json({ error: 'Internal server error', detail: err.message });
  }
}




