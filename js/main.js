const API='CC1jch5VZgjcP8-CLowEBgEL7cg';

const ROOT=`http://www.cleverbot.com/getreply?key=${API}`;
//http://www.cleverbot.com/getreply?key=CC1jch5VZgjcP8-CLowEBgEL7cg&input=lol

var headers = {
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			};


var audio = document.getElementById('audio');



$(document).ready(()=>{
  $('#searchForm').on('submit',(e)=>
  {

  let searchText=$('#searchText').val();
    console.log("User : "+searchText);
  getCity(searchText);
searchForm.reset();
  e.preventDefault();

let output1=`<h2 style="color:black;text-align:right"> ${searchText}</h2>`;
let x='<p></p>'
	  $('#details1').html(output1);
  $('#details2').html(x);
  });
});



function getCity(searchText)
{
  const CITY=searchText;
const url=`${ROOT}&input=${searchText}`;

axios.get(url)


  .then((response)=>{


     console.log(response);
     //console.log("User : "+response.data.filtered_input);
		 console.log("User : "+searchText);

      console.log("ChatBot : "+response.data.clever_output);

      //let temp=response.data.main.temp;

        //output=`<h3>Temperature in ${response.data.name} is ${temp}</h3>`;

        let output2=`

         <h4>ChatBot :</h4><h2 style="color:red"> ${response.data.clever_output}</h2>


                `;







            $('#details2').html(output2);


  })

.catch((err)=>
{
  console.log("error block chala");
  console.log(err);
});

}
