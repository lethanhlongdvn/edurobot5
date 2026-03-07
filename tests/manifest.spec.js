import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const root = process.cwd();

test('Manifest math files exist', async () => {
  const manifest = (await import(path.join(root, 'js', 'data', 'math', 'manifest.js'))).mathManifest;
  for (const it of manifest) {
    const p = path.join(root, 'js', 'data', 'math', `${it.period}.js`);
    expect(fs.existsSync(p)).toBeTruthy();
  }
});

test('Manifest vietnamese files exist', async () => {
  const manifest = (await import(path.join(root, 'js', 'data', 'vietnamese', 'manifest.js'))).vietnameseManifest;
  for (const it of manifest) {
    const modPath = (it.modulePath || '').replace('./', '');
    const p = path.join(root, 'js', 'data', 'vietnamese', modPath);
    expect(fs.existsSync(p)).toBeTruthy();
  }
});

test('Manifest science files exist', async () => {
  const manifest = (await import(path.join(root, 'js', 'data', 'science', 'manifest.js'))).scienceManifest;
  for (const it of manifest) {
    const padded = String(it.period).padStart(3, '0');
    const p = path.join(root, 'js', 'data', 'science', `${padded}.js`);
    expect(fs.existsSync(p)).toBeTruthy();
  }
});

test('Manifest history files exist', async () => {
  const manifest = (await import(path.join(root, 'js', 'data', 'history', 'manifest.js'))).historyManifest;
  for (const it of manifest) {
    const padded = String(it.period).padStart(3, '0');
    const p = path.join(root, 'js', 'data', 'history', `${padded}.js`);
    expect(fs.existsSync(p)).toBeTruthy();
  }
});
