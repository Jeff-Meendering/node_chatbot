import 'dotenv/config'

import OpenAI from 'openai'

const openai = new OpenAI()

const results = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        {
            // Context for the LLM
            role: 'system', 
            content: 'You are an AI assistant, answer any questions to the best of you ability.',
        },
        {
            // User's question
            role: 'user',
            content: 'Hello, how many planets are in our solar system?',
        },
    ],
})

console.log(results.choices[0].message.content);