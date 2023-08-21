import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoadingIndicator from './LoadingIndicator';
import {useTheme} from 'react-native-paper';

interface ListFooterProps {
  isLoading: boolean;
  isProcessed: boolean;
}

const ListFooter: React.FC<ListFooterProps> = ({isLoading}) => {
  const {colors} = useTheme();
  return isLoading ? (
    <View
      style={[
        styles.indicatorContainer,
        styles.bubble,
        {
          backgroundColor: colors.secondary,
          marginRight: 'auto',
        },
      ]}>
      <LoadingIndicator />
    </View>
  ) : (
    <View style={[styles.listFooter]} />
  );
};

export default ListFooter;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    marginBottom: 200,
    marginTop: 12,
  },
  listFooter: {
    height: 200,
  },
  bubble: {
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignSelf: 'flex-start',
  },
});
