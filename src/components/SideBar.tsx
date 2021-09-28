import { Button } from "./Button";

import '../styles/sidebar.scss';
import { memo } from "react";

interface SidebarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBarComponent({ genres, selectedGenreId, setSelectedGenreId }: SidebarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return(
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}

export const SideBar = memo(SideBarComponent);