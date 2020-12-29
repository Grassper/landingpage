const { body } = document;

function background(number){
    let previousClass;
    // check background if already showing
    if(body.className){
        previousClass = body.className
    }
    // resetting body settings
    body.className=''
    // If background already on, turn off, else turn on background
    switch(number){
        case '1':
            previousClass === 'background1' ? false : body.classList.add("background1");
            break;
        case '2':
            previousClass === 'background2' ? false : body.classList.add("background2");
            break;
        case '3':
            previousClass === 'background3' ? false : body.classList.add("background3");
            break;
        default:
            break;
    }

}