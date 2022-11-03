export type MouseButtonOrKeyboardEventType =
  | React.MouseEvent<HTMLButtonElement>
  | KeyboardEvent;

export type CharacterCharacteristicsType = {
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  id?: string;
  location?: { name: string };
  origin?: { name: string };
};

export type FiltersType = {
  status: string;
  gender: string;
  species: string;
  type: string;
};
