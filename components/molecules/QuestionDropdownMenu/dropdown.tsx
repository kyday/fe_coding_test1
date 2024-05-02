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

type QuestionDropdownMenuType = {
  menus: Array<{ id: number; value: string }>;
};

export function QuestionDropdownMenu(props: QuestionDropdownMenuType) {
  const { menus } = props;
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
          {menus?.map((item) => {
            return (
              <DropdownMenuRadioItem key={item.id} value={item.value}>
                {item.value}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
