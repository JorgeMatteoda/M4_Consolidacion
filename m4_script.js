/*   for (let i = 1; i <= 5; i++) {
    const url = `https://swapi.dev/api/people/${i}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const name = data.name;
        const height = data.height;
        const mass = data.mass;
  
        document.getElementById(`name${i}`).textContent = name;
        document.getElementById(`height${i}`).textContent = height;
        document.getElementById(`mass${i}`).textContent = mass;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  } */
  

  //CONEXION A API
  function* fetchPeopleData() {
    for (let i = 1; i <= 15; i++) {
      const url = `https://swapi.dev/api/people/${i}`;
  
      yield fetch(url)
        .then(response => response.json())
        .then(data => {
          const name = data.name;
          const height = data.height;
          const mass = data.mass;
  
          document.getElementById(`name${i}`).textContent = name;
          document.getElementById(`height${i}`).textContent = height;
          document.getElementById(`mass${i}`).textContent = mass;
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }
  
  const generator = fetchPeopleData();
  
  function executeGenerator() {
    const result = generator.next();
  
    if (!result.done) {
      result.value.then(() => {
        executeGenerator();
      });
    }
  }
  
  executeGenerator();


  //EVENTOS JQUERY
/*   $(document).ready(function() {
    $("#jamasOculto").mouseenter(function() {
      $("#aparece").show();
    });
  
    $("#jamasOculto").mouseleave(function() {
      $("#aparece").hide();
    });
  
    // Ocultar secciones con id=aparece por defecto
    $("#aparece").hide();
  });
   */

 /*  $(document).ready(function() {
    $(".jamasOculto").hover(
        function() {
            $(".aparece").show();
        },
        function() {
            $(".aparece").hide();
        }
    );
});
   */

$(document).ready(function() {
  $(".jamasOculto1").hover(
      function() {
          $(".aparece1").show();
      },
      function() {
          $(".aparece1").hide();
      }
  );
});

$(document).ready(function() {
  $(".jamasOculto2").hover(
      function() {
          $(".aparece2").show();
      },
      function() {
          $(".aparece2").hide();
      }
  );
});

$(document).ready(function() {
  $(".jamasOculto3").hover(
      function() {
          $(".aparece3").show();
      },
      function() {
          $(".aparece3").hide();
      }
  );
});