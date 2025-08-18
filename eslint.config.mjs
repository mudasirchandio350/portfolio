import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variable warnings
      "@typescript-eslint/no-unused-vars": "off",

      // Disable explicit any errors
      "@typescript-eslint/no-explicit-any": "off",

      // Disable unescaped entities errors (quotes/apostrophes in JSX)
      "react/no-unescaped-entities": "off",

      // Disable exhaustive-deps warnings in hooks
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
