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
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful AI assistant for job seekers and career growth.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 1200,
      }),
    });

    const raw = await response.text();
    try {
      const data = JSON.parse(raw);
      if (data.choices && data.choices[0]?.message?.content) {
        return res.status(200).json({ output: data.choices[0].message.content });
      } else {
        console.error('GPT response malformed:', raw);
        return res.status(502).json({ error: 'Unexpected GPT response', raw });
      }
    } catch (err) {
      console.error('Failed to parse GPT JSON:', raw);
      return res.status(502).json({ error: 'Bad response from OpenAI', raw });
    }
  } catch (err) {
    console.error('GPT API error:', err.message);
    return res.status(500).json({ error: 'Failed to reach OpenAI', detail: err.message });
  }
}



