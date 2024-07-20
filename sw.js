/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-ee194dbc67ced0cae621.js"
  },
  {
    "url": "framework-985f05d65ff007f89938.js"
  },
  {
    "url": "app-47c513590e4ac18746b8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "132739ca25b7c6d856b9e935ebaac582"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-780d0321bb4481125aff.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7f467e7efa7249bf1a824bd9f74a92fd"
  },
  {
    "url": "polyfill-9dea396575d858b62f2a.js"
  },
  {
    "url": "styles.cc2e8d93cc4a3fce7e08.css"
  },
  {
    "url": "styles-7d4153d260c0197f0043.js"
  },
  {
    "url": "c61f5e33a87cc20f17f71da5740778b9c8e000a3-508f561b60abf21628a9.js"
  },
  {
    "url": "0e443c6f3eb0a7b50b01625c8a66fa3e784fae69-441f1a2825861ae20c36.js"
  },
  {
    "url": "304ddf35a871bbadce028e493ba2eec332a5450b-1ce5cec75c098196a8c7.js"
  },
  {
    "url": "2455db69f288d6d300a68963d313bd25e7daaf14-3261ebb68bb7d55fdcf4.js"
  },
  {
    "url": "f651cd236536b0861ca655e6586c162b9e32d15e-77a3d9932690bde6d121.js"
  },
  {
    "url": "component---src-pages-index-js-ac836967e29ed17851fe.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0c8eca216020c1ba373ef3dfe0c985d3"
  },
  {
    "url": "page-data/sq/d/1048884215.json",
    "revision": "b0bab19decf4a02b66329b6c4ffe5249"
  },
  {
    "url": "page-data/sq/d/1367266899.json",
    "revision": "77d325cd7ebf756dbefa1b7000930788"
  },
  {
    "url": "page-data/sq/d/157104633.json",
    "revision": "270a9d3e8cac69461b7d3bd8bd1855b8"
  },
  {
    "url": "page-data/sq/d/1604955154.json",
    "revision": "22cbb28ef339df7181f422f824b61c17"
  },
  {
    "url": "page-data/sq/d/1634675698.json",
    "revision": "ed5d6508b652e538d1d6bb9711adfb82"
  },
  {
    "url": "page-data/sq/d/1764094379.json",
    "revision": "40c08fa0ee2dfe8ac06c4a21088ed099"
  },
  {
    "url": "page-data/sq/d/1794611690.json",
    "revision": "fe82e44b40e978813c8015c5ac3cdf1b"
  },
  {
    "url": "page-data/sq/d/1795066084.json",
    "revision": "a71a8ee3818433c6011c48fc95912560"
  },
  {
    "url": "page-data/sq/d/2091575419.json",
    "revision": "a982dbf2bb5ef1bc0e74f2bca8a52841"
  },
  {
    "url": "page-data/sq/d/2576184863.json",
    "revision": "5b2b4a264812c878281b0d1796787fd0"
  },
  {
    "url": "page-data/sq/d/284984113.json",
    "revision": "e9c93578c42b390d9109bc55165153a4"
  },
  {
    "url": "page-data/sq/d/3023396775.json",
    "revision": "8f08eb7b1d15a3491a0ab368b45efcb7"
  },
  {
    "url": "page-data/sq/d/3253664308.json",
    "revision": "670e0e03c21123e072a7c9726c38aaaa"
  },
  {
    "url": "page-data/sq/d/3400195001.json",
    "revision": "6e70afb7e0ec17fce5c8d03945921d6d"
  },
  {
    "url": "page-data/sq/d/3700676189.json",
    "revision": "97dc2236603b20f84b34eb6f2ba42e76"
  },
  {
    "url": "page-data/sq/d/3869989848.json",
    "revision": "776bd65ee447403fac65ea50497a4901"
  },
  {
    "url": "page-data/sq/d/511617852.json",
    "revision": "e692687330d707ce3270682893ad4efc"
  },
  {
    "url": "page-data/sq/d/814449831.json",
    "revision": "c4b3dca7335a681b2e2e860e825c8275"
  },
  {
    "url": "page-data/sq/d/830535043.json",
    "revision": "ead2f0abc0459a44c651163b5379310c"
  },
  {
    "url": "component---src-pages-portfolio-js-e6ce67d204f1477dee48.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "2d142da245b5b5b414d336b27916ada7"
  },
  {
    "url": "dd6d33d162c3ada64b23f0570b2ac9fc8e3617aa-61a15e31d7bbd423d954.js"
  },
  {
    "url": "component---src-pages-services-js-e423dc4f1cf7a85ba3e8.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "977a89e93f2a3c541d79cfd2fa4aad19"
  },
  {
    "url": "component---src-pages-blog-js-15d3ab2701ac24451471.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "8ba09879db470ec9ceefc1d869c8fe81"
  },
  {
    "url": "component---src-pages-contacts-js-d20d0b78750cd2025177.js"
  },
  {
    "url": "page-data/contacts/page-data.json",
    "revision": "588b535ae337268b180485f4a2b21b0d"
  },
  {
    "url": "component---src-pages-thanks-js-e5cff128517d0cd9850c.js"
  },
  {
    "url": "page-data/thanks/page-data.json",
    "revision": "1bee5734ad14f131b46e3a0a4d2d590f"
  },
  {
    "url": "component---src-pages-404-js-b062e40b53af8d841df1.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e91cfb8b0db525cae8b8100b012dcba9"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "575dd0b2950ffef0f82969d961523e93"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/rivx-web`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/rivx-web/app-47c513590e4ac18746b8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/rivx-web/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
