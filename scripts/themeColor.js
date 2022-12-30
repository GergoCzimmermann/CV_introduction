console.log("The page has been loaded succesfully")

let theme = localStorage.getItem('theme');

if(theme == null){
    console.log("First theme setting")
    setTheme('bright');
}else{
    setTheme(theme);
    console.log("Basic theme setting from Local storage")
}

let themeOptions = document.getElementsByClassName('themeMode');

for (i=0; themeOptions.length>i ; i++){
    themeOptions[i].addEventListener ('click', function(){
        let mode = this.dataset.mode;
        console.log('Theme set: ', mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    switch (mode) {
        case "bright": document.getElementById('theme-style').href = "./styles/style.css"; break;
        case "dark": document.getElementById('theme-style').href = "./styles/darkTheme.css"; break;
    }
    
    localStorage.setItem('theme', mode)
}