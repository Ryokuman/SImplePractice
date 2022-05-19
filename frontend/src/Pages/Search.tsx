interface IserachInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ search, setSearch }: IserachInterface) {
    return (
        <div>
            <p>Search</p>
        </div>
    );
}

export default Search;
