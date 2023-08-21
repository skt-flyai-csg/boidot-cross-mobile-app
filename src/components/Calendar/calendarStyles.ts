type FontWeight = 'normal' | 'bold';

interface calendarStyleProps {
  backgroundColor: string;
  calendarBackground: string;
  selectedDayBackgroundColor: string;
  selectedDayTextColor: string;
  todayTextColor: string;
  dayTextColor: string;
  arrowColor: string;
  monthTextColor: string;
  textDayFontFamily: string;
  textMonthFontFamily: string;
  textDayHeaderFontFamily: string;
  textDayFontWeight: FontWeight;
  textMonthFontWeight: FontWeight;
  textDayHeaderFontWeight: FontWeight;
  textDayFontSize: number;
  textMonthFontSize: number;
  textDayHeaderFontSize: number;
}

export const theme: calendarStyleProps = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  selectedDayBackgroundColor: '#FEA76A',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#F36980',
  dayTextColor: '#262D33',
  arrowColor: '#3A4767',
  monthTextColor: '#3A4767',
  textDayFontFamily: 'NanumSquareNeo-bRg',
  textMonthFontFamily: 'NanumSquareNeo-bRg',
  textDayHeaderFontFamily: 'NanumSquareNeo-cBd',
  textDayFontWeight: 'bold',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: 'normal',
  textDayFontSize: 12,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 12,
};
