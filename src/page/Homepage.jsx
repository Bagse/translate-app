import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LanguageBlock from '../components/LanguageBlock';

function Homepage() {
  const [inputText, setInputText] = useState('Hello, how are you?');
  const [translatedText, setTranslatedText] = useState('');

  // Variables de estado para el primer bloque
  const [sourceLanguageBlock1, setSourceLanguageBlock1] = useState('en');
  const [targetLanguageBlock1, setTargetLanguageBlock1] = useState('fr');

  // Variables de estado para el segundo bloque
  const [sourceLanguageBlock2, setSourceLanguageBlock2] = useState('en');
  const [targetLanguageBlock2, setTargetLanguageBlock2] = useState('fr');

  const translateText = async (sourceLang, targetLang, text) => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=${sourceLang}|${targetLang}`
      );

      if (response.data && response.data.responseData) {
        const translation = response.data.responseData.translatedText;
        setTranslatedText(translation);
      }
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  useEffect(() => {
    translateText(sourceLanguageBlock1, targetLanguageBlock1, inputText);
  }, [sourceLanguageBlock1, targetLanguageBlock1, inputText]);

  useEffect(() => {
    translateText(sourceLanguageBlock2, targetLanguageBlock2, inputText);
  }, [sourceLanguageBlock2, targetLanguageBlock2, inputText]);

  // Funciones de cambio de idioma genéricas
  const handleSourceLanguageChange = (block, language) => {
    if (block === 1) {
      setSourceLanguageBlock1(language);
      setTargetLanguageBlock1(language === 'fr' ? 'en' : 'fr');
    } else if (block === 2) {
      setSourceLanguageBlock2(language);
      setTargetLanguageBlock2(language === 'fr' ? 'en' : 'fr');
    }
  };

  const handleTargetLanguageChange = (block, language) => {
    if (block === 1) {
      setTargetLanguageBlock1(language);
    } else if (block === 2) {
      setTargetLanguageBlock2(language);
    }
  };

  return (
    <div className="flex place-content-center">
      <img src="./img/hero_img.jpg" alt="" className="w-full absolute" />

      <div className="relative px-3 md:px-40 py-20 flex-col justify-center flex gap-16">
        <header className="flex place-content-center">
          <img src="./img/logo.svg" alt="" className="h-16" />
        </header>

        <div className="flex gap-10">
          {/* Primer bloque */}
          <LanguageBlock />

          {/* Segundo bloque */}
          <div className="bg-[#121826] rounded-3xl p-6 w-[560px] opacity-80">
            <div className="flex justify-between">
              <div className="flex gap-6 px-3 text-white/40 font-semibold">
                <button
                  className={`${
                    sourceLanguageBlock2 === 'en'
                      ? 'bg-[#4D5562] text-white p-2 rounded-xl'
                      : 'hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl'
                  }`}
                  onClick={() => handleSourceLanguageChange(2, 'en')}
                >
                  English
                </button>
                <button
                  className={`${
                    sourceLanguageBlock2 === 'fr'
                      ? 'bg-[#4D5562] text-white p-2 rounded-xl'
                      : 'hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl'
                  }`}
                  onClick={() => handleSourceLanguageChange(2, 'fr')}
                >
                  French
                </button>
                <select
                  value={targetLanguageBlock2}
                  onChange={(e) => handleTargetLanguageChange(2, e.target.value)}
                  className="bg-[#121826] border-none"
                >
                  <option value="es">Spanish</option>
                  <option value="ru">Russian</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
              <img
                src="./img/Horizontal_top_left_main.svg"
                alt=""
                className="border-2 rounded-lg p-1 w-10 h-10"
              />
            </div>

            <div className="border-b border-[#4D5562] my-4"></div>

            <textarea
              id=""
              cols="30"
              rows="10"
              className="bg-[#121826] text-white font-medium w-full resize-none  outline-none"
              value={translatedText}
              readOnly
            >
              {translatedText}
            </textarea>

            <div className="flex gap-3">
              <img
                src="./img/sound_max_fill.svg"
                alt="icon sound max"
                className="border-2 rounded-lg p-1 w-10 h-10"
              />
              <img
                src="./img/Copy.svg"
                alt="icon copy"
                className="border-2 rounded-lg p-1 w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
