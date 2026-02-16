import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DozGPG-t.mjs';
import { manifest } from './manifest_-MzOhs3b.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/availability.astro.mjs');
const _page2 = () => import('./pages/api/create-booking.astro.mjs');
const _page3 = () => import('./pages/api/places.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.2_@types+node@22.19.11_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30_3a4ced3bf45ddddfcbe5212aa62ca4cf/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/availability.ts", _page1],
    ["src/pages/api/create-booking.ts", _page2],
    ["src/pages/api/places.ts", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "16f853be-59ce-4cd5-a2e7-f1860e344bbf",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
