import { useState, useEffect } from 'react';
import axios from 'axios';
import LanguageBlock from '../components/LanguageBlock';
import LanguageBlock2 from '../components/LanguageBlock2';

function Homepage() {
  const [inputText, setInputText] = useState("Hello, how are you?");
  const [translatedText, setTranslatedText] = useState("");

  // Variables de estado para el primer bloque
  const [sourceLanguageBlock1, setSourceLanguageBlock1] = useState("en");
  const [targetLanguageBlock1, setTargetLanguageBlock1] = useState("fr");

  // Variables de estado para el segundo bloque
  const [sourceLanguageBlock2, setSourceLanguageBlock2] = useState("fr");
  const [targetLanguageBlock2, setTargetLanguageBlock2] = useState("en");

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
      console.error("Error translating text:", error);
    }
  };

  useEffect(() => {
    translateText(sourceLanguageBlock1, targetLanguageBlock1, inputText);
  }, [sourceLanguageBlock1, targetLanguageBlock1, inputText]);

  useEffect(() => {
    translateText(sourceLanguageBlock2, targetLanguageBlock2, inputText);
  }, [sourceLanguageBlock2, targetLanguageBlock2, inputText]);

  const handleSourceLanguageChangeBlock1 = (language) => {
    setSourceLanguageBlock1(language);
    if (language !== "en") {
      setTargetLanguageBlock1(language === "fr" ? "en" : "fr");
    }
  };

  const handleTargetLanguageChangeBlock1 = (language) => {
    setTargetLanguageBlock1(language);
  };

  const handleSourceLanguageChangeBlock2 = (language) => {
    setSourceLanguageBlock2(language);
    if (language !== "fr") {
      setTargetLanguageBlock2(language === "en" ? "fr" : "en");
    }
  };

  const handleTargetLanguageChangeBlock2 = (language) => {
    setTargetLanguageBlock2(language);
  };

  const handleTranslateClickBlock1 = () => {
    translateText(sourceLanguageBlock1, targetLanguageBlock1, inputText);
  };

  const handleTranslateClickBlock2 = () => {
    translateText(sourceLanguageBlock2, targetLanguageBlock2, inputText);
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
          <LanguageBlock
            sourceLanguage={sourceLanguageBlock1}
            targetLanguage={targetLanguageBlock1}
            handleSourceLanguageChange={handleSourceLanguageChangeBlock1}
            handleTargetLanguageChange={handleTargetLanguageChangeBlock1}
            translateText={handleTranslateClickBlock1}
            inputText={inputText}
            setInputText={setInputText}
          />

          {/* Segundo bloque */}
          <LanguageBlock2
            sourceLanguage={sourceLanguageBlock2}
            targetLanguage={targetLanguageBlock2}
            handleSourceLanguageChange={handleSourceLanguageChangeBlock2}
            handleTargetLanguageChange={handleTargetLanguageChangeBlock2}
            translatedText={translatedText}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
