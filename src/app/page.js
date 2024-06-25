"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About";
import { useEffect, useState } from "react";
import Services from "@/pages/Services/Services";
import WhyUs from "@/pages/WhyUs/WhyUs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Renamix - Ihr Partner für alle elektrischen Bedürfnisse</title>
        <meta
          name="description"
          content="Hochqualitative Elektriker-Dienstleistungen für Ihr Zuhause"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <About />

      <section className={styles.services}>
        <Services />
      </section>
      <WhyUs />
    </div>
  );
}
