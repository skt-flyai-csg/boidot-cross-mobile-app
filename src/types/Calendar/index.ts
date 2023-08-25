import {Dispatch, SetStateAction} from 'react';

export interface CustomDayProps {
  date: {
    day: string;
  };
  marking: {
    objectId: string;
  };
}

export interface BoxProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

type FontWeight = 'normal' | 'bold';

export interface CalendarStyleProps {
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
