import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoadingIndicator from './LoadingIndicator';
import ReportButton from './ReportButton';
import {useTheme} from 'react-native-paper';

interface ListFooterProps {
  isLoading: boolean;
  isProcessed: boolean;
  report: {
    createdTime: string;
    objectId: string;
  };
}

const ListFooter: React.FC<ListFooterProps> = ({
  isLoading,
  isProcessed,
  report,
}) => {
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
  ) : isProcessed ? (
    <View style={[styles.listFooter]}>
      <ReportButton report={report} />
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
