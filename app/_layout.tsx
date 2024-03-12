import { Stack } from "expo-router";
import { useCallback, useLayoutEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const [layoutReady, setLayoutReady] = useState(false);

  useLayoutEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setLayoutReady(true);
      }
    };

    if (!layoutReady) {
      onLayoutRootView();
    }
  }, [fontsLoaded, layoutReady]);

  if (!fontsLoaded || !layoutReady) return null;

  return <Stack />;
};

export default Layout;
