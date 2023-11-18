"use client";

import { ChangeEvent, useState } from "react";

const WritePage = () => {
  const [input, setInput] = useState("");

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setInput(value);
  };

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <main className="bg-white/40 w-[500px] h-[800px] rounded-xl flex flex-col p-4 gap-4">
        <header className="text-center basis-auto">
          <h1 className="font-hiragino_sans text-[24px]">글 작성</h1>
        </header>
        <div className="flex-1">
          <textarea
            className="full"
            value={input}
            placeholder="오늘의 고민을 작성해주세요"
            onChange={onChange}
          />
        </div>
        <div className="basis-auto">
          <button className="button-base" disabled={!input}>
            작성완료
          </button>
        </div>
      </main>
    </div>
  );
};

export default WritePage;
