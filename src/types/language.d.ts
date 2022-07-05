type ILanguageType = 'en' | 'pt';

interface ILanguage {
  type: ILanguageType;

  skills: {
    acrobatics: string;
    animalHandling: string;
    arcana: string;
    athletics: string;
    deception: string;
    history: string;
    insight: string;
    intimidation: string;
    investigation: string;
    medicine: string;
    nature: string;
    perception: string;
    performance: string;
    persuasion: string;
    religion: string;
    sleight: string;
    stealth: string;
    survival: string;
  };

  attributes: {
    for: string;
    dex: string;
    con: string;
    int: string;
    wis: string;
    cha: string;
  };

  pages: {
    Auth: {
      title: string;
      description: string;
    };

    Dashboard: {
      welcome: string;

      cards: {
        create: {
          title: string;
          description: string;
        };

        view: {
          title: string;
          description: string;
        };
      };

      modal: {
        title: string;
        description: string;
      };
    };

    FormCard: {
      attributes: string;
      inputs: {
        name: {
          label: string;
          placeholder: string;
        };

        level: {
          label: string;
        };

        race: {
          label: string;
        };

        class: {
          label: string;
        };

        hp: {
          label: string;
        };

        notes: {
          label: string;
          placeholder: string;
        };
      };

      button: string;
    };

    Card: {
      modal: {
        edit: string;
        remove: string;
        copy: string;

        title: string;
        description: string;
      };

      name: string;
      level: string;
      proficiency: string;
      race: string;
      class: string;
      hp: string;
      notes: string;
    };

    SearchCard: {
      options: {
        search: string;
      };

      buttons: {
        search: string;
        back: string;
        clean: string;
      };

      inputs: {
        email: {
          label: string;
          placeholder: string;
        };

        race: {
          label: string;
          void: string;
        };

        class: {
          label: string;
          void: string;
        };
      };
    };
  };
}

export { ILanguage, ILanguageType };
