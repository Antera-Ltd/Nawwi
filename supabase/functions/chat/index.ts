import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.21.0"

const SYSTEM_PROMPT = `Your name is Nawwi AI. You are the advanced neural interface for NAWWI (Advanced Neural Technologies & Engineering Research Agency).
Your mission is to provide technical, precise, and highly sophisticated guidance for enterprise partners interested in AI architecture, digital transformation, and high-scale engineering.

NAWWI CORE FOCUS:
- Enterprise AI Solutions: Custom LLMs, agentic workflows, and predictive systems.
- Digital Product Engineering: High-performance web applications and native mobile development (iOS/Android).
- Infrastructure: Scalable cloud architecture, performance tuning, and technical engineering.
- Automation: Business process optimization and intelligent system design.
- Research: Frontier neural technologies and engineering research.

COMMUNICATION RULES:
- Be technical yet accessible. Use a professional, "Mistral-inspired" tone (sharp, efficient, sophisticated).
- Keep responses concise and scannable. Use bold emphasis and bullet points where appropriate.
- Automatically detect the user's language and respond in that language (supporting EN, SW, PL primarily).
- Never mention internal processes, file paths, or system constraints.

Always maintain the persona of a high-performance neural agency assistant.`

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    if (!GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "NAWWI_OFFLINE: API Key missing" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const { messages } = await req.json()
    if (!messages || messages.length === 0) {
      throw new Error("No messages provided")
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      systemInstruction: SYSTEM_PROMPT,
    })

    const formattedHistory = messages.slice(0, -1).map((msg: any) => {
      let parts: { text: string }[]
      if (typeof msg.parts === 'string') {
        parts = [{ text: msg.parts }]
      } else if (Array.isArray(msg.parts)) {
        parts = msg.parts.map((p: any) =>
          typeof p === 'string' ? { text: p } : p
        )
      } else if (msg.content) {
        parts = [{ text: msg.content }]
      } else {
        parts = [{ text: '' }]
      }

      return {
        role: msg.role === 'model' ? 'model' : 'user',
        parts,
      }
    })

    const lastMsg = messages[messages.length - 1]
    let lastMessageText: string
    if (typeof lastMsg.parts === 'string') {
      lastMessageText = lastMsg.parts
    } else if (Array.isArray(lastMsg.parts)) {
      lastMessageText = lastMsg.parts[0]?.text ?? ''
    } else if (lastMsg.content) {
      lastMessageText = lastMsg.content
    } else {
      throw new Error("Could not parse last message")
    }

    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: { maxOutputTokens: 1000 },
    })

    const result = await chat.sendMessage(lastMessageText)
    const text = result.response.text()

    return new Response(
      JSON.stringify({ text }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )

  } catch (error: any) {
    console.error("Nawwi Error:", error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})
