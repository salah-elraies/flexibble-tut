import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProvidors from "./AuthProvidors";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            userPhoto <Link href="/create-project">Share Your Work</Link>
          </>
        ) : (
          <AuthProvidors />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
