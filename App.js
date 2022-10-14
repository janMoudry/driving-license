import Navigation from "./src/navigation/Navigation";
import { useFonts } from "expo-font";
import useInicialization from "./useInicialization";
import { Text } from "react-native";
import Loading from "./src/Components/Loading";

const App = () => {
  const [loaded] = useFonts({
    mainFontRegular: require("./assets/fonts/FrankRuhlLibre-Regular.ttf"),
    mainFontBold: require("./assets/fonts/FrankRuhlLibre-Bold.ttf"),
    mainFontBlack: require("./assets/fonts/FrankRuhlLibre-Black.ttf"),
    mainFontMedium: require("./assets/fonts/FrankRuhlLibre-Medium.ttf"),
  });

  // const { isDownloaded } = useInicialization();

  if (!loaded) return <Loading label="fonts loading..." />;
  // if (!isDownloaded) return <Loading label="downloading questions..." />;

  return <Navigation />;
};

export default App;
