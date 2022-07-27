import { ILanguage } from '@src/types';

const en_US: ILanguage = {
  type: 'en',

  toasts: {
    noConnection: {
      text1: 'NO CONNECTION 🙈 🙉 🙊',
      text2: 'You or service is offline, check your connection and try again!',
    },

    successful: {
      text1: 'SUCCESSFUL 🔝',
      text2: 'Your action was executed successfully!',
    },

    cardLimit: {
      text1: 'FAILURE ❌',
      text2: "You've reached your 5-card limit!",
    },
  },

  attributes: {
    for: 'Force',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
  },

  skills: {
    acrobatics: 'Acrobatics',
    animalHandling: 'Animal Handling',
    arcana: 'Arcana',
    athletics: 'Athletics',
    deception: 'Deception',
    history: 'History',
    insight: 'Insight',
    intimidation: 'Intimidation',
    investigation: 'Investigation',
    medicine: 'Medicine',
    nature: 'Nature',
    perception: 'Perception',
    performance: 'Performance',
    persuasion: 'Persuasion',
    religion: 'Religion',
    sleight: 'Sleight',
    stealth: 'Stealth',
    survival: 'Survival',
  },

  modal: {
    title: 'Sign out',
    description: 'Are you sure you want to log out of your account?',
    confirm: 'Confirm',
    cancel: 'Cancel',
  },

  pages: {
    Auth: {
      title: 'Welcome',
      description: 'Have your RPG cards in one place',
    },

    Dashboard: {
      welcome: 'Welcome,',

      cards: {
        create: {
          title: 'Add',
          description: 'Add a new character card to your roster.',
        },

        view: {
          title: 'Search',
          description: 'Search and view cards from other platform users.',
        },
      },
    },

    Card: {
      name: 'Name',
      level: 'Level',
      proficiency: 'Proficiency',
      race: 'Race',
      class: 'Class',
      hp: 'HP',
      notes: 'Notes',
      attributes: 'Attributes',
      skills: 'Skills',

      modal: {
        edit: 'Edit',
        remove: 'Remove',
        copy: 'Copy',

        title: 'Remove',
        description:
          'Are you sure you want to remove your card? Cannot undo this action.',
      },
    },

    FormCard: {
      attributes: 'Attributes',
      skills: 'Skills',
      inputs: {
        name: {
          label: 'Name',
          placeholder: "My character's name is...",
          error: 'You need to have a name!',
        },

        level: {
          label: 'Level',
        },

        race: {
          label: 'Race',
        },

        class: {
          label: 'Class',
        },

        hp: {
          label: 'HP',
        },

        notes: {
          label: 'Notes',
          placeholder: 'My notes are...',
        },
      },

      button: 'Confirm',
    },

    SearchCard: {
      options: {
        search: 'Search',
      },

      buttons: {
        search: 'Search',
        back: 'Back',
        clean: 'Clean',
      },

      inputs: {
        email: {
          label: 'E-mail',
          placeholder: 'Search for e-mail...',
        },

        race: {
          label: 'Race',
          void: 'No filter',
        },

        class: {
          label: 'Class',
          void: 'No filter',
        },
      },
    },
  },
};

export { en_US };
