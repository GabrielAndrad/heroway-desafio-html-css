const heroes = [
    { id: 1, name:'Spider man', company: 'Marvel'},
    { id: 2, name:'Batman', company: 'DC' },
    { id: 3, name:'Iron man', company: 'Marvel' },
    { id: 4, name:'Wonder Woman', company: 'DC' },
    { id: 5, name:'Black Panther', company: 'Marvel' }
];

const heroNames = heroes.map((hero) => {
    return hero.name;
});

