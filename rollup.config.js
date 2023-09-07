import scss from "rollup-plugin-scss";

export default {
  input: "./src/App.js",
  output: [
    {
      file: "dist/jsBundle.js",
      format: "iife",
    },
  ],
  plugins: [scss({ fileName: "cssBundle.css" })],
};
