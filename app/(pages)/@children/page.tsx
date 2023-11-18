"use client";

import { useRouter } from "next/navigation";

const MainPage = () => {
  const router = useRouter();

  return (
    <main className="p-4 flex-center">
      <div
        className="w-20 h-20 bg-red-400 cursor-pointer rounded-full flex-center"
        onClick={() => router.push("/star/2")}
      >
        <p>예시 별</p>
      </div>
      <div
        className="w-20 h-20 bg-red-400 cursor-pointer rounded-full flex-center"
        onClick={() => router.push("/star/3")}
      >
        <p>예시 별</p>
      </div>
    </main>
  );
};

export default MainPage;
