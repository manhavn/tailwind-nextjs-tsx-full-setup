import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={"mt-20 footer"}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push("/").then();
        }}
      >
        <p className="text-center text-gray-500 text-xs">
          &copy; 2021 Dev Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
