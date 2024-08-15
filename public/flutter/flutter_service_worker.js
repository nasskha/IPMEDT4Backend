'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eeb3064c3bdcc9f365744531820f3814",
"assets/AssetManifest.bin.json": "f7f50b2469f094673d7e869efa5f5084",
"assets/AssetManifest.json": "9a6705ca9a5580894f0e2996136671f8",
"assets/assets/fonts/Archivo/static/Archivo-Black.ttf": "d4580cf6cf7b4912536500d2f56eb22c",
"assets/assets/fonts/Archivo/static/Archivo-BlackItalic.ttf": "51eccc57254bf66c9c252a03e69aa30d",
"assets/assets/fonts/Archivo/static/Archivo-Bold.ttf": "1eab2d39d7ab68303d0f814aea7d1269",
"assets/assets/fonts/Archivo/static/Archivo-BoldItalic.ttf": "db38e344b0e97bd5f4f5c54fe53a523a",
"assets/assets/fonts/Archivo/static/Archivo-ExtraBold.ttf": "72ffb0d0455bf9ab033e1819dbc69b3b",
"assets/assets/fonts/Archivo/static/Archivo-ExtraBoldItalic.ttf": "fa10f5b8ae829fbc419084bd599a9cca",
"assets/assets/fonts/Archivo/static/Archivo-ExtraLight.ttf": "398c10989a4367daedc48cd246a0d7a9",
"assets/assets/fonts/Archivo/static/Archivo-ExtraLightItalic.ttf": "b2c7889e0969d2009319e3137eedbad3",
"assets/assets/fonts/Archivo/static/Archivo-Italic.ttf": "69054571ced85cbde8902268e06fb4de",
"assets/assets/fonts/Archivo/static/Archivo-Light.ttf": "c7099b22c381b3649ed9a19070a573cf",
"assets/assets/fonts/Archivo/static/Archivo-LightItalic.ttf": "b665b62e060c43474bc9ac172e22a3ff",
"assets/assets/fonts/Archivo/static/Archivo-Medium.ttf": "1397fc1760db002d950c02e406eb8dc6",
"assets/assets/fonts/Archivo/static/Archivo-MediumItalic.ttf": "6b31e2c2a43fda96db4551ed19d1eb78",
"assets/assets/fonts/Archivo/static/Archivo-Regular.ttf": "ee3dc5e9c7970e30aad97c909f1a3948",
"assets/assets/fonts/Archivo/static/Archivo-SemiBold.ttf": "ef5277bf4d7514c4403c1b2b72dad0df",
"assets/assets/fonts/Archivo/static/Archivo-SemiBoldItalic.ttf": "65eafd100810eeb164448abb7a60a223",
"assets/assets/fonts/Archivo/static/Archivo-Thin.ttf": "4a155d7ca7815c5e53364d9d90b94389",
"assets/assets/fonts/Archivo/static/Archivo-ThinItalic.ttf": "99f686f83c7adcb8de27fac32f43ce91",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-Black.ttf": "21658dc8c09fc4365872fc8db122da38",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-BlackItalic.ttf": "7c81e3baab9db646078745222acf1604",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-Bold.ttf": "2cbc16208db19f02f059c026cc296be5",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-BoldItalic.ttf": "7c6bbcf42d8c4a0549da56b3c6bf7b41",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-ExtraBold.ttf": "14899a824d2401f25142084e1222a66a",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-ExtraBoldItalic.ttf": "768dea799aaaed6e8f630e6a3627835d",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-ExtraLight.ttf": "cc2f426cb3d18a55aeba826a33a6032c",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-ExtraLightItalic.ttf": "af7114aabd5bd7f27a9eb45ef0bb4ad8",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-Italic.ttf": "90896b6cff32a801469e7d4886c3db4e",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-Light.ttf": "fb3d23111a91fa0683204676852d58e9",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-LightItalic.ttf": "acadb80e0a6683c3a09c568cd0d007b9",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-Medium.ttf": "08e088825d0ef4a3df038dccf41d32b2",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-MediumItalic.ttf": "6e979712c63b9f38bc1f2dc257b39f59",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-Regular.ttf": "f4461794df25e30961eba7e058f0b69d",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-SemiBold.ttf": "cdbc0a90127c2974765c1fd872d47f55",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-SemiBoldItalic.ttf": "d5573238ad5b780cda70867cd7edeae7",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-Thin.ttf": "700023a41440a905497217c34e748a51",
"assets/assets/fonts/Archivo/static/Archivo_Condensed-ThinItalic.ttf": "dd9011e6f8f192486893010c73be1005",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-Black.ttf": "6be88616aacb29e4d349be62c4e9a0d4",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-BlackItalic.ttf": "a2cebce7fa47816b02f1b6795cebcaf1",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-Bold.ttf": "1790cc709b8da70193de0c97f15c20e4",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-BoldItalic.ttf": "0296c9f7b3d7850d7e8f30b162fc0c94",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-ExtraBold.ttf": "fa6dd4ee3482c9808d1573357a6a1209",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-ExtraBoldItalic.ttf": "56f7721aace42bd9f0f9b41ea168dcf1",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-ExtraLight.ttf": "1c262824bf16beb4cc9703025a9ba63e",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-ExtraLightItalic.ttf": "ad63539bd6290d72d09ed194eca15d1a",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-Italic.ttf": "3f47e532dbec131c7ee28cf75cdbb925",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-Light.ttf": "c202dead8e72bfa8bb6bed6dfd0ef55f",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-LightItalic.ttf": "53488787936448d928fb6e7de01b97c4",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-Medium.ttf": "5964e53d9907d34556bf4643aef4f85e",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-MediumItalic.ttf": "6f10f8b7d12d7c94e6a9533e43114fe4",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-Regular.ttf": "bfe7251c3191b5d92c4d12a016d7eb56",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-SemiBold.ttf": "7ff33b0a155c36969219446865d4ba2c",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-SemiBoldItalic.ttf": "b5629a83fba582dd13917fd01a2d680a",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-Thin.ttf": "5e0e4a970e11b9ca839a23fa2e43010e",
"assets/assets/fonts/Archivo/static/Archivo_Expanded-ThinItalic.ttf": "99817506c96711e4c22a86498cc0cfdc",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-Black.ttf": "80559378be16030937282f4a0e2e7f6a",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-BlackItalic.ttf": "7ca39115023e301f45c121380eee8b5c",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-Bold.ttf": "c6e0f37c42023868824938aaa7a61567",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-BoldItalic.ttf": "9c2fa10a6a31ef0f26cc143ad85515fd",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-ExtraBold.ttf": "efaa5e4b4252b6ed1184540f3b17ac1b",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-ExtraBoldItalic.ttf": "374645c00eb88197ceca4fc7188f8863",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-ExtraLight.ttf": "44d4619ab459d457753ba3d279fb52dd",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-ExtraLightItalic.ttf": "a0f0ebfd08e94ec68c185fd593a36908",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-Italic.ttf": "2d231c9f325752af50d464e69cd15a00",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-Light.ttf": "cc7ef1885246cdadbe6a0aa4bd2fd621",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-LightItalic.ttf": "289f7b5f76f1902bf5bff72e7eba78a6",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-Medium.ttf": "171cba5acf583fa09694fc46f3ce0b21",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-MediumItalic.ttf": "fe140415bc32bd84d38c4fd17a2bc879",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-Regular.ttf": "69f156ae6c16b1ad957a42a7a926cec0",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-SemiBold.ttf": "4674594e66f463acfdd3053d6a80b5c7",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-SemiBoldItalic.ttf": "a723256be5a5725600617ade3f226c62",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-Thin.ttf": "db5d352e167933f204d47d72f338cf3d",
"assets/assets/fonts/Archivo/static/Archivo_ExtraCondensed-ThinItalic.ttf": "cc47f358f15604ef0c470b9515f4f293",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-Black.ttf": "39d40ef7b7fd9b3ffb3010e52cdfe844",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-BlackItalic.ttf": "9cc5208a28a7cb789b6894b34a8ac3f9",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-Bold.ttf": "79b88770cf0161d0ba82093e502ba3b2",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-BoldItalic.ttf": "588e2f8793907ff7832c732f76a316cc",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-ExtraBold.ttf": "a58476230a0ad5481115eef8506f3273",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-ExtraBoldItalic.ttf": "f1ffe00798130c18985d90cb005516b4",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-ExtraLight.ttf": "2c4be0242ab45d32c10ce38720c576fd",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-ExtraLightItalic.ttf": "aeb4b95c2b24ca94e2f5fc9bd59e6c42",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-Italic.ttf": "bfda4b785a1e0edf649c7a0ed53cdf76",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-Light.ttf": "1c3cf325943c033970b9d0778a038146",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-LightItalic.ttf": "df43620af9b17893613a25f9bc0af685",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-Medium.ttf": "937cf667cf43adea2ec54ca784241c7d",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-MediumItalic.ttf": "ba4daa94a03ef9b72d0e6b5655a15851",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-Regular.ttf": "7a58e5d19b39533d5be3d1dbc77c9fc3",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-SemiBold.ttf": "ef3555df1ab4764166817edfbdc02409",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-SemiBoldItalic.ttf": "34c98c756ad0777fe1ade15ec4adf418",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-Thin.ttf": "682dd0b79b749714c2c006198f24fb47",
"assets/assets/fonts/Archivo/static/Archivo_SemiCondensed-ThinItalic.ttf": "2c9484309db8cca88418ca8557da8dd0",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-Black.ttf": "db72e9aeca9a96efdd3d35028d232282",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-BlackItalic.ttf": "ae5eb97b8d7508b8fa64ad18515faba5",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-Bold.ttf": "a58d9b9fbcf91bf21c01c9c404754677",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-BoldItalic.ttf": "607a3bc3199806c660663f2ccb5168c3",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-ExtraBold.ttf": "d1e0a7fcde39ccb0c21ae80cb2fb5866",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-ExtraBoldItalic.ttf": "4b20c385fdd4f3940b332ad096ed7252",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-ExtraLight.ttf": "d3a5206e809c244272c7d0275ab5da40",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-ExtraLightItalic.ttf": "08d5e2f6052037d0040318ca3ea6bdeb",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-Italic.ttf": "c819e15bb45272ad2587c6054ef2d80e",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-Light.ttf": "a9a0ee4a1b82cb7a392786f7d6d8fd1a",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-LightItalic.ttf": "71553d4fcbb865e85e78fdf5df03fd21",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-Medium.ttf": "bc67ec14479b7a866c0aea7b51bc0f97",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-MediumItalic.ttf": "c9744c593115c0952cfb84660f02694d",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-Regular.ttf": "d4e188c4a0db16ee28b4bcd0ee66d5f1",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-SemiBold.ttf": "b02256d85463588c2b873ebd8254dec0",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-SemiBoldItalic.ttf": "ed6b44a2be09bfbd4ed5c4bd680bbe6f",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-Thin.ttf": "c86f9133c23ee55533d2ffe3f4ac28a2",
"assets/assets/fonts/Archivo/static/Archivo_SemiExpanded-ThinItalic.ttf": "a32e2c342c869fb84a75b1d698c8e17f",
"assets/assets/images/bronze_badge.png": "9d79a700cd084a36b9e936e0957d4109",
"assets/assets/images/empty_badge.png": "40fb489f408514b53fa0367e28ddc7e4",
"assets/assets/logos/cc.png": "f8e000ae459196278ed5bf8f463220a7",
"assets/assets/logos/ideal.png": "b4d2e6505cfd860cb8673b09d3072bdb",
"assets/assets/logos/klarna.png": "13c512891f4ed0269349f38d8be813a6",
"assets/assets/logos/paypal.png": "d92c2dd3f053405f7e53eac07dfdd7e9",
"assets/FontManifest.json": "908909b7f2590963d2151754bfd786eb",
"assets/fonts/MaterialIcons-Regular.otf": "5073aa876ca8630eeb052d4201cb6ee8",
"assets/NOTICES": "e65655200113dc153d843543370dfa6c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "12b7efb156a036f55d743b85308de1d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fea8c48009671ee47b7853fb206957db",
"/": "fea8c48009671ee47b7853fb206957db",
"main.dart.js": "45cb6a529daba204ced32c10f3c13d92",
"manifest.json": "c97bf58e757cf1b7c7a41a447c8419d7",
"version.json": "f751726c2b63b6f77435171fc1523a18"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
