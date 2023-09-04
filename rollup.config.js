import terser from "@rollup/plugin-terser";

export default {
  input: "./src/App.js",
  output: [
    {
      dir: "dist",
      format: "iife",
    },
    {
      file: "dist/bundle.min.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
};
