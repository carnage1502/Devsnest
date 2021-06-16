//Question 1.
console.log("Question-1");{
var student= new Object({name : "David Rayy", sclass : "VI", rollno : 12});
}
console.log(student);

//Question 2.
console.log("\nQuestion-2");{
    var student= new Object({name : "David Rayy", sclass : "VI", rollno : 12});
}
console.log("Before Deletion\n",student);
delete student.rollno;
console.log("After Deletion\n",student);

//Question 3.
console.log("\nQuestion-3");{
    var student= new Object({name : "David Rayy", sclass : "VI", rollno : 12});
}
console.log("Length:",Object.keys(student).length);

//Question 4.
console.log("\nQuestion-4");{
    var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
}
for (let i in library){
    console.log("Book-Name:-",library[i].title,",","Author:-",library[i].author,",","Reading-Status:-",library[i].readingStatus);
    console.log("\n");
}

//Question 5.
console.log("\nQuestion-5");{
    var volume= new Object({pi: 3.1416, r: 5, h:7});
}
console.log("Volume:",volume.pi*Math.pow(volume.r,2) *volume.h);

//Question 6.
console.log("\nQuestion-6");{
    var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
                    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
                     { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
}
var t=[];
library.map((i) =>{
    t.push(i.libraryID);
});
t.sort((a,b) => b-a);
for (let c in t){
    library.map((i) =>{
        if(i.libraryID === t[c]){
            console.log(i);
        }
    });
}