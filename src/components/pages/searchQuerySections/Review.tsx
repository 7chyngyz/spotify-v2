"use client"
import React from "react";
import scss from "./Reaview.module.scss";
import { useGetCategoryQuery } from "@/redux/api/category";

const Review = () => {
  const { data } = useGetCategoryQuery();
  return (
    <section className={scss.Review}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1>Все остальное</h1>
          <div className={scss.blocks}>
            {data?.categories.items.map((item, index) => (
                <div key={index} className={scss.category}>
                    <img src={item.icons[0].url} alt="" />
                    <p>{item.name}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
