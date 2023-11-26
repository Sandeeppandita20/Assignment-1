import OpenAI from "openai";
import readline from "readline";
const openai = new OpenAI({
    apiKey: "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",
});
// const stream = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{role: "user",content: "Hello"}],
//     stream: true,
// });
// for await (const part of stream) {
//     console.log(part.choices[0].delta);
//     }
// const mango = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: 'Hello world' }],
// });
// console.log(mango.choices[0].message);
const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Capital of India' }],
});
console.log(chatCompletion.choices[0].message);