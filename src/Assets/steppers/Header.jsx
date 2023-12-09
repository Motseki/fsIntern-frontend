import React from "react";

function Header(props) {
    return (
        <div>

           <ul>
                <li className={  props.step === 1 ? `active` : ``}><span><i className="material-icons-outlined">account_circle</i> 
                </span><p>Personal information {  <i className="material-icons ic">check</i>}</p> </li>         
       
            <li className={ props.step === 2 ? `active` : `` }><span><i className="material-icons-outlined">payment</i> 
            </span><p>ID information  {  <i className="material-icons ic">check</i>}</p> </li>
       
                <li className={ props.step === 3 ? `active` : `` } ><span><i className="material-icons-outlined">text_snippet</i> </span>
                <p>Preview  { <i className="material-icons ic">check</i>}</p> </li>
        </ul>
           
        </div>
    )
}

export default Header;