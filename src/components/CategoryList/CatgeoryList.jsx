import '../CategoryList/categoryList.css'
export default function CategoryList({data}){
    return(
        <div className="CategoryContainer">
            <img src={data.categoryImage} alt="" className="CategoryImage" />
            <span className="categoryName">{data.categoryName}</span>
        </div>
    )
}