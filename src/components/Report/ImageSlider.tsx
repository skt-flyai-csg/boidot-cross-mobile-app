import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import FastImage from 'react-native-fast-image';

interface ImageList {
  image_url_list: string[];
}

const ImageSlider = ({image_url_list}: ImageList) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {theme} = useTheme();

  const onViewRef = React.useRef(({viewableItems}: any) => {
    setActiveIndex(viewableItems[0].index);
  });

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={[styles.view]}>
      <FlatList
        data={image_url_list}
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
        {image_url_list.map((_, i) => (
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
};

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
