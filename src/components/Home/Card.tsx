import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from '../Text/index';

interface CardProps {
  name: string;
  isDetail: boolean;
  children?: React.ReactNode;
}

const Card: FC<CardProps> = ({name, isDetail, children}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.view, {backgroundColor: colors.textWhite}]}>
      <View style={[styles.flex]}>
        <TextComponent
          weight="bold"
          style={[styles.text, {color: colors.textNavy}]}>
          {name}
        </TextComponent>
        {isDetail && (
          <View style={[styles.detail]}>
            <TextComponent
              weight="bold"
              style={[styles.detailText, {color: colors.textLightGrey}]}>
              자세히 보기
            </TextComponent>
            <Icon name="chevron-right" size={16} color={colors.textLightGrey} />
          </View>
        )}
      </View>
      <View style={[styles.contentBox]}>{children}</View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  view: {width: '100%', padding: 20, borderRadius: 20, marginBottom: 12},
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detail: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.4,
  },
  detailText: {
    fontSize: 12,
    lineHeight: 16,
  },
  contentBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
