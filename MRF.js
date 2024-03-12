// //1.Get all the countries from Asia continent /region using Filter function
 const xhr = new XMLHttpRequest();

 xhr.open("GET","https://restcountries.com/v3.1/all");
 xhr.responseType="json";
xhr.onload = function(){
     const data = (xhr.response);
     data.filter((result) => { 
         if(result.continents[0] === "Asia") {
           //  console.log(result.name.common)
         }
     })
     };

  xhr.send();



//2.Get all the countries with a population of less than 2 lakhs using Filter function

 const xkl=new XMLHttpRequest();
xkl.open("GET","https://restcountries.com/v3.1/all");
xkl.responseType="json"
xkl.onload=function(){
    let received=xkl.response;
    received.filter((result,index)=>{
        if(result.population>200000){
          //  console.log(result.population)
        }
        
        });

    }
xkl.send();


//3.Print the following details name, capital, flag, using forEach function

const details=new XMLHttpRequest();
details.open("GET","https://restcountries.com/v3.1/all");
details.responseType="json";
details.onload=function(){
  let a= details.response;
    a.forEach((result,index) =>{
       //console.log(result.name.common,result.capital,result.flag,index)
    });
    
}
details.send();


//4.Print the total population of countries using reduce function


     const xml = new XMLHttpRequest();
     xml.open("GET", "https://restcountries.com/v3.1/all");
     xml.responseType = "json"
     xml.onload = function()  {
         let total=xml.response;
         total.filter((value)=>{
            
          // console.log("countryName:",value.name.common,"totalPopulation:",value.population)
                      
             })
        
        
         }
     xml.send();
 //5.Print the country that uses US dollars as currency.

const Dollar = new XMLHttpRequest();
Dollar.open("GET","https://restcountries.com/v3.1/all");
Dollar.responseType="json";

Dollar.onload = function(){
    const current = Dollar.response;
    current.filter((result) => { 
     const res = result.currencies;
     const finalRes = res.USD;
     if(finalRes) {
      //console.log(result);
     }
    })
}
   
Dollar.send();
        
    
 
 



