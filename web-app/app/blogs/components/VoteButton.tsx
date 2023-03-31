"use client";

import { Vote } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { HiHeart, HiOutlineHeart, HiShare } from "react-icons/hi2";
import { debounce } from "lodash";
import { getLocalStorage, handleStorage } from "@/utils/utils";

interface Props {
  id: string;
  initial: Vote;
}

export default function VoteButton({ id, initial }: Props) {
  const [isActive, setIsActive] = useState(getLocalStorage(id));
  const [count, setCount] = useState(initial.votes);

  const queryClient = useQueryClient();

  async function postVote({ id }: { id: string }) {
    const URL = `/api/blog/${id}/votes`;
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ votes: count }),
    });
    const newVotes: Vote = await res.json();
    return newVotes;
  }

  const { mutate, isLoading: isMutating } = useMutation({
    mutationFn: postVote,
    onSuccess: (data) => {
      handleStorage({ state: isActive, key: id, data });
      queryClient.invalidateQueries(["votes"]);
    },
  });

  const debouncedButton = useRef(
    debounce(async () => {
      mutate({ id });
    }, 500)
  ).current;

  useEffect(() => {
    return () => {
      debouncedButton.cancel();
    };
  }, [debouncedButton]);

  const handleClick = () => {
    setCount((p) => (isActive ? --p : ++p));
    setIsActive((p) => !p);
    debouncedButton();
  };

  return (
    <Button.Group className="flex items-stretch">
      <Button
        color="gray"
        className="hover:text-red-700 disabled:hover:bg-white focus:ring-red-500 focus:text-red-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800"
        onClick={() => {
          handleClick();
        }}
        disabled={isMutating}
      >
        {isMutating ? (
          <CgSpinner className="animate-spin" />
        ) : isActive ? (
          <HiHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
        ) : (
          <HiOutlineHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
        )}
        <span className="text-sm">{count}</span>
      </Button>
      <Button color="gray" size="xs" style={{ height: "auto" }}>
        <HiShare className="h-4 w-4" />
      </Button>
    </Button.Group>
  );
}
