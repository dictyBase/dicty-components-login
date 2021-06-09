const fs = require("fs")
const cp = require("child_process")
const esbuild = require("esbuild")
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const path = require("path")

const src = path.join(__dirname, "src")

esbuild.build({
  entryPoints: ["src/index.d.ts"],
  outfile: "dist/index.js",
  bundle: true,
  minify: true,
  sourcemap: true,
  target: "node14",
  format: "esm",
  define: {
		'process.env.NODE_ENV': '"production"',
	},
  // nodeExternalsPlugin automatically excludes external Node.js dependencies
  // and uses the dependencies field in package.json instead
  plugins: [nodeExternalsPlugin()]
}).catch(() => process.exit(1))
