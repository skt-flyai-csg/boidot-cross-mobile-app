import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import FastImage from 'react-native-fast-image';

const images = [
  'https://velog.velcdn.com/images/limce21/post/8a38ec06-ddd5-463b-a426-479c566b2aa5/image.png',
  'https://velog.velcdn.com/images/limce21/post/44aa9598-936a-4428-a9da-99564ee8f9b5/image.png',
  'https://velog.velcdn.com/images/limce21/post/6f78f62b-d17b-4c50-b3dc-9cbc1b082e16/image.png',
];

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const {theme} = useTheme();

  const onViewRef = React.useRef(({viewableItems}) => {
    setActiveIndex(viewableItems[0].index);
  });

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={[styles.view]}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        onScrollToIndexFailed={() => {}}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <FastImage source={{uri: item}} style={[styles.image]} />
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        showsHorizontalScrollIndicator={false}
        style={[styles.carousel]}
      />
      <View style={[styles.circleBox]}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.circle,
              {
                backgroundColor:
                  i === activeIndex ? theme.primary : theme.backgroundGrey,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

export default ImageSlider;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  carousel: {
    width: 214,
    height: 135,
  },
  image: {
    width: 214,
    height: 135,
    objectFit: 'contain',
  },
  circleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 2,
  },
  circle: {
    marginTop: 8,
    borderRadius: 5,
    height: 5,
    width: 5,
  },
});
