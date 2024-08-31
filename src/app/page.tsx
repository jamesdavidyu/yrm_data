import Image from "next/image";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";
import { LoginButton } from "@/components/LoginButton";

export default function Home() {
  return (
    <main>
      <LoginButton />
    </main>
  );
}
