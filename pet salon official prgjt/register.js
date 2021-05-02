const salon={
    name:"the fashion pet",
    address:{
        street:"av. university",
        number:"212-k",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
    
    ]
    
}

//var salonnanme=salon.name;
//var salonnumber=salon.address.number;
var {name,address:{street,number}}=salon;// object structuring

document.getElementById('footer-info').innerHTML=`
 <p> ${name} ${street} ${number} </p>
`;

function displaytext(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}
var counter=0;
// create the object constructor
class pets{
    constructor(name,age,gender,type,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.type=type
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.price=0;
        this.id=counter++;
    }
}

//create 3 pets
//add contact and owner name

//create the register function

     //read from inputs and store information into vars 
var inputName = document.getElementById(`petName`);
var inputAge = document.getElementById(`petAge`);
var inputGender = document.getElementById(`petGender`);
var inputType = document.getElementById(`petType`);
var inputBreed = document.getElementById(`petBreed`);
var inputService = document.getElementById(`petService`);
var inputOwner = document.getElementById(`ownerName`);
var inputPhone = document.getElementById(`ownerPhone`);
var inputPayment = document.getElementById(`payment`);
     //create a generic object and pass the info of the vars 
     function register(){
     //push the object into the array
     var thePet = new pets(inputName.value,
        inputAge.value,
        inputGender.value,
        inputType.value,
        inputBreed.value,
        inputService.value,
        inputOwner.value,
        inputPhone.value,);
      console.log(thePet);
     
     //clear the inputs
     salon.pets.push(thePet);
     clear();
     //displayTable(thePet);
     display();
}

function clear(){ 
       inputName.value="";
       inputAge.value="";
       inputBreed.value="";
       inputGender.value="";
       inputOwner.value="";
       inputPhone.value="";
        
}

function updateProfits(){
      var profit=0;
      for(var i=0;i<salon.pets.length;i++){
          profit=profit+salon.pets[i].price;
      }
      document.getElementById('profits').innerHTML=`profits = $${profit}.00`;
}
function deletePet(petId){
    // select the card with the pet
    var card=$('#'+petId)
    console.log('delete pet'+card)
    //select the pet in the array 
   var indexDelete;
   for(var i=0;i<salon.pets.length;i++){
       var selected=salon.pets[i];
       if(selected.id===petId){
           indexDelete=i;
           break;
       }
   }
   //delete the pet from the array
   salon.pets.splice(indexDelete,1);
   //delet the pet from the html
   $('#'+petId).remove();
}

function searchpet(){
    //add the search input, and the search button 
    //get the value from the input 
    var ss=$('#searchPet').val();
    /// change the css to display the results
    salon.pets.forEach(aPet=>{
        if(aPet.name.toLowerCase().includes(ss.toLowerCase())||
        aPet.service.toLowerCase().includes(ss.toLowerCase())
        ){
        $('#'+aPet.id).addClass('active');
    }else{
       $('#'+aPet.id).removeClass('active');
    }
    });                                                            
} 
function init(){
    console.log("executed");
    var pet1 = new pets("scooby",50,"male","dog","dane","hair","shaggy","555-555-5555");
    var pet2 = new pets("scrappy",50,"male","dog","mixed","full","shaggy","555-555-5555");
    var pet3 = new pets("tweety",70,"male","bird","canarian","nails","bugs bunny","888-888-8888",);
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3);
   ///displayTable(pet1);
    ///displayTable(pet2);
    ///displayTable(pet3);
    display();

    $('#register-btn').on('click',register);
    $('#search-btn').on('click',searchpet);
}

window.onload=init;

const counter = documnet.querySelectorAll('.counter');

counter.forEach(counter=>{
    const updateCount = () =>{
        const target = counter.getAttribute('petType');
        const count = +counter.innerText;
        
        const inc = tar 
    }
    
})