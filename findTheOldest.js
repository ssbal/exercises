// Find oldest from given people array
const people = [
  { name: 'Chris', birth: 1951, death: 1998 },
  { name: 'David', birth: 1883, death: 2001 },
  { name: 'Isaac', birth: 1901, death: 1976 },
  { name: 'Albert', birth: 1888, death: 1948 },
  { name: 'George', birth: 1991 },
  { name: 'Ibrahim', birth: 1934, death: 2011 },
  { name: 'Panther', birth: 2001 },
  { name: 'Bred', birth: 1932, death: 1977 },
  { name: 'Resham', birth: 1921, death: 1995 },
];

function findTheOldest(arr) {
  const oldest = arr.sort((a, b) => {
    if (!a.death) a.death = new Date().getFullYear();
    if (!b.death) b.death = new Date().getFullYear();

    let currentAge = a.death - a.birth;
    let nextAge = b.death - b.birth;

    return currentAge > nextAge ? -1 : 1;
  });

  return {
    name: oldest[0].name,
    age: oldest[0].death - oldest[0].birth,
  };
}

// findTheOldest(people); // { name: 'David', age: 118 }
