import { defineField, defineType } from 'sanity';

export const teamMemberType = defineType({
    name: 'teamMember',
    title: 'Team Members',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https']
            }),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
});
