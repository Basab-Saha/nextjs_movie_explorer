import Image from "next/image";

export default function MovieCard({ movie, onClick }) {
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const truncatedTitle =
    movie.title.length > 25 ? movie.title.substring(0, 25) + "..." : movie.title;

  return (
    <div>
      <div onClick={() => onClick(movie)} className="cursor-pointer">
        <Image
          src={imageURL}
          alt={truncatedTitle}
          layout="responsive"
          width={128}
          height={192}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3>{truncatedTitle}</h3>
    </div>
  );
}
