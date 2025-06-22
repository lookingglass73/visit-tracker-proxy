export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method === 'POST') {
    const forwardResponse = await fetch("https://script.google.com/macros/s/AKfycbys-f-6uaQO840k-0JMpDVd8snde0vbTXgb1JgKyGt0D4qUNL2KcJqTxtRBj_yAemyX/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const text = await forwardResponse.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(text);
  }

  return res.status(405).send('Method Not Allowed');
}
