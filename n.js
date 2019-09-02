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

var result = .reduce(function (final, suspect, currentIndex, arr){
    suspect.rooms.forEach(function (room) {
        // let keys = Object.keys(room);
        // keys.forEach(function (key){
        //     if (total.length === 0) {
        //         total.push(key)
        //     }else {
        //         if
        //     }
            // total.forEach(function(ele){
            //     console.log(ele !== key)
            //     if(room[key]=== false && ele!==key){
            //         total.push(key)
            //     }
            // });
                
            
            // total.forEach(function (key2){
            //     if(room[key] === false && room[key2] === false) {
            //         total.push(key);
            //     }
            // });
            
        //});
    });
    return total;
}, []);
