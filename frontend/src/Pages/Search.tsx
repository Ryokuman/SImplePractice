import { useParams } from "react-router-dom";

interface IserachInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ search, setSearch }: IserachInterface) {
    const { searchValue } = useParams<string>();

    return (
        <div>
            <p>{`hello ${searchValue}`}</p>
        </div>
    );
}

export default Search;
