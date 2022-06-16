const key='752d4e018aa39896778f4c94f5a4b673';
// const baseURL='https://api.openweathermap.org/data/2.5/weather?q=kohalpur&appid=752d4e018aa39896778f4c94f5a4b673'
// fetch(baseURL)
// .then(async(data)=>{console.log('response',await data.json())})  
// .catch((error)=>{
//     console.log(error);
// })  
const requestCity= async(city)=>{
    const baseURL='https://api.openweathermap.org/data/2.5/weather';
    const query=`?q= ${city}&appid=${key}`;
// make fetch call and promise call
const response= await fetch(baseURL + query);
// promise data
const data=await response.json();
return data;

    

}


