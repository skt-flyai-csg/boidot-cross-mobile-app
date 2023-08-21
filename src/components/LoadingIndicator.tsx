import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

interface LoadingIndicator {
  radius: number;
  color: string;
}

const LoadingIndicator = ({radius, color}) => {
  const [progress, setProgress] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);

  useEffect(() => {
    animateCircles();
    return () => {};
  }, []);

  const circleStyle = {
    width: radius,
    height: radius,
    borderRadius: radius,
    backgroundColor: color,
  };

  const animateCircles = () => {
    const animations = progress.map(value => {
      return Animated.sequence([
        Animated.timing(value, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(value, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]);
    });

    Animated.loop(Animated.stagger(300, animations)).start();
  };

  const renderCircles = () => {
    return progress.map((value, index) => {
      const opacity = value.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });

      return (
        <Animated.View
          key={index}
          style={[circleStyle, {opacity, marginLeft: index === 0 ? 0 : 5}]}
        />
      );
    });
  };

  return <View style={styles.container}>{renderCircles()}</View>;
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
