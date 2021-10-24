const links = {
  github: 'Muvale',
  youtube: 'UC5OJqUqu4rUJwHWW9d3Pkhw',
  twitter: 'CandidoMuvale',
  facebook: 'pethrusku.tharsus',
  instagram: 'pethruskubondoso'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
