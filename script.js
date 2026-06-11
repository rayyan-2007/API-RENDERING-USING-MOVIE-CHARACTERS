const container = document.querySelector(".card-container");

const loading = document.querySelector(".load");
//console.log(container);

async function fetchData() {
    try{
         loading.innerHTML = "Loading...."
        const response = await fetch("https://thronesapi.com/api/v2/Characters",
        );
        //console.log(response);
        const objectData = await response.json();
        //console.log(objectData);
        displayData(objectData);

    }
    catch(error){
      console.log(error);
    }
    finally{
          loading.innerHTML= "";

    }
}

fetchData();

function displayData(data){
   data.slice(0,10).forEach((Characters) => {
     const card = document.createElement("div");
     //Now CSS for .card will apply
     card.classList.add("card");

     card.innerHTML = `
         <img src="${Characters.imageUrl}" alt="${Characters.fullName}">
          <p>Full Name: ${Characters.fullName}</p>
           <p>Title: ${Characters.title}</p>
           <p>Family: ${Characters.family}</p>
           <p>ID:${Characters.id}</p>`;
     container.appendChild(card);
   });
     
}



