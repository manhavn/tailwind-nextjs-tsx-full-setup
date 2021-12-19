import ActiveLink from "../../../components/activeLink";
import Head from "next/head";

export default function Categories() {
  return (
    <>
      <Head>
        <title>This is categories</title>
        <meta name="description" content="This is categories" />
      </Head>

      <main className={"main"}>
        This is categories
        <br />
        <br />
        <ActiveLink href={"/blog/category/1234"}>
          <button>/blog/category/1234</button>
        </ActiveLink>
        <br />
        <ActiveLink href={"/blog/post/5678"}>
          <button>/blog/post/5678</button>
        </ActiveLink>
      </main>
    </>
  );
}
