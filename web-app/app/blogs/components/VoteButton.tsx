"use client";

import { Vote } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Modal } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { HiHeart, HiOutlineHeart, HiShare } from "react-icons/hi2";
import { debounce } from "lodash";
import { getLocalStorage, handleStorage } from "@/utils/utils";
import { initModals } from "flowbite";

interface Props {
  id: string;
  initial?: Vote;
  loading?: boolean;
}

export default function VoteButton({ id, initial, loading }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (initial) setCount(initial.votes);
  }, [initial]);

  useEffect(() => {
    setIsActive(getLocalStorage(id));
  }, [id]);

  useEffect(() => {
    initModals();
  }, []);

  const handleClick = () => {
    setCount((p) => (isActive ? --p : ++p));
    setIsActive((p) => !p);
    debouncedButton();
  };

  return (
    <>
      <Button.Group className="flex items-stretch">
        {loading ? (
          <Button
            color="gray"
            className="hover:text-red-700 disabled:hover:bg-white focus:ring-red-500 focus:text-red-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800"
            disabled
            size="sm"
          >
            <HiHeart
              className="animate-pulse mr-2 h-4 w-4 font-bold"
              size="xs"
            />
            <span className="animate-pulse text-sm invisible">00</span>
          </Button>
        ) : (
          <Button
            color="gray"
            className="hover:text-red-700 disabled:hover:bg-white focus:ring-red-500 focus:text-red-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800"
            onClick={() => {
              handleClick();
            }}
            disabled={isMutating}
            size="sm"
          >
            {isMutating ? (
              <CgSpinner className="mr-2 h-4 w-4 font-bold text-gray-500 animate-spin" />
            ) : isActive ? (
              <HiHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
            ) : (
              <HiOutlineHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
            )}
            <span className="text-sm">{count}</span>
          </Button>
        )}

        <Button
          color="gray"
          size="xs"
          style={{ height: "auto" }}
          onClick={() => setIsVisible(true)}
        >
          <HiShare className="h-4 w-4" />
        </Button>
      </Button.Group>
      {
        <Modal show={isVisible} onClose={() => setIsVisible(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => console.log("CLICK")}>I accept</Button>
            <Button color="gray" onClick={() => setIsVisible(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}
