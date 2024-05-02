import { create } from "zustand";

type useFormStoreType = {
  input: string;
  dropdownValue: string;
  onChangeDropDown: (value: string) => void;
};

export const useFormStore = create<useFormStoreType>((set, get) => ({
  input: "",
  dropdownValue: "답문형 답변",
  componentElement: [],

  onChangeDropDown: (value: string) => {
    set({ dropdownValue: value });
  },
}));
