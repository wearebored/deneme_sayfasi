function Navbar(bar){
   return (
     <li>
       <a href={bar.veri}>
         <div>{bar.veri}</div>
       </a>
     </li>
   );
}
export default Navbar