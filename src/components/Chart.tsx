import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const {height, width} = Dimensions.get('window');

export function Chart() {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 30,
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 24}}>207</Text>
        <Text style={{marginTop: 10}}>Total coins spent today</Text>
      </View>
      <BarChart
        data={chartData}
        width={width}
        height={height / 5}
        fromZero
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          fillShadowGradientOpacity: 1,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        verticalLabelRotation={0}
      />
    </View>
  );
}
