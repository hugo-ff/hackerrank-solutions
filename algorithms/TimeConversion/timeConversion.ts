/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string { 
  const timeWithoutPmOrAm = s.split('AM')[0].split('PM')[0];
  const timeSegments = timeWithoutPmOrAm.split(":");

  let hourSegment: string;

  if (s.includes('AM')) {
    hourSegment = timeSegments[0] === '12' ? '00' : timeSegments[0];
  } else {
    hourSegment = timeSegments[0] === '12' ? '12' : ((parseInt(timeSegments[0]) - 1) + 13).toString();
  }

  const parsedTime = `${hourSegment}:${timeSegments[1]}:${timeSegments[2]}`;
  return parsedTime;
}