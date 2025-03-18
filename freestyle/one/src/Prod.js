import { useSearchParams } from "react-router";
function Prod() {
    const products = [
        { id: 1, name: "Laptop" }, { id: 2, name: "Phone" }, { id: 3, name: "Tablet" }, ];
    let [search, setSearch] = useSearchParams()
    const setParams = () => search.get('query') || ''
    const handle = (e) => {
        setSearch({ query: e.target.value })
        products.filter((p) => p.name.includes(setParams()))
    }
  return (
    <div>
        <input type="text" onChange={handle} />
        {
            products.map((p) => 
                <div>
                <div>{p.id}</div>
                <div>{p.name}</div>
                </div>
            )
        }
    </div>
  )
}

export default Prod