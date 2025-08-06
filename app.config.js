export default {
  expo: {
    name: "bilal-app",
    slug: "bilal-companion-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.projectbilal.app",
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          "Location to determine prayer times.",
        NSLocationAlwaysAndWhenInUseUsageDescription:
          "Location to determine prayer times.",
        NSLocationAlwaysUsageDescription: "Location to determine prayer times.",
        NSAllowsArbitraryLoads: true,
        NSBluetoothAlwaysUsageDescription:
          "This app uses Bluetooth to connect to devices.",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.projectbilal.app",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "5efe247a-dcb9-4a1a-86a6-933e5d72cdcb",
      },
    },
    owner: "projectbilal",
  },
};
