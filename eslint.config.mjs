import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ),
  {
    plugins: {
      prettier,
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "tailwindcss/enforces-shorthand": "off",
      "@next/next/no-img-element": "off",
    },

    settings: {
      tailwindcss: {
        config: path.join(__dirname, "./tailwind.config.ts"),
      },
    },
  },
  {
    ignores: [".next/", ".git/", "node_modules/", "pnpm-lock.yaml"],
  },
];

export default config;
