require("esbuild").buildSync({
  entryPoints: ["./src/server.ts"],
  bundle: true,
  platform: "node",
  target: ["node12"],
  outdir: "dist",
  external: ["express"],
});
