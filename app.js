let randomObjArray = [
    {
        name: 'Srijan',
        img: 'images/me.jfif',
        jobDescription: 'developer',
        desc: 'An Undergraduate in CSE, B.Tech student of SSIPMT raipur'
    },
    {
        name: 'C++',
        img: 'images/cpp.jpg',
        jobDescription: ' Programming Language',
        desc: 'best for competitive coding'
    },
    {
        name: 'JS',
        img: 'images/js.png',
        jobDescription: ' MultiParadigm Language',
        desc: 'Most loved language'
    },
    {
        name: 'Github',
        img: 'images/github.png',
        jobDescription: ' Developer\'s choice',
        desc: 'best repository collection used nowdays'
    },
    {
        name: 'vscode',
        img: 'images/vscode.png',
        jobDescription: ' Development tool',
        desc: 'best lightweight text editor'
    },
];

let nam = document.getElementById('name');
let jobTitle = document.getElementById('jobtitle');
let desc = document.getElementById('desc');
let img = document.getElementById('img').getElementsByTagName('img');
let leftChevron = document.getElementById('leftChevron');
let rightChevron = document.getElementById('rightChevron');
let id = 0;
let individual;

function show() {
    individual = randomObjArray[id];
    nam.innerHTML = individual.name;
    jobTitle.innerHTML = individual.jobDescription;
    desc.innerHTML = individual.desc;
    img[0].src = individual.img;
}
function rand() {
    show();
    id++;
    if (randomObjArray.length == id) {
        id = 0;
    }
    leftChevron.addEventListener('click', () => {
        console.log('press');
        if (id == 0) {
            id = randomObjArray.length;
        }
        id--;
        show();
    });
    rightChevron.addEventListener('click', () => {
        console.log(randomObjArray.length, ' ', id);
        if (randomObjArray.length == id) {
            id = 0;
        }
        show();
        id++;
    });
}
// rand();
setInterval(rand, 2500);