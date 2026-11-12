type PostFilterProps = {
    searchQuery: string;
    onsearchChange: (value: string) => void
}

const PostFilter = ({ searchQuery, onsearchChange }: PostFilterProps) => {
    return ( 
        <div className="mb-6">
            <input type="text" value={searchQuery} placeholder="Search Posts..."
            onChange={(e) => onsearchChange(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800
            text-white border border-gray-700 focus:outline-none focus:ring-2
            focus:ring-blue-500" />
        </div>
     );
}
 
export default PostFilter;