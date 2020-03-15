
export default function (value) {
   return value.indexOf('FC') !== 1 ? value.slice(0, value.indexOf('FC')) : value
 }
 