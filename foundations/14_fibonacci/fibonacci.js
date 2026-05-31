const fibonacci = function(n) {
   let a=0;b=1;
   let sum1=0;
   n1=Number(n)
   if(n<0||(n1===NaN))
   {
      return('OOPS')
   }

   if(n==0)
   {
      return(0)
   }
   else if(n==1)
   {
      return(1)
   }
   else
   {
      for(i=1;i<n;++i)
      {
         sum1=a+b;
         a=b;
         b=sum1;
      }
   }
   return(sum1)
}

// Do not edit below this line
module.exports = fibonacci;
