export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: 'Title of the skill',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        Options : {
          hotspot : true,
        }
      },
      {
        name: 'progress',
        title: 'progress',
        type: 'number',
        description: 'Progress of skill from 0 to 100',
        Validation: (Rule) => Rule.min(0).max(100),
      },
    ],
  }