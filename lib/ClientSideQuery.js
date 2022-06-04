import { useQuery } from '@apollo/client';

const Query = ({ children, query, slug }) => {
	const { data, loading, error } = useQuery(query, { variables: { slug: slug } });

	if (loading)
		return <p className="flex h-screen items-center justify-center">loading...</p>;

	if (error)
		return (
			<p className="flex h-screen items-center justify-center text-red-500">
				Error: {error.message}
			</p>
		);

	return children({ data });
};

export default Query;
