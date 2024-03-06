type Articles = {
    id: string | number;
    image: string;
    title: string;
    descri: string;
    type: string;
    place: string;
    hour: string;
}
export const articles:Articles[] = [
    {
        id: 1,
        image: '/images/dell.jpeg',
        title: 'Marketing Coordinator',
        descri : 'Acme Co.',
        type: 'Sur site',
        place: 'Antananarivo',
        hour: 'il y a 1h',
    },
    {
        id: 2,
        image: '/images/React.png',
        title: `L'oréal`,
        descri : 'Acme Co.',
        type: 'Remote',
        place: 'Antananarivo',
        hour: 'il y a 1h',
    },
    {
        id: 1,
        image: '/images/figma.png',
        title: 'IBM',
        descri : 'Acme Co.',
        type: 'Remote',
        place: 'Antananarivo',
        hour: 'il y a 1h',
    }
]