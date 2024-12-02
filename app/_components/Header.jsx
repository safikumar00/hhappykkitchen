"use client";
import { Search } from "lucide-react";
import React from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../../components/ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between p-6 items-center shadow-sm bg-white md:px-20 sticky w-full top-0 left-0 z-20 ">
      <Link href={"/"}>
        <img src="/next.svg" width={200} height={200} alt="" />
      </Link>
      <div className="w-96 bg-neutral-200 border hidden md:flex items-center gap-2 p-2 rounded-sm">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full focus:outline-none"
        />
        <Search />
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant="outline">Log In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};

export default Header;
