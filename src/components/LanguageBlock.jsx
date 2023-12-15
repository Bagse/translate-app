const LanguageBlock = ({
  sourceLanguage,
  targetLanguage,
  handleSourceLanguageChange,
  handleTargetLanguageChange,
  translateText,
  inputText,
  setInputText,
}) => {
  return (
    <div className="bg-[#212936] rounded-3xl border border-[#4D5562] p-6 w-[560px] opacity-80">
      <div className="flex gap-6 px-3 text-white/40 font-semibold">
        <button
          className={`${
            sourceLanguage === "en"
              ? "text-white p-2 rounded-xl"
              : "hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl"
          }`}
          onClick={() => handleSourceLanguageChange("en")}
        >
          Detect Language
        </button>
        <button
          className={`${
            sourceLanguage === "en"
              ? "bg-[#4D5562] text-white p-2 rounded-xl"
              : "hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl"
          }`}
          onClick={() => handleSourceLanguageChange("en")}
        >
          English
        </button>
        <button
          className={`${
            sourceLanguage === "fr"
              ? "bg-[#4D5562] text-white p-2 rounded-xl"
              : "hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl"
          }`}
          onClick={() => handleSourceLanguageChange("fr")}
        >
          French
        </button>
        <select
          value={targetLanguage}
          onChange={(e) => handleTargetLanguageChange(e.target.value)}
          className="bg-[#212936] border-none"
        >
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>
        </select>
      </div>

      <div className="border-b border-[#4D5562] my-4"></div>

      <textarea
        id=""
        cols="30"
        rows="10"
        className="bg-[#212936] text-white font-medium w-full resize-none  outline-none"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      >
        Hello, how are you?
      </textarea>

      <div className="flex justify-between">
        <div className="flex gap-3">
          <img
            src="./img/Copy.svg"
            alt="icon copy"
            className="border-2 rounded-lg p-1 w-10 h-10"
          />
        </div>
        <button
          className="flex items-center bg-[#3662E3] text-white rounded-xl px-6 py-2 border border-[#7CA9F3] text-lg hover:bg-[#3662E3]/70 gap-2"
          onClick={translateText}
        >
          <img src="./img/Sort_alfa.svg" alt="icon sort alfa" />
          Translate
        </button>
      </div>
    </div>
  );
};

export default LanguageBlock;
