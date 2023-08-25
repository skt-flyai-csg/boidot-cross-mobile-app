import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoadingIndicator from '../LoadingIndicator';
import {useTheme} from '../../contexts/ThemeContext';
import {ListFooterProps} from '../../types';

const ListFooter = ({isLoading}: ListFooterProps) => {
  const {theme} = useTheme();
  return isLoading ? (
    <View
      style={[
        styles.indicatorContainer,
        styles.bubble,
        {
          backgroundColor: theme.secondary,
        },
      ]}>
      <LoadingIndicator radius={5} color={theme.white} />
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
