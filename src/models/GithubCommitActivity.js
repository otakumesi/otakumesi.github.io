class GithubCommitActivity {
  static createFromGithubEvents (events) {
    return Array.prototype.concat.apply([],
    events.map(event => {
      return event.payload.commits.map(commit => {
        return new GithubCommitActivity(event.created_at, event.repo.name, commit.sha)
      })
    })
    )
  }

  constructor (datetime, targetRepo, sha) {
    this.icon = 'github'
    this.type = 'githubCommit'
    this.datetime = datetime
    this.url = `https://github.com/${targetRepo}/commit/${sha}`
    this.title = `Commit to ${targetRepo}`
    this.targetRepo = targetRepo
    this.sha = sha
  }
}

export default GithubCommitActivity
