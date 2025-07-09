import Groq from 'groq-sdk';
export { renderers } from '../../renderers.mjs';

const groq = new Groq({
  apiKey: "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"
});
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const completion = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      messages: body.messages,
      temperature: 0.7,
      max_tokens: 500
    });
    return new Response(
      JSON.stringify({
        message: completion.choices[0].message.content
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate response"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
