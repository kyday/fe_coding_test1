"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/ui/button";
import { Card } from "@/components/atoms/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/ui/dropdown-menu";
import { Input } from "@/components/atoms/ui/input";
import {
  CheckboxItem,
  DropdownMenuCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";
import { QuestionDropdownMenu } from "@/components/molecules/QuestionDropdownMenu/dropdown";
import { useFormStore } from "@/store/form/useFormStore";
import React from "react";
import { OriginalComponent } from "@/components/molecules/OriginalComponent";

export function QuestionCard() {
  const dropdownValue = useFormStore((state) => state.dropdownValue);

  const [components, setComponents] = useState([
    <div key="original" className="flex">
      <input type="radio" id="" name="" value="" />
      <Input maxLength={50} />
      <div>x</div>
    </div>,
  ]);

  const addComponent = () => {
    const newComponent = <OriginalComponent key={`original-${Date.now()}`} />;
    setComponents([...components, newComponent]);
  };

  return (
    <Card className="w-[800px] h-1/3 p-4">
      <section className="flex gap-[12px]">
        <Input maxLength={50} />
        <QuestionDropdownMenu />
      </section>

      {dropdownValue === "답문형 답변" && <Input maxLength={50} />}

      {dropdownValue === "객관식 답변" && (
        <>
          {components.map((component, index) => (
            <div key={component.key}>{component}</div>
          ))}
        </>
      )}
      {dropdownValue === "체크박스" && (
        <div key="original" className="flex">
          <input type="checkbox" id="" name="" value="" />
          <Input maxLength={50} />
          <div>x</div>
        </div>
      )}

      {dropdownValue !== "답문형 답변" && (
        <Button onClick={addComponent} className="mt-5">
          항목 추가
        </Button>
      )}
    </Card>
  );
}
