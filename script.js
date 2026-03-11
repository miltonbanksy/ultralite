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
]

function roll1d6() {
    return Math.floor(Math.random() * 6) +1;
};

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