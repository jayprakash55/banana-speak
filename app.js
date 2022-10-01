var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error)
{
   console.log("error occured", error);
   alert("Something wrong with server! try after some time");
}

function getTranslationURL(text)
{
 return serverURL + "?" + "text= " +  text;
}

function clickHandler()
{
   var inputText = textInput.value;
   
   fetch(getTranslationURL(textInput))
   .then(response => response.json())
   .then(json => {
                 var translatedText = json.contents.translated;
                 outputDiv.innerText = translatedText;
   })
   .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)

