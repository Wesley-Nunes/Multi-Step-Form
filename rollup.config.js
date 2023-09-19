import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./src/App.js",
  output: [
    {
      dir: "dist",
      format: "es",
    },
  ],
  plugins: [
    production
      ? [
          scss({ fileName: "cssBundle.css", outputStyle: "compressed" }),
          terser(),
        ]
      : scss({ fileName: "cssBundle.css" }),
  ],
};
