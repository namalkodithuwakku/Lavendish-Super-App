export type Offer = { id:string; title:string; category:string; subtitle:string; period:string; badge:string; image:string; hotel?:string };
export const offers:Offer[] = [
  {id:'school-holiday',title:'School Holiday Escape',category:'Family',subtitle:'A refreshing family break across selected Lavendish hotels.',period:'Seasonal offer',badge:'FAMILY',image:'https://lavendishleisure.com/wp-content/uploads/2025/06/Copy-of-Copy-of-DSC00985-2-HDR-scaled-700x467.jpg'},
  {id:'weekend',title:'Weekend Escape',category:'Weekend',subtitle:'Make your next short break feel longer at a Lavendish destination.',period:'Selected weekends',badge:'WEEKEND',image:'https://lavendishleisure.com/wp-content/uploads/2025/06/DSC03405-HDR-1-scaled-700x467.jpg'},
  {id:'kandy-season',title:'Kandy Season Stay',category:'Events',subtitle:'Stay close to the culture, atmosphere and timeless rhythm of Kandy.',period:'Seasonal',badge:'EVENT',image:'https://lavendishleisure.com/wp-content/uploads/2026/03/DSC00092-1-scaled-700x467.jpg',hotel:'Lavendish Hills Kandy'},
  {id:'wild',title:'Wild Sri Lanka',category:'Nature',subtitle:'Safari days, quiet nights and nature-first escapes.',period:'Selected dates',badge:'WILD',image:'https://lavendishleisure.com/wp-content/uploads/2025/06/h-1-scaled-700x467.jpg'}
];
