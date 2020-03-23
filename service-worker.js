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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.bbeac537.css",
    "revision": "20b3f236f801a0aab06f3effaa137371"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zebra-3.png",
    "revision": "747d144272de0d0602c38b32a9759169"
  },
  {
    "url": "assets/js/10.8136d8ab.js",
    "revision": "5414532df7592a4ac17ed8c5ba9b0be4"
  },
  {
    "url": "assets/js/11.e1bf2f4e.js",
    "revision": "7af1ba51837c6a019bbef29729a1421a"
  },
  {
    "url": "assets/js/12.c9de541d.js",
    "revision": "21ad6ec2db0d161b51d05a869dcb7e87"
  },
  {
    "url": "assets/js/13.229dffde.js",
    "revision": "89c5da6e6d39c1695423fec0588a1e99"
  },
  {
    "url": "assets/js/14.ebebfd07.js",
    "revision": "1075ac810bbc30622da4adf268e575b8"
  },
  {
    "url": "assets/js/15.dd4cc9a2.js",
    "revision": "6e976cd51820047165efded65695b01b"
  },
  {
    "url": "assets/js/16.079da3ab.js",
    "revision": "056b9e955a41ca442cc07fc5486c9e60"
  },
  {
    "url": "assets/js/17.8d982329.js",
    "revision": "0563bdc3099ca1f59888b3df1d27f8b9"
  },
  {
    "url": "assets/js/18.377d9647.js",
    "revision": "c379aeacfbce1516d48716830bbafe2c"
  },
  {
    "url": "assets/js/19.cbef7763.js",
    "revision": "2ddeab045eb39c130b4b92957cc897ff"
  },
  {
    "url": "assets/js/2.e5136842.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.f98e98be.js",
    "revision": "acd0a0a774a993cb051db6e3987e770c"
  },
  {
    "url": "assets/js/21.a2db72ca.js",
    "revision": "2cc9cf25a47a98a79688ae801451210e"
  },
  {
    "url": "assets/js/22.4ce08a7d.js",
    "revision": "2dec5d0a0d4c2c01f639c6546262795c"
  },
  {
    "url": "assets/js/3.8bc07ed0.js",
    "revision": "8e1d81f7d51ace77c4208241726e2b21"
  },
  {
    "url": "assets/js/4.f90044f4.js",
    "revision": "6b5bfec3de31d1e5118164a9a60eeaab"
  },
  {
    "url": "assets/js/5.bdf09a12.js",
    "revision": "dd27a8b311b6e75428eaf1e639a772f8"
  },
  {
    "url": "assets/js/6.02e477d8.js",
    "revision": "b619a1355942c3519dd21552bdbab824"
  },
  {
    "url": "assets/js/7.150b3ea5.js",
    "revision": "d26ae206e772a9ec77f971b8e4f8c260"
  },
  {
    "url": "assets/js/8.b2918a25.js",
    "revision": "e0520548aee4e89ea3403a1cd542d778"
  },
  {
    "url": "assets/js/9.8703a470.js",
    "revision": "aa5e75ea19b90bee7e39826408440ad1"
  },
  {
    "url": "assets/js/app.c28660a9.js",
    "revision": "0ef1f2909fc2096b8c29b93fc3d12317"
  },
  {
    "url": "index.html",
    "revision": "2670ecf65c2e2979d418a9eab9a162b8"
  },
  {
    "url": "js/JavaScript 原生方法模拟实现.html",
    "revision": "c8da633ba5198e04c9cd9ba2b4eba7cb"
  },
  {
    "url": "js/JavaScript 工具方法模拟实现.html",
    "revision": "37151060d3f95073fa050f1148746ad6"
  },
  {
    "url": "js/Promise 模拟实现.html",
    "revision": "f63d6c1b4196c7c9f579c2f1665b6da3"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "ad502468189aafc5554b255ec0a0b5f8"
  },
  {
    "url": "vue/vuex.html",
    "revision": "ceedd833f58c7808a6b598dd99315836"
  },
  {
    "url": "vue/源码/一、Vue 源码之数据劫持.html",
    "revision": "45f62eed85fc4b089c00d2d8dffb5af9"
  },
  {
    "url": "vue/源码/三、Vue 源码之 watch 和 computed.html",
    "revision": "97ad0328d553e769d75176a4b7ac7c1e"
  },
  {
    "url": "vue/源码/二、Vue 源码之依赖收集和批量更新.html",
    "revision": "f27f6b409181bb5956b0cafd0a81e4a8"
  },
  {
    "url": "安全/最基础的 Web 安全问题.html",
    "revision": "52fb5a64094dd5e37c341b82a75b7c7f"
  },
  {
    "url": "服务器/GitLab CI_CD 自动部署构建.html",
    "revision": "7d48356ab1d1258d5ac832dc6f918549"
  },
  {
    "url": "服务器/基于 CentOS 7 搭建异常监控 Sentry.html",
    "revision": "77ab1a8509467f7bea73e067eea98199"
  },
  {
    "url": "浏览器/浏览器缓存之强缓存与协商缓存.html",
    "revision": "eacba049da37a965fa73d6c0f3a93b8f"
  },
  {
    "url": "浏览器/跨域的九种解决方案.html",
    "revision": "2946a1151ba44992f030cc27d52dd2d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
