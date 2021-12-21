let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
let is_shop_open= true; 
let order = ( time, work ) => {

  return new Promise( ( resolve, reject )=>{

    if( is_shop_open ){

      setTimeout(()=>{

       // work is 👇 getting done here
        resolve( work() )

// Setting 👇 time here for 1 work
       }, time)

    }

    else{
      reject( console.log("Our shop is closed") )
    }

  })
}
function work (){
  console.log("Algo que tengo que hacer después de 4 segundos.");
  console.log(`${stocks.Fruits[0]} was selected`);
}

let sepa= order(4000,work);