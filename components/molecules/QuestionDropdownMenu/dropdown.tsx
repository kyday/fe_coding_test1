"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/ui/button";
import { Card } from "@/components/atoms/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/ui/dropdown-menu";
import { Input } from "@/components/atoms/ui/input";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { useFormStore } from "@/store/form/useFormStore";

export function QuestionDropdownMenu() {
  const dropdownValue = useFormStore((state) => state.dropdownValue);
  const onChangeDropDown = useFormStore((state) => state.onChangeDropDown);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{dropdownValue}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={dropdownValue}
          onValueChange={onChangeDropDown}
        >
          <DropdownMenuRadioItem value="답문형 답변">
            답문형 답변
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="객관식 답변">
            객관식 답변
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="체크박스">
            체크박스
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
