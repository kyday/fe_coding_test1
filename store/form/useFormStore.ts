import { create } from "zustand";

type useFormStoreType = {
  input: string;
  dropdownValue: string;
  onChangeDropDown: (value: string) => void;
};

export const useFormStore = create<useFormStoreType>((set) => ({
  input: "",
  dropdownValue: "답문형 답변",
  onChangeDropDown: (value: string) => {
    set({ dropdownValue: value });
  },
}));
