"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    setText(name);
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleForm} className="flex relative">
        <Input
          placeholder="Search"
          name="name"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 "
        >
          <Search className="text-icon" />
        </button>
      </form>
    </div>
  );
}
