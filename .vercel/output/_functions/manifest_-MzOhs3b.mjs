import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_BuPk3ixh.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Dc59wawh.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/k-a-v/Documents/github/r_pronto/","cacheDir":"file:///Users/k-a-v/Documents/github/r_pronto/node_modules/.astro/","outDir":"file:///Users/k-a-v/Documents/github/r_pronto/dist/","srcDir":"file:///Users/k-a-v/Documents/github/r_pronto/src/","publicDir":"file:///Users/k-a-v/Documents/github/r_pronto/public/","buildClientDir":"file:///Users/k-a-v/Documents/github/r_pronto/dist/client/","buildServerDir":"file:///Users/k-a-v/Documents/github/r_pronto/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.17.2_@types+node@22.19.11_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30_3a4ced3bf45ddddfcbe5212aa62ca4cf/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/availability","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/availability\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"availability","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/availability.ts","pathname":"/api/availability","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/create-booking","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/create-booking\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"create-booking","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/create-booking.ts","pathname":"/api/create-booking","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/places","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/places\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"places","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/places.ts","pathname":"/api/places","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CuSGe2rg.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/k-a-v/Documents/github/r_pronto/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/availability@_@ts":"pages/api/availability.astro.mjs","\u0000@astro-page:src/pages/api/create-booking@_@ts":"pages/api/create-booking.astro.mjs","\u0000@astro-page:src/pages/api/places@_@ts":"pages/api/places.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.17.2_@types+node@22.19.11_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30_3a4ced3bf45ddddfcbe5212aa62ca4cf/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_-MzOhs3b.mjs","/Users/k-a-v/Documents/github/r_pronto/node_modules/.pnpm/astro@5.17.2_@types+node@22.19.11_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30_3a4ced3bf45ddddfcbe5212aa62ca4cf/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BcdUQPlQ.mjs","/Users/k-a-v/Documents/github/r_pronto/src/components/BookingForm":"_astro/BookingForm.DpyT_AmI.js","@astrojs/react/client.js":"_astro/client.dXHaCmHv.js","/Users/k-a-v/Documents/github/r_pronto/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.igwkh3qX.js","/Users/k-a-v/Documents/github/r_pronto/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BX920gel.js","/Users/k-a-v/Documents/github/r_pronto/src/components/StickyBook.astro?astro&type=script&index=0&lang.ts":"_astro/StickyBook.astro_astro_type_script_index_0_lang.DWxdaTDB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/k-a-v/Documents/github/r_pronto/src/pages/index.astro?astro&type=script&index=0&lang.ts","const o=document.querySelectorAll(\"section[id], div[id='quote']\"),i=new IntersectionObserver(t=>{t.forEach(r=>{if(r.isIntersecting){const e=r.target.getAttribute(\"id\");e&&e!==\"hero\"?history.replaceState(null,null,`#${e}`):e===\"hero\"&&history.replaceState(null,null,\" \")}})},{threshold:.5});o.forEach(t=>i.observe(t));"],["/Users/k-a-v/Documents/github/r_pronto/src/components/Header.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"menu-btn\"),i=document.getElementById(\"mobile-menu\"),g=document.querySelectorAll(\".mobile-link\");let s=!1;function r(){s=!s,c?.classList.toggle(\"open\",s),s?i?.classList.remove(\"invisible\",\"opacity-0\",\"-translate-y-2\"):i?.classList.add(\"invisible\",\"opacity-0\",\"-translate-y-2\")}c?.addEventListener(\"click\",r);g.forEach(t=>{t.addEventListener(\"click\",()=>{s&&r()})});document.addEventListener(\"click\",t=>{s&&i&&!i.contains(t.target)&&!c?.contains(t.target)&&r()});const l=document.querySelectorAll(\"section[id]\"),m=document.querySelectorAll(\"nav a[href^='#'], .mobile-link\");function d(){m.forEach(t=>{!t.classList.contains(\"bg-primary\")&&!t.classList.contains(\"text-white\")&&(t.classList.remove(\"text-primary\",\"bg-primary/10\",\"font-semibold\"),t.classList.add(\"text-text-light\",\"hover:text-secondary\",\"hover:bg-black/5\",\"font-medium\"))})}function y(t){m.forEach(e=>{e.getAttribute(\"href\")===`#${t}`?e.classList.contains(\"bg-primary\")||(e.classList.add(\"text-primary\",\"bg-primary/10\",\"font-semibold\"),e.classList.remove(\"text-text-light\",\"hover:text-secondary\",\"hover:bg-black/5\",\"font-medium\")):!e.classList.contains(\"bg-primary\")&&!e.classList.contains(\"text-white\")&&(e.classList.remove(\"text-primary\",\"bg-primary/10\",\"font-semibold\"),e.classList.add(\"text-text-light\",\"hover:text-secondary\",\"hover:bg-black/5\",\"font-medium\"))})}function f(){const t=window.scrollY,e=150,o=l[0];if(o&&t<o.offsetTop-e){d();return}let n=\"\";l.forEach(u=>{const a=u,b=a.offsetTop-e;t>=b&&(n=a.getAttribute(\"id\")||\"\")}),n?y(n):d()}window.addEventListener(\"scroll\",f,{passive:!0});f();"],["/Users/k-a-v/Documents/github/r_pronto/src/components/StickyBook.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"sticky-book\"),s=document.getElementById(\"hero\"),i=document.getElementById(\"quote\");if(t){let o=!0,c=!1;const n=()=>{!o&&!c?t.classList.remove(\"translate-y-full\"):t.classList.add(\"translate-y-full\")},l=new IntersectionObserver(r=>{r.forEach(e=>{e.target===s&&(o=e.isIntersecting),e.target===i&&(c=e.isIntersecting)}),n()},{threshold:.1});s&&l.observe(s),i&&l.observe(i)}"]],"assets":["/_astro/lexend-latin-ext-400-normal.D38JI5AK.woff2","/_astro/lexend-latin-400-normal.CwRJVcUA.woff2","/_astro/lexend-vietnamese-400-normal.DoLa7jNB.woff2","/_astro/lexend-latin-ext-400-normal.D9P7pMo-.woff","/_astro/lexend-latin-400-normal.CHypAkT3.woff","/_astro/lexend-vietnamese-400-normal.mPlHoWg5.woff","/_astro/index.CuSGe2rg.css","/favicon.ico","/favicon.svg","/_astro/BookingForm.DpyT_AmI.js","/_astro/client.dXHaCmHv.js","/_astro/index.DYrVU9rO.js","/images/equips-2.png","/images/equips.png","/images/hero-clean-home.jpg","/images/logo.png","/images/areas/stpete-map.png","/images/hero/hero-left-women.png","/images/hero/hero-right-women.png","/images/services/addons.png","/images/services/airbnb-rentals.png","/images/services/deep-cleaning.png","/images/services/move-in:move-out.png","/images/services/post-construction.png","/images/services/regular-maintenance.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"BQOeger1/dPp1Niz3iC6pRnQurDo12tV1AITFNFGaM0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
