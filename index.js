//Q1: The constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.

function InstagramPost(handleOfAuthor, content, imgeLink, numberOfViews, numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imgeLink = imgeLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}


//Q2: Create 2 Instagram post objects from the constructor function you created above

const post1 = new InstagramPost("@ehsan", "Cooking Content", "https://www.instagram.com/p/CPjuQewhzsR/", "50k viewers", "20k likes");
const post2 = new InstagramPost("@nasrElameen", "Working in the feild Content","https://www.instagram.com/p/vRjGAiP7pc/","100 Viewers","70 likes")

console.log(post1);
console.log(post2);


//Q3: Musa Dawodu's JAMB exam
//a:Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
 function creatPerson(personName, personAge, personLocation ) {
    return{
        personName : personName,
        personAge : personAge,
        personLocation :  personLocation,

    };
 }

 //create an object representing Musa from the factory function

 const person1 = creatPerson(" Musa Dawodu", "19 years old", "Lekki, Lagos State.");
 console.log(person1);

 //b: implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 

 function createJambScores( eng, govt, lit, crk){
    return{
        ENG : eng,
        GOVT : govt,
        LIT : lit,
        CRK : crk,
    };
 }
//Then create an object representing Muse’s JAMB scores.
const musaJambScores = createJambScores( 70, 85, 82, 94);
console.log(musaJambScores);


// Add the object as a property to Musa object you created above in (a) above
person1.musaJambScores= new createJambScores( 70, 85, 82, 94);
console.log(person1);


//Q4: What are the different ways you can clone an object? Give examples for each of them.

//To clone a JavaScript object correctly, you have 3 different options
//The Object.assign() function.
// JSON parsing.
//The spread operator.
//Exampls:
const firstData = {
     firstName: "Alice",
     LastName: "Elaso",
      age: 26,

     }
//The Object.assign() function.
const secondData = Object.assign({},firstData);
console.log(firstData);
console.log(secondData);

//JSON parsing.
const thirdData = JSON.parse(JSON.stringify(firstData));
console.log({thirdData});

//The spread operator.
const fourthData = {...firstData};
console.log(fourthData);


//Q5: Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	//’Omoyele Sowore is the presidential candidate of AAC’

    const presidentialCandidates = {
        AAC: 'Omoyele Sowore',
        ACCORD: 'Christopher Imumolen',
        APC: 'Bola Ahmed Tinubu',
        LP: 'Peter Obi',
        NNPP: 'Rabiu Kwankwaso',
        PDP: 'Atiku Abubakar',
    }

    for (const president in presidentialCandidates) {
       // console.log(president);
        //console.log(presidentialCandidates[president]);
        console.log( presidentialCandidates[president] + ' is the presidential candidate of '+ president);

    }







