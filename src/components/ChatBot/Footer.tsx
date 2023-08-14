import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

interface FooterProps {
  handleButtonClick: () => void;
}

const Footer: React.FC<FooterProps> = ({handleButtonClick}) => {
  const {colors} = useTheme();
  return (
    <LinearGradient
      colors={['#00000000', colors.textNormal]}
      style={[styles.footer, styles.paddingHorizontal]}>
      <TouchableOpacity>
        <Icon name="user" size={24} color={colors.textWhite} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.secondary}]}>
        <Icon name="mic" size={24} color={colors.textWhite} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleButtonClick}>
        <IconMat name="keyboard" size={24} color={colors.textWhite} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Footer;

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingVertical: 30,
    marginBottom: 34,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    bottom: 0,
  },
});
