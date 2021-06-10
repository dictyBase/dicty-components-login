const fs = require("fs");
const cp = require("child_process");
const esbuild = require("esbuild");
const path = require("path");

const src = path.join(__dirname, "src");

esbuild
  .build({
    entryPoints: ["src/index.d.ts"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ["chrome58", "firefox55", "safari12", "edge15", "node14"],
    format: "cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    external: ["@material-ui/core", "react", "react-dom"],
  })
  .catch(() => process.exit(1));
