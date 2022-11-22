import React, { useEffect } from "react";
import { Box, Text, View } from "native-base";
import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  vec,
} from "@shopify/react-native-skia";

const width = 256;
const height = 256;

const PaintDemo = () => {
  const r = width / 2;
  return (
    <Canvas style={{ width, height }}>
      <Circle cx={r} cy={r} r={r}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(2 * r, 2 * r)}
          colors={["#00ff87", "#60efff"]}
        />
      </Circle>
      <Group>
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#0061ff", "#60efff"]}
        />
        <Circle cx={3 * r} cy={3 * r} r={r} />
      </Group>
    </Canvas>
  );
};

export const ExploreScreen: React.FC<any> = () => {
  return (
    <View>
      <PaintDemo />
    </View>
  );
};
