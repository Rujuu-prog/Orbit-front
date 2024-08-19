'use client'
import axios from "axios";
import useSWRMutation from "swr/mutation";
import {useState} from "react";

async function fetcher(url: string) {
  const response = await axios.get(url);
  return response.data;
}

export default function Home() {
  const [result, setResult] = useState('');
  const { trigger, isMutating, error } = useSWRMutation('/api/health', fetcher);

  const handleHealth = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await trigger();
        setResult(data);
      console.log(data);
    } catch (err) {
      console.error('Sign in failed:', err);
    }
  };
  return (
    <div>
      <button onClick={handleHealth}>Health</button>
        {result && <p>{result}</p>}
    </div>
  );
}
