module.exports = {
  Sidebar: [
    "getting_started",
    {
      type: "category",
      label: "가이드",
      collapsed: false,
      items: [
        "cookbooks/testing",
        //"cookbooks/refresh",
      ],
    },
    {
      type: "category",
      label: "개념",
      items: [
        "concepts/providers",
        "concepts/reading",
        "concepts/combining_providers",
        "concepts/provider_observer",
        // "concepts/computed",
        {
          type: "category",
          label: "Modifiers",
          items: [
            "concepts/modifiers/family",
            "concepts/modifiers/auto_dispose",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "마이그레이션",
      collapsed: false,
      items: ["migration/0.13.0_to_0.14.0", "migration/0.14.0_to_1.0.0"],
    },
    {
      type: "category",
      label: "공식 예제",
      items: [
        {
          type: "link",
          label: "Counter",
          href: "https://github.com/rrousselGit/river_pod/tree/master/examples/counter",
        },
        {
          type: "link",
          label: "Todo list",
          href: "https://github.com/rrousselGit/river_pod/tree/master/examples/todos",
        },
        {
          type: "link",
          label: "Marvel API",
          href: "https://github.com/rrousselGit/river_pod/tree/master/examples/marvel",
        },
      ],
    },
    {
      type: "category",
      label: "Third party 예제",
      items: [
        {
          type: "link",
          label: "Android Launcher",
          href: "https://github.com/lohanidamodar/fl_live_launcher",
        },
        {
          type: "link",
          label: "Worldtime Clock",
          href: "https://github.com/lohanidamodar/flutter_worldtime",
        },
        {
          type: "link",
          label: "Dictionary App",
          href: "https://github.com/lohanidamodar/fl_dictio",
        },
        {
          type: "link",
          label: "Firebase Starter",
          href: "https://github.com/lohanidamodar/flutter_firebase_starter/tree/feature/riverpod",
        },
        {
          type: "link",
          label: "Time Tracking App (with Firebase)",
          href: "https://github.com/bizz84/starter_architecture_flutter_firebase",
        },
        {
          type: "link",
          label: "Firebase Phone Authentication with Riverpod",
          href: "https://github.com/julienlebren/flutter_firebase_phone_auth_riverpod",
        },
        {
          type: "link",
          label: "ListView paging with search",
          href: "https://github.com/tbm98/flutter_loadmore_search",
        },
        {
          type: "link",
          label: "Resocoder's Weather Bloc to Weather Riverpod",
          href: "https://github.com/campanagerald/flutter-bloc-library-v1-tutorial",
        },
        {
          type: "link",
          label: "Blood Pressure Tracker App",
          href: "https://github.com/UrosTodosijevic/blood_pressure_tracker",
        },
        {
          type: "link",
          label:
            "Firebase Authentication with Riverpod Following Flutter DDD Architecture Pattern",
          href: "https://github.com/pythonhubpy/firebase_authentication_flutter_DDD",
        },
        {
          type: "link",
          label: "Todo App with Backup and Restore feature",
          href: "https://github.com/TheAlphaApp/flutter_riverpod_todo_app",
        },
        {
          type: "link",
          label: "Integrating Hive database with Riverpod (simple example)",
          href: "https://github.com/GitGud31/theme_riverpod_hive",
        },
        {
          type: "link",
          label: "Browser App with Riverpod",
          href: "https://github.com/MarioCroSite/simple_browser_app",
        },
      ],
    },
    {
      type: "category",
      label: "Api 레퍼런스",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "All Providers",
          collapsed: true,
          items: [
            "providers/provider",
            "providers/state_notifier_provider",
            "providers/future_provider",
            "providers/state_provider",
          ],
        },
        {
          type: "link",
          label: "riverpod",
          href: "https://pub.dev/documentation/riverpod/latest/riverpod/riverpod-library.html",
        },
        {
          type: "link",
          label: "flutter_riverpod",
          href: "https://pub.dev/documentation//flutter_riverpod/latest/flutter_riverpod/flutter_riverpod-library.html",
        },
        {
          type: "link",
          label: "hooks_riverpod",
          href: "https://pub.dev/documentation/hooks_riverpod/latest/hooks_riverpod/hooks_riverpod-library.html",
        },
      ],
    },
  ],
};
