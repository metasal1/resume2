import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Qualifcations() {
  return (
    <>
      <Head>
        <title>
          Salim Karim&apos;s Projects | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">📽 Personal Projects</div>

        <div className="p-10">
          <div>Twilio SMS Verify Demo</div>
          <div>SolWho.com</div>
          <div>Cryptmas.com.au</div>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
