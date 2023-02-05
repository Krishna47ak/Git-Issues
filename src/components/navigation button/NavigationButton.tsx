import { useContext } from 'react'
import { Context as IssueContext } from '../../store/IssueContext'

const NavigationButton = () => {
    // @ts-ignore
    const { state: { issues, name, repo, page }, nextPage , previousPage } = useContext(IssueContext)
    if (!issues) {
        return null
    }

    return (
        <div className='absolute bottom-14 px-40 space-x-[56rem] ' >
            <button disabled={page<=1} className='text-white bg-slate-600 p-3 px-7 rounded-md active:bg-slate-800' onClick={() => previousPage({ name, repo, page })} >&larr; Previous</button>
            <button disabled={ issues.length === 0 } className=' text-white bg-slate-600 p-3 px-7 rounded-md active:bg-slate-800' onClick={() => nextPage({name, repo, page })} >&rarr; Next</button>
        </div>
    )
}

export default NavigationButton