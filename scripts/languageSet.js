let language = localStorage.getItem('language');

if(language == null){
    console.log("First language settings")
    setLanguage('hungarian');
}
else
{
    setLanguage(language);
    console.log("Basic language setting from Local storage")
}

let languagesettings = document.getElementsByClassName('languageSet');

for (i=0; languagesettings.length>i ; i++){
    languagesettings[i].addEventListener ('click', function(){
        let languageType = this.dataset.mode;
        console.log('The following language has been set: ', languageType);
        setLanguage(languageType);
    })
}

function setLanguage(languageType){
    switch (languageType) {
        case "hungarian": document.getElementById('language-style').href = "./styles/languageHun.css"; break;
        case "english": document.getElementById('language-style').href = "./styles/languageEn.css"; break;
    }
    
    localStorage.setItem('language', languageType)
}