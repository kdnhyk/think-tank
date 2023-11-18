"use client";

import { motion } from "framer-motion";

const StarPage = () => {
  return (
    <motion.div
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      className="absolute flex flex-col left-4 top-4 w-[calc(100%-32px)] md:w-[800px] border border-white backdrop-blur-sm"
    >
      <div className="font-hiragino_sans text-[20px] basis-auto w-full p-2 border-b cursor-pointer">
        2023.11.18
      </div>
      <div className="p-3 leading-normal">
        오늘 나의 걱정에 대해 이야기 해보겠다. 앞으로 어떻게 살아야 할까에 대한
        고민이다. 우선 직업이 걱정이다. 뭐로 밥 벌어먹고 살지? 이렇게
        생각하다니. 나에게 직업은 단순히 돈을 벌기 위한 수단일까. 그런데 하루의
        시간을 생각해보면 자는 시간 8시간 빼면 16시간 중에서 출/퇴근 시간 2시간
        빼면 14시간 중에서 짧게는 9시간에서 길게는 12시간 아니면 그보다 더 길게
        회사에서 보내게 된다. 그렇다면 내가 프리렌서가 아니고 회사의 일원으로
        취업을 하게 된다고 생각했을때, 거의 직장에서의 시간이 내 하루와 동일하게
        되는 것이다. 이런 망할. 회사 일원이 된다고 치면 회사에서 내가 일에
        성취감을 느낄 수 있었으면 좋겠다. 내가 맡은 일을 키워나가고 수정하는
        과정이 재미있었으면 좋겠다. 그러면은 우선 내가 뭘 재미있어 하는가? 우선
        음악을 뺄 수 없지. 매일 음악을 듣는 나. 그럼 가수? 에엥 노래는 못부른다.
        그럼 음악 관련된거라 함은 사운드 엔지니어? 사운드 엔지니어 좀 재미있을
        것 같은데 어떻게 시작하는건대요. 그리고 공연 기획자 재미있을 듯. 그거
        어떻게 하는 건대요. 어떻게 하는 줄 알면 시작할 것인가? 슈어 와이낫. 그럼
        검색해보면 되자너? 뭐야. 그럼 됐네~ 네이버에 검색해보기~ 좋아~ 할 일
        생김~
      </div>
    </motion.div>
  );
};

export default StarPage;
