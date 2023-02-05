import { useContext } from 'react'
import { Context as IssueContext } from '../../store/IssueContext'
import NavigationButton from '../navigation button/NavigationButton'

const IssuesPage = () => {
  // @ts-ignore
    const { state:{ issues } } = useContext(IssueContext)
    if (!issues) {
      return null
    } 
    
    const listItems = issues.map((issue) =>
        <div className='my-5 mx-auto bg-red-500 px-10 p-3 rounded-md md:w-[60rem] text-xs md:text-base' key={issue.id} >
          <p>&#9888; &nbsp; {issue.title}</p>
        </div>
    )
  return (
    <div className='md:py-12 p-10 relative h-[39rem] ' >
      {issues.length === 0 ? <div><p className='text-center font-bold text-3xl mt-40 ' >End</p></div>:null }
      {listItems}      
      <NavigationButton />
    </div>
  )
}

export default IssuesPage