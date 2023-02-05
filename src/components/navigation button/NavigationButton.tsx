import { useContext } from 'react'
import { Context as IssueContext } from '../../store/IssueContext'

const NavigationButton = () => {
    // @ts-ignore
    const { state: { issues, name, repo, page }, nextPage , previousPage } = useContext(IssueContext)
    if (!issues) {
        return null
    }

    return (
        <div className='px-40' >
            <button disabled={page<=1} className=' scale-75 md:scale-100 absolute left-5 md:left-28 bottom-10 md:bottom-10 text-white bg-slate-600 p-3 px-7 rounded-md active:bg-slate-800' onClick={() => previousPage({ name, repo, page })} >&larr; Previous</button>
            <button disabled={ issues.length === 0 } className=' scale-75 md:scale-100 absolute right-5 md:right-28 bottom-10 md:bottom-10 text-white bg-slate-600 p-3 px-7 rounded-md active:bg-slate-800' onClick={() => nextPage({name, repo, page })} >&rarr; Next</button>
        </div>
    )
}

export default NavigationButton