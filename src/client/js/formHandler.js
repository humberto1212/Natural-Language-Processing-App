const postData = async (url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 

    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
    }
 
 function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('name').value

  // UI update as result of the analysis
  const score = "(P+) Strong Positive | (P) Positive | (NEU) Neutral | (N) Negative | (N+) Strong Negative: ";
  const agree = "Agreement or Disagreement: ";
  const objective = "Objective or Subjective: ";
  const confidenceLevel = "Confidence: ", porcent = " %";
  const irony = "Nonironic or Ironic: ";
  if( Client.validURL(formText)) {
  postData('http://localhost:8081/api', {text: formText})
  .then(function(res) {
    document.getElementById('scoreTag').innerHTML = score + res.score_tag;
    document.getElementById('agreement').innerHTML = agree + res.agreement;
    document.getElementById('subjectivity').innerHTML = objective + res.subjectivity;
    document.getElementById('confidence').innerHTML = confidenceLevel + res.confidence + porcent;
    document.getElementById('irony').innerHTML = irony + res.irony;
  })
  }else{
    alert('Invalid Url')
  }
}

export {handleSubmit, postData};
