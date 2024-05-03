export const postRequest = (payload: any) => {  
  console.log(payload, 'pau;ad')  
    return {
        method : 'POST',
        headers : {
          'Content-Type' : "application/json"
        },
        body: JSON.stringify(payload),
        };    
}