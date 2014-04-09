var Teams = [{
    "member1": "ALPER YILDIRIM", 
    "email1": "a.yildrim@jacobs-university.de",
    "member2": "Burhan Senyener",
    "email2": "b.senyener@jacobs-university.de",
    "name": "Losers",
    "scores": []
},{
    "member1": "Nikola Yuliyanov Gyurchev", 
    "email1": "n.gyurchev@jacobs-university.de",
    "member2": "Nikola Mollov",
    "email2": "n.mollov@jacobs-university.de",
    "scores": []
},{
    "member1": "Prabal Poudel", 
    "email1": "p.poudel@jacobs-university.de",
    "member2": "Shishir Gautam",
    "email2": "sh.gautam@jacobs-university.de",
    "name": "Fuss Fuss",
    "scores": []
},{
    "member1": "Bishesh Tiwaree", 
    "email1": "b.tiwaree@jacobs-university.de",
    "member2": "Joshan Chaudhary",
    "email2": "j.chaudhary@jacobs-university.de",
    "scores": []
},{
    "member1": "Saad Saeed", 
    "email1": "s.saeed@jacobs-university.de",
    "member2": "Sardar Imran",
    "email2": "s.bali@jacobs-university.de",
    "name": "Mighty Muffin Arrangers",
    "scores": []
},{
    "member1": "Deyan Ginev", 
    "email1": "d.ginev@jacobs-university.de",
    "member2": "Corneliu Prodescu",
    "email2": "c.prodescu@jacobs-university.de",
    "name": 'DROP TABLE "on foot";',
    "scores": []
},{
    "member1": "Nikolche Kolev",
    "email1": "n.kolev@jacobs-university.de",
    "member2": "Mengistie,Andinet",
    "email2": "gurgibahir@yahoo.com",
    "scores": []
},{
    "member1": "Emanuel Stiuler",
    "email1": "e.stiuler@jacobs-university.de",
    "member2": "Mauricio R",
    "email2": "d.reichenbachs@jacobs-university.de",
    "scores": []
},{
    "member1": "Bogomil Paralchev",
    "email1": "b.paralchev@jacobs-university.de",
    "member2": "Romina Nikolova",
    "email2": "r.nikolova@jacobs-university.de",
    "name": "The Piglets",
    "scores": []
},{
    "member1": "Georgi Gyurchev",
    "email1": "g.gyurchev@jacobs-university.de",
    "member2": "Hristo Tsankov",
    "email2": "h.tsankov@jacobs-university.de",
    "scores": []
},{
    "member1": "Utkrist Adhikari",
    "email1": "u.adhikari@jacobs-university.de",
    "member2": "Hassaan Farooq",
    "email2": "mu.farooq@jacobs-university.de",
    "scores": []
},{
    "member1": "Robert Hein",
    "email1": "r.hein@jacobs-university.de",
    "member2": "Nina Krüger",
    "email2": "n.krueger@jacobs-university.de",
    "scores": []
},{
    "member1": "Yonathan Mengesha",
    "email1": "y.mengesha@jacobs-university.de",
    "member2": "Michael Mekonnen",
    "email2": "m.mekonnen@jacobs-university.de",
    "name": "Ghetto FussBallerz",
    "scores": []
}];


// Random permutation generator for 10 in python
// A = range(10)
// random.shuffle(A)
// A
var randPerm = [3, 6, 4, 10, 0, 11, 1, 7, 8, 12, 2, 5, 9];

var NextGames = [2,1,4,3,6,5,0,9,8,0,12,11,0];

// Game State
var lines = [
    [1,2,3,4,5,6,7,0,8,9,10,0,11,12,13,0,
        0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0],
    [0,0,0,0,
        0,0,0,0],
    [   0,0,0,0],
    [0,0,
        0,0],
    [   0,0],
    [0,0],
    [0]
    ];
