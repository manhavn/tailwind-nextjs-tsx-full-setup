import ActiveLink from "../../components/activeLink";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>This is blog</title>
        <meta name="description" content="This is blog" />
      </Head>

      <main className={"main"}>
        This is blog
        <br />
        <br />
        <ActiveLink href={"/blog/categories"}>
          <button>/blog/categories</button>
        </ActiveLink>
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
