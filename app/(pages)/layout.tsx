"use client";

import Cursor from "@/(components)/Cursor";
import Navigation from "@/(components)/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <main className="bg-black full">{children}</main>

          {modal}

          <Navigation />
          <Cursor />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
