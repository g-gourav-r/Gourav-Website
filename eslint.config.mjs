import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // This object tells ESLint to ignore the specified directory.
  {
    ignores: ["src/components/ui"],
  },
  // This spreads your existing Next.js configurations.
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
