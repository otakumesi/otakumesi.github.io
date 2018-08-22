import * as format from 'date-fns/format'
const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const GITHUB_ENDPOINT = 'https://api.github.com/users/otakumesi/repos?sort=updated'

const fetchRepositoriesFromGithub = async () => {
  const githubRepositories:GithubRepository[] = await fetch(GITHUB_ENDPOINT)
    .then(repositories => {
      if(repositories.status !== 200) {
        Promise.resolve(null)
      }
      return repositories.json()
    })
    .catch(err => {
      Promise.resolve(null)
    })

  return githubRepositories
    .filter(repo => repo.fork === false)
    .map(repo => {
        return {
          uniqueKey: `github-${repo.name}`,
          media: 'Github',
          title: repo.name,
          description: repo.description,
          url: repo.html_url,
          color: '#333',
          date: format(new Date(repo.updated_at), DATETIME_FORMAT)
        }
    })
}

export default fetchRepositoriesFromGithub
