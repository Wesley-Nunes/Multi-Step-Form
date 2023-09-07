import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";

export default {
  input: "./src/App.js",
  output: [
    {
      file: "dist/jsBundle.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
  plugins: [scss({ fileName: "cssBundle.css", outputStyle: "compressed" })],
};
