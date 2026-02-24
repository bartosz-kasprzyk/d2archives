export type DataType = "runeAndRuneword" | "uniqueAndSet";

export interface RuneAndRunewordData {
  content: {
    runesTable: {
      [key: string]: string[];
    };
    runewordsTable: {
      [key: string]: string[];
    };
  };
}

export interface UniqueAndSetData {
  content: {
    uniqueItems: {
      [key: string]: {
        name: string;
        type: string;
        isNew?: boolean;
        image: string;
        props: string[];
        category: string;
      };
    };
    setItems: {
      [key: string]: {
        name: string;
        type: string;
        isNew?: boolean;
        image: string;
        props: string[];
        category: string;
      };
    };
    setBonuses: {
      [key: string]: {
        "Partial Set Bonus"?: string[];
        "Full Set Bonus": string[];
      };
    };
  };
}
