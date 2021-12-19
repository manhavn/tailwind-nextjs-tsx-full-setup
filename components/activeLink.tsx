import { useRouter } from "next/router";

export default function ActiveLink({ children, href }: any) {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href).then();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${router.asPath === href && "a-href-path"}`}
    >
      {children}
    </a>
  );
}
