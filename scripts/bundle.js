import * as esbuild from 'esbuild';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const outfile = '../Sources/PierreDiffsSwift/Resources/pierre-diffs-bundle.js';

// Ensure output directory exists
const outDir = dirname(outfile);
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const isWatch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['src/diff-entry.js'],
  bundle: true,
  minify: !isWatch,
  sourcemap: isWatch ? 'inline' : false,
  format: 'iife',
  globalName: 'PierreDiffs',
  outfile,
  target: ['safari16'],
  define: {
    'process.env.NODE_ENV': isWatch ? '"development"' : '"production"',
  },
  loader: {
    '.css': 'text',
  },
};

if (isWatch) {
  const context = await esbuild.context(buildOptions);
  await context.watch();
  console.log('Watching for changes...');
} else {
  const result = await esbuild.build(buildOptions);
  const bundle = readFileSync(outfile, 'utf8').replace(/[ \t]+$/gm, '');
  writeFileSync(outfile, bundle);
  console.log('Bundle created successfully!');
  console.log(`Output: ${outfile}`);
  if (result.metafile) {
    console.log(`Size: ${JSON.stringify(result.metafile.outputs, null, 2)}`);
  }
}
