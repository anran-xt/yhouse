const homeData = require('./homeData.json')
const playData = require('./playData.json')

const list = require('./list.json')
const rhot = require('./rhot.json')
const mguesslike = require('./mguesslike.json')
const lcake = require('./lcake.json')


const nightlife_list = require('./Nightlife/data.json');
const nightlife_list1 = require('./Nightlife/data1.json');
const nightlife_list2 = require('./Nightlife/data2.json');
const nightlife_list3 = require('./Nightlife/data3.json');

const spa_list = require('./Spa/data.json');
const spa_list1 = require('./Spa/data1.json');
const spa_list2 = require('./Spa/data2.json');
const spa_list3 = require('./Spa/data3.json');

const search_list = require('./Searchlist/data1.json');
const search_list1 = require('./Searchlist/data2.json');

const subject_list1 = require('./Subject/data1.json');
const subject_list2 = require('./Subject/data2.json');
const subject_list3 = require('./Subject/data3.json');
const subject_list4 = require('./Subject/data4.json');
const subject_list42 = require('./Subject/data42.json');
const subject_list43 = require('./Subject/data43.json');
const subject_list44 = require('./Subject/data44.json');
const subject_list45 = require('./Subject/data45.json');
const subject_list46 = require('./Subject/data46.json');
const subject_list47 = require('./Subject/data47.json');
const subject_list48 = require('./Subject/data48.json');
const subject_list5 = require('./Subject/data5.json');
const subject_list6 = require('./Subject/data6.json');

const comment_list1 = require('./comment/data1.json')
const comment_list2 = require('./comment/data2.json')


module.exports = function () {
  return {
    "homeData": homeData,
    "playData": playData,

    "list": list,
    "rhot": rhot,
    "mguesslike": mguesslike,
    "lcake":lcake,

    "nightlife_list": nightlife_list,
    "nightlife_list1": nightlife_list1,
    "nightlife_list2": nightlife_list2,
    "nightlife_list3": nightlife_list3,
    "spa_list":spa_list,
    "spa_list1":spa_list1,
    "spa_list2":spa_list2,
    "spa_list3":spa_list3,
    "search_list":search_list,
    "search_list1":search_list1,
    "subject_list1":subject_list1,
    "subject_list2":subject_list2,
    "subject_list3":subject_list3,
    "subject_list4":subject_list4,
    "subject_list42":subject_list42,
    "subject_list43":subject_list43,
    "subject_list44":subject_list44,
    "subject_list45":subject_list45,
    "subject_list46":subject_list46,
    "subject_list47":subject_list47,
    "subject_list48":subject_list48,
    "subject_list5":subject_list5,
    "subject_list6":subject_list6,

    "comment_list1":comment_list1,
    "comment_list2":comment_list2
    
  }
}
