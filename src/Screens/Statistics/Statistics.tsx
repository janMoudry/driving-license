import { Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Statistics = () => {
  return (
    <View>
      <LineChart
        data={{ datasets: [{ data: [1] }], labels: ["idk"] }}
        width={200}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => "blue",
          labelColor: () => "red",
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Statistics;
