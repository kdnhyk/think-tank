"use client";

import useUser from "@/hook/use-user";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ModalLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (!user) router.push("/auth");
  }, [pathname, user]);

  return <>{children}</>;
};

export default ModalLayout;
