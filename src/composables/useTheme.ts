import { Ref, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const theme = ref<"light" | "dark">("light");

export const useTheme = (): {
  toggleTheme: () => void;
  theme: Ref<"light" | "dark">;
} => {
  const toggleTheme = () => {
    if (theme.value === "light") {
      theme.value = "dark";
    } else {
      theme.value = "light";
    }
    document.documentElement.setAttribute("data-theme", theme.value);
  };

  return { toggleTheme, theme: computed(() => theme.value) };
};
