import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PostCreate from "../components/PostCreate";
import PostList from "../components/PostList";
import axios from "axios";

export default function Home(props) {
  return (
    <div className={"container"}>
      <h1>Create post</h1>
      <PostCreate />
      <hr />
      <h1>Post list</h1>
      <PostList data={props} />
    </div>
  );
}

export async function getStaticProps(context) {
  const posts = await axios.get("http://localhost:4002/posts");
  const { data } = posts;
  return {
    props: data, // will be passed to the page component as props
  };
}
