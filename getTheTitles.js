function getTheTitles(arr) {
  return arr.map((item) => item.title);
}

const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
];

// getTheTitles(books); // ['Book','Book2']
