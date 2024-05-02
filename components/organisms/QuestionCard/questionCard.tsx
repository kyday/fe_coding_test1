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
import { OriginalComponent } from "@/components/molecules/originalComponent";
import { ComponentController } from "@/controller/componentController";

export function QuestionCard() {
  const dropdownValue = useFormStore((state) => state.dropdownValue);

  const [components, setComponents] = useState([
    <OriginalComponent key={"origin"} />,
  ]);

  const addComponent = () => {
    const newComponent = ComponentController(components)
      .add(<OriginalComponent />)
      .get();

    setComponents(
      newComponent.map((component, index) => {
        return React.cloneElement(component, { key: `component-${index}` });
      })
    );
  };

  return (
    <Card className="w-[800px] h-1/3 p-4">
      <section className="flex gap-[12px]">
        <Input maxLength={50} />
        <QuestionDropdownMenu
          menus={[
            {
              id: 0,
              value: "답문형 답변",
            },
            {
              id: 1,
              value: "객관식 답변",
            },
            {
              id: 2,
              value: "체크박스",
            },
          ]}
        />
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
        <>
          {components.map((component, index) => (
            <div key={component.key}>{component}</div>
          ))}
        </>
      )}

      {dropdownValue !== "답문형 답변" && (
        <Button onClick={addComponent} className="mt-5">
          항목 추가
        </Button>
      )}
    </Card>
  );
}
