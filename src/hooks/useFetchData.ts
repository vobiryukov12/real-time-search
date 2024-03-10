import { useEffect, useState } from "react";
import { useDebouncedValue } from "./useDebouncedValue";
import { IUser } from "../models/models";

export function useFetchData(inputValue: string) {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const denouncedDelay = 500;
  const debouncedValue = useDebouncedValue(inputValue, denouncedDelay);

  async function fetchData(url: string, signal: AbortSignal) {
    try {
      setError("");
      setLoading(true);

      const response = await fetch(url, { signal });

      if (!response.ok) {
        setLoading(false);
        setError(`Ошибка! статус: ${response.status}`);
        return;
      }

      const { users } = await response.json();

      setUsers(users);

      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        if (e.name !== "AbortError") {
          setLoading(false);
          const error = new Error(
            "Извините, в данный момент сервис не работает, попробуйте позже!"
          );
          setError(error.message);
        }
      } else if (typeof e === "string") {
        setLoading(false);
        return e;
      }
    }
  }

  useEffect(() => {
    const abortController = new AbortController();

    debouncedValue
      ? fetchData(
          `${import.meta.env.VITE_USERS_URL}/search?q=${debouncedValue}`,
          abortController.signal
        )
      : setUsers(null);

    return () => abortController.abort();
  }, [debouncedValue]);

  return [users, loading, error, debouncedValue] as const;
}
