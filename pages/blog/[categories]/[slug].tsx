import Head from "next/head"
import ActiveLink from "../../../components/activeLink"
import Link from 'next/link'
import {useRouter} from "next/router"

export default function Posts() {
  const router = useRouter()
  const pathname = router.asPath
  return <>
    <Head>
      <title>{pathname}</title>
      <meta name="description" content={`${pathname}`}/>
    </Head>

    <main className={"main"}>
      This is {pathname}
      <br/>
      <br/>
      <ActiveLink href={"/blog/category/1234"}>
        <button>/blog/category/1234</button>
      </ActiveLink>
      <br/>
      <ActiveLink href={"/blog/post/5678"}>
        <button>/blog/post/5678</button>
      </ActiveLink>
      <br/>
      <br/>
      <Link href={"/blog/post/99999"}>/blog/post/99999</Link>
    </main>
  </>
}