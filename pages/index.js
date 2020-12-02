import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error } = useSWR(
    "/api/item?id=47595926-d14e-49d8-bc66-08c41dac7c5f",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return <code>{JSON.stringify(data, null, 2)}</code>;
}
