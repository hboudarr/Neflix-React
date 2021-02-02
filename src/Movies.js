const Movies = (props) => {
    return (
        <div>
            {props.movies.map((elem, index) => {
                return (
                    <img
                        src={elem}
                        alt="film preview"
                        className="class-pour-design"
                    />
                );
            })}
            ;
        </div>
    );
};

export default Movies;
