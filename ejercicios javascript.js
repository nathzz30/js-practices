const users = [
  ["Jean Carlos", "Conde Nast", "JavaScript"],
  ["Mario", "Intranet", "Python"],
  ["Cesar", "LegalTek", "JavaScript"],
  ["Juan Carlos", "Intranet", "JavaScript"],
  ["Stacy", "Intranet", "Python"]
];

const csvUsers = [
  ["Jean Carlos", "Conde Nast", "JavaScript"],
  ["Mario", "Intranet", "Python"],
  ["Cesar", "LegalTek", "JavaScript"],
  ["Juan Carlos", "Intranet", "JavaScript"],
  ["Stacy", "Intranet", "Python"],
  ["Carolina", "Intranet", "FireFighter"],
  ["Catherine", "LegalTek", "FireFighter"]
];


const diffUser = [
    ["Carolina", "Intranet", "FireFighter"],
    ["Catherine", "LegalTek", "FireFighter"]
  ];

  function isThere(element, arr) {
    for(let i=0; i<arr.lenght;i++){
        if(element === arr[i][0]){
            return true;
        }
    }
    return false;
  }

var diffUser =  csvUsers.filter(function(user){
    if(isThere(user[0], users)== false){
      return user
          }
     
    
    })

var diffUser =  csvUsers.filter(function(user){
    var elementIsThere ;
    users.forEach(function(user2){
        if(user2[0]===user[0]){
            elementIsThere = true;
        }
    });
        return !elementIsThere;
        
})

var diffUser =  csvUsers.filter(function(user){
    return !users.filter(function(user2){
        return user2[0]===user[0];
    }).length
})

var diffUser =  csvUsers.filter(function([user]){
    return !users.filter(function([user2]){
        return user === user2;
    }).length
})

let hola = {
    gg: 5
}

function prueba({ gg }, i) {
    return 5 + gg+i;
}

prueba(hola, 8);


const usersNew = [
    [{ name: "Jean Carlos",  project: "Conde Nast" }, { name: "Jose", project: "LegalTek" }],
    [{ name: "Mario", project: "Intranet" }],
    [{ name: "Cesar", project: "LegalTek" }],
    [{ name: "Juan Carlos", project: "Intranet" }],
    [{ name: "Stacy", project: "Intranet" }]
  ];
  
const usersResult = [
    { name: "Jean Carlos",  project: "Conde Nast" },
    { name: "Jose", project: "LegalTek" },
    { name: "Mario", project: "Intranet" },
    { name: "Cesar", project: "LegalTek" },
    { name: "Juan Carlos", project: "Intranet" },
    { name: "Stacy", project: "Intranet" }
  ];

var userResult = [];

usersNew.forEach(function(ele){
        userResult.push(...ele);
    });



const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let finalSuspects = videoData.filter(function(obj){
    return obj.present===true;
});

finalSuspects = finalSuspects.map(function(suspect){
    return suspect.name;
});

function filterAndMap (arr, { filcond = () => true, mapCondition = (val) =>  val}){
    let result = [];
    for(let i=0; i<arr.length ; i++){
        if (filcond(arr[i])) {
            result.push(mapCondition(arr[i]));
        }
    }
    
     return result;    
}

var j = filterAndMap(videoData, {mapCondition: (val) => val.name} );

if (true) {
    var a = 5;
}

console.log(a)

//Figure out which room no one was in on the night of the murder

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

var result = newDevelopment.reduce(function (final, suspect){
    suspect.rooms.forEach(function (room) {
        if(room === false){
            final.push(room)
        }
    });
    return final;
}, []);

var emptysRooms = newDevelopment.map (function (suspect){
    return suspect.rooms.reduce(function (result, room, currentIndex, arr){
            let keys = Object.keys(room);
            keys.forEach(function (key){
                if(room[key]=== false){
                    result.push(key);
                }
            });
        return result;
    }, []);
});

// (4) [Array(3), Array(4), Array(4), Array(4)]
// 0: (3) ["kitchen", "ballroom", "billiard room"]
// 1: (4) ["ballroom", "conservatory", "dining room", "library"]
// 2: (4) ["kitchen", "ballroom", "dining room", "library"]
// 3: (4) ["ballroom", "conservatory", "billiard room", "library"]
// length: 4
// __proto__: Array(0

var emptyRoom = _.intersection(...emptysRooms);

//Usando el diccionario 
//Quiero que hagas un metodo recursivo que sume el length de todos los arrays dentro de el

Ejemplo:
dicc = {
     "hola": [1],
     "adios": [1, 23]
}
*==> 3*

things = {
    "people": ["Juan", "Jose", "Pedro"],
    "cars": {
      "red": {
        "faster": {
          "pretty": [2],
          "ugly": [5, 5, 5, 5, 5, 5, 5]
        },
        "slower": [4, 5, 5]
      },
      "blue": [4, 5, 6, 7]
    }
  }

t = {
    "faster": {
        "pretty": [2],
        "ugly": [5, 5, 5, 5, 5, 5, 5]
    }
}


function finalLength (obj) {
    let result = 0;
    if(Array.isArray(obj)){
         result = obj.length;
    }
    else {
        let values = Object.values(obj);
        values.forEach(function (value){
            result += finalLength(value);
        });
    }
    return result
}

function division(n1, n2){
    let r = 0;

    if(n2 <= n1) {
        r = 1 + division(n1-n2, n2);
    }

    return r;
}



// nica code 

things = {
  "people": ["Juan", "Jose", "Pedro"],
  "cars": {
    "red": {
      "faster": {
        "pretty": [2],
        "ugly": [5, 5, 5, 5, 5, 5, 5]
      },
      "slower": [4, 5, 5]
    },
    "blue": [4, 5, 6, 7]
  }
}

function isObject(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Object
}

const getDeepArrayLength = (json, acc = 0) => {
  const [ key ] = Object.keys(json)
  const value = json[key]

  // make recursion available (by popping off the current key/value)
  delete json[key]

  // base condition
  // this will return the acumulated value on the `acc` variable ;)
  if (!key) {
    return acc
  }

  // flatten current object with current value (only if it is an object)
  const recurse = isObject(value)
    ? {...json, ...value}
    : json

  if (Array.isArray(value)) {
    acc+=value.length
  }

  return getDeepArrayLength(recurse, acc)
}

console.log(getDeepArrayLength(Object.assign({}, things)))
