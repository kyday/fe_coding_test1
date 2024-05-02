import { Input } from "@/components/atoms/ui/input";
import React from "react";

export function OriginalComponent() {
  return (
    <div className="flex">
      <input type="radio" id="huey" name="" value="" />
      <Input maxLength={50} />
      <div>x</div>
    </div>
  );
}
