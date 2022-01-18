var output = [];
function printValues(object) {
     var tempout = {};
     tempout.id = object.id;
     tempout.title = object.title;
     tempout.childrens = [];
     // console.log(tempout)
     output.push(tempout);
     // console.log(output);
     object.childrens.forEach(element => {
          printValues(element);
     }); 
}
console.log(output);
var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]

input.forEach(function(obj) {
     printValues(obj);
})

//  console.log(input[0].id);
