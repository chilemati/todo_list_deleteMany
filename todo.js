let body = document.querySelector('.body');
let navH1 = document.querySelector('.nav h1');
let sele = document.querySelector('.themes select');
// let check = document.querySelectorAll('.task input');

// ! functios

// ! diag function
let showDiag = ({ direction, title, message, duration, delay, comfirms }) =>
    new Promise((resolve, reject) => {
        // ! diag
    
        let diag = document.querySelector('.diag');
        let diagClose = document.querySelector('.diag button');
        let titu = document.querySelector('.diag .heading h1');
        let msg = document.querySelector('.diag .message h3');
        let ask = document.querySelector('.btn');

        // hide show buttons
        if (comfirms) {
            diagClose.style.display = 'none';
            ask.style.display = 'block';
        } else {
            diagClose.style.display = 'flex';
            ask.style.display = 'none';
            
        }
        // * confirm from user
        function getReply() {
              
            ask.addEventListener('click', (e) => {
                console.log(e.target.className);
                if (e.target.className === 'true') {
                    hideDiag();
                    resolve(true);
                } else if (e.target.className === 'false') {
                    hideDiag();
                    resolve(false);
                }
            })
        }
         getReply();

        // * show diag
        diag.style.transition = delay ? delay : '0.8s ease-in';
        diag.style.left = '30vw';
        titu.textContent = title ? title : 'notice';
        msg.textContent = message ? message : 'Successful!';
    
        // * hide diag
        function hideDiag() {
            diag.addEventListener('click', () => {
                diag.style.transition = delay ? delay : '0.8s ease-in';
                diag.style.left = direction ? direction : '100vw';
            
            });
        }

        !comfirms && diagClose.addEventListener('click', () => {
            hideDiag();
        });

        !comfirms && hideDiag();

        !comfirms && setTimeout(() => {
            // diagClose.addEventListener('click', () => {
            diag.style.transition = delay ? delay : '0.8s ease-in';
            diag.style.left = direction ? direction : '100vw';
            
            // })
        
        }, duration ? duration : 10000);
        // console.log(direction);

    });


// console.log(check);
// console.log(sele);
sele.addEventListener('change', (e) => {
    // console.log(sele.value);
    switch (sele.value) {
        case 'dark':
            // console.log('dark theme applied');
            body.classList.remove('brown');
            body.classList.remove('blue');
            body.classList.remove('white');
            body.classList.add('dark');
            // console.log(body.className);
            showDiag({
                direction: '150vw',
                message: 'Theme changed Successfully!',
                duration: '5000',
                title: 'Notification!!'
            });
            
            break;
            case 'blue':
                // console.log('blue theme applied');
                body.classList.remove('brown');
                body.classList.add('blue');
                body.classList.remove('white');
                body.classList.remove('dark');
                // console.log(body.className);
                navH1.style.color = 'white';
                showDiag({
                    direction: '150vw',
                    message: 'Theme changed Successfully!',
                    duration: '5000',
                    title: 'Notification!!'
                });
                
                
                break;
                case 'white':
                    // console.log('white theme applied');
                    navH1.style.color = 'blue';
                    body.classList.remove('brown');
                    body.classList.remove('blue');
                    body.classList.add('white');
                    body.classList.remove('dark');
                    // console.log(body.className);
                    showDiag({
                        direction: '150vw',
                        message: 'Theme changed Successfully!',
                        duration: '5000',
                        title: 'Notification!!'
                    });
                    
                    break;
                    case 'brown':
                        // console.log('brown theme applied');
                        body.classList.add('brown');
                        body.classList.remove('blue');
                        body.classList.remove('white');
                        body.classList.remove('dark');
                        // console.log(body.className);
                        navH1.style.color = 'white';
                        showDiag({
                            direction: '150vw',
                            message: 'Theme changed Successfully!',
                            duration: '5000',
                            title: 'Notification!'
                        });
                        
            break;
    }
});


// ! activate add task
function ini(a) {
    return a ? a : 3;
}
let form = document.querySelector('.addTask');
let addInp = document.querySelector('.addTask input');
let L = 3;
let check = document.querySelector('.tasks ol');
let count = document.querySelector('.count');
let checked = 0, deno = CurrentLi();
let delMarked = [];

function CurrentLi() {
    let currLi = document.querySelectorAll('.tasks li');
    // console.log('currnet li is : ', currLi.length);
    return currLi.length;
}

// CurrentLi();


form.addEventListener('submit', (e) => {
    e.preventDefault(e);
    //* create elements
    let newLi = document.createElement('li');
    let newSpan1 = document.createElement('span');
    let newSpan11 = document.createElement('span');
    let newInp = document.createElement('input');
    let newSpan2 = document.createElement('span');
    let newSpan2a = document.createElement('span');
    let newSpan2b = document.createElement('span');
    //* add attributes
    L = ++L;
    newLi.setAttribute('id', `L${L}`);
    newSpan1.classList.add('task');
    newSpan11.classList.add('text');
    newInp.setAttribute('type', 'checkbox');
    newSpan2a.classList.add('date');
    newSpan2b.classList.add('delete');

    //* add values
    newSpan11.textContent = addInp.value;
    newSpan2a.textContent = getDT();
    newSpan2b.textContent = 'Delete';

    //* rearrange
    newSpan1.appendChild(newInp);
    newSpan1.appendChild(newSpan11);
    newSpan2.appendChild(newSpan2a);
    newSpan2.appendChild(newSpan2b);
    newLi.appendChild(newSpan1);
    newLi.appendChild(newSpan2);
    ol.appendChild(newLi);
    form.reset();
    showDiag({
        direction: '150vw',
        message: 'Task Add Successfully!!',
        duration: '3000',
        title: 'Notification!!',                                     
    })
    deno += 1
    // checked = 0;
    count.textContent = `${checked} / ${deno}`;

})

// ! checkbox
count.textContent = `${checked} / ${deno}`;
let rese = false;

    check.addEventListener('click', (e) => {
        // console.log(e.target.type);
        // count.textContent = `${checked} / ${deno}`;
        if (rese) {
            // deno = deno - checked;
            checked = 0;
            rese = false;
        } 

        if (e.target.checked === true && e.target.type === 'checkbox') {
            checked += 1;
            console.log('befor checked: ', checked);
            count.textContent = `${checked} / ${deno}`;
            if (delMarked.includes(e.target.parentElement.parentElement.id) !== true) {
                delMarked.push(e.target.parentElement.parentElement.id);
            }
            // console.log(delMarked);
        } else if(e.target.checked === false && e.target.type === 'checkbox') {
            checked -= 1;
            console.log('after checked: ', checked);
            count.textContent = `${checked} / ${deno}`;
            if (delMarked.includes(e.target.parentElement.parentElement.id) === true) {
                // delMarked.push(e.target.parentElement.parentElement.id);
                delete delMarked[delMarked.indexOf(e.target.parentElement.parentElement.id)];
            }
            // console.log(delMarked);
            console.log(delMarked);
            
        }
    })

let del = document.querySelector('.delMarked');
let c = 0;
del.addEventListener('click', (e) => {
    delMarked.forEach(x => {
        // console.log(x);
        let hideLi = document.querySelector(`#${x}`);
        (async () => {
             await showDiag({
             direction: '150vw',
             message: 'Do you really want to delete these Task?',
             duration: '5000',
             title: 'Notification!!',
             comfirms: true,
                                     
             }).then(res => {
                 if (res === true) {
                     hideLi.style.display = 'none';
                     console.log(`checke is: ${checked}, 
delMaked is: ${delMarked.length},  L is: ${L}, deno is: ${deno}`);
                    //  checked = checked - checked;
                    //  deno = checked - delMarked.length;
                    //  checked = 0;
                    rese = true;
                    if (rese) {
                        console.log('c is: ', c);
                        if(c <= 1) {
                            deno = CurrentLi() - checked;
                            
                        } else {
                            deno = deno - checked;
                            
                        }
                        c++;
                    }
                    count.textContent = `${checked - checked} / ${deno}`;
                     delMarked = [];
                     
                 }
               
             }).catch(err => {
               
           })
        })();
    })
});

// CurrentLi();
 
// add date and time to tasks

function getDT() {
    let d = new Date();
    return `${d.toTimeString().split(' ')[0]} / ${d.toDateString()}`;
}

console.log(getDT());



// ! activate the delete button
let ol = document.querySelector('.tasks ol');
// console.log(ol);
ol.addEventListener('click', (e) => {
    // console.log(e.target.className);
    if (e.target.className === 'delete') {
        // console.log(e.target.parentElement.parentElement);
        let paLi = e.target.parentElement.parentElement;
        (async () => {
           await showDiag({
             direction: '150vw',
             message: 'Do you really want to delete this Task?',
             duration: '5000',
             title: 'Notification!!',
             comfirms: true,
                                     
           }).then(res => {
               res ? paLi.style.display = 'none' : " ";
               res ? deno-- : " ";
               res ? checked-- : " ";
               count.textContent = `${checked - checked} / ${deno}`;
               
           }).catch(err => {
                
            })
            
        })();
    }

})

// promise function text
// let myPromise =  async (a) => new Promise( (resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('foo');
//     // }, 10000);
//     if (!isNaN(a)) {
//         let pow = a ** a;
//         setTimeout( () => {
//           resolve(pow);
            
//         }, 5000);
            
//     } else {
//         // throw Error('a error occured');
//         reject(`${a} is not a number`);
//     }
// });

// (async () => {
//     await myPromise(3).then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     })
//     console.log('after promise');
// })();


//? activat the search bar
let searchInput = document.querySelector('.search input');
let allTask = document.querySelectorAll('.tasks li');
// console.log(allTask);
searchInput.addEventListener('keyup', (e) => {
    let inp = searchInput.value;
    let lowerInp = inp.toLowerCase();

    allTask.forEach(x => {
        let text = x.firstElementChild.textContent;
        let lowerText = text.toLowerCase();

        if (lowerText.indexOf(lowerInp) !== -1) {
            // console.log(x);
            x.style.display = 'flex';
        } else {
            // console.log(x);
            x.style.display = 'none';
        }
    })
})

