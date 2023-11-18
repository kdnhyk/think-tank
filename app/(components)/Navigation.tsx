"use client";

import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 inset-x-0 h-20 w-full border-t p-4 flex gap-4">
      <p className="cursor-pointer" onClick={() => router.push("/")}>
        홈
      </p>
      <p className="cursor-pointer" onClick={() => router.push("/write")}>
        글 작성
      </p>
      <p className="cursor-pointer" onClick={() => router.push("/star/2")}>
        글로
      </p>
    </nav>
  );
};

export default Navigation;
