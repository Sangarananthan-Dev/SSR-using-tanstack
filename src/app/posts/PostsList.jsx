"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

async function getMeals() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=b",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch meals");
  }

  const data = await res.json();
  return data.meals ?? [];
}

export default function PostsList() {
  const {
    data: meals,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["meals"],
    queryFn: getMeals,
  });

  if (isLoading)
    return (
      <div className="rounded-3xl border border-orange-200 bg-red-700/80 p-8 text-white shadow-sm">
        <p>Loading meals on the client...</p>
      </div>
    );

  if (isError) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-sm">
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-stone-950 via-orange-950 to-amber-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            TheMealDB collection
          </p>
          <h1 className="text-4xl font-black tracking-tight text-balance md:text-5xl">
            Meal ideas with real images and recipe details
          </h1>
          <p className="text-base leading-7 text-orange-100/85 md:text-lg">
            This page is hydrated with React Query after a server-side prefetch.
            The data below comes from the free TheMealDB API.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {meals?.map((meal) => (
            <li
              key={meal.idMeal}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
                    {meal.strCategory} / {meal.strArea}
                  </p>
                  <h2 className="text-2xl font-bold text-white">
                    {meal.strMeal}
                  </h2>
                </div>
                <p className="line-clamp-5 text-sm leading-6 text-orange-50/85">
                  {meal.strInstructions}
                </p>
                {meal.strYoutube ? (
                  <a
                    className="inline-flex rounded-full border border-orange-300 px-4 py-2 text-sm font-semibold text-orange-100 transition hover:bg-orange-200 hover:text-stone-950"
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch recipe
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
