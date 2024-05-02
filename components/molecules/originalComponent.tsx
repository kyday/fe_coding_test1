import { Input } from "@/components/atoms/ui/input";
import { useFormStore } from "@/store/form/useFormStore";
import React from "react";

export function OriginalComponent() {
  const dropdownValue = useFormStore((state) => state.dropdownValue);

  return (
    <div className="flex">
      {dropdownValue === "객관식 답변" && (
        <input type="radio" id="huey" name="" value="" />
      )}
      {dropdownValue === "체크박스" && (
        <input type="checkbox" id="huey" name="" value="" />
      )}
      <Input maxLength={50} />
      <div>x</div>
    </div>
  );
}
