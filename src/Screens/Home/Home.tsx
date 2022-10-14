import { ScrollView, Text, View } from "react-native";
import styles from "./Home.style";

const Home = () => {
  return (
    <ScrollView style={styles.constainer}>
      <Text style={styles.title}>ŽADATEL O ŘIDIČSKÉ OPRÁVNĚNÍ</Text>
    </ScrollView>
  );
};

export default Home;
