import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // Official Next.js FSD names: _app / _pages. Filesystem already maps the
    // prefix; this rule still treats the underscore as a typo of app/pages.
    rules: {
      "fsd/typo-in-layer-name": "off",
    },
  },
]);
