import React from 'React'

const getUser = async(username) => {
    const resUser = await fetch('https://api.github.com/users/'+username)
	const user = await resUser.json()

	const restRepos = await fetch(`https://api.github.com/users/${username}/repos`)
	const originalRepos = await restRepos.json()

	const dontShowRepos = ['']
	const isNotFork = repo => !repo.fork
	const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
	const extractData = repo => ({
		id: repo.id,
		full_name: repo.full_name,
		language: repo.language,
		stargazers_count: repo.stargazers_count
	})
	const repos = originalRepos
		.filter(isNotFork)
		.filter(dontShowFilter)
		.map(extractData)
	
	return {
		repos,
		user
	}
}

export default getUser