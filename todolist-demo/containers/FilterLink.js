import  {connect} from "react-redux"
import  Link from "../components/Link"
import {setVisibility} from '../actions'

const mapStateToProps=(state,ownProps)=>{
    return{
        active:ownProps.filter=== state.visibilityFilter
    }
}

const mapDispatchTopros=(dispatch,ownProps)=>{
    return{
        onClick:()=>{
            dispatch(setVisibility(ownProps.filter))
        }
    }
}
const FilterLink=connect(
    mapStateToProps,
    mapDispatchTopros

)(Link)
export default FilterLink;