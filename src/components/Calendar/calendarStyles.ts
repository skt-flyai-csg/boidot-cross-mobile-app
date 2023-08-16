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
  selectedDayBackgroundColor: '#BBE5FE',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#4264EC',
  dayTextColor: '#262D33',
  arrowColor: '#3A4767',
  monthTextColor: '#3A4767',
  textDayFontFamily: 'NanumSquareNeo-bRg',
  textMonthFontFamily: 'NanumSquareNeo-bRg',
  textDayHeaderFontFamily: 'NanumSquareNeo-cBd',
  textDayFontWeight: 'normal',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: 'normal',
  textDayFontSize: 12,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 12,
};
