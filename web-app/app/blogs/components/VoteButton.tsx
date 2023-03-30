"use client";

import { Vote } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { debounce } from "lodash";

interface Props {
  id: string;
  vote: Vote;
}

export default function VoteButton({ id, vote }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const status = localStorage.getItem(id);
    if (status) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [id]);

  useEffect(() => {
    if (vote) {
      setCount(vote.votes);
    }
  }, [vote]);
  const queryClient = useQueryClient();

  async function postVote({ id }: { id: string }) {
    const URL = `/api/blog/${id}/vote`;
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ votes: count }),
    });
    const newVotes: Vote = await res.json();
    console.log("NEW VOTES", newVotes);
    return newVotes;
  }

  const { mutate, isLoading: isMutating } = useMutation({
    mutationFn: postVote,
    onSuccess: (data) => {
      console.log(isActive, count, data);
      if (isActive) {
        localStorage.setItem(id, "1");
      } else {
        localStorage.removeItem(id);
      }
      if (data) {
        setCount(data.votes);
      }
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
    if (isActive) {
      setCount((p) => p - 1);
    } else {
      setCount((p) => p + 1);
    }
    setIsActive((p) => !p);
    debouncedButton();
  };
  return (
    <Button
      color="gray"
      className="hover:text-red-700 disabled:hover:bg-white focus:ring-red-500 focus:text-red-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800"
      onClick={() => {
        // mutate({
        //   id,
        // });
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
  );
}
