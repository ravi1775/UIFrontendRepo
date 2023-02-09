function myFunction() {
   let str;
 try{
    let x = 54;
    let y = 22;
    let z = 'Hello'

   if(y < x)  str = 'y is small.';
   if(typeof(z) === 'string')  str = 'z is a string';
   throw str;
    
 }catch(error){
   console.log(error);
 }
 finally{
    console.log('need to be executed')
 }

}
myFunction();


