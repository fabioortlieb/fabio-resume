import React from 'react'
import getUser from '../utils/getUser'

const Index = ({repos, user}) => {
	// JSX
	return (
		<div className='container mx-auto '>
			<h1 className='text-5x1'>Olá eu sou Fabio Ortlieb !!!</h1>
			<p>Github stats: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
			<h2 className='font-bold text-3x1'>Meus Repositorios no GitHub</h2>
			<div>{repos.map(repo => {
				return(
					<div key={repo.id} className='rounded bg-gray-200 m-8 my-4 p-4 hover:shadow-md'>
						<h3 className='font-bold text-3x1'>{repo.full_name}</h3>
						<p>Language: {repo.language} / Stars: {repo.stargazers_count}</p>
					</div>
				)
			})}</div>
		</div>
	)
}
export async function getServerSideProps(context){
	const { repos, user } = await getUser('fabioortlieb')
	
	return {
		props: {
			repos,
			user
		}
	}
}
export default Index

