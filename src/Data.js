 export const API_KEY = 'AIzaSyAlw_MD559NMrccZK8MR_xD_ovgBcWwpyE';

  export const value_converter = (value) =>{
    if(value>=1000000)
        {
            return Math.floor(value/1000000) + "M";
        }
    else if(value>=1000)
        {
            return Math.floor(value/1000) + "K";
        }
    else
        {
            return value;
        }
 }