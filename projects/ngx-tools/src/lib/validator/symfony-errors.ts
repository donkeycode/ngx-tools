export interface SymfonyError {
  status: string;
  errors: SymfonyErrorsList;
}

export interface SymfonyErrorsList {
  errors: string[];
  children: object; // form fields
}


// Example :
// {
//   "status": "error",
//   "errors": {
//     "errors": [
//       "error message 1",
//       "error message 2"
//     ],
//     "children": {
//       "field": {
//         "errors": [ "error message 3" ]
//       },
//       "field-parent": {
//         "children": [
//           {
//             "children": {
//               "field-child": {
//                 "errors": [ "error message 4" ]
//               },
//             }
//           }
//         ]
//       }
//     }
//   }
// }
