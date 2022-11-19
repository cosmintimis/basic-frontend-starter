const repositories = [
  {
    id: 28457823,
    full_name: "freeCodeCamp/freeCodeCamp",
    html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
    description:
      "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    forks: 30436,
    stargazers_count: 357167,
  },
  {
    id: 177736533,
    full_name: "996icu/996.ICU",
    html_url: "https://github.com/996icu/996.ICU",
    description:
      "Repo for counting stars and contributing. Press F to pay respect to glorious developers.",
    stargazers_count: 264471,
    forks: 21483,
  },
  {
    id: 13491895,
    full_name: "EbookFoundation/free-programming-books",
    html_url: "https://github.com/EbookFoundation/free-programming-books",
    description: ":books: Freely available programming books",
    stargazers_count: 255304,
    forks: 52494,
  },
  {
    id: 60493101,
    full_name: "jwasham/coding-interview-university",
    html_url: "https://github.com/jwasham/coding-interview-university",
    description:
      "A complete computer science study plan to become a software engineer.",
    stargazers_count: 239151,
    forks: 63916,
  },
];

const myTemplate = document.querySelector("[data-repo-template]");
const dataRepoCardsContainer = document.querySelector(
  "[data-repo-cards-container]"
);

function createRepositoryCard(repository) {
  // Implement string template HTML builder for repo card
  const clone = myTemplate.content.cloneNode(true);
  const elementName = clone.querySelector("[data-header]");
  const elementDescription = clone.querySelector("[data-description]");
  const elementStars = clone.querySelector("[data-stars]");
  const elementForks = clone.querySelector("[data-forks]");
  elementName.textContent = repository.full_name;
  elementDescription.textContent = repository.description;
  elementStars.textContent += repository.stargazers_count;
  elementForks.textContent += repository.forks;
  dataRepoCardsContainer.appendChild(clone);
}

function renderRepositories(repos) {
  // Implement DOM manipulation function to add list items in the repo list
  repos.map(function (repository) {
    createRepositoryCard(repository);
  });
}

// Comment this out when you start working on the search functionality
//renderRepositories();

function handleSearch() {
  // Implement form submit event handler
}

async function fetchRepositories() {
  // Pass parameter to the search endpoint
  return fetch("https://api.github.com/search/repositories?q=stars:>10000", {
    headers: {
      Authorization: "Bearer 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",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      var repositories = res.items;
      renderRepositories(repositories);
    });
}

fetchRepositories();
