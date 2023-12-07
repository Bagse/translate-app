function Homepage() {
  return (
    <div className="flex place-content-center">
      <img src="./img/hero_img.jpg" alt="" className="w-full absolute" />

      <div className="relative px-3 md:px-40 py-20 flex-col justify-center flex gap-16">
        <header className="flex place-content-center">
          <img src="./img/logo.svg" alt="" className="h-16" />
        </header>

        <div className="flex gap-10">
          <div className="bg-[#212936] rounded-3xl border border-[#4D5562] p-6 w-[560px] opacity-80">
            <div className="flex gap-6 px-3 text-white/40 font-semibold ">
              <button className="hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl">
                Detect Language
              </button>
              <button className="hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl">
                English
              </button>
              <button className="hover:bg-[#4D5562] hover:text-white hover:p-2 hover:rounded-xl">
                French
              </button>
              <select name="" id="" className="bg-[#212936] border-none">
                <option selected>Spanish</option>
                <option value="russian">Russian</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>

            <div className="border-b border-[#4D5562] my-4"></div>

            <textarea
              id=""
              cols="30"
              rows="10"
              className="bg-[#212936] text-white font-medium w-full resize-none  outline-none "
            >
              Hello, how are you?
            </textarea>
            <div className="flex justify-between">
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
              <button className="flex items-center bg-[#3662E3] text-white rounded-xl px-6 py-2 border border-[#7CA9F3] text-lg hover:bg-[#3662E3]/70 gap-2">
                <img src="./img/Sort_alfa.svg" alt="icon sort alfa" />
                Translate
              </button>
            </div>
          </div>

          <div className="bg-[#121826] rounded-xl p-6 w-[560px] opacity-80">
            <div className="flex justify-between">
              <div className="flex gap-6 px-3 text-white/40 font-semibold">
                <button>English</button>
                <button>French</button>
                <select name="" id="" className="bg-[#121826] border-none">
                  <option selected>Spanish</option>
                  <option value="russian">Russian</option>
                  <option value="chinese">Chinese</option>
                </select>
              </div>
              <img
                src="./img/Horizontal_top_left_main.svg"
                alt=""
                className="border-2 rounded-lg p-1 w-10 h-10"
              />
            </div>

            <div className="border-b border-[#4D5562] my-4"></div>

            <div className=" line-through"></div>
            <textarea
              id=""
              cols="30"
              rows="10"
              className="bg-[#121826] text-white font-medium w-full resize-none  outline-none"
            >
              Bonjour, comment allez-vous?
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
