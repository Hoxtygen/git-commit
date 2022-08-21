import { Octokit } from '@octokit/core';
import { useState } from 'react';
import { REPO_NAME, REPO_OWNER } from './../constants/index';


export function useFetch() {
	const [commits, setCommits] = useState<any>([]);
	const [error, setError] = useState<any>(null)
	const [loading, setLoading] = useState(false);

	const fetchCommits = async (accessToken: string) => {
		setLoading(true)
		try {
			if (!accessToken) {
				setError({ message: "Enter a valid  access token to get commit messages" })
				setCommits([])
				setLoading(false)
				return;
			}
			setError(null)
			const octoKit = new Octokit({ auth: accessToken })
			const { data } = await octoKit.request("GET /repos/{owner}/{repo}/commits", {
				owner: REPO_OWNER,
				repo: REPO_NAME,
			})
			setCommits(data)
			setLoading(false)

		} catch (err) {
			setLoading(false)
			setError(err)
			setCommits([])

		}
	}

	return { fetchCommits, commits, error, loading }
}