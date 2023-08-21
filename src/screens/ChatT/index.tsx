import React from 'react';
import {SafeAreaView, StyleSheet, TouchableHighlight, View} from 'react-native';
import TopBar from '../../components/TopBar';
import {useTheme} from 'react-native-paper';
import TextComponent from '../../components/Text';
import Example from '../../components/ChatT/Example';

const ChatT = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.SafeAreaView,
        {backgroundColor: colors.backgroundGeneral},
      ]}>
      <TopBar name={'챗T'} isSettings={true} isWhite={false} />
      <View style={[styles.view]}>
        <View style={[styles.gap8, styles.alignCenter]}>
          <TextComponent weight="extraBold" style={[styles.title]}>
            언제든지, 끊임없이, 빠르게 무료로
            <TextComponent weight="heavy" style={[{color: colors.primary}]}>
              ChatGPT
            </TextComponent>
            &nbsp;서비스를 사용해보세요!
          </TextComponent>
          <TextComponent weight="light" style={[styles.desc]}>
            챗T는 MS Azure OpenAI의 ChatGPT 모델을 사용합니다.
          </TextComponent>
        </View>
        <View
          style={[
            styles.alignCenter,
            styles.justifyCenter,
            styles.box,
            styles.gap18,
            {backgroundColor: colors.textWhite},
          ]}>
          <Example
            name="message-circle"
            title="질문에 대한 답변을 해보세요"
            example="“ 인공 지능은 무엇인가요? “"
          />
          <Example
            name="edit"
            title="창의적인 글쓰기를 해보세요"
            example="“ 백설 공주 결말을 다르게 만들어줘 “"
          />
          <Example
            name="file-text"
            title="긴 글이나 글 요약을 해보세요"
            example="“ 어린왕자 소설 요약해줘 “"
          />
        </View>
        <View style={[styles.gap12]}>
          <TouchableHighlight
            style={[
              styles.button,
              styles.alignCenter,
              styles.justifyCenter,
              {backgroundColor: colors.primary},
            ]}
            underlayColor={colors.primaryHover}
            activeOpacity={1}
            onPress={() => console.log('')}>
            <TextComponent
              weight="bold"
              style={[styles.buttonText, {color: colors.textWhite}]}>
              시작하기
            </TextComponent>
          </TouchableHighlight>
          <TextComponent
            weight="light"
            style={[styles.desc, {color: colors.textLightGrey}]}>
            길 안내, 날씨 같은 실시간 질문이나 음악 재생과 같은 요청은 에이닷
            캐릭터에 물어봐주세요!
          </TextComponent>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatT;

const styles = StyleSheet.create({
  SafeAreaView: {width: '100%', height: '100%'},
  view: {
    gap: 20,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  gap8: {
    gap: 8,
  },
  gap12: {
    gap: 12,
  },
  gap18: {
    gap: 18,
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  desc: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
  box: {
    width: 341,
    height: 414,
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    height: 52,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.4,
  },
});
