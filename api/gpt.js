export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that provides clear, concise, and professional career insights.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1200
      })
    });

    const openaiData = await openaiRes.json();

    const message = openaiData.choices?.[0]?.message?.content;

    if (!message) {
      throw new Error('Invalid response from OpenAI');
    }

    return res.status(200).json({ output: message });
  } catch (error) {
    console.error('GPT API Error:', error);
    return res.status(500).json({ error: 'Failed to process your request' });
  }
}

