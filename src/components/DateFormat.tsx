import * as React from 'react';

interface Props {
  children: string;
}
const DateFormat: React.FC<Props> = ({ children: value }) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return <>{`${year}년 ${month}월 ${day}일`}</>;
};

export default DateFormat;
