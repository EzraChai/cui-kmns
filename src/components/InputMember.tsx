"use client";

import { Input } from "./ui/input";
import { useState } from "react";

export default function InputMember() {
  const [search, setSearch] = useState("");
  return (
    <Input
      onChange={(e) => setSearch(e.target.value.trim())}
      className="lg:mt-8 focus-visible:border-white rounded-none focus-within:ring-0 mb-2 max-w-xs border-b-2"
      type="text"
      placeholder="寻找帅哥成员"
    />
  );
}
