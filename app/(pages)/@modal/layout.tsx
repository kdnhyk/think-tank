"use client";

import useUser from "@/hook/use-user";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ModalLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading" && !user) router.push("/auth");
  }, [pathname, user]);

  useEffect(() => {
    console.log(session);

    if (status === "authenticated" && !user && session.user?.email) {
      // post
      setUser({
        id: 0,
        email: session.user?.email,
      });
    }
  }, [status, user]);

  return <>{children}</>;
};

export default ModalLayout;
