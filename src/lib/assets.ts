import type { ImageMetadata } from 'astro';

/*
 * Images in src/assets, looked up by file name. Using a glob instead of static imports
 * means a missing file never breaks the build: callers get `undefined`, render nothing,
 * and the missing name is reported once in the build/dev output.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
});

const assetsByName = new Map(
  Object.entries(modules).map(([path, module]) => [path.slice(path.lastIndexOf('/') + 1), module.default]),
);

const reported = new Set<string>();

export function getAsset(fileName: string): ImageMetadata | undefined {
  const asset = assetsByName.get(fileName);

  if (!asset && !reported.has(fileName)) {
    reported.add(fileName);
    console.warn(`[assets] Missing image: src/assets/${fileName} — it will be skipped.`);
  }

  return asset;
}
