export const formatDuraton = (value=0)=>{
  return  `${!value? 0 : Math.floor(value/60)}h ${( !value? 0 : value%60)}min`;
}