import type { FromLanguage, Language } from '../types.d';
import { SUPPORTED_LANGUAGES } from '../contants';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const translate = async ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) => {
  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage];
  const toCode = SUPPORTED_LANGUAGES[toLanguage];

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `Act like a professional translator. Your mission is to answer only the translated text as indicated. Translate the following text from ${fromLanguage} to ${toLanguage}: "${text}"`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const translatedText = response.text();

  return translatedText;
};
