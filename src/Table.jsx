import react from 'react';

function Table() {
return <table border="1"> 
       <tr> 
          <td colspan="3"><input type="text" id="result"/></td> 
          <td><input type="button" value="c" ></input></td> 
       </tr> 
       <tr> 
          <td><input type="button" value="1" /> </td> 
          <td><input type="button" value="2" /> </td> 
          <td><input type="button" value="3" /> </td> 
          <td><input type="button" value="/" /> </td> 
       </tr> 
       <tr> 
          <td><input type="button" value="4" /> </td> 
          <td><input type="button" value="5" /> </td> 
          <td><input type="button" value="6" /> </td> 
          <td><input type="button" value="-" /> </td> 
       </tr> 
       <tr> 
          <td><input type="button" value="7" /> </td> 
          <td><input type="button" value="8" /> </td> 
          <td><input type="button" value="9" /> </td> 
          <td><input type="button" value="+" /> </td> 
       </tr> 
       <tr> 
          <td><input type="button" value="." /> </td> 
          <td><input type="button" value="0" /> </td> 
          <td><input type="button" value="=" /> </td> 
          <td><input type="button" value="*" /> </td> 
       </tr> 
    </table>
}
export default Table;
