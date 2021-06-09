const fs = require("fs")
const cp = require("child_process")
const esbuild = require("esbuild")
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const path = require("path")

const src = path.join(__dirname, "src")

const targets = fs.readdirSync(src)
  .filter((x) => x.endsWith(".bs.js"))
  .map((file) => path.join(src, file))

esbuild.build({
  entryPoints: ["src/index.d.ts"],
  outfile: "dist/index.js",
  bundle: true,
  minifySyntax: true,
  sourcemap: true,
  target: "node14",
  // nodeExternalsPlugin automatically excludes external Node.js dependencies
  // and uses the dependencies field in package.json instead
  plugins: [nodeExternalsPlugin()]
}).catch(() => process.exit(1))
