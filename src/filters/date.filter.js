
export default function (value, format = 'date') {
  const options = {};
  const local = 'en-US';
  
  if(format.includes('date')){
    options.day = '2-digit';
    options.month = 'short';
    options.year = 'numeric';
  }
  if(format.includes('time')){
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.second = '2-digit';
  }

  
  return new Intl.DateTimeFormat(local, options).format(new Date(value))
}
