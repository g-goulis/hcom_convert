//
// import xAPI from "./util/xapiwrapper";
//
// function sendBasicStatement(verbID, verb, objectName, objectDesc){
//     let statement = {
//         "actor": {
//             "mbox": "mailto:"+email,
//             "name": name,
//             "objectType": "Agent"
//         },
//         "verb": {
//             "id": verbID,
//             "display": {
//                 "en-US": verb
//             }
//         },
//         "object": {
//             "id": config.courseURI,
//             "definition": {
//                 "name": {
//                     "en-US": objectName
//                 },
//                 "description": {
//                     "en-US": objectDesc
//                 }
//             },
//             "objectType": "Activity"
//         }
//     };
//     console.log("SENDING ", statement)
//     ADL.XAPIWrapper.sendStatement(statement);
//     xAPI.ADL.XAPIWrapper.sendStatement()
// }