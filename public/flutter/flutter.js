(function() {
    var script = document.createElement('script');
    script.src = 'flutter/main.dart.js'; // Make sure this path is correct
    script.onload = function() {
      // Initialize the Flutter application
      if (typeof _flutter.loader === 'undefined') {
        console.error('FlutterLoader is not defined');
        return;
      }
      
      _flutter.loader.load({
        serviceWorker: {
          serviceWorkerVersion: "{{flutter_service_worker_version}}",
        },
        onLoaded: function(engineInitializer) {
          engineInitializer.initializeEngine().then(function(appRunner) {
            appRunner.runApp();
          });
        }
      });
    };
    document.head.appendChild(script);
  })();
  