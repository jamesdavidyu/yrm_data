"use client";

import { signIn, useSession } from "next-auth/react";

export const LoginButton = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <button
        style={{ color: "white" }}
        onClick={() => {
          signIn("google");
        }}
      >
        Test
      </button>
    </div>
  );
};
