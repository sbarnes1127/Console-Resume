var name = "Sierra Barnes";
var upName = name.toUpperCase();


console.log ("Name: " + upName);
console.log ("Career: Full Time Covalence student");
console.log ("Description: I apologize if my code looks stupid, it is probably because I am stupid");
console.log('');
console.log("My Interests:");
console.log("* Youtube drama channels" );
console.log("* True Crime");
console.log("* Funny Tik Tok videos");
console.log("* Vine Compilations");
console.log('');

let companies = ['Kentucky Fried Chicken', 'Zaxbys']

let jobTitle = ['Shift Manager', 'Catering and Marketing Manager']

let description = ['Supervized the shift, counted money, recorded product inventory, ordered produce and protein trucks', 'Generated catering sales leads, tracked and distributed delivery orders to drivers, researched local community events, attended events to familiarize the community with the brand name']

let skills = [
    {
        skill: "Bowling",
        cool: false,
    },
    {
        skill: "Crying",
        cool: false,
    },
    {
        skill: "Talking with deep demon voice",
        cool: true,
    },
    {
        skill: "Great Kronk impression from Emporers New Groove",
        cool: true,
    }
]

function displayPosition(companies, jobTitle, description) {
    console.log("My Previous Experience:");
    for (i=0; i < companies.length; i++) {
        console.log("*" + jobTitle[i] + " at " + companies[i] + " - " + description[i]);
    }
    console.log("");
}

function displaySkills(skills) {
    console.log("SKILLS:");
    for (i = 0; i < skills.length; i++) {
        if (skills[i].cool == true) {
            console.log("  * BAM: " + skills[i].skill);
        } else {
            console.log(" * " + skills[i].skill);
        }
    }
    
}


displayPosition(companies, jobTitle, description);
displaySkills(skills);












