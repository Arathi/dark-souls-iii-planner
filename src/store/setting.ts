import type { Language } from "@/domains/language";
import { proxy } from "valtio";

type Setting = {
  language: Language;
};

export const store = proxy<Setting>({
  language: "chinese",
});
