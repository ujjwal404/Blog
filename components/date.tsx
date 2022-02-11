import { parseISO, format } from 'date-fns';

type props = {
	dateString: string;
};

export default function Date({ dateString }: props) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
