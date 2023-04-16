"use client";

import VoteButton from "../../components/VoteButton";

interface Props {
  id: string;
}

export default function PageCard({ id }: Props) {
  return (
    <div>
      <VoteButton id={id} initial={{ id: id, votes: 10 }} />
    </div>
  );
}
