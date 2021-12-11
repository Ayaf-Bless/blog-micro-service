import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PostCreate from "../components/PostCreate";

export default function Home() {
  return (
    <div className={"container"}>
      <h1>Create post</h1>
      <PostCreate />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
