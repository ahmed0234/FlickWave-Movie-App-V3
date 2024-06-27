"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

interface CastMember {
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
}

export default function CastCarousel({ castData }: { castData: CastMember[] }) {
  const [emblaRef] = useEmblaCarousel();
  const movieImageurl = `https://image.tmdb.org/t/p/original`;
  const filteredCastMembers = castData.filter((member) => member.profile_path);

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container h-fit pl-4">
        {filteredCastMembers.map((actor, idx) => (
          <div
            className="embla__slide  flex size-full flex-col  gap-4 rounded-md bg-neutral-900 pb-4"
            key={idx}
          >
            <Link className="h-[50%]" href={`/actor/${actor.id}`}>
              <div className="cast__img relative  h-[50%] w-full">
                <img
                  src={`${movieImageurl}${actor.profile_path}`}
                  alt={`${actor.name}`}
                  className="rounded-md object-cover object-center"
                  loading="lazy"
                />
              </div>
            </Link>
            <div className="flex h-[50%] w-full flex-col gap-2 pl-3">
              <h1>Known for: {actor.known_for_department}</h1>
              <h1>Character: {actor.character}</h1>
              <h1>Real-Name: {actor.name || actor.original_name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
