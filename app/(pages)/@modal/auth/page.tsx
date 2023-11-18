"use client";

import useUser from "@/hook/use-user";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthPage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <main className="text-white flex flex-col gap-20">
        <div className="text-center basis-auto">
          <h1 className="font-hiragino_sans text-[60px] tracking-tighter">
            Think Tank
          </h1>
          <p className="text-[14px]">고민들로 수놓아진 나만의 하늘</p>
        </div>

        <div className="basis-auto flex justify-center">
          <p
            className="underline text-green-500 cursor-pointer"
            onClick={async () => {
              signIn("naver");
            }}
          >
            네이버로 로그인
          </p>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
