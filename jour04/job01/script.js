document.getElementById("button").addEventListener("click", function() {
  
    fetch('expression.txt')
      .then(response => {
       
        return response.text();
      })
      .then(text => {
        document.getElementById('expression').textContent = text;
      })
      
  });
  