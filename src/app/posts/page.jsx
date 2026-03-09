import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PostsList from "./PostsList.jsx";

export const dynamic = "force-dynamic";

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

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["meals"],
    queryFn: getMeals,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  );
}
