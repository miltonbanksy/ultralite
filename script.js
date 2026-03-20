const btnMicroEncounters_less_danger = document.querySelector('#btn-micro-encounters-less-danger');
const btnMicroEncounters_default = document.querySelector('#btn-micro-encounters-default');
const btnMicroEncounters_more_danger = document.querySelector('#btn-micro-encounters-more-danger');
const displayMicroEncounters_result = document.querySelector('#display-micro-encounters-result');

const events = {
    1: "immediate misfortune",
    2: "threat (advancing or ahead), (mindless or intelligent)",
    3: "passive threat, obstacle, hazard, block, puzzle",
    4: "neutral / uncertain",
    5: "opportunity, clue, information",
    6: "immediate fortune"
};

const focuses = {
    1: "environment, atmosphere, landscape, terrain, or theme",
    2: "environment, atmosphere, landscape, terrain, or theme",
    3: "NPC(s), creatures(s), other lifeform(s)",
    4: "NPC(s), creatures(s), other lifeform(s)",
    5: "props, objects, constructs, etc.",
    6: "props, objects, constructs, etc."
};

// Not finished!
const objTropes = {
    "The Leader": "You're good at bringing people together and identifying their strengths and weaknesses. You add +2 instead of +1 when you help someone by telling them what you think one of their strengths is.",
    "The Techie": "You have a ham radio, extra walkie-talkies, a camera, or maybe even a computer. When you use a piece of tech to do something you couldn't do otherwise, add +1 to your roll.",
    "The Bookworm": "You're the smart one of your group, probably quiet, probably always with your nose in a book. Add +1 to any roll you make to do research or recall information about something.",
    "The Rebel": "You don't play by anyone's rules but your own. You're a troublemaker and you don't often play well with others. Add +1 to any roll you make to steal, trespass, sneak out of your house, or otherwise break a major rule.",
    "The Charmer": "You're a smooth-talker, possibly the class clown and probably a really good liar. Add +1 to any roll you make to lie, distract someone, or convince someone of something.",
    "The Athlete": "You're in good health and good shape and probably have a lot of energy. Add +1 to any rolls you make that require physical exertion, such as fighting or running away.",
    "The Scout": "You are a girl scout or boy scout, or maybe you've just read the books or been trained by someone else in survival skills. Add +1 to any rolls you make that have to do with surviving in the wild, such as starting a fire, scavenging for food, or following tracks",
    "The Baby": "You're the youngest or smallest of the group, probably someone's baby brother or sister. Add +1 when you ask an adult for help or resources, or when you try to squeeze into a place that isn't easily accessible.",
    "The Weirdo": "You don't have a lot of friends. Maybe you're new, or you just have a hard time getting along with other people, but the way your mind works is different somehow. Add +1 when you roll to see what's out of place, find strange things, or sense when something's wrong.",
    "The Freak": "You're something strange and unusual. Maybe you were born with special powers, or you're an escaped government experiment or an alien. Whatever you are, you have a weird ability, like telekinesis, telepathy, future-sight, or animal mind control. Work with your GM to determine what it is you can do that no one else can. When you use your special ability, add +1 to your roll."
};

const listSubjectKnowledge = [
    "animals",
    "art (calligraphy, drawing, origami, modelling, painting, sculpture)",
    "backyard wrestling",
    "circus",
    "coin collecting",
    "computers",
    "crime",
    "culture / etiquette / manners / society",
    "debating",
    "DIY",
    "dumpster diving",
    "electronics / robotics",
    "farming",
    "fashion / beauty / design",
    "first aid / medicine",
    "food / drink / cooking / preparation",
    "games (board, card, puzzle, etc.)",
    "geography / geology",
    "ghost hunting",
    "history(ancient, modern)",
    "home movies",
    "jewelry",
    "languages",
    "literature",
    "lock picking",
    "magic",
    "military",
    "movies",
    "music",
    "needlework (crocheting, embroidery, knitting, sewing)",
    "performance (acting, theater, improv, dancing, singing)",
    "photography",
    "plants / herbs / spices / gardening",
    "politics",
    "puppetry(mime, shadow)",
    "pyrotechnics / Fireworks",
    "religion",
    "science (biology, chemistry)",
    "scouting (camping, hiking, navigation)",
    "sports",
    "travel",
    "vehicles (mechanical)"
]

function roll1d6() {
    return Math.floor(Math.random() * 6) +1;
};


const listDynamicEvents = document.querySelector('#list-dynamic-events');
const listDynamicFocuses = document.querySelector('#list-dynamic-focuses');

function generate_dynamic_display(obj, element) {
    
    for (const [key, value] of Object.entries(obj)) {
        const bullet = document.createElement('div');
        bullet.innerHTML = `${key}: ${value}<br>`;
        element.appendChild(bullet);
    }
}

generate_dynamic_display(events, listDynamicEvents);
generate_dynamic_display(focuses, listDynamicFocuses);


const imgDiceD6 = document.querySelector("#img-dice-d6");
const imgDiceD10 = document.querySelector("#img-dice-d10");
const imgDiceD20 = document.querySelector("#img-dice-d20");
const displayDiceResult = document.querySelector("#display-dice-result");

// logic for dice...
imgDiceD6.addEventListener('click', () => {
    displayDiceResult.innerHTML = "";
    imgDiceD6.classList.toggle('rotated');
    setTimeout(() => {
        const d6 = Math.floor(Math.random() * 6) +1;
        displayDiceResult.innerHTML = `D6: ${d6}`;
    }, 800);
});

imgDiceD10.addEventListener('click', () => {
    displayDiceResult.innerHTML = "";
    imgDiceD10.classList.toggle('rotated');
    setTimeout(() => {
        const d10 = Math.floor(Math.random() * 10) +1;
        displayDiceResult.innerHTML = `D10: ${d10}`;
    }, 800);
});

imgDiceD20.addEventListener('click', () => {
    displayDiceResult.innerHTML = "";
    imgDiceD20.classList.toggle('rotated');
    setTimeout(() => {
        const d20 = Math.floor(Math.random() * 20) +1;
        displayDiceResult.innerHTML = `D20: ${d20}`;
    }, 800);
});

function generate_results(modifier) {
    micro_event = roll1d6() + modifier;

    if ( micro_event < 1 ) {
        micro_event = 1;
    }

    if ( micro_event > 6 ) {
        micro_event = 6;
    }

    micro_focus = roll1d6();

    const found_event = events[micro_event];
    const found_focus = focuses[micro_focus];

    displayMicroEncounters_result.innerHTML = `
        ${found_event}
        <br>${found_focus}
        `;
};

btnMicroEncounters_less_danger.addEventListener('click', () => {
    const modifier = 2;
    generate_results(modifier);
});

btnMicroEncounters_default.addEventListener('click', () => {
    const modifier = 0;
    generate_results(modifier);
});

btnMicroEncounters_more_danger.addEventListener('click', () => {
    const modifier = -2;
    generate_results(modifier);
});

// KIDS ON BIKES PBTA
const listDynamicTropes = document.querySelector('#list-dynamic-tropes');

const btnGetSubjectKnowledge = document.querySelector('#btn-get-subject-knowledge');
const displaySubjectKnowledge = document.querySelector('#display-subject-knowledge');

// Dynamically display tropes
for (const [key, value] of Object.entries(objTropes)) {
    const bullet = document.createElement('li');
    bullet.innerHTML = `<b>${key}</b>: ${value}`;
    listDynamicTropes.appendChild(bullet);
};

btnGetSubjectKnowledge.addEventListener('click', () => {
    const index = Math.floor(Math.random() * listSubjectKnowledge.length);
    const subjectKnowledge = listSubjectKnowledge[index];

    displaySubjectKnowledge.innerHTML = subjectKnowledge;
});