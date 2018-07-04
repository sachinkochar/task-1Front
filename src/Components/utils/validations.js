export const emailValidate=(email)=>{
	
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

export const phoneValidate=(phone)=>{
	
    var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return re.test(String(phone).toLowerCase());

}

export const zipValidate=(zip)=>{
	
    var re =/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return re.test(String(zip).toLowerCase());

}

