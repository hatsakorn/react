export default function SearchForm(props) {

    return (<div className="input-group">
        <input type='text' className='form-control' value={props.searchText} onChange={(e)=>props.setSerchText(e.target.value.trim())}/>
        <button type="button" className='btn btn-warning' onClick={props.deleteSearch}>
            <i className='fa-solid fa-xmark'/>
        </button>
    </div>
)}