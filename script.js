const btnMicroEncounters_less_danger = document.querySelector('#btn-micro-encounters-less-danger');
const btnMicroEncounters_default = document.querySelector('#btn-micro-encounters-default');
const btnMicroEncounters_more_danger = document.querySelector('#btn-micro-encounters-more-danger');
const displayMicroEncounters_result = document.querySelector('#display-micro-encounters-result');

const events = [
    {roll: 1, m_event: "immediate danger"},
    {roll: 2, m_event: "active threat ahead / advancing"},
    {roll: 3, m_event: "obstacle, hazard or block ahead"},
    {roll: 4, m_event: "neutral / uncertain"},
    {roll: 5, m_event: "opportunity, clue, information"},
    {roll: 6, m_event: "immediate fortune"}
];

const focuses = [
    {roll: 1, focus: "environment or theme"},
    {roll: 2, focus: "environment or theme"},
    {roll: 3, focus: "NPCs, Creatures, or other lifeforms"},
    {roll: 4, focus: "NPCs, Creatures, or other lifeforms"},
    {roll: 5, focus: "props, objects, constructs, etc."},
    {roll: 6, focus: "props, objects, constructs, etc."}
];

// Not finished!
const objTropes = {
    "The Leader": "You're good at bringing people together and identifying their strengths and weaknesses. You add +2 instead of +1 when you help someone by telling them what you think one of their strengths is.",
    "The Techie": "You have a ham radio, extra walkie-talkies, a camera, or maybe even a computer. When you use a piece of tech to do something you couldn't do otherwise, add +1 to your roll."
}

const listSubjectKnowledge = [
    "animals",
    "art (calligraphy, drawing, origami, modelling, painting, sculpture)",
    "circus",
    "coin collecting",
    "computers",
    "crime",
    "culture / etiquette / manners / society",
    "DIY",
    "electronics / robotics",
    "farming",
    "fashion / beauty / design",
    "first aid / medicine",
    "food / drink / cooking",
    "games (board, card, puzzle, etc.)",
    "geography / geology",
    "history(ancient, modern)",
    "jewelry",
    "languages",
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


const imgDiceD6 = document.querySelector("#img-dice-d6");
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

    const found_event = events.find(m => m.roll === micro_event);
    const found_focus = focuses.find(f => f.roll === micro_focus);
    displayMicroEncounters_result.innerHTML = `
        ${found_event.roll}, ${found_event.m_event}
        <br>${found_focus.roll}, ${found_focus.focus}
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

const btnGetSubjectKnowledge = document.querySelector('#btn-get-subject-knowledge');
const displaySubjectKnowledge = document.querySelector('#display-subject-knowledge');

btnGetSubjectKnowledge.addEventListener('click', () => {
    const index = Math.floor(Math.random() * listSubjectKnowledge.length);
    const subjectKnowledge = listSubjectKnowledge[index];

    displaySubjectKnowledge.innerHTML = subjectKnowledge;
});