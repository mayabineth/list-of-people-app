import React from "react";
import { useSelector } from "react-redux";

function List() {
  const { persons, loading } = useSelector((store) => store.cart);

  return (
    <>
      {!loading && (
        <div className="person-container">
          <div>
            {persons.map((item) => {
              const {
                _id: id,
                name,
                gender,
                genderProbability,
                nationality,
                nationalityProbability,
              } = item;
              return (
                <article className="person-item" key={id}>
                  <p className="line">
                    <span>{name}</span>
                    &nbsp;{gender}&nbsp;{genderProbability}&nbsp;{nationality}
                    &nbsp;{nationalityProbability}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default List;
