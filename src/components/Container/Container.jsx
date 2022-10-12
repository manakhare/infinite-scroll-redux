import React, { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";
// import { fetchCars } from "../../app/store";
import { fetchData, setPage } from "../../app/actions";
import { useDispatch, useSelector } from "react-redux";
import "./container.css";
import { connect } from "react-redux";

const totalPages = 2;

const Container = ({ items, page}) => {
  const [lastElement, setLastElement] = useState(null);

  // const userData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const lastCardObserver = useRef(
    new IntersectionObserver((items) => {
      const first = items[0];
      if (first.isIntersecting) {
        dispatch(setPage(page + 1));
      }
    },
    {
      rootMargin: "100px"
    })
  );

  useEffect(() => {
    if (page <= totalPages) {
      dispatch(fetchData(page));
    }
  }, [page]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = lastCardObserver.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  console.log(items);

  return (
    <div className="main-container">
  
      {items.length > 0 &&
        items.map((item, i) => {
          return i === items.length - 1 && page <= totalPages ? (
            <Card key={i} ref={setLastElement} {...item} />
          ) : (
            <Card key={i} {...item} />
          );
        })}
        <h1>End</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  page: state.page,
});

// const mapDispatchToProps = dispatch = ({

// })

export default connect(mapStateToProps)(Container);
