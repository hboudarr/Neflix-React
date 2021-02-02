import data from "./movies.json";
import Title from "./Title";
import Movies from "./Movies";

const Content = () => {
    return (
        <div>
            {data.map((elem, index) => {
                return (
                    <section>
                        <Title title={elem.category} />
                        <Movies movies={elem.images} />
                    </section>
                );
            })}
        </div>
    );
};

export default Content;
