'use strict';

function BinarioADecimal(num) {
   let j=0;
   let m=0;
   let i=0;
      for (let index = num.toString().length; index > 0; index--) { 
                
                m= parseInt(num.toString()[index-1]);
                j+=m*2**i
                i++;             
      } 
      return j;
}

function DecimalABinario(num) {
   let k=num;
   let i =0;
   let res=100;
  for (let index = 0; index < 100; index++) {
    if(res==1){
      k=k/2;
      res=k;
    }
  }

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

