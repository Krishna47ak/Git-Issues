import createDataContext from "./createDataContext";
import GitHubApi from "../api/GitHubApi";

const issueReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'fetch_issues':
            return action.payload
        default:
            return state
    }
}

const fetchIssues = dispatch => async ({name, repo }) => {
    try {
        const response = await GitHubApi.get(`/${name}/${repo}/issues?per_page=6&page=1`)
        dispatch({ type: 'fetch_issues', payload: { issues:response.data, name:name, repo:repo, page:1} })
    } catch (err) {
        console.log(err);
    }
}
const nextPage = dispatch => async ({name, repo, page}) => {
    const next = page + 1
    try {
        console.log(next);
        const response = await GitHubApi.get(`/${name}/${repo}/issues?per_page=6&page=${next}`)
        dispatch({ type: 'fetch_issues', payload: { issues:response.data, name:name, repo:repo, page:next } })
    } catch (err) {
        console.log(err);
    }
}
const previousPage = dispatch => async ({name, repo, page}) => {
    const previous = page - 1
    try {
        console.log(previous);
        const response = await GitHubApi.get(`/${name}/${repo}/issues?per_page=6&page=${previous}`)
        dispatch({ type: 'fetch_issues', payload: { issues:response.data, name:name, repo:repo, page:previous } })
    } catch (err) {
        console.log(err);
    }
}

export const {Context, Provider} = createDataContext(issueReducer, { fetchIssues, nextPage, previousPage }, [])