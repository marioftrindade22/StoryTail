import React from 'react';
import BookTable from 'src/Components/BookTable/booktable.tsx';
import SideBar from 'src/Components/sidebar.tsx'; 
import SearchBar from 'src/Components/SearchBar/SearchBar.tsx'; 

export default function BookPage() {
    return (
        <div>
            <SearchBar />
            <SideBar />
            <BookTable />
        </div>
    );
}
