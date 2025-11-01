interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    // hometown: 'Rivendell'
}

strider.hometown = 'Rivendell';

console.table(strider);