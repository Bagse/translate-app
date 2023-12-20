const LanguageBlock2 = ({
  sourceLanguage,
  targetLanguage,
  handleSourceLanguageChange,
  handleTargetLanguageChange,
  translatedText,
}) => {
  return (
    <div className="bg-[#121826] rounded-3xl p-6 w-[560px] opacity-80">
      <div className="flex justify-between">
        <div className="flex gap-6 px-3 text-white/40 font-semibold">
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
      />

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
  );
};

export default LanguageBlock2;
