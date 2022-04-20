import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import HouseModel from "../components/Model/House";
import ShoeModel from "../components/Model/Shoes";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GLTF Example - Threejs</title>
        <meta
          name="description"
          content="Simple project of 3D gltf rendering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>3D GLTF examples in React</h1>
        <div className={styles.content}>
          <ol>
            <li>
              <Link href="/shoe">
                <a className={styles.link}>Shoe</a>
              </Link>
            </li>
            <li>
              <Link href="/house">
                <a className={styles.link}>House</a>
              </Link>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
