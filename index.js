// function getIssues() {
//   // fetch(`https://api.github.com/repos/${repo}/forks`, {
//   //   method: 'post',
//   //   headers: {
//   //     Authorization: `token ${getToken()}`
//   //   }
//   // }).then(res => res.json()).then(showResults);
// }

function showIssues(json) {
  $('#issues').append(`<h4>Issues</h4><a href="${json.html_url}">${json.title}</a>`);
}

function createIssue() {
  const repo = 'cdhenry/javascript-fetch-lab'
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(showIssues);
}

function showResults(json) {
  $('#results').append(`<h4>Forked Successfully!</h4><a href="${json.html_url}">${json.full_name}</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(showResults);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
