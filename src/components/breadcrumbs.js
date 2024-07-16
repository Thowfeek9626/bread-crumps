import { Link, NavLink, useLocation } from "react-router-dom"

const BreadCrumbs = () =>{
    const {pathname} = useLocation()
    const pathnames = pathname.split('/').filter((x)=>x)
    let breadCrumbPath = ''
    return(
        <div className="breadcrumbs">
            {pathnames.length >0 && <Link to="/">Home</Link>}
            {pathnames.map((name,index)=>{
                breadCrumbPath += `/${name}`
                const isLast = index === pathnames.length-1
                return !isLast ? <NavLink to={breadCrumbPath}>/ {name}</NavLink> : <span>/ {name}</span>
            })}
        </div>
    )
}
export default BreadCrumbs