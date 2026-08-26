/** @type {import("stylelint").Config} */
const config = {
  extends: [
    "stylelint-config-standard",
    "@dreamsicle.io/stylelint-config-tailwindcss",
  ],
  ignoreFiles: ["node_modules/**", ".next/**"],
  rules: {
    // Tailwind / shadcn use unitless oklch: oklch(0.145 0 0)
    "lightness-notation": "number",
    "hue-degree-notation": "number",
  },
};

export default config;
