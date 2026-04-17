import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_0zlbAbnM.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/gamer/Documents/GitHub/afortuna2new/","adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"cascadadefuego/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cascadadefuego","isIndex":false,"type":"page","pattern":"^\\/cascadadefuego\\/?$","segments":[[{"content":"cascadadefuego","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cascadadefuego.astro","pathname":"/cascadadefuego","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"en/cascadadefuego/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en/cascadadefuego","isIndex":false,"type":"page","pattern":"^\\/en\\/cascadadefuego\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"cascadadefuego","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/cascadadefuego.astro","pathname":"/en/cascadadefuego","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"en/suenodorado/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en/suenodorado","isIndex":false,"type":"page","pattern":"^\\/en\\/suenodorado\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"suenodorado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/suenodorado.astro","pathname":"/en/suenodorado","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"en/tours/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en/tours","isIndex":false,"type":"page","pattern":"^\\/en\\/tours\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"tours","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/tours.astro","pathname":"/en/tours","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"en/vacacionales/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en/vacacionales","isIndex":false,"type":"page","pattern":"^\\/en\\/vacacionales\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"vacacionales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/vacacionales.astro","pathname":"/en/vacacionales","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"en/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"hoteles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hoteles","isIndex":false,"type":"page","pattern":"^\\/hoteles\\/?$","segments":[[{"content":"hoteles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hoteles.astro","pathname":"/hoteles","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"resetafortunados/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resetafortunados","isIndex":false,"type":"page","pattern":"^\\/resetafortunados\\/?$","segments":[[{"content":"resetafortunados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resetafortunados.astro","pathname":"/resetafortunados","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"suenodorado/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/suenodorado","isIndex":false,"type":"page","pattern":"^\\/suenodorado\\/?$","segments":[[{"content":"suenodorado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/suenodorado.astro","pathname":"/suenodorado","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tours/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tours","isIndex":false,"type":"page","pattern":"^\\/tours\\/?$","segments":[[{"content":"tours","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tours.astro","pathname":"/tours","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"vacacionales/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/vacacionales","isIndex":false,"type":"page","pattern":"^\\/vacacionales\\/?$","segments":[[{"content":"vacacionales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vacacionales.astro","pathname":"/vacacionales","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://afortunadoscr.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/cascadadefuego.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/cascadadefuego.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/suenodorado.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/tours/[tour].astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/tours.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/vacacionales.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/suenodorado.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/tours.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/vacacionales.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/habitaciones/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/tours/[tour].astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/hoteles.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/gamer/Documents/GitHub/afortuna2new/src/pages/resetafortunados.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/cascadadefuego@_@astro":"pages/cascadadefuego.astro.mjs","\u0000@astro-page:src/pages/en/cascadadefuego@_@astro":"pages/en/cascadadefuego.astro.mjs","\u0000@astro-page:src/pages/en/suenodorado@_@astro":"pages/en/suenodorado.astro.mjs","\u0000@astro-page:src/pages/en/tours/[tour]@_@astro":"pages/en/tours/_tour_.astro.mjs","\u0000@astro-page:src/pages/en/tours@_@astro":"pages/en/tours.astro.mjs","\u0000@astro-page:src/pages/en/vacacionales@_@astro":"pages/en/vacacionales.astro.mjs","\u0000@astro-page:src/pages/en/[id]@_@astro":"pages/en/_id_.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/habitaciones/[id]@_@astro":"pages/habitaciones/_id_.astro.mjs","\u0000@astro-page:src/pages/hoteles@_@astro":"pages/hoteles.astro.mjs","\u0000@astro-page:src/pages/resetafortunados@_@astro":"pages/resetafortunados.astro.mjs","\u0000@astro-page:src/pages/suenodorado@_@astro":"pages/suenodorado.astro.mjs","\u0000@astro-page:src/pages/tours/[tour]@_@astro":"pages/tours/_tour_.astro.mjs","\u0000@astro-page:src/pages/tours@_@astro":"pages/tours.astro.mjs","\u0000@astro-page:src/pages/vacacionales@_@astro":"pages/vacacionales.astro.mjs","\u0000@astro-page:src/pages/[id]@_@astro":"pages/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DXV77sqC.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.B0RRBRIS.js","/astro/hoisted.js?q=2":"_astro/hoisted.Ce4goEts.js","/astro/hoisted.js?q=3":"_astro/hoisted.03QSH3Lk.js","/astro/hoisted.js?q=4":"_astro/hoisted.iyA2E4Rq.js","C:/Users/gamer/Documents/GitHub/afortuna2new/src/components/PhotoCarrusel":"_astro/PhotoCarrusel.BetybQ5i.js","@astrojs/react/client.js":"_astro/client.BuOr9PT5.js","/astro/hoisted.js?q=1":"_astro/hoisted.BfnFrp_G.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/faviconA.png","/renderers.mjs","/robots.txt","/_headers","/_noop-middleware.mjs","/assetss/ecovilla.jpg","/assetss/ecovilla2.jpg","/assetss/ecovilla3.jpg","/assetss/v2.jpg","/chunks/astro_CP4-5YPJ.mjs","/chunks/BaseLayout_KWyqBV07.mjs","/chunks/FooterEn_CCgEsIWq.mjs","/chunks/Footer_CRNz6cnf.mjs","/chunks/habitacion_DQUvn9Fc.mjs","/chunks/HeaderPagesEn_CZ3tPm_s.mjs","/chunks/HeaderPages_C9iZXJtP.mjs","/chunks/Header_Cj6ZglEm.mjs","/chunks/Hreflang_CRzrx2EL.mjs","/chunks/IMG_1702_DCIgnjpI.mjs","/chunks/instagram_IP5ew6ej.mjs","/chunks/Layout_BlTM9sQi.mjs","/chunks/logoafortundosV_i13GW9fM.mjs","/chunks/logosuenosV_D2L27wyJ.mjs","/chunks/Modal_rqKFveYP.mjs","/chunks/monteverde_D-idUZkl.mjs","/chunks/PhotoCarrusel_C4_SB5hv.mjs","/chunks/ToursTeaserEN_DMYl_y2B.mjs","/chunks/ToursTeaser_pe-NrVF1.mjs","/chunks/tours_Dnzj0QlD.mjs","/chunks/tours_en_CkBeGt4D.mjs","/chunks/v2_CZudLLzn.mjs","/chunks/WhatsAppButtonEn_BKhDBu1J.mjs","/chunks/WhatsAppButton_BFdYwW_-.mjs","/chunks/_astro_assets_Cf83jt-1.mjs","/pages/404.astro.mjs","/pages/cascadadefuego.astro.mjs","/pages/en.astro.mjs","/pages/hoteles.astro.mjs","/pages/index.astro.mjs","/pages/resetafortunados.astro.mjs","/pages/suenodorado.astro.mjs","/pages/tours.astro.mjs","/pages/vacacionales.astro.mjs","/pages/_id_.astro.mjs","/_astro/af2.KklQacCB.png","/_astro/AreaPiscina.R_vtd-a4.png","/_astro/bg-gd.BECPrmy_.jpg","/_astro/booking.C-GJGU9G.png","/_astro/client.BuOr9PT5.js","/_astro/cuadruple.CYiGImk5.jpg","/_astro/expedia.lEn81l4B.png","/_astro/facebook.ejnf6rkB.png","/_astro/google.J5uAsOp1.png","/_astro/Habjrs.BAwjOmaj.jpg","/_astro/Habprem.BO66egqW.jpg","/_astro/hoisted.B0RRBRIS.js","/_astro/hoisted.BfnFrp_G.js","/_astro/hoisted.Ce4goEts.js","/_astro/IMG_1702.DlYj65nw.jpg","/_astro/IMG_1703.Db1ZhynF.jpg","/_astro/index.CVf8TyFT.js","/_astro/instagram.BT1rpC5A.png","/_astro/intimidad.CTNHcy8c.jpg","/_astro/jardin.DDXraokm.JPG","/_astro/logoafortunadosver.Z1e9VN6j.png","/_astro/logoafortundosV.COvfi3LQ.png","/_astro/logosuenosV.CURp80sP.png","/_astro/monteverde.uCgzC4KY.jpg","/_astro/PhotoCarrusel.BetybQ5i.js","/_astro/quintuple.DZ0Qxkef.jpg","/_astro/termales.C-LUMnLM.JPG","/_astro/tours.tA3qRqnu.jpg","/_astro/tripadvisor.DknBEDvp.png","/_astro/v2.DhI91uaz.jpg","/_astro/volcan.DapMWas4.JPG","/_astro/whatsapp.BtCgz4Tn.png","/_astro/_id_.CwOTzjvA.css","/chunks/astro/assets-service_-wLdYesO.mjs","/chunks/astro/server_0zlbAbnM.mjs","/pages/en/cascadadefuego.astro.mjs","/pages/en/suenodorado.astro.mjs","/pages/en/tours.astro.mjs","/pages/en/vacacionales.astro.mjs","/pages/en/_id_.astro.mjs","/pages/habitaciones/_id_.astro.mjs","/pages/tours/_tour_.astro.mjs","/pages/en/tours/_tour_.astro.mjs","/404.html","/cascadadefuego/index.html","/en/cascadadefuego/index.html","/en/suenodorado/index.html","/en/tours/index.html","/en/vacacionales/index.html","/en/index.html","/hoteles/index.html","/resetafortunados/index.html","/suenodorado/index.html","/tours/index.html","/vacacionales/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"yUZgwSToRq9Z9WASN4Vc4MxtijX0nQHNxt0kwhhLIXg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
